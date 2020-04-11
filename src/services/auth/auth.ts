
import * as bcrypt from 'bcrypt';
import { HttpError } from '../../utils/httpError';
import { BaseModelService } from '../baseModel';
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
    async register(user: any): Promise<any> {
        const tokenService = new TokenService();
        const userService = new UserService();

        user.password = await bcrypt.hash(user.password, +process.env.saltRounds);

        const dbUser = await userService.getUserByEmail(user.email);

        if (dbUser) {
            throw new HttpError(409, 'User has already registered', 'Can\'t register');
        }
        user.status = 'confirmed';
        user.role = 'user';
        user.disabled = false;

        const createdUser: any = await userService.createUser(user);

        delete createdUser.dataValues.password;
        const token = await tokenService.generateToken({user: createdUser.dataValues}, +process.env.TOKEN_TIME);

        return {
            user: createdUser,
            token
        };
    }

    async confirmRegistration(key: any): Promise<boolean> {
        const userKeysService = new UsersKeysService();
        const userService = new UserService();

        const userKey = await userKeysService.getUserKey(key);

        if (userKey) {
            await userService.updateUser(userKey.userId, {status: 'confirmed'});
            userKeysService.deleteUserKey(userKey.id);

            return true;
        }

        return false;
    }
}
