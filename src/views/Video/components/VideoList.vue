<template>
  <div class="videoList-container">
    <template v-for="(item, index) in videoGroupList" :key="index">
      <div class="video-item">
        <img
          class="video-img"
          :src="type === 'video' ? item.data.coverUrl : item.cover"
          :alt="type === 'video' ? item.data.title : item.name"
          @click="clickVideo(item)"
        />
        <div class="img-des">
          <span class="des-times">{{
            type === "video"
              ? formatNumber(item.data.playTime)
              : formatNumber(item.playCount)
          }}</span>
          <span class="des-duration">{{
            type === "video"
              ? formatDurationMs(item.data.durationms)
              : formatDuration(item.duration)
          }}</span>
        </div>
        <div class="video-des">
          <p class="video-title">
            {{ type === "video" ? item.data.title : item.name }}
          </p>
          <p class="video-creator">
            by
            {{
              type === "video"
                ? item.data.creator.nickname
                : item?.artists[0]?.name
            }}
          </p>
        </div>
      </div>
    </template>
  </div>
</template>

<script setup lang="ts">
import { onMounted, defineProps } from "vue";
import { useRouter } from "vue-router";

import {
  formatDuration,
  formatDurationMs,
  formatNumber,
} from "@/utils/formatNumber.ts";

const props = defineProps({
  videoGroupList: {
    type: Array,
    defalut: [],
  },
  type: {
    type: String,
    defalut: "video",
  },
});

const router = useRouter();

const clickVideo = (video) => {
  if (props.type === "video") {
    router.push({
      name: "videodetail",
      query: {
        type: 0,
        id: video.data.vid,
      },
    });
  } else {
    router.push({
      name: "videodetail",
      query: {
        type: 1,
        id: video.id,
      },
    });
  }
};

onMounted(async () => {});
</script>

<style scoped lang="scss">
.videoList-container {
  max-width: 1150px;
  min-width: 1100px;
  margin: 2rem auto 0;
  display: grid;
  grid-template-columns: auto auto auto auto;
  column-gap: 2rem;
  .video-item {
    .video-img {
      width: 100%;
      height: 150px;
      border-radius: 1rem;
      cursor: pointer;
    }

    .img-des {
      position: relative;
      z-index: 10;
      .des-times {
        position: absolute;
        top: -145px;
        right: 10px;
      }

      .des-duration {
        position: absolute;
        right: 10px;
        bottom: 5px;
      }
    }

    .video-des {
      width: 100%;
      display: flex;
      flex-direction: column;
      .video-title {
        display: inline-block;
        max-width: 20rem;
        color: #d5d5d5;
        padding: 0.5rem 0;
        cursor: pointer;
      }

      .video-creator {
        display: inline-block;
        color: #555555;
        padding-bottom: 0.5rem;
        cursor: pointer;
      }
    }
  }
}
</style>
