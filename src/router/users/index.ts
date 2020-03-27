import * as Router from 'koa-router';
import { createUser, deleteUser, updateUser, user, users } from './handlers/usersHandlers';

export const router = new Router();

router.prefix('/user');
router.get('/', users);
router.get('/:id', user);
router.post('/', createUser);
router.put('/:id', updateUser);
router.delete('/:id', deleteUser);
