import * as Router from 'koa-router';

import chatsRouter from './chats';
import userRouter from './users';

const commonRouter = new Router();

commonRouter.use('/users', userRouter);
commonRouter.use('/chats', chatsRouter);

export default commonRouter.routes();
