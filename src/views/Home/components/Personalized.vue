<template>
  <div class="personal-container">
    <LeadingTitle title="你的专属歌单" />
    <div class="personal-card">
      <div class="card-item" v-for="item in cards" :key="item.id">
        <SongCard
          :cardImg="item.picUrl"
          :cardName="item.name"
          :playCount="item.playCount"
          :id="item.id"
        />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, onMounted } from "vue";
import { useRouter } from "vue-router";

import { PlayOne, Headset } from "@icon-park/vue-next";
import IconPark from "@/components/common/IconPark.vue";
import LeadingTitle from "@/components/common/LeadingTitle.vue";
import SongCard from "@/components/common/SongCard.vue";
import { getPersonalized } from "@/service/modules/recommend";
import { Personalized } from "@/types/recommend-types";

const router = useRouter();
let cardsData = ref<Personalized[]>([]);

const cards = computed(() => {
  return cardsData.value.slice(0, 10);
});

onMounted(async () => {
  const res = await getPersonalized();
  cardsData.value = res.result;
});
</script>

<style lang="scss" scoped>
.personal-container {
  .personal-card {
    display: grid;
    grid-template-columns: repeat(5, minmax(0, 1fr));
    grid-gap: 10px;
  }
}
</style>
