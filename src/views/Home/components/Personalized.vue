<template>
  <div class="personal-container">
    <LeadingTitle title="你的专属歌单" />
    <div class="personal-card">
      <div
        class="card-item"
        v-for="item in cards"
        :key="item.id"
        @click="clickCard(item)"
      >
        <div class="card-cover">
          <div class="card-img">
            <img :src="item.picUrl" :alt="item.name" class="card-img" />
          </div>
          <div class="card-mask">
            <IconPark
              :icon="PlayOne"
              theme="filled"
              class="play-btn"
              :size="50"
            />
          </div>
          <div class="card-count">
            <IconPark :icon="Headset" :size="12" />
            <span style="margin-left: 0.2rem">1.1亿</span>
          </div>
        </div>
        <div class="card-title">{{ item.name }}</div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, onMounted } from "vue";
import { useRouter } from "vue-router";

import { Right, PlayOne, Headset } from "@icon-park/vue-next";
import IconPark from "@/components/common/IconPark.vue";
import LeadingTitle from "@/components/common/LeadingTitle.vue";
import { getPersonalized } from "@/service/modules/recommend";
import { Personalized } from "@/types/recommend-types";

const router = useRouter();
let cardsData = ref<Personalized[]>([]);

const cards = computed(() => {
  return cardsData.value.slice(0, 10);
});

const clickCard = (card) => {
  // 路由跳转 playlist
  router.push({
    name: "playlist",
    query: {
      id: card.id,
    },
  });
};

onMounted(async () => {
  const res = await getPersonalized();
  cardsData.value = res.result;
  console.log(cardsData.value.slice(0, 10));
});
</script>

<style lang="scss" scoped>
.personal-container {
  .personal-card {
    display: grid;
    grid-template-columns: repeat(5, minmax(0, 1fr));
    grid-gap: 10px;

    .card-item {
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
          bottom: 0;
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
    }
  }
}
</style>
