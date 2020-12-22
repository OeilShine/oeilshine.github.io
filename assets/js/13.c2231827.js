(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{568:function(t,i,_){"use strict";_.r(i);var v=_(4),a=Object(v.a)({},(function(){var t=this,i=t.$createElement,_=t._self._c||i;return _("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[_("p",[t._v("-------------------------加油！🙂----------------------")]),t._v(" "),_("h1",{attrs:{id:"git-常用命令"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#git-常用命令"}},[t._v("#")]),t._v(" git 常用命令")]),t._v(" "),_("ol",[_("li",[_("h3",{attrs:{id:"git-init-初始化项目"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#git-init-初始化项目"}},[t._v("#")]),t._v(" git  init   //初始化项目")])]),t._v(" "),_("li",[_("p",[t._v("*"),_("em",[_("code",[t._v("git add .")]),t._v("  //提交到缓存（git add "),_("em",[t._v(")")])])])]),t._v(" "),_("li",[_("p",[_("strong",[_("code",[t._v("git commit -m")]),t._v(" 初始化项目'  //添加项目说明，这一次提交的描述")])])]),t._v(" "),_("li",[_("p",[_("strong",[t._v("Github 创建新仓库  //前往GitHub创建新仓库，获得仓库地址")])])]),t._v(" "),_("li",[_("p",[_("strong",[_("code",[t._v("git remote add origin https://github.com/EatFinger/LearnMiniProgram.git")]),t._v(" //关联地址")])])]),t._v(" "),_("li",[_("p",[_("strong",[_("code",[t._v("git push -u origin master")]),t._v("  //第一次推送master分支的容")])])]),t._v(" "),_("li",[_("p",[_("strong",[_("code",[t._v("git push origin master")]),t._v("  // 推送最新修改")])])])]),t._v(" "),_("h3",{attrs:{id:"二、第二次提交"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#二、第二次提交"}},[t._v("#")]),t._v(" 二、第二次提交")]),t._v(" "),_("ol",[_("li",[_("strong",[_("code",[t._v("git add .")])])]),t._v(" "),_("li",[_("strong",[_("code",[t._v("git commit -m")]),t._v("这是第几次提交，做了哪些修改'")])]),t._v(" "),_("li",[_("strong",[_("code",[t._v("git push")]),t._v(" //没问题直接push")])])]),t._v(" "),_("h3",{attrs:{id:"o-git-status-查看当前工作区状态"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#o-git-status-查看当前工作区状态"}},[t._v("#")]),t._v(" `Ø  git status  //查看当前工作区状态")]),t._v(" "),_("p",[t._v("1."),_("code",[t._v("git checkout master //返回现在的分支位置")])]),t._v(" "),_("p",[t._v("2."),_("code",[t._v("git checkout 文件名 //从暂存区恢复文件到工作区")])]),t._v(" "),_("p",[t._v("3."),_("code",[t._v("git diff //查看工作区域暂存区版本的区别")])]),t._v(" "),_("p",[t._v("4."),_("code",[t._v("Clear//清屏")])]),t._v(" "),_("p",[t._v("5.`git pull  //从远程仓库同步本地代码（更新）``")]),t._v(" "),_("p",[t._v("6."),_("code",[t._v("git push origin --delete <版本号> // 删除远程仓库的标签")])]),t._v(" "),_("p",[t._v("7."),_("code",[t._v('git config --global user.name "Your_username"')])]),t._v(" "),_("p",[t._v("8."),_("code",[t._v('git config --global user.email "Your_email"')])]),t._v(" "),_("p",[t._v("9."),_("code",[t._v("cd ~/.ssh")]),t._v("  //查看是否已经有了ssh密钥：`")]),t._v(" "),_("p",[t._v("10."),_("code",[t._v('ssh-keygen -t rsa -C "你GitHub的邮箱" //生产ssh密匙，以便授权')])]),t._v(" "),_("h3",{attrs:{id:"o-提交更新，打上标签"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#o-提交更新，打上标签"}},[t._v("#")]),t._v(" `Ø 提交更新，打上标签")]),t._v(" "),_("ol",[_("li",[t._v("git add .")]),t._v(" "),_("li",[t._v("git commit -m '知识点一'")]),t._v(" "),_("li",[t._v("git tag 01_知识点一  //打上Tag")]),t._v(" "),_("li",[t._v("git tag   //查询tag")]),t._v(" "),_("li",[t._v("git log   //查看提交记录,查询版本号")]),t._v(" "),_("li",[t._v("git reset +版本号   //回退版本")]),t._v(" "),_("li",[t._v("git reset --hard +版本号   //如提示还有部分未提交，则强行回退版本")])]),t._v(" "),_("h3",{attrs:{id:"o-再次提交"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#o-再次提交"}},[t._v("#")]),t._v(" Ø 再次提交")]),t._v(" "),_("ol",[_("li",[t._v("git add .")]),t._v(" "),_("li",[t._v("git commit -m '知识点二'")]),t._v(" "),_("li",[t._v("git tag 02_知识点二  //(可先git tag 查看标签）")]),t._v(" "),_("li",[t._v("git tag")]),t._v(" "),_("li",[t._v("git push --tags  //push到远程仓库，重要！")])]),t._v(" "),_("h3",{attrs:{id:"o-克隆项目，查看项目"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#o-克隆项目，查看项目"}},[t._v("#")]),t._v(" Ø 克隆项目，查看项目")]),t._v(" "),_("ol",[_("li",[_("p",[t._v("git clone +目标项目地址")])]),t._v(" "),_("li",[_("p",[t._v("git checkout 01_知识点一   //切换查看对应标签(tab补全）")])]),t._v(" "),_("li",[_("p",[t._v("git checkout master  //切换回master")])]),t._v(" "),_("li")]),t._v(" "),_("p",[t._v("§ git checkout -b login // 创建并切换分支(-b即branch)\n§ git branch  //查看分支")]),t._v(" "),_("Valine")],1)}),[],!1,null,null,null);i.default=a.exports}}]);