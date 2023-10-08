import koa from "koa";
import Router from "koa-router";
import views from "koa-views";

import staticRes from 'koa-static';
import { dirname } from "node:path"
import { fileURLToPath } from "node:url"

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// const db = require('../database/conn');
import db from "../database/conn.mjs";
const app = new koa()
const router = new Router()

// server.use(static()) // The default static folder here is the folder where the static resources are stored.
// server.use(template()) // If there is no custom setting to store the path to the html file, it will be stored in the static folder of the project root directory by default.
//app.use(views('views', { extension: 'ejs' }));  
app.use(views('release', { map: {html: 'ejs' }}));

console.log(__dirname)
app.use(staticRes(__dirname + '/../release', {
  index: true,    // 默认为true  访问的文件为index.html  可以修改为别的文件名或者false
  hidden: false,   // 是否同意传输隐藏文件
  defer: true      // 如果为true，则在返回next()之后进行服务，从而允许后续中间件先进行响应
}))
// router.get("/",async ctx=>{
//     ctx.body = "Hello World"
// })

// 中间件配置公共的数据 // 所有的模板文件都能拿到这些数据
app.use(async (ctx, next)=>{
    ctx.state = {
      userName: 'andy One'
    }
    await next(); // 继续向下匹配路由
  })
// 配置路由
router.get('/', async (ctx)=>{
  try{
    let users = await db.collection("user");
    let user = {};
    user.name = 'andyOne' + Math.floor(Math.random()*100);
    user.age = Math.floor(Math.random()*100)
    
    let result = await users.insertOne(user);
  }catch(e){
    console.log(e)
  }
    const pageData = {
      title: '标题',
      list: [1,2,3,4]
    }
    // ctx.state.userName = '张三'
    await ctx.render("index", pageData)//  此处要添加await 因为render 是异步
});
 
app.use(router.routes()).use(router.allowedMethods())
app.listen(3008,function(){
    console.log("server is running at http://localhost:3008")
})