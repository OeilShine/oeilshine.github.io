---
title: 给git初学者的常用手册
date: 2020-04-12
tags:
 - git/github
categories:
 -  知识手册
---

# git 常用命令

1. ### git  init   //初始化项目

2. git add .  //提交到缓存（git add *)

3. git commit -m '初始化项目'  //添加项目说明，这一次提交的描述

4. Github 创建新仓库  //前往GitHub创建新仓库，获得仓库地址

5. git remote add origin https://github.com/EatFinger/LearnMiniProgram.git  //关联地址

6. git push -u origin master  //第一次推送master分支的所有内容

7. git push origin master  // 推送最新修改

### v git status  //查看当前工作区状态

v git checkout master  //返回现在的分支位置
v git checkout 文件名 //从暂存区恢复文件到工作区
v git diff  //查看工作区域暂存区版本的区别
v Clear  //清屏
v git pull  //从远程仓库同步本地代码（更新）
v 删除远程仓库的标签: git push origin --delete <版本号>
v git config --global user.name "Your_username" 
v git config --global user.email "Your_email"
v 查看是否已经有了ssh密钥：cd ~/.ssh
v ssh-keygen -t rsa -C "你GitHub的邮箱"  //生产ssh密匙，以便授权

### Ø 提交更新，打上标签

1. git add .
2. git commit -m '知识点一'
3. git tag 01_知识点一  //打上Tag
4. git tag   //查询tag
5. git log   //查看提交记录,查询版本号
6. git reset +版本号   //回退版本
7. git reset --hard +版本号   //如提示还有部分未提交，则强行回退版本

### Ø 再次提交

1. git add .
2. git commit -m '知识点二'
3. git tag 02_知识点二  //(可先git tag 查看标签）
4. git tag 
5. git push --tags  //push到远程仓库，重要！

### Ø 克隆项目，查看项目

1. git clone +目标项目地址
2. git checkout 01_知识点一   //切换查看对应标签(tab补全）
3. git checkout master  //切换回master

### Ø 第二次提交

1. git add *
2. git commit -m '这是第几次提交，做了哪些修改'
3. git status //查看有没有问题
4. git push //没问题直接push

§ git checkout -b login // 创建并切换分支(-b即branch)
§ git branch  //查看分支

<Valine></Valine>