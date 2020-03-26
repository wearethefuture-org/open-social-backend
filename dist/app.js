"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Koa = require("koa");
const app = new Koa();
const koaBody = require("koa-body");
// const koaBody  = require('koa-body');
const index_1 = require("./router/users/index");
// const router = require('./router/users/index');
app.use(koaBody());
app.use(index_1.router.routes());
app.use(index_1.router.allowedMethods());
app.listen(3000, () => {
    console.log('http://localhost:3000');
});
/**
 * Loading env variables
 */
require('./services/env')(`${__dirname}/../`);
//# sourceMappingURL=app.js.map