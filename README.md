# express-mongodb-
express+mongodb简单基础练习
const express = require('express');
const app = express();
1.app.listen(端口号,返回函数);方法用来监听端口号
2.app.get(接口地址,(req,res)=>{})/app.post(接口地址,(req,res)=>{})分别用来开发get和post接口
3.app.use()方法用来使用模块
4.res.send()/res.json()/res.sendfile()

#mongodb安装

去官网上下载：https://www.mongodb.com/dr/fastdl.mongodb.org/win32/mongodb-win32-x86_64-2012plus-4.2.2-signed.msi/download

安装配置参考网址：
https://www.cnblogs.com/keyi/p/10984514.html

https://www.cnblogs.com/huangkecheng/p/10909040.html

https://blog.csdn.net/m0_37510446/article/details/100042541

1.安装
  从官网上下载之后双击安装即可，一直点“下一步”，
  
  到最后一步的时候去掉
