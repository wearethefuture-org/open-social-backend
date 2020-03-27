import * as Koa from 'koa'
import * as koaBody from 'koa-body'
import { router } from "./router/users/"

const app = new Koa();
/**
 * Loading env variables
 */
// require('./services/env')(`${__dirname}/../`);

app.use(koaBody());
app.use(router.routes());
app.use(router.allowedMethods());

app.listen(3000,);
