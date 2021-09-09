<template>
  <div>
    <el-upload
      class="upload-demo"
      drag
      enctype="multipart/form-data"
      action="http://127.0.0.1:8000/api/v1/files/upload/"
      multiple
      :file-list="fileList"
    >
      <i class="el-icon-upload"></i>
      <div class="el-upload__text">将文件拖到此处，或<em>点击上传</em></div>
      <template #tip>
        <div class="el-upload__tip">
          只能上传 jpg/png 文件，且不超过 500kb
        </div>
      </template>
    </el-upload>
    <!-- <el-button size="small" type="primary">选取文件</el-button>
    <el-button style="margin-left: 10px;" size="small" type="success" @click="submitUpload">上传到服务器</el-button> -->
  </div>
</template>

<script>
export default {
  name: "UploadFile",
  data() {
    return {
      fileList: [],
    };
  },
  methods: {
    handleChange(file, fileList) {
      console.log(fileList);
    },
  },
};
</script>
<style></style>
