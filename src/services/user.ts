
import { BaseModelService } from './baseModel'

export class UserService extends BaseModelService {
  async getUsers() {
    return this.model.users.findAll({});
  }

  async getUser(id:string):Promise<void> {
    return this.model.users.findOne({
      where: {
        id
      },
      include: [
        {
          model: this.model.files,
          as: this.aliases.users.files
        }
      ]
    });
  }

  async getUserByEmail(email:string):Promise<void> {
    return this.model.users.findOne({
      where: {
        email
      }
    });
  }

  async createUser(user:object):Promise<void> {
    return this.model.users.create(user);
  }

  async updateUser(id:string, user:any):Promise<void> {
    return this.model.users.update(user, {
      where: {
        id
      }
    });
  }

  async deleteUser(id:string):Promise<void> {
    return this.model.users.destroy({
      where: {
        id
      }
    });
  }
}
