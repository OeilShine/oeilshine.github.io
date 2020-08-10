---
title: 搭建wiki知识库 MediaWiki
date: 2020-08-07
tags:
 - 阿里云七天训练营
categories:
 -  后端笔记
---

# 1. 安装运行环境



1.1 安装**MediaWiki**需要搭建LAMP环境（ Linux + Apache + MySQL + PHP），这里我们使用宝塔Linux面板来简化操作步骤、节省时间，有限的生命应该用去更精彩的地方。



![20200806171142](https://pic.downk.cc/item/5f2d57a114195aa594fd029e.png)

# 2. 下载上传MediaWiki

2.1 使用Xshell远程登陆ESC服务器，用Xftp传输文件。

2.2 下载MediaWiki并解压

下载地址：

```
`https://releases.wikimedia.org/mediawiki/1.29/mediawiki-1.29.1.tar.gz`
```

或者服务器直接下载： 

```
`wget https:*//releases.wikimedia.org/mediawiki/1.29/mediawiki-1.29.1.tar.gz*`
```

解压： `

```
tar -zxv mediawiki-1.29.1.tar.gz*`
```

2.3 进入/www/wwwroot /default 创建old文件夹，将解压后的文件上传到old

<img src="https://pic.downk.cc/item/5f2d575a14195aa594fcdcdc.png" alt="20200806162900" style="zoom:75%;" />

2.4  使用 chown 命令为目录赋予权限：

```bash
chown -R www /www/wwwroot /default
```

2.5 使用宝塔添加网站

![20200806170617](https://pic.downk.cc/item/5f2d5fff14195aa594016dad.png)

# 3. 安装MediaWiki

![20200806163613](https://pic.downk.cc/item/5f2d6a5214195aa59405b15d.png)

3.1 设置语言

![20200806163655](https://pic.downk.cc/item/5f2d6ac714195aa59405ddf8.png)

3.2 数据库选择 SQLite

![20200806165806](https://pic.downk.cc/item/5f2d6d0914195aa5940733ae.png)

4. # 最后

   下载 LocalSettings.php文件，然后将LocalSettings.php文件上传到网站的根目录即可。
<Valine></Valine>
