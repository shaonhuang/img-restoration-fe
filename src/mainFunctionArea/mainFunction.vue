<template>
  <div>
    <Intro v-if="hash === 'paper'" />
    <FileList v-if="hash === 'filesys'" />
    <ImgDemo v-if="hash.slice(0, 4) === 'demo'" />
    <About v-if="hash === 'about'" />
  </div>
</template>

<script>
// import api from "../config/api";
import Intro from "./intro/index.vue";
import FileList from "./fileList/index.vue";
import ImgDemo from "./demonstration/index.vue";
import About from "./about/index.vue";

export default {
  name: "MainFunction",
  components: {
    Intro,
    FileList,
    ImgDemo,
    About,
  },
  data: () => ({
    hash: "paper",
  }),
  methods: {},
  created() {
    window.onhashchange = () => {
      this.hash = window.location.hash.slice(1);
    };
  },
};
</script>
<style></style>
