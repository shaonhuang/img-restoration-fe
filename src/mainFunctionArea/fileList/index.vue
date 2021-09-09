<template>
  <div>
    <div class="intro-container">
      <el-button @click="dialogVisible = true" v-if="tableData.length"
        >上传文件</el-button
      >
      <el-button
        :disabled="clearAllDisabled"
        @click="clearAllUploadFiles"
        v-if="tableData.length"
        >清除所有文件</el-button
      >
      <el-table
        v-if="true"
        :data="tableData"
        style="width: 100%"
        :row-class-name="tableRowClassName"
      >
        <el-table-column prop="name" label="文件名" size="medium">
        </el-table-column>
        <el-table-column prop="type" label="文件类型" size="mini">
        </el-table-column>
        <el-table-column prop="status" label="处理状态" size="mini"
          ><template #default="scope">
            <el-tag :key="scope.row.name" :type="'danger'">
              {{ handleStatus(scope.row.status) }}
            </el-tag>
          </template>
        </el-table-column>
        <el-table-column prop="date" label="上传时间" size="medium">
        </el-table-column>
        <el-table-column label="操作" size="small">
          <template #default="scope">
            <el-button
              size="mini"
              :disabled="handleRowDisabled(scope.$index, scope.row)"
              @click="handleEdit(scope.$index, scope.row)"
              >效果展示</el-button
            >
            <el-button
              size="mini"
              type="danger"
              :disabled="handleRowDisabled(scope.$index, scope.row)"
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
      <div><UploadFile /></div>
    </el-dialog>
  </div>
</template>

<script>
import api from "../../config/api";
import { ProcessStatus } from "../../config/tip";

// import requests from "../../assets/requests/index";
import axios from "axios";
import _ from "lodash";
import UploadFile from "../../components/common/uploadFile/index.vue";
export default {
  name: "FileList",
  components: {
    UploadFile,
  },
  created() {
    this.initData();
  },
  data() {
    return {
      tableData: [],
      dialogVisible: false,
    };
  },
  methods: {
    async initData() {
      let idArr = [];
      this.tableData = [];
      await axios({
        method: "get",
        url: api.getlist,
      })
        .then((response) => {
          idArr = response.data;
        })
        .catch((error) => {
          console.error(error);
        });
      for (let id of idArr) {
        axios({
          method: "get",
          url: api.info + `${id}/`,
        })
          .then((response) => {
            this.tableData.push({
              name: response.data.filename,
              type: response.data.type,
              status: response.data.status,
              date: response.data.upload_date,
            });
          })
          .catch((error) => {
            console.error(error);
          });
      }
    },
    clearAllUploadFiles() {
      console.log(api.deleteFileByName);
      const table = this.tableData;
      table.forEach((element) => {
        axios({
          method: "get",
          url: api.deleteFileByName + element.name,
        })
          .then(function(response) {
            console.log(response);
          })
          .catch(function(error) {
            console.log(error);
          });
      });
      this.tableData = [];
    },
    tableRowClassName({ row }) {
      if (row.status === "processing") {
        return "warning-row";
      } else if (row.status === "done") {
        return "success-row";
      }
      return "";
    },
    handleClose(done) {
      this.initData();
      done();
    },
    handleRowDisabled(_, row) {
      // console.log(idx, row);
      return row.status === "processing";
    },
    clearAllDisabled() {
      return !_.every(this.tableData, (item) => {
        item.status === "processing";
      });
    },
    handleStatus(type) {
      return ProcessStatus[type].text;
    },
    async refresh() {
      let idArr = [];
      await axios({
        method: "get",
        url: api.getlist,
      })
        .then((response) => {
          idArr = response.data;
        })
        .catch((error) => {
          console.error(error);
        });
      for (let id of idArr) {
        axios({
          method: "get",
          url: api.info + `${id}/`,
        })
          .then(() => {
            // if (
            //   _.find(this.tableData, {
            //     id: response.data.id,
            //   }) === undefined
            // ) {
            //   this.tableData.push({
            //     name: response.data.filename,
            //     type: response.data.type,
            //     status: response.data.status,
            //     date: response.data.upload_date,
            //   });
            // }
            console.log(this.tableData);
          })
          .catch((error) => {
            console.error(error);
          });
      }
    },
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
