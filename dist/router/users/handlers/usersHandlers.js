"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const user_1 = require("../../../services/user");
// const UserService = require('../../../services/user');
// const StorageService = require('../../../services/storage');
exports.createUser = async (ctx) => {
    const userService = new user_1.UserService();
    const newUser = ctx.request.body;
    ctx.response.body = await userService.createUser(newUser);
};
exports.deleteUser = async (ctx) => {
    const userService = new user_1.UserService();
    const { id } = ctx.params;
    ctx.response.body = await userService.deleteUser(id);
};
exports.user = async (ctx) => {
    const userService = new user_1.UserService();
    const { id } = ctx.params;
    console.log(" id   ", id, typeof id);
    ctx.response.body = await userService.getUser(id);
};
exports.users = async (ctx) => {
    try {
        const userService = new user_1.UserService();
        ctx.response.body = await userService.getUsers();
    }
    catch (e) {
        console.log('err', e);
        ctx.response.body = 500;
    }
};
exports.updateUser = async (ctx) => {
    const userService = new user_1.UserService();
    // const storageService = new StorageService();
    const { id } = ctx.params;
    const { body } = ctx.request;
    if (!ctx.file) {
        await userService.updateUser(id, body);
        ctx.response.body = await userService.getUser(id);
        return;
    }
    // const file = await storageService.uploadFile(ctx.file, 'users-images/');
    //
    // body.imgId = file.id;
    //
    // await userService.updateUser(id, body);
    //
    // ctx.response.body = await userService.getUser(id);
};
//# sourceMappingURL=usersHandlers.js.map