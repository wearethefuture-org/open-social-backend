
import {UserService} from '../../../services/user'
// const UserService = require('../../../services/user');

// const StorageService = require('../../../services/storage');

export const createUser = async (ctx:any) => {
  const userService = new UserService();
  const newUser = ctx.request.body;
  ctx.response.body = await userService.createUser(newUser);
};

 export const deleteUser = async (ctx:any) => {
  const userService = new UserService();
  const { id } = ctx.params;
  ctx.response.body = await userService.deleteUser(id);
};

export const user = async (ctx:any) => {
  const userService = new UserService();
  const { id } = ctx.params;
  console.log(" id   ", id, typeof id);
  ctx.response.body = await userService.getUser(id);
};

export const users = async (ctx:any) => {
  try{
    const userService = new UserService();
    ctx.response.body = await userService.getUsers();
  }catch (e) {
    console.log('err', e);
    ctx.response.body= 500;
  }
};

export const updateUser = async (ctx:any) => {
  const userService = new UserService();
  // const storageService = new StorageService();

  const { id } = ctx.params;
  const { body } = ctx.request;

  if (!ctx.file) {
    await userService.updateUser(id , body);
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
