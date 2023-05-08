<template>
  <div class="singer-mv" v-myLoading="loading.visible">
    <VideoList type="artMv" :videoGroupList="singerMvs" />
  </div>
</template>

<script setup lang="ts">
import { onMounted, ref, defineProps } from "vue";

import { getArtistMvs } from "@/service/modules/singer";
import { ArtistMv } from "@/types/singer-types";
import VideoList from "@/components/common/VideoList.vue";
import { useLoading } from "@/hooks/useLoading";

const { loading, hideLoading, showLoading } = useLoading();
const props = defineProps({
  singerId: {
    type: String,
    defalut: -1,
  },
});

let singerMvs = ref<ArtistMv[]>([]);

onMounted(async () => {
  showLoading();
  const artistMvsRes = await getArtistMvs({ id: props.singerId });
  singerMvs.value = artistMvsRes.mvs;
  hideLoading();
});
</script>

<style scoped lang="scss"></style>
