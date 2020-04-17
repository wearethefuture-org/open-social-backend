import { IUser } from '../../interfaces';
import { HttpError } from '../../utils/httpError';
import { BaseModelService } from '../baseModel';


export class UserService extends BaseModelService {

  static checkExistUser(isUser: boolean): never | void {
    if (isUser) {
      throw new HttpError(409, 'User has already registered', 'Can\'t register');
    }
  }

  async getUsers(): Promise<void> {
    return this.model.users.findAll({});
  }

  async getUser(id: number): Promise<any> {
    return this.model.users.findOne({
      where: {
        id
      }
    });
  }

  async getUserByEmail(email: string): Promise<IUser> {
    const  result = await this.model.users.findOne({
      where: {
        email
      },
      attributes: {exclude: ['password']}
      // raw: true
    });

    return result;
  }

  async createUser(user: object): Promise<{dataValues: IUser}> {
    return this.model.users.create(user);
  }

  async updateUser(id: number, newData: any): Promise<void> {
    return this.model.users.update(newData, {
      where: {
        id
      }
    });
  }

  async deleteUser(id: number): Promise<void> {
    return this.model.users.destroy({
      where: {
        id
      }
    });
  }
}
