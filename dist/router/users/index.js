"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Router = require("koa-router");
// const Router = require('@koa/router');
const usersHandlers_1 = require("./handlers/usersHandlers");
// const usersHandlers = require('./handlers/usersHandlers');
exports.router = new Router();
exports.router.prefix('/user');
exports.router.get('/', usersHandlers_1.users);
exports.router.get('/:id', usersHandlers_1.user);
exports.router.post('/', usersHandlers_1.createUser);
exports.router.put('/:id', usersHandlers_1.updateUser);
exports.router.delete('/:id', usersHandlers_1.deleteUser);
//# sourceMappingURL=index.js.map