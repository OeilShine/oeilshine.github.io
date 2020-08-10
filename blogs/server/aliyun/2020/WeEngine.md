---
title: 基于ECS构建微信公众号管理系统 WeEngine
date: 2020-08-08
tags:
 - 阿里云七天训练营
categories:
 -  后端笔记
---

## 一、微擎安装

#### 1. 1使用宝塔来安装LAMP环境

![20200808092315](https://pic.downk.cc/item/5f2d57a114195aa594fd029e.png)

#### 1.2下载微擎并解压

下载地址：

```
https://cdn.w7.cc/download/WeEngine-Laster-Online.zip
```

#### 1.3 使用Xshell登录服务器，在/www/wwwroot/default下创建WeEngine文件夹

#### 1.4 使用Xftp将解压后的install.php文件上传至WeEngine

#### 1.5 使用宝塔添加网站，勾选数据库，记住用户和密码。

#### 1.6 在浏览器访问 '你的域名/install.php '安装，注册并登录微擎账号

<img src="https://pic.downk.cc/item/5f2e36db14195aa594472f0e.png" alt="20200808090600" style="zoom:75%;" />

#### 1.7 在 Xshell中运行chown命令为目录赋予权限：

```
chown -R www /www/wwwroot/default
```

如果提示`chown: changing ownership of ‘/www/wwwroot/default/WeEngine/.user.ini’: Operation not permitted`，那么就把命令里的'-R'去掉

#### 1.8 如果微擎检测出错误，点击修复异常，按照操作步骤执行即可

![41806c0cc29c22e1b8725b3f3d83f193_907x332](https://pic.downk.cc/item/5f2e371614195aa594474813.png)

#### 1.9  配置数据库参数

将刚才记住的数据库信息输入

![20200808092116](https://pic.downk.cc/item/5f2e373b14195aa5944757db.png)

#### 1.10 等待文件下载完成

<img src="https://pic.downk.cc/item/5f2e37cf14195aa594478ad4.png" alt="20200808092212" style="zoom:75%;" />

#### 1.11 最后，设置系统账号并登陆

# 二、使用微擎管理公众号

#### 2.1 先创建一个公众号

打开微信公众平台官网：https://mp.weixin.qq.com/ 右上角点击“立即注册”，选择注册的账号类型

![9bbe5e53e78ec43d06afc8029f805d4f](https://pic.downk.cc/item/5f2e3f9e14195aa5944a867b.png)

#### 2.3 进入微擎控制台，检查版本更新。

#### 2.4 侧边栏选择“平台管理”，点击添加平台

<img src="https://pic.downk.cc/item/5f2e3fb814195aa5944a9070.png" />

#### 2.5 选择新建公众号，手动添加

<img src="https://pic.downk.cc/item/5f2e3fe114195aa5944a9ebb.png" />

#### 2.6 将公众号的各类信息填入

<img src="https://pic.downk.cc/item/5f2e3ff514195aa5944aa863.png" />

#### 2.7 注意AppId和AppSecret在公众号的开发里的基本配置里

![20200808111117](https://pic.downk.cc/item/5f2e400d14195aa5944ab489.png)

#### 2.8 在微信公众号的后台添加开发者信息，将系统给出的 Token和 Key 复制到【基本配置】中

<img src="https://pic.downk.cc/item/5f2e403414195aa5944ac31a.png" alt="20200808105053" style="zoom:75%;" />

#### 2.9 接入完成，测试
<Valine></Valine>
