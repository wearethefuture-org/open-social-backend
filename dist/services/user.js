"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const baseModel_1 = require("./baseModel");
class UserService extends baseModel_1.BaseModelService {
    async getUsers() {
        return this.model.users.findAll({});
    }
    async getUser(id) {
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
    async getUserByEmail(email) {
        return this.model.users.findOne({
            where: {
                email
            }
        });
    }
    async createUser(user) {
        return this.model.users.create(user);
    }
    async updateUser(id, user) {
        return this.model.users.update(user, {
            where: {
                id
            }
        });
    }
    async deleteUser(id) {
        return this.model.users.destroy({
            where: {
                id
            }
        });
    }
}
exports.UserService = UserService;
//# sourceMappingURL=user.js.map