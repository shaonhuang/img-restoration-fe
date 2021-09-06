<template>
  <div class="intro-container">
    <h1>效果展示</h1>
    <div
      class="comparison"
      style="--slide: 500;left: 50%;
    transform: translateX(-50%);"
    >
      <input
        type="range"
        min="1"
        max="1000"
        value="500"
        class="slider"
        oninput="this.parentNode.style.setProperty('--slide', `${this.value}`)"
      />
    </div>
    <div style="margin-top:3vh;padding-left:2.4%">
      <el-button>下载原图</el-button>
      <el-button>下载修复后图像</el-button>
    </div>
  </div>
</template>

<script>
export default {
  name: "ImgDemo",
  methods: {
    goBack() {
      window.history.back();
    },
  },
};
</script>

<style>
/* https://unsplash.com/photos/qiSGdBYWtSY */

.comparison {
  --image: url(https://images.unsplash.com/photo-1612142186636-3e65d8a446fe?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2100&q=80);
  --height: 400px;

  width: 600px;
  height: var(--height);
  position: relative;

  overflow: hidden;
  box-shadow: 0px 2px 6px rgba(0, 0, 0, 0.15);
  border-radius: 4px;
}

.comparison::before,
.comparison::after {
  content: "";
  display: block;
  width: inherit;
  height: inherit;
  background-size: cover;
  background-image: var(--image);
  position: absolute;
  top: 0;
  left: 0;
}

.comparison::before {
  filter: grayscale(100%);
}

.comparison::after {
  clip-path: inset(0 0 0 calc((var(--slide) / 10) * 1%));
}

.slider {
  -webkit-appearance: none;
  appearance: none;
  outline: none;
  margin: 0;

  background: transparent;
  z-index: 100;
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
}

.slider::-webkit-slider-thumb {
  -webkit-appearance: none;
  appearance: none;
  width: 14px;
  height: var(--height);
  background: #000;
  box-shadow: 0px 0px 6px rgba(0, 0, 0, 0.5);
  border-radius: 2px;
  cursor: ew-resize;
}
</style>
