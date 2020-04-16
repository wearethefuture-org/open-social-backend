import * as bcrypt from 'bcrypt';
import { USER_ROLE, USER_STATUS } from '../../constants';
import { IUser } from '../../interfaces';
import { HttpError } from '../../utils/httpError';
import { BaseModelService } from '../baseModel';
import { MailService } from '../mail/mail';
import { TokenService } from '../token/token';
import { UserService } from '../user/user';
import { UsersKeysService } from '../usersKeys/usersKeys';


export class AuthService extends BaseModelService {

    async login(user: any): Promise<any> {
        const userService = new UserService();
        const tokenService = new TokenService();

        const dbUser: any = await userService.getUserByEmail(user.email);
        if (!dbUser) {
            throw new HttpError(401, 'User is unregistered', 'Access denied');
        }

        const compared = await bcrypt.compare(user.password, dbUser.password);

        if (compared) {
            delete dbUser.dataValues.password;
            const token = await tokenService.generateToken({user: dbUser.dataValues}, +process.env.TOKEN_TIME);

            return {
                user: dbUser,
                token
            };
        }

        throw new HttpError(401, 'Bad password', 'Access denied');
    }
    async register(user: Exclude<IUser, 'status' | 'role' | 'disabled'>): Promise<{user: {dataValues: Exclude<IUser, 'password'>}}> {
        try {
            const userService = new UserService();
            const dbUser = await userService.getUserByEmail(user.email);
            UserService.checkExistUser(!!dbUser);
            const tokenService = new TokenService();
            const mailService = new MailService();
            const createdUser: {dataValues: IUser} = await userService.createUser(user);
            const dataSendMail = await mailService.generateDataMail(createdUser.dataValues.id, createdUser.dataValues.firstName, createdUser.dataValues.email);
            mailService.sendMail(dataSendMail);
            // user.password = await bcrypt.hash(user.password, +process.env.saltRounds);
            user.status = USER_STATUS.pending;
            user.role = USER_ROLE.user;
            user.disabled = false;
            delete createdUser.dataValues.password;
            // const token = await tokenService.generateToken({user: createdUser.dataValues}, +process.env.TOKEN_TIME);

            return {
                user: createdUser
            };
        } catch (e) {
            console.log('register', e);
        }
    }

    async confirmRegistration(key: string): Promise<boolean> {
        const userKeysService = new UsersKeysService();
        const userService = new UserService();

        const userKey = await userKeysService.getUserKey(key);

        if (userKey) {
            await userService.updateUser(userKey.userId, {status: USER_STATUS.confirmed});
            userKeysService.deleteUserKey(userKey.id);

            return true;
        }

        return false;
    }

}
