<template>
  <div class="playlist-container">
    <PlaylistInfo :playlist="playlist" v-if="loaded" />
    <div class="playlist-main">
      <el-tabs v-model="tabValue">
        <el-tab-pane lazy label="歌曲列表" name="songlist"> </el-tab-pane>
        <el-tab-pane lazy label="评论" name="comments" />
      </el-tabs>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, reactive, onMounted } from "vue";
import { useRoute } from "vue-router";

import PlaylistInfo from "@/views/PlayList/components/PlaylistInfo.vue";
import { getPlayListDetail } from "@/service/modules/playlist";
import { PlayListDetail } from "@/types/playlist-types";

const route = useRoute();
let loaded = ref<boolean>(false);
const playlistId = ref<string | string[]>(route.query.id);
let playlist = reactive<PlayListDetail>({} as PlayListDetail);
let tabValue = ref<string>("songlist");

onMounted(async () => {
  const res = await getPlayListDetail({ id: playlistId.value });
  playlist = res.playlist;
  loaded.value = true;
  console.log(playlist);
});
</script>

<style scoped lang="scss">
.playlist-container {
  width: 100%;

  .playlist-main {
    padding-left: 2rem;
    :deep(.el-tabs__item) {
      color: #d5d5d5;
    }
    :deep(.el-tabs__nav-wrap::after) {
      background-color: #2b2b2b;
    }
    :deep(.el-tabs__item.is-active) {
      font-size: 1.5rem;
      font-weight: bold;
    }
    :deep(.el-tabs__active-bar) {
      bottom: 0.5rem;
    }
  }
}
</style>
