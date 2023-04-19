<template>
  <div class="player-bar">
    <el-slider
      :min="0"
      :max="duration"
      v-model="nowTime"
      :show-tooltip="false"
      @change="changeTime"
    />
  </div>
</template>

<script setup lang="ts">
import { toRefs, computed, watch } from "vue";
import { useStore } from "vuex";

const store = useStore();
const { duration, currentTime } = toRefs(store.getters);

let nowTime = computed({
  get: () => {
    return currentTime.value;
  },
  set: (val) => {
    store.dispatch("player/modifySongTime", val);
  },
});

const changeTime = (val) => {
  store.dispatch("player/modifySongTime", val);
};
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
      width: 32px;
      height: 32px;
      // top: -7.5px;
      .el-slider__button {
        width: 10px;
        height: 10px;
      }
    }

    .el-slider__bar {
      // background-color: #1eb485;
    }
  }
}
.player-main {
  display: flex;
  align-items: center;
  padding: 0 1.25rem;
}
</style>
