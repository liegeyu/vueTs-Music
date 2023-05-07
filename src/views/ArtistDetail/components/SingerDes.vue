<template>
  <div class="artist-desbox">
    <img :src="singerInfo?.avatar" :alt="singerInfo?.name" class="singer-pic" />
    <div class="singer-info">
      <span class="singer-main">{{ singerInfo.name }}</span>
      <span class="singer-vice">{{
        singerInfo?.alias
          ? singerInfo?.alias.join("; ") + singerInfo.transNames.join("; ")
          : ""
      }}</span>
      <div class="coll-btn" @click="dannyElfman">
        <IconPark :icon="FolderFocus" :size="20" style="margin: 0 5px 0 0" />
        <span>收藏</span>
      </div>
      <div class="singer-has">
        <span>单曲数：{{ singerInfo.musicSize }}</span>
        <span>专辑数：{{ singerInfo.albumSize }}</span>
        <span>MV数：{{ singerInfo.mvSize }}</span>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { defineProps } from "vue";

import { FolderFocus } from "@icon-park/vue-next";
import IconPark from "@/components/common/IconPark.vue";

const props = defineProps({
  singerInfo: {
    type: Object,
    defalut: {},
  },
});

const dannyElfman = () => {
  console.log(props.singerInfo);
};
</script>

<style scoped lang="scss">
.artist-desbox {
  display: flex;

  .singer-pic {
    width: 190px;
    height: 190px;
    border-radius: 1rem;
  }

  .singer-info {
    padding-left: 2rem;
    display: flex;
    flex-direction: column;
    color: #d5d5d5;
    .singer-main {
      font-size: 1.8rem;
      font-weight: 700;
    }
    .singer-vice {
      margin: 0.8rem 0;
      font-size: 1.1rem;
    }
    .coll-btn {
      border: 1px solid #4b4b4b;
      width: 70px;
      font-size: 1.2rem;
      text-align: center;
      padding: 0.6rem 1.2rem;
      border-radius: 1.8rem;
      cursor: pointer;

      &:hover {
        background-color: #363636;
      }
    }
    .singer-has {
      margin: 1.4rem 0;
      font-size: 1.1rem;

      span:first-child {
        margin-left: 0;
      }

      span {
        margin-left: 2rem;
      }
    }
  }
}
</style>
