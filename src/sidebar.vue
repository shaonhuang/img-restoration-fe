<template>
  <div class="side-bar">
    <el-menu default-active="1" class="el-menu-vertical-demo">
      <el-menu-item index="1" @click="handleIdx('paper')">
        <template #title>
          <i class="el-icon-location"></i>
          <span>论文阐述</span>
        </template>
      </el-menu-item>
      <el-menu-item index="2" @click="handleIdx('filesys')">
        <i class="el-icon-menu"></i>
        <template #title>文件管理</template>
      </el-menu-item>
      <el-menu-item index="3" @click="handleIdx('demo')" disabled>
        <i class="el-icon-document"></i>
        <template #title \>效果显示</template>
      </el-menu-item>
      <el-menu-item index="4" @click="handleIdx('about')">
        <i class="el-icon-setting"></i>
        <template #title>关于我们</template>
      </el-menu-item>
    </el-menu>
  </div>
</template>

<script>
export default {
  name: "SideBar",
  data() {
    return { index: "1" };
  },
  methods: {
    handleIdx(idx) {
      switch (idx) {
        case "paper":
          window.location.hash = "paper";
          break;
        case "filesys":
          window.location.hash = "filesys";
          break;
        case "demo":
          window.location.hash = "demo";
          break;
        case "about":
          window.location.hash = "about";
          break;
      }
    },
  },
};
</script>

<style>
.el-menu-vertical-demo:not(.el-menu--collapse) {
  width: 200px;
}
.side-bar {
  margin-left: -24%;
}
</style>
