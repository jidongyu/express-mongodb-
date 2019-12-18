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
![Image text](https://github.com/jidongyu/express-mongodb-/blob/master/image-storage/ab23e16e7f178537d71932111c0e5a9.png)
![Image text](https://github.com/jidongyu/express-mongodb-/blob/master/image-storage/9d7b70eb8db5c193236afd8017b7dde.png)  

3.启动MongoDB服务  
在你的mongodb安装目录下创建data文件夹，再在data文件夹下创建db文件夹，因为启动mongodb服务之前需要必须创建数据库文件的存放文件夹，否则命令不会自动创建，而且不能启动成功  
![Image text](https://github.com/jidongyu/express-mongodb-/blob/master/image-storage/f21ddfa8cf9d3b789de7bcde38fa1d5.png)
![Image text](https://github.com/jidongyu/express-mongodb-/blob/master/image-storage/c5ba823e22d5d1e7bee0d4ae3d5123f.png)  
以管理员身份打开CMD，进入你安装mongodb目录的bin级目录下，例如我安装在D盘，我就进入到：
D:\Program Files\MongoDB\Server\4.2\bin  
然后执行：mongod   --dbpath "D:\Program Files\MongoDB\data\db", 这个是你安装的目录，回车后如果出现以下情况说明mongodb安装并启动成功  
![Image text](https://github.com/jidongyu/express-mongodb-/blob/master/image-storage/89a1cc1340dd5e25c5c57f6c5785148.png)  
在浏览器输入http://localhost:27017，如果在浏览器中出现下面一段英文说明成功了  
  ![Image text](https://github.com/jidongyu/express-mongodb-/blob/master/image-storage/1188378-20180806125916984-657763669.png)
  
4.配置本地windows mongodb 服务  
这样可设置为 开机自启动，可直接手动启动关闭，可通过命令行net start MongoDB 启动。该配置会大大方便。也不要在进入bin的目录下启动了  
(1).在刚才创建的data文件夹下再创建logs文件夹，用来存放日志  
![Image text](https://github.com/jidongyu/express-mongodb-/blob/master/image-storage/c5ba823e22d5d1e7bee0d4ae3d5123f.png)   
(2).因为上头测试时已经启动MongoDB所以需要执行命令：net stop MongoDB关闭服务，并执行命令：sc delete MongoDB删除服务。有时执行操作后不一定关闭服务成功，这是需要我们到服务管理器中确认，在命令窗口输入services.msc这个命令，弹出一个服务窗口，在右侧服务列表看MongoDB服务是否已禁用或删除  
![Image text](https://github.com/jidongyu/express-mongodb-/blob/master/image-storage/d1694aeaa7982463f62aea80c1fcc96.png)   
如果mongodb服务还处在“启动”状态，就禁止它。  
(3).为了保险起见，我们重新用cmd进入bin目录下，并执行以下命令：  
mongod --config “D:\Program Files\MongoDB\Server\4.2\bin\mongod.cfg” -install    
![Image text](https://github.com/jidongyu/express-mongodb-/blob/master/image-storage/c25a45f5f0174274e9493839a3f6d03.png)
对服务进行重新配置安装  
(4).然后继续在cmd里面输入下面指令（PS：你们换一下路径就OK了）  
mongod -dbpath "D:\Program Files\MongoDB\data\db" -logpath "D:\Program Files\MongoDB\data\logs\MongoDB.log" -install -serviceName "MongoDB"  
MongoDB就是启动的名字  
![Image text](https://github.com/jidongyu/express-mongodb-/blob/master/image-storage/5b03b7dbc80f7997bce5b4368fc2908.png)  
(5).这样的话，mongodb服务Windows已经配置好了，我们可以不用进入bin的目录下启动MongoDB了，直接输入net start MongoDB命令即可  
![Image text](https://github.com/jidongyu/express-mongodb-/blob/master/image-storage/14782ce492588ffabce8c5ad5d38b02.png)  
(6).在mongodb新建配置文件mongo.config,这个是和bin目录同级的  
![Image text](https://github.com/jidongyu/express-mongodb-/blob/master/image-storage/1188378-20180806130411849-1722530819.png)  
用记事本打开mongo.config  ，并输入下面两个命令，然后保存:  
dbpath=D:\Program Files\MongoDB\data\db
logpath=D:\Program Files\MongoDB\data\logs\MongoDB.log
