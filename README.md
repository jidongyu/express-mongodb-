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
  ![Image text](https://github.com/jidongyu/express-mongodb-/blob/master/image-storage/375a554de9b2a59f8fa0374f5d9f482.png)
  
  到最后一步的时候去掉"Install MongoDB Compass"勾选，不然安装会超慢，甚至安装不上，千万不要不信邪！！！
![Image text](https://github.com/jidongyu/express-mongodb-/blob/master/image-storage/f266fe8cdeb51cf84e098f3e8c4d00e.png)  
2.配置环境，注意MongoDB虽然是非关系型数据库，但是用户环境和系统环境都需要配置
