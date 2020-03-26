import * as Koa from 'koa'
const app = new Koa();

import * as koaBody from 'koa-body'
// const koaBody  = require('koa-body');
import {router} from "./router/users/index"
// const router = require('./router/users/index');

app.use(koaBody());
app.use(router.routes());
app.use(router.allowedMethods());

app.listen(3000,()=>{
    console.log('http://localhost:3000')
});



/**
 * Loading env variables
 */
require('./services/env')(`${__dirname}/../`);
