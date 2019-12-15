# express-mongodb-
express+mongodb简单基础练习
const express = require('express');
const app = express();
1.app.listen(端口号,返回函数);方法用来监听端口号
2.app.get(接口地址,(req,res)=>{})/app.post(接口地址,(req,res)=>{})分别用来开发get和post接口
3.app.use()方法用来使用模块
4.res.send()/res.json()/res.sendfile()
