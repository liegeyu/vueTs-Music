<template>
  <div class="playlist-info">
    <img
      class="playlist-img"
      :src="playlist.coverImgUrl"
      :alt="playlist.name"
    />
    <div class="playlist-detail">
      <div class="detail-title">
        <span class="title-tag">歌单</span>
        <h1 class="title-main">{{ playlist.name }}</h1>
      </div>
      <div class="creator-info">
        <el-avatar :src="playlist.creator.avatarUrl" :size="27"></el-avatar>
        <span class="creator-name">{{ playlist.creator.nickname }}</span>
        <span class="create-time">{{ playlist.createTime }}</span>
      </div>
      <div class="playlist-actions">
        <div class="play-allbtn">
          <!-- 图标 -->
          <IconPark
            :icon="Play"
            :size="20"
            :stroke-width="2"
            class="icon-button"
          />
          <span>播放全部</span>
        </div>
        <div class="collect-btn">
          <!-- 图标 -->
          <IconPark
            :icon="Add"
            :size="20"
            :stroke-width="2"
            class="icon-button"
          />
          <span>收藏</span>
        </div>
        <div class="more-btn"></div>
      </div>
      <div class="playlist-tags">
        <span class="tags-header">标签：</span>
        <div class="tags-main">伤感 / 榜单</div>
      </div>
      <div class="playlist-description">
        <span class="des-header">简介：</span>
        <MoreText :text="playlist.description" :limit="90" />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { defineProps } from "vue";
import IconPark from "@/components/common/IconPark.vue";
import MoreText from "@/components/common/MoreText.vue";
import { PlayListDetail } from "@/types/playlist-types";
import { Play, Add } from "@icon-park/vue-next";

defineProps({
  playlist: {
    type: Object,
  },
});
</script>

<style scoped lang="scss">
.playlist-info {
  display: flex;
  padding: 2.5rem;
  .playlist-img {
    width: 15rem;
    height: 15rem;
    border-radius: 0.75rem;
  }
  .playlist-detail {
    display: flex;
    flex-direction: column;
    padding-left: 2rem;
    // row-gap: 1rem;
    .detail-title {
      display: flex;
      align-items: center;
      .title-tag {
        color: #34d399;
        padding: 0.25rem 0.5rem;
        border: 1px solid #34d399;
        border-radius: 0.5rem;
      }
      .title-main {
        display: inline-block;
        padding-left: 0.7rem;
      }
    }
    .creator-info {
      display: flex;
      align-items: center;
      padding: 0.9rem 0;
      .creator-name {
        color: #85b9e6;
        cursor: pointer;
        margin-left: 0.8rem;
      }
      .create-time {
        color: #72858b;
        margin-left: 0.8rem;
      }
    }
    .playlist-actions {
      display: flex;
      column-gap: 2rem;
      font-size: 1.3rem;
      .play-allbtn,
      .collect-btn {
        display: flex;
        align-items: center;
        background-color: #34d399;
        padding: 0 1.5rem;
        border-radius: 2rem;
        cursor: pointer;
      }
      .collect-btn {
        background-color: #2b2b2b;
        border: 1px solid #72858b;
      }
      .more-btn {
      }
    }
    .playlist-tags {
      display: flex;
      color: #d5d5d5;
      padding: 0.5rem 0;
      .tags-header {
        font-size: 1.1rem;
      }
      .tags-main {
        color: #85b9e6;
      }
    }
    .playlist-description {
      display: flex;
      color: #d5d5d5;

      .des-header {
        font-size: 1.1rem;
        min-width: 3.5rem;
      }
    }
  }
}
</style>
