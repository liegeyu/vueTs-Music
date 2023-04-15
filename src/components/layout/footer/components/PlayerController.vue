<template>
  <div class="controller-container">
    <IconPark
      :icon="loopType === 0 ? PlayOnce : loopType === 1 ? LoopOnce : ShuffleOne"
      size="20"
      :stroke-width="3"
      class="hover-btn"
      @click="toggleLoop"
    />
    <IconPark
      :icon="GoStart"
      size="28"
      theme="filled"
      class="hover-btn"
      @click="prev"
    />
    <IconPark
      :icon="isPause ? PauseOne : Play"
      size="45"
      theme="filled"
      class="play-btn"
      @click="togglePlay"
    />
    <IconPark :icon="GoEnd" size="28" class="hover-btn" @click="next" />
    <el-popover popper-class="popper-volume" placement="top" width="50px">
      <template #reference>
        <IconPark
          :icon="VolumeSmall"
          size="20"
          :stroke-width="3"
          class="hover-btn"
        />
      </template>
      <PlayerVolumeBar />
    </el-popover>
  </div>
</template>

<script setup lang="ts">
import {
  Play,
  PauseOne,
  LoopOnce,
  ShuffleOne,
  PlayOnce,
  GoEnd,
  GoStart,
  VolumeSmall,
} from "@icon-park/vue-next";
import PlayerVolumeBar from "./PlayerVolumeBar.vue";
</script>

<style scoped lang="scss">
.controller-container {
  display: flex;
  align-items: center;
  justify-content: center;
  column-gap: 0.75rem;
  color: #fff;

  .hover-btn,
  .play-btn {
    cursor: pointer;
  }

  .hover-btn:hover {
    color: #34d399;
  }
  .play-btn {
    color: #34d399;
  }
}
</style>
