/**
 * Loading env variables
 */
import { envIndex } from './services/env';
envIndex(`${__dirname}/../`);

import * as Koa from 'koa';
import * as koaBody from 'koa-body';
import { router } from './router/users/';

const app = new Koa();

app.use(koaBody());
app.use(router.routes());
app.use(router.allowedMethods());

app.listen(process.env.PORT);
