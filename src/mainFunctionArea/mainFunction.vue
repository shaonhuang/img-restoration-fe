<template>
  <div>
    <Intro v-if="hash === 'paper'" />
    <FileList v-if="hash === 'filesys'" />
    <ImgDemo v-if="hash === 'demo'" />
  </div>
</template>

<script>
import Intro from "./intro/index.vue";
import FileList from "./fileList/index.vue";
import ImgDemo from "./demonstration/index.vue";

export default {
  name: "MainFunction",
  components: {
    Intro,
    FileList,
    ImgDemo,
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
