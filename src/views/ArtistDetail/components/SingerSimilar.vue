<template>
  <div class="singer-similarbox">
    <div
      class="singer-item"
      @click="clickSinger(singer)"
      v-for="singer in simiArtist"
      :key="singer.id"
    >
      <img class="singer-pic" :src="singer.img1v1Url" :alt="singer.img1v1Id" />
      <span>{{ singer.name }}</span>
    </div>
  </div>
</template>

<script setup lang="ts">
import { onMounted, ref, defineProps } from "vue";
import { useRoute, useRouter } from "vue-router";

import { getSimilarArtist } from "@/service/modules/singer";
import { Artist } from "@/types/singer-types";

const router = useRouter();
const props = defineProps({
  singerId: {
    type: String,
    defalut: -1,
  },
});

let simiArtist = ref<Artist[]>([]);

const clickSinger = (singer) => {
  router.replace({
    path: "/artistDetail",
    query: {
      singerId: singer.id,
    },
  });
};

onMounted(async () => {
  const simiArtistRes = await getSimilarArtist({
    id: props.singerId,
    cookie: sessionStorage.getItem("cookie"),
  });
  simiArtist.value = simiArtistRes.artists;
});
</script>

<style scoped lang="scss">
.singer-similarbox {
  display: grid;
  grid-template-columns: repeat(5, minmax(0, 1fr));
  column-gap: 10px;

  .singer-item {
    display: flex;
    flex-direction: column;
    cursor: pointer;

    .singer-pic {
      min-width: 220px;
      min-height: 220px;
      border-radius: 1rem;
    }

    span {
      font-size: 1.1rem;
      margin: 1rem 0 1.5rem;
      color: #d5d5d5;
    }
  }
}
</style>
