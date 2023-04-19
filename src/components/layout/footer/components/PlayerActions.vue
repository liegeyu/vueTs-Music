<template>
  <div class="actions-container">
    <span class="text-time">
      {{ formatDuration(currentTime) }} / {{ formatDuration(duration) }}
    </span>
    <IconPark
      :icon="TextMessage"
      size="20"
      :stroke-width="3"
      class="btn-hover"
      title="歌词"
    />
    <div class="playerlist-btn" @click="showPlayList = true">
      <IconPark
        :icon="MusicList"
        size="20"
        :stroke-width="3"
        class="btn-hover"
        title="播放列表"
      />
      <span class="text-time">{{ playerListLen }}</span>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, toRefs } from "vue";
import { useStore } from "vuex";

import IconPark from "@/components/common/IconPark.vue";
import { MusicList, TextMessage } from "@icon-park/vue-next";
import { formatDuration } from "@/utils/formatNumber";

const store = useStore();
const { currentTime, duration, playerListLen } = toRefs(store.getters);
</script>

<style scoped lang="scss">
.actions-container {
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  column-gap: 0.75rem;
  .playerlist-btn {
    display: flex;
    align-items: center;
    .text-time {
      display: inline;
      font-size: 1.2rem;
    }
  }

  .btn-hover {
    cursor: pointer;
  }
}
</style>
