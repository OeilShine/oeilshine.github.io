---
title: 黑苹果(Hackintosh)简单步骤教程
date: 2020-05-05
tags:
 - Hackintosh
categories:
 -  手术刀
---

# 黑苹果(Hackintosh)简单步骤教程

​	刚开始玩黑果的时候，网上资料确实不少,但是有一些教程复杂到令人望而生畏。于是在自己摸索的过程中有了这一份笔记。

 1. ### 准备好一个32G的U盘和镜像

    ![在这里插入图片描述](https://img-blog.csdnimg.cn/20200810183246743.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3dlaXhpbl80NjI4NDMwMg==,size_16,color_FFFFFF,t_70)

2. ### 使用Etcher或者TransMac刻录镜像，制作启动盘（Etcher只需选择镜像便可以自动制作了）


​	![在这里插入图片描述](https://img-blog.csdnimg.cn/20200810183441409.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3dlaXhpbl80NjI4NDMwMg==,size_16,color_FFFFFF,t_70)
3. ### 将合适的EFI文件替换U盘的EFI文件，一般情况下替换config.plist文件即可（使用DiskGenius)

​	![在这里插入图片描述](https://img-blog.csdnimg.cn/20200810183516287.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3dlaXhpbl80NjI4NDMwMg==,size_16,color_FFFFFF,t_70)
​	

4. ### 重启从U盘启动进入Clover页面

5. ### 选择安装从U盘安装Mac

6. ### 进入安装页面，先选择磁盘工具将要安装的磁盘/分区抹掉为Mac（日志）格式

7. ### 返回安装页面，一路安装

8. ### 第一次安装完毕，自动重启

9. ### 重启完毕进入第二次安装设置，一路next完毕即可进入Mac桌面

   ![在这里插入图片描述](https://img-blog.csdnimg.cn/20200810183833487.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3dlaXhpbl80NjI4NDMwMg==,size_16,color_FFFFFF,t_70)

10. ### 进入桌面后插上网线，安装网卡及其他驱动。

11. ### 如果没有网线，则回到win系统，下载好驱动，再进入Mac系统安装

12. ### 百度/问群

![在这里插入图片描述](https://img-blog.csdnimg.cn/20200810183942849.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3dlaXhpbl80NjI4NDMwMg==,size_16,color_FFFFFF,t_70)

<Valine></Valine>