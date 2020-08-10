---
title: vant安装使用步骤简化说明
date: 2020-04-12
tags:
 - vue\vant
categories:
 -  前端笔记
---


# vant安装使用步骤简化说明

## 方式一，不使用插件的情况下，仅需三步：

1. ### 安装vant: `npm i vant -S`

2. ### 手动引入需要的组件（这里需要什么组件就引入什么）：
	
	在main.js 写入以下三条语句
	
	```
import Button from 'vant/lib/button';
	import 'vant/lib/button/style';
	Vue.use(Button);
	```
	
	
	
3. ### 刚才引入的是button组件，现在使用，在页面上粘贴以下代码：

```
  <van-button type="default">默认按钮</van-button>
  <van-button type="primary">主要按钮</van-button>
  <van-button type="info">信息按钮</van-button>
  <van-button type="warning">警告按钮</van-button>
  <van-button type="danger">危险按钮</van-button>
```



## 方式二：使用插件，自动按需引入组件:

1. ### 安装`vant: npm i vant -S`

2. ### 安装babel-plugin-import插件：

   ```
   npm install babel-plugin-import --save-dev
   ```

   

3. ### 在 babel.config.js 中配置（没有这步css样式就不能引用，把plugins数组复制粘贴就好了）：

  

```
// 注意，如果你的项目在运行，需要Ctrl + C终止，重新运行才会更新babel.config.js配置
  module.exports = {
    plugins: [
   ['import', {
     libraryName: 'vant',
     libraryDirectory: 'es',
     style: true
   }, 'vant']
    ]
  };
  我写出来的效果，你可以直接复制粘贴覆盖使用：
  module.exports = {
    presets: [
   '@vue/cli-plugin-babel/preset'
    ],
    plugins: [
   ['import', {
     libraryName: 'vant',
     libraryDirectory: 'es',
     style: true
   }, 'vant']
    ]
  }
```



4. ### 在main.js中写入以下代码，同样是按需引入相应组件：

 

```
 import { Button } from 'vant';
  Vue.use(Button);
```



5. ### 刚才引入的是button组件，现在使用，在页面上粘贴以下代码：

```
  <van-button type="default">默认按钮</van-button>
  <van-button type="primary">主要按钮</van-button>
  <van-button type="info">信息按钮</van-button>
  <van-button type="warning">警告按钮</van-button>
```



### 注意：如果需要使用rem单位,可自行安装postcss-pxtorem、lib-flexible插件，并在main.js中引入

**端午安康**
<Valine></Valine>