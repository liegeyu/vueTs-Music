<template>
  <div class="artist-detailbox">
    <SingerDes :singer-info="singerInfo" />
    <div class="artist-nav">
      <el-tabs v-model="currentMenu" @tab-change="changeTab">
        <el-tab-pane
          v-for="(item, index) in menus"
          :key="index"
          lazy
          :label="item.label"
          :name="item.name"
        ></el-tab-pane>
      </el-tabs>
    </div>
    <div class="artist-body">
      <SingerAlbum v-if="currentMenu === 'collection'" />
      <SingerMv v-if="currentMenu === 'mv'" />
      <SingerDetail
        :singerId="route.query.singerId"
        :singer-info="singerInfo"
        v-if="currentMenu === 'artistdetail'"
      />
      <SingerSimilar
        :singerId="route.query.singerId"
        v-if="currentMenu === 'similarsinger'"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import { onMounted, reactive, ref, watch } from "vue";
import { useRoute } from "vue-router";

import SingerDes from "./components/SingerDes.vue";
import SingerDetail from "./components/SingerDetail.vue";
import SingerAlbum from "./components/SingerAlbum.vue";
import SingerMv from "./components/SingerMv.vue";
import SingerSimilar from "./components/SingerSimilar.vue";
import { getArtistDetail } from "@/service/modules/singer";
import { ArtistDetailArtist } from "@/types/singer-types";
import { useArtistMgr } from "./ArtistMgr";
const { menus } = useArtistMgr();
const route = useRoute();

let currentMenu = ref<string>("collection");
let singerInfo = ref<ArtistDetailArtist>({} as ArtistDetailArtist);

const changeTab = (newTab) => {
  currentMenu.value = newTab;
};

watch(
  () => route.query.singerId,
  async (newId) => {
    const singerInfoRes = await getArtistDetail({ id: newId });
    singerInfo.value = singerInfoRes.data.artist;
    currentMenu.value = "collection";
  }
);

onMounted(async () => {
  const singerInfoRes = await getArtistDetail({ id: route.query.singerId });
  singerInfo.value = singerInfoRes.data.artist;
});
</script>

<style scoped lang="scss">
.artist-detailbox {
  padding: 2rem;

  .artist-nav {
    margin-top: 1rem;

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

  .artist-body {
  }
}
</style>
