<template>
  <div class="intro-container">
    <el-skeleton v-if="!waitStatus" :rows="5" animated />
    <pdf v-if="waitStatus" src="/pdf/paper.pdf"> </pdf>
  </div>
</template>

<script>
import pdf from "pdfvuer";
export default {
  name: "Intro",
  components: {
    pdf,
  },
  data() {
    return {
      waitStatus: false,
    };
  },
  mounted() {
    this.handleWait();
  },
  methods: {
    handleWait() {
      setTimeout(() => {
        this.waitStatus = true;
      }, 2000);
    },
  },
};
</script>

<style>
.intro-container {
  padding: 20px;
  box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
  background: white;
  border-radius: 2px;
}
</style>
