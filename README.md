### TODO  

#### 初始化

```
cd legolas_vue

npm install element-ui -S
```
注释掉App.vue里面的log.png图片
```
<template>
  <div id="app">
    <!--<img src="./assets/logo.png">-->
    <router-view/>
  </div>
</template>
```
#### 添加第一个页面
在`/router/index.js`添加一个路由,随便给个名字。

```
{
      path: '/home',
      name: 'Home',
      component: Home,
    }

```
然后在`/src/components/`新建个组件结构，这个结构就是页面的代码，随便写点。

```
<template>
  <el-row>
    <el-button round>圆角按钮</el-button>
    <el-button type="primary" round>主要按钮</el-button>
    <el-button type="success" round>成功按钮</el-button>
    <el-button type="info" round>信息按钮</el-button>
    <el-button type="warning" round>警告按钮</el-button>
    <el-button type="danger" round>危险按钮</el-button>
  </el-row>
</template>

```
这个时候就可以在路由`/router/index.js`里引用这个组件：
```
import Home from '@/components/Home'
```
访问`http://localhost:8080/#/home`,就可以看到。



