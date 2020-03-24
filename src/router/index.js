const Router = require('koa-router');
const router = new Router();
const getAllUsers = require('../data/getAllUsers');

const Task = require('../api/task');


router.prefix('/user');

// create user
router.post('/:id', async(ctx) =>{
    try{
        const result = await Task.addTask({...ctx.request.body});
        ctx.body = result;
    }catch (e) {
        console.error('err ',e);
        ctx.status=500;
        ctx.body = ' error'
    }
});
// get all user
router.get('/',async(ctx) =>{
    try {
        ctx.body = await getAllUsers()
    }catch (e) {
        console.log('err ', e)
        ctx.status=500;
        ctx.body='Error'

    }
    });
//get one user
router.get('/:id',async(ctx) =>{
    console.log('id')
    ctx.body='get users id'
});
// delete user
router.delete('/:id', async (ctx) =>{
    ctx.body = 'delete user'
})

module.exports = router;