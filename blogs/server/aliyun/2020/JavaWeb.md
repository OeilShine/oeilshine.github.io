---
title: 阿里云ECS——搭建Java Web开发环境
date: 2020-08-11
tags:
 - 阿里云七天训练营
categories:
 -  后端笔记
---


# 阿里云ECS——搭建Java Web开发环境

## 1. 安装JDK

1. 1执行以下命令，查看yum源中JDK版本。

```
yum list java*
```

1. 2 执行以下命令，使用yum安装JDK1.8。

```
yum -y install java-1.8.0-openjdk*
```

1. 3 执行以下命令，查看是否安装成功。

```
java -version
```

如果显示如下图内容，则表示JDK安装成功。



![在这里插入图片描述](https://img-blog.csdnimg.cn/20200811102731714.png)


## 2. 安装MySQL数据库

2. 1 执行以下命令，下载并安装MySQL官方的`Yum Repository`。

```
wget http://dev.mysql.com/get/mysql57-community-release-el7-10.noarch.rpm
yum -y install mysql57-community-release-el7-10.noarch.rpm
yum -y install mysql-community-server
```



![在这里插入图片描述](https://img-blog.csdnimg.cn/20200811102740840.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3dlaXhpbl80NjI4NDMwMg==,size_16,color_FFFFFF,t_70)


2. 2 执行以下命令，启动 MySQL 数据库。

```
systemctl start mysqld.service
```

2. 3 执行以下命令，查看MySQL初始密码。

```
grep "password" /var/log/mysqld.log
```



![在这里插入图片描述](https://img-blog.csdnimg.cn/20200811102750674.png)


2. 4 执行以下命令，登录数据库。

```
mysql -uroot -p
```

2. 5 执行以下命令，修改MySQL默认密码。

```
set global validate_password_policy=0;  #修改密码安全策略为低（只校验密码长度，至少8位）。
ALTER USER 'root'@'localhost' IDENTIFIED BY '12345678';
```

2. 6 执行以下命令，授予root用户远程管理权限。

```
GRANT ALL PRIVILEGES ON *.* TO 'root'@'%' IDENTIFIED BY '12345678';
```

2. 7 输入`exit`退出数据库。

## 3. 安装Tomcat

3. 1 执行以下命令，下载Tomcat压缩包。

```
wget https://mirror.bit.edu.cn/apache/tomcat/tomcat-8/v8.5.57/bin/apache-tomcat-8.5.57.tar.gz
```



![在这里插入图片描述](https://img-blog.csdnimg.cn/20200811102801749.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3dlaXhpbl80NjI4NDMwMg==,size_16,color_FFFFFF,t_70)


3.  2 执行以下命令，解压刚刚下载Tomcat包。

```
tar -zxvf apache-tomcat-8.5.57.tar.gz 
```

3.  3 执行以下命令，修改Tomcat名字。

```
mv apache-tomcat-8.5.57 /usr/local/Tomcat8.5
```

3. 4 执行以下命令，为Tomcat授权。

```
chmod +x /usr/local/Tomcat8.5/bin/*.sh
```

3. 5 执行以下命令，修改Tomcat默认端口号为`80`。

说明：Tomcat默认端口号为8080。

```
sed -i 's/Connector port="8080"/Connector port="80"/' /usr/local/Tomcat8.5/conf/server.xml
```

3. 6 启动Tomcat。

```
/usr/local/Tomcat8.5/bin/./startup.sh
```



![在这里插入图片描述](https://img-blog.csdnimg.cn/20200811102813289.png)


## 4. 访问Tomcat

4.  1 打开浏览器，在地址栏中输入ECS公网地址，例如：`139.0.0.1`

   ​	如果显示如下界面，则表示Tomcat安装配置成功。



![在这里插入图片描述](https://img-blog.csdnimg.cn/20200811102822876.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3dlaXhpbl80NjI4NDMwMg==,size_16,color_FFFFFF,t_70)
4.  2 至此，Java Web开发环境搭建完成。

<Valine></Valine>