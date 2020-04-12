import * as Router from 'koa-router';
import { getChats } from './handlers/chatsHandlers';

const commonChatsRouter = new Router();

commonChatsRouter.get('/', getChats);

export default commonChatsRouter.routes();
