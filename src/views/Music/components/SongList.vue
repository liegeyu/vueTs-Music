<template>
  <div class="songlist-container">
    <div class="songlist-first">
      <img src="" alt="" />
      <div class="first-des"></div>
    </div>
    <div class="songlist-nav">
      <div class="nav-btn">
        <el-popover
          ref="popover"
          placement="right"
          :width="200"
          trigger="focus"
        >
          <template #reference>
            <el-button class="m-2">全部视频</el-button>
          </template>
          <div class="popo-container">
            <div class="popo-header">全部视频</div>
            <template v-for="item in 20" :key="item">
              <div class="popo-more">{{ item }}</div>
            </template>
          </div>
        </el-popover>
      </div>
      <div class="nav-more">
        <template v-for="item in highQualityTag.slice(0, 10)" :key="item.id">
          <span>{{ item.name }}</span>
        </template>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { onMounted, ref } from "vue";

import { getPlaylistHotTag } from "@/service/modules/playlist";
import { PlaylistHotTag } from "@/types/playlist-types";

let highQualityTag = ref<PlaylistHotTag[]>([]);

onMounted(async () => {
  const highQualityTagRes = await getPlaylistHotTag();
  highQualityTag.value = highQualityTagRes.tags;
  console.log(highQualityTagRes.tags);
});
</script>

<style scoped lang="scss">
.songlist-container {
  max-width: 1150px;
  min-width: 1100px;
  margin: 0 auto;

  .songlist-first {
    height: 170px;
    width: 100%;
    border-radius: 0.6rem;
    background-color: aliceblue;
    display: flex;
  }

  .songlist-nav {
    display: flex;

    .nav-btn {
    }

    .nav-more {
      margin-left: auto;
    }
  }
}
</style>
