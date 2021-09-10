<template>
  <div class="intro-container">
    <h1>效果展示</h1>
    <div>
      <img :src="left" alt="left" />
      <p>原生文件</p>
      <img :src="right" alt="right" />
      <p>复原后文件</p>
    </div>
    <div style="margin-top:3vh;padding-left:2.4%">
      <el-button @click="downloadOr">下载原图</el-button>
      <el-button @click="downloadRepair">下载修复后图像</el-button>
    </div>
  </div>
</template>

<script>
// import axios from "axios";
// const Base64 = require("js-base64").Base64;
// import app from "./components/comparePics/index.vue";

import api from "../../config/api";
export default {
  name: "ImgDemo",
  components: {},
  // props: {
  //   name: String,
  // },
  data() {
    return {
      name: "",
      // left: "../../assets/cat.jpg",
      // right: "../../assets/cat.jpg",
      left: api.getFileByName + this.name,
      right: api.getFileByName + this.name,
    };
  },
  beforeMount() {
    const hashArr = window.location.hash.split("?");
    const name = hashArr[hashArr.length - 1].split("name=")[1];
    this.name = name;
    this.left = api.getFileByName + name;
    this.right = api.getFileByName + name;
    console.log(name);
  },
  methods: {
    goBack() {
      window.history.back();
    },
  },
  mounted() {},
};
</script>

<style></style>
