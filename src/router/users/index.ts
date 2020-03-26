import  * as Router from 'koa-router'
// const Router = require('@koa/router');
import {updateUser,users,user,createUser,deleteUser} from "./handlers/usersHandlers"
// const usersHandlers = require('./handlers/usersHandlers');

export const router = new Router();

router.prefix('/user');
router.get('/', users);
router.get('/:id', user);
router.post('/', createUser);
router.put('/:id', updateUser);
router.delete('/:id', deleteUser);

