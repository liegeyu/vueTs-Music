<template>
  <div class="songlist-container">
    <div class="songlist-header">
      <div class="h-action">操作</div>
      <div class="h-title">标题</div>
      <div class="h-singer">歌手</div>
      <div class="h-album">专辑</div>
      <div class="h-duration">时间</div>
    </div>
    <div class="songlist-body">
      <template v-for="(item, index) in songlist" :key="item.id">
        <SongItem :song="item" :index="index" />
      </template>
    </div>
  </div>
</template>

<script setup lang="ts">
import { defineProps } from "vue";

import SongItem from "./SongItem.vue";
import { SongList } from "@/types/playlist-types";

const props = defineProps({
  songlist: {
    type: Array<SongList>,
    default: [],
  },
});
</script>

<style scoped lang="scss">
.songlist-container {
  .songlist-header {
    display: flex;
    color: #888888;
    font-size: 1.15rem;
    margin-bottom: 0.5rem;
    .h-action {
      width: 6.5rem;
      text-align: center;
      cursor: default;
    }
    .h-title,
    .h-singer,
    .h-album,
    .h-duration {
      cursor: pointer;
      &:hover {
        background-color: #373737;
      }
    }
    .h-title {
      flex: 1 1 auto;
    }
    .h-singer {
      width: 20%;
    }
    .h-album {
      width: 30%;
    }
    .h-duration {
      width: 10rem;
    }
  }
  .songlist-body {
  }
}
</style>
