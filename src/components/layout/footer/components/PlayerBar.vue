<template>
  <div class="player-bar">
    <el-slider
      v-model="currentTime"
      :show-tooltip="false"
      @change="changeTime"
    />
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
let currentTime = ref<number>(0);
</script>

<style scoped lang="scss">
.player-bar {
  :deep(.el-slider) {
    height: 10px;
    --el-slider-main-bg-color: #1eb485;
    .el-slider__runway,
    .el-slider__bar {
      height: 2px;
    }

    .el-slider__button-wrapper {
      width: 10px;
      height: 10px;
      top: -7.5px;
    }

    .el-slider__bar {
      // background-color: #1eb485;
    }

    .el-slider__button {
      width: 8px !important;
      height: 8px;
    }
  }
}
.player-main {
  display: flex;
  align-items: center;
  padding: 0 1.25rem;
}
</style>
