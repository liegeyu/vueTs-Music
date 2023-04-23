<template>
  <div class="mvBox-item" @click="playMv(video)">
    <div class="item-cover">
      <img :src="video?.coverUrl" :alt="video?.title" />
      <span class="play-time">播放 {{ formatNumber(video?.playTime) }}</span>
      <span class="duration">{{ formatDurationMs(video?.durationms) }}</span>
    </div>
    <div class="item-des">
      <span class="video-title">{{ video?.title }}</span>
      <div class="video-creator">
        by
        <span>{{ video?.creator[0].userName }}</span>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, defineProps } from "vue";
import { useRouter } from "vue-router";
import { formatNumber, formatDurationMs } from "@/utils/formatNumber";

defineProps({
  video: {
    type: Object,
    defalut: () => {},
  },
});

const router = useRouter();

const playMv = (video) => {
  router.push({
    name: "videodetail",
    query: {
      type: 0,
      id: video.vid,
    },
  });
};
</script>

<style scoped lang="scss">
.mvBox-item:nth-child(1) {
  margin-top: 2rem;
}
.mvBox-item {
  width: 100%;
  display: flex;
  margin-bottom: 2rem;
  cursor: pointer;
  .item-cover {
    position: relative;
    img {
      width: 18rem;
      border-radius: 0.5rem;
    }
    .play-time {
      position: absolute;
      right: 5px;
      top: 5px;
      z-index: 10;
    }
    .duration {
      position: absolute;
      right: 8px;
      bottom: 8px;
      z-index: 10;
    }
  }
  .item-des {
    display: flex;
    flex-direction: column;
    // justify-content: space-around;
    padding-left: 1rem;
    .video-title {
      flex: 1;
      padding-top: 0.5rem;
      font-size: 1.1rem;
      color: #d5d5d5;
    }
    .video-creator {
      padding-bottom: 1rem;
      color: #6b6b6b;
    }
  }
}
</style>
