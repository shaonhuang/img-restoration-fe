<template>
  <div class="intro-container">
    <h1>效果展示</h1>
    <div class="imgContainer">
      <div class="imgLeft">
        <img :src="left" alt="left" width="256" height="256" />
        <p>低分辨率</p>
      </div>
      <div class="imgMid">
        <img :src="mid" alt="mid" width="256" height="256" />
        <p>原图</p>
      </div>
      <div class="imgRight">
        <img :src="right" alt="right" width="256" height="256" />
        <p>复原后图像</p>
      </div>
    </div>
    <div style="margin-top:3vh;padding-left:2.4%">
      <el-button @click="downloadOr" v-if="false">下载原图</el-button>
      <el-button @click="downloadRepair" v-if="false">下载修复后图像</el-button>
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
      left: api.getFileByLrByName + this.name,
      mid: api.getFileByName + this.name,
      right: api.getFileByHrByName + this.name,
    };
  },
  beforeMount() {
    const hashArr = window.location.hash.split("?");
    const name = hashArr[hashArr.length - 1].split("name=")[1];
    this.name = name;
    this.left = api.getFileByLrByName + name;
    this.mid = api.getFileByName + name;
    this.right = api.getFileByHrByName + name;
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

<style>
.imgContainer {
  display: flex;
  flex-direction: row;
  justify-content: space-around;
}
.imgLeft img {
  /* transform: scale(4, 4); */
}
.imgMid {
}
.imgRight {
}
</style>
