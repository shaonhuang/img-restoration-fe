<template>
  <div>
    <Intro/>
    <el-button @click="show3 = !show3">Click Me</el-button>
    <transition name="el-fade-in">
    <FileList v-show="show3" v-if="show3"/>
    </transition>
    <ImgDemo/>
  </div>
</template>

<script>
import Intro from './intro/index.vue'
import FileList from './fileList/index.vue'
import ImgDemo from './demonstration/index.vue'

export default {
  name: "MainFunction",
  components: {
    Intro,
    FileList,
    ImgDemo
  },
  data: () => ({
      show3: true
  })
}
</script>
<style></style>
