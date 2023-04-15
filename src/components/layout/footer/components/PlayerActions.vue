<template>
  <div class="actions-container">
    <span class="text-time"> {{ currentTime }} / {{ duration }} </span>
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
      <span class="text-time">{{ playListCount }}</span>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { MusicList, TextMessage } from "@icon-park/vue-next";

let currentTime = ref<string>("00:00");
let duration = ref<string>("00:00");
let playListCount = ref<number>(1);
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
      text-align: center;
    }
  }

  .btn-hover {
    cursor: pointer;
  }
}
</style>
