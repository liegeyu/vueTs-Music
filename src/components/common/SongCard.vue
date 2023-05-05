<template>
  <div class="card-box">
    <div class="card-cover" @click="clickCard">
      <div class="card-img">
        <img :src="cardImg" :alt="cardName" class="card-img" />
      </div>
      <div class="card-mask">
        <IconPark :icon="PlayOne" theme="filled" class="play-btn" :size="50" />
      </div>
      <div class="card-count">
        <IconPark :icon="Headset" :size="12" />
        <span style="margin-left: 0.2rem">{{ formatNumber(playCount) }}</span>
      </div>
    </div>
    <div class="card-title">{{ cardName }}</div>
  </div>
</template>

<script setup lang="ts">
import { defineProps } from "vue";
import { useRouter } from "vue-router";
import { formatNumber } from "@/utils/formatNumber";
import { PlayOne, Headset } from "@icon-park/vue-next";

const router = useRouter();

const props = defineProps({
  id: {
    type: Number,
    defalut: 0,
  },
  card: {
    type: Object,
    defalut: () => {},
  },
  showCount: {
    type: Boolean,
    defalut: true,
  },
  cardImg: {
    type: String,
    defalut: "",
  },
  cardName: {
    type: String,
    defalut: "",
  },
  playCount: {
    type: Number,
    defalut: 0,
  },
});

const clickCard = () => {
  // 路由跳转 playlist
  router.push({
    name: "playlist",
    query: {
      id: props.id,
    },
  });
};
</script>

<style scoped lang="scss">
.card-cover {
  position: relative;
  cursor: pointer;
  overflow: hidden;

  &:hover {
    transform: translateY(-0.25rem);
    transition: all 200ms ease;
  }

  &:hover .card-mask {
    position: absolute;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: rgba(0, 0, 0, 0.3);
  }

  .card-img {
    position: relative;
    border-radius: 0.5rem;
    width: 100%;
    height: 100%;
  }

  .card-mask {
    position: absolute;
    display: flex;
    justify-content: center;
    align-items: center;
    top: 0;
    bottom: 0.25rem;
    left: 0;
    right: 0;
    color: #fff;
    background-color: rgba(0, 0, 0, 0);
    display: none;
    transition: all 1000ms ease-in;

    .play-btn:hover {
      color: #2dd4bf;
      opacity: 1;
      transition: all 200ms ease-in;
    }
  }
}

.card-cover:hover .card-count {
  opacity: 0;
}

.card-title {
  color: #e2e8f0;
  font-size: 0.75rem;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  margin-top: 0.5rem;

  &:hover {
    color: #ffffff;
    cursor: pointer;
  }
}
.card-count {
  position: absolute;
  bottom: 0.45rem;
  right: 0.65rem;
  color: #e2e8f0;
  background-color: #201d18;
  padding: 0 0.5rem;
  border-radius: 9999px;
  transition: all 100ms ease-in;
}
</style>
