<template>
  <div>
    <FileList/>
    <ImgDemo/>
  </div>
</template>

<script>
import FileList from './fileList/index.vue'
import ImgDemo from './demonstration/index.vue'

export default {
  name: "MainFunction",
  components: {
    FileList,
    ImgDemo
  }
}
</script>
<style></style>
