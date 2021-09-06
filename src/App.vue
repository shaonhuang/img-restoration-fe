<template>
  <div class="container">
    <div class="header">
      <el-row class="toolbar">
        <el-col :span="4"><img alt="bupt logo" class="bupt-logo" src="./assets/bupt.png"></el-col>
        <el-col :span="2">
            <div class="mrmv"><span class="title">数字媒体技术</span></div>
        </el-col>
        <el-col :span="12">
            <div class="mrmv"><span class="title">小学期实践项目：基于AI的模糊图像复原</span></div>
        </el-col>
      </el-row>
    </div>
    <el-container class="offsetTop">
      <el-container>
      <el-aside width="178px"><SideBar/></el-aside>
      <el-main><MainFunction/></el-main>
      </el-container>
    <el-footer>Footer</el-footer>
    </el-container>
  </div>
</template>

<script>
import MainFunction from './mainFunctionArea/mainFunction.vue'
import SideBar from './sidebar.vue'

export default {
  name: 'App',
  components: {
    MainFunction,
    SideBar
  },
  created(){
  window.location.hash = 'paper';
  }
}
</script>

<style>
html {
    width: 100%;
    height: 100%;
    background: #2c3e50;
}
body {
  width: 100%;
  height: 100%;
  padding: 0;
  margin: 0;
}
#app {
  font-family: 'Helvetica Neue', Helvetica, 'PingFang SC', 'Hiragino Sans GB',
  'Microsoft YaHei', '微软雅黑', Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  width: 100%;
  height: 100%;
}
.container {
  height: 100%;
  width: 100%;
}
.header {
  position: absolute;
  z-index: 999;
}
.bupt-logo {
  position: relative;
  top: 50%;
  transform: translateY(-50%);
  width: 46%;
  padding: 12px;
}
.mrmv {
  position: relative;
  top: 50%;
  transform: translateY(-50%);
}
.title {
  font-size: 1rem;
  color: white;
}
.toolbar {
  width: 100%;
  background-color: #1b191a;
  top: 0;
  left: 0;
  z-index: 1000;
  user-select: none;
  transition: all .3s linear 0s;
}
.el-container {
  height: 100%;
}
.offsetTop {
  padding-top: 4%;
}
.el-header, .el-footer {
  background-color: #B3C0D1;
}

.el-aside {
  background-color: #D3DCE6;
}
.el-main {
  background-color: #E9EEF3;
}
</style>
