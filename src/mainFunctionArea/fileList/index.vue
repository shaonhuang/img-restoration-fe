<template>
  <div>
    <div class="intro-container">
      <el-button @click="dialogVisible = true" v-if="tableData.length"
        >上传文件</el-button
      >
      <el-button @click="clearFilter" v-if="tableData.length"
        >清除所有文件</el-button
      >
      <el-table
        v-if="true"
        :data="tableData"
        style="width: 100%"
        :row-class-name="tableRowClassName"
      >
        <el-table-column prop="date" label="上传时间" width="180">
        </el-table-column>
        <el-table-column prop="name" label="文件名" width="180">
        </el-table-column>
        <el-table-column prop="address" label="文件类型"> </el-table-column>
        <el-table-column prop="address" label="处理状态"
          ><template #default="scope">
            <el-tag :key="scope.row.name" :type="'danger'">
              {{ scope.row.name }}
            </el-tag>
          </template>
        </el-table-column>
        <el-table-column label="操作">
          <template #default="scope">
            <el-button size="mini" @click="handleEdit(scope.$index, scope.row)"
              >下载</el-button
            >
            <el-button
              size="mini"
              type="danger"
              @click="handleDelete(scope.$index, scope.row)"
              >删除</el-button
            >
          </template>
        </el-table-column>
        <template #empty>
          <el-button type="text" @click="dialogVisible = true"
            >点击上传文件</el-button
          >
        </template>
      </el-table>
    </div>
    <el-dialog
      title="文件上传"
      v-model="dialogVisible"
      width="30%"
      :before-close="handleClose"
    >
      <!-- <span>这是一段信息</span> -->
      <div><UploadFile /></div>
      <template #footer>
        <span class="dialog-footer">
          <el-button @click="dialogVisible = false">取 消</el-button>
          <el-button type="primary" @click="dialogVisible = false"
            >确认上传</el-button
          >
        </span>
      </template>
    </el-dialog>
  </div>
</template>

<script>
import UploadFile from "../../components/common/uploadFile/index.vue";
export default {
  name: "FileList",
  components: {
    UploadFile,
  },
  methods: {
    // tableRowClassName({row, rowIndex}) {
    //   if (rowIndex === 1) {
    //     return 'warning-row';
    //   } else if (rowIndex === 3) {
    //     return 'success-row';
    //   }
    //   return '';
    // },
    tableRowClassName({ rowIndex }) {
      if (rowIndex === 1) {
        return "warning-row";
      } else if (rowIndex === 3) {
        return "success-row";
      }
      return "";
    },
    handleClose(done) {
      // handleClose(done) {
      //   this.$confirm('确认关闭？')
      //     .then(_ => {
      //       done();
      //     })
      //     .catch(_ => {});
      // }
      this.$confirm("确认关闭？")
        .then(function() {
          done();
        })
        .catch();
    },
  },
  data() {
    return {
      tableData: [
        {
          date: "2016-05-02",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄",
        },
        {
          date: "2016-05-04",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄",
        },
        {
          date: "2016-05-01",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄",
        },
        {
          date: "2016-05-03",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄",
        },
      ],
      dialogVisible: false,
    };
  },
};
</script>

<style>
.el-table .warning-row {
  background: oldlace;
}

.el-table .success-row {
  background: #f0f9eb;
}
</style>
