const Koa = require('koa');
const app = new Koa();

const koaBody  = require('koa-body');
const router = require('./router/users/index');

// const pg = require("pg");
// const {Client} = require("pg");
// const client = new Client({
//     user: "postgres",
//     password: "12321",
//     host: "127.0.0.1",
//     port: 5432,
//     database: 'test'
//
// });
//
// client.connect().then(()=> console.log("Connected successful"))
//     // .then(()=>  client.query("INSERT INTO customers VALUES (3, 'III', 'Abudabi', 'ahasbr@gmail.com', 99)" )) // post
//     .then(()=> client.query("SELECT * FROM public.customers")) // get all
//     .then((resolve) =>console.log(resolve.rows))
//     .catch((e) => console.error("error" + e))
//     .finally(() => client.end());

app.use(koaBody());
app.use(router.routes());
app.use(router.allowedMethods());

// app.use(async (ctx,next) =>{
//     ctx.body = 'hello world'
// });
//
app.listen(3000,()=>{
    console.log('http://localhost:3000')
});
//






/**
 * Loading env variables
 */
require('./services/env')(`${__dirname}/../`);

// console.log(process.env.PORT);