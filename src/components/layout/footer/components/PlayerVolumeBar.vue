<template>
  <div class="player-volume">
    <div>
      <el-slider
        vertical
        height="100px"
        :show-tooltip="false"
        v-model="volumeValue"
        :max="100"
        :min="0"
        size="small"
        @input="volumeInput"
      />
    </div>
    <div class="text-sm">{{ volumeValue }}</div>
  </div>
</template>

<script setup lang="ts">
import { toRefs, computed } from "vue";
import { useStore } from "vuex";

const store = useStore();
const { volume } = toRefs(store.getters);

let volumeValue = computed({
  get: () => {
    return volume.value;
  },
  set: (val) => {
    // 修改音量
    store.commit("player/modifyMusicVolume", val);
  },
});

const volumeInput = (val) => {
  store.commit("player/modifyMusicVolume", val);
};
</script>

<style scoped lang="scss">
.player-volume {
  display: flex;
  flex-direction: column;
  align-items: center;
  color: #fff;
  :deep(.el-slider) {
    --el-slider-main-bg-color: #1eb485;
    .el-slider__runway {
      background-color: #474648;
    }
    .el-slider__button-wrapper {
      .el-slider__button {
        width: 15px;
        height: 15px;
        background-color: #1e1e1f;
      }
    }
  }
  .text-sm {
    font-size: 0.825rem;
    margin-top: 0.1rem;
  }
  .text-sm2 {
    margin-top: 0.2rem;
  }
}
</style>
