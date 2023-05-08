<template>
  <div class="singer-detailbox">
    <div class="singer-brief">
      <span class="name">{{ singerInfo?.name }}简介</span>
      <p class="bri">{{ briefDesc }}</p>
    </div>
    <div class="singer-introduction">
      <template v-for="(item, index) in introduction" :key="index">
        <span class="title">{{ item.ti }}</span>
        <p class="txt">{{ item.txt }}</p>
      </template>
    </div>
  </div>
</template>

<script setup lang="ts">
import { onMounted, ref, defineProps } from "vue";

import { getArtistDesc } from "@/service/modules/singer";
import { Introduction, ArtistDetailArtist } from "@/types/singer-types";

const props = defineProps({
  singerId: {
    type: String,
    defalut: -1,
  },
  singerInfo: {
    type: Object,
    defalut: {} as ArtistDetailArtist,
  },
});

const briefDesc = ref<string>("");
const introduction = ref<Introduction[]>([]);

onMounted(async () => {
  const artistDescRes = await getArtistDesc({ id: props.singerId });
  briefDesc.value = artistDescRes.briefDesc;
  introduction.value = artistDescRes.introduction;
});
</script>

<style scoped lang="scss">
.singer-detailbox {
  color: #868a89;
  .singer-brief {
    .name {
      color: #d3d4d5;
      font-size: 1.4rem;
      font-weight: bold;
      padding: 0.8rem 0;
      display: inline-block;
    }
    .bri {
      text-indent: 2rem;
      font-size: 1.2rem;
      line-height: 2.2rem;
      padding-left: 2rem;
    }
  }

  .singer-introduction {
    .title {
      color: #d3d4d5;
      font-size: 1.3rem;
      font-weight: bold;
      padding: 0.8rem 0;
      display: inline-block;
    }
    .txt {
      white-space: pre-wrap;
      padding-left: 2rem;
      font-size: 1.2rem;
      line-height: 2.2rem;
    }
  }
}
</style>
