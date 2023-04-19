<template>
  <div class="controller-container">
    <IconPark
      :icon="loopType === 0 ? LoopOnce : loopType === 1 ? ShuffleOne : PlayOnce"
      size="20"
      :stroke-width="3"
      class="hover-btn"
      @click="toggleLoopType"
    />
    <IconPark :icon="GoStart" size="28" class="hover-btn" @click="prevSong" />
    <IconPark
      :icon="isPause ? PauseOne : Play"
      size="45"
      theme="filled"
      class="play-btn"
      @click="togglePaused"
    />
    <IconPark :icon="GoEnd" size="28" class="hover-btn" @click="nextSong" />
    <el-popover popper-class="popper-volume" placement="top" width="50px">
      <template #reference>
        <IconPark
          :icon="isMuted ? VolumeMute : VolumeSmall"
          :size="20"
          :stroke-width="3"
          class="hover-btn"
          @click="toggleMuted"
        />
      </template>
      <PlayerVolumeBar />
    </el-popover>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, toRefs } from "vue";
import { useStore } from "vuex";

import PlayerVolumeBar from "./PlayerVolumeBar.vue";
import IconPark from "@/components/common/IconPark.vue";
import {
  Play,
  PauseOne,
  LoopOnce,
  ShuffleOne,
  PlayOnce,
  GoEnd,
  GoStart,
  VolumeSmall,
  VolumeMute,
} from "@icon-park/vue-next";

const store = useStore();
const { isPause, isMuted, loopType } = toRefs(store.getters);

const toggleLoopType = () => {
  store.dispatch("player/toggleLoopType");
};
const togglePaused = () => {
  store.dispatch("player/togglePauseMusic");
};
const prevSong = () => {
  store.dispatch("player/prevSong");
};
const nextSong = () => {
  store.dispatch("player/nextSong");
};
const toggleMuted = () => {
  store.commit("player/toggleMuted");
};
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
