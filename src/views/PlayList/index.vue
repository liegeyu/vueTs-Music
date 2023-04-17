<template>
  <div class="playlist-container" v-if="loaded">
    <PlaylistInfo :playlist="playlist" />
    <div class="playlist-main" v-myLoading="loading.visible">
      <el-tabs v-model="tabValue">
        <el-tab-pane lazy label="歌曲列表" name="songlist">
          <SonglistData :songlist="songlist" />
        </el-tab-pane>
        <el-tab-pane lazy :label="`评论(${commentCount})`" name="comments">
          <Comment :playlistId="playlistId" />
        </el-tab-pane>
      </el-tabs>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, reactive, onMounted } from "vue";
import { useRoute } from "vue-router";

import PlaylistInfo from "./components/PlaylistInfo.vue";
import SonglistData from "./components/SonglistData.vue";
import Comment from "@/components/common/Comment.vue";
import {
  getPlayListDetail,
  getPlaylistTrackAll,
} from "@/service/modules/playlist";
import { PlayListDetail, SongList } from "@/types/playlist-types";
import { useLoading } from "@/hooks/useLoading";
const { loading, showLoading, hideLoading } = useLoading();

const route = useRoute();
let loaded = ref<boolean>(false);
const playlistId = ref<string | string[]>(route.query.id);
let tabValue = ref<string>("songlist");
let playlist = reactive<PlayListDetail>({} as PlayListDetail);
let commentCount = ref<number>(0);
let songlist = ref<SongList[]>([]);

onMounted(async () => {
  const detailRes = await getPlayListDetail({ id: playlistId.value });
  playlist = detailRes.playlist;
  loaded.value = true;
  showLoading();
  commentCount.value = playlist.commentCount;
  const listRes = await getPlaylistTrackAll({ id: playlistId.value });
  songlist.value = listRes.songs;
  hideLoading();
  console.log(playlist);
  console.log(songlist.value);
});
</script>

<style scoped lang="scss">
.playlist-container {
  width: 100%;

  .playlist-main {
    padding-left: 2rem;
    :deep(.el-tabs__header) {
      margin-bottom: 10px;
    }

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
