<template>
  <LeadingTitle title="推荐MV" />
  <div class="Mv-card">
    <div
      class="card-item"
      v-for="item in MvData"
      :key="item.id"
      @click="playMv(item)"
    >
      <div class="card-cover">
        <div class="card-img">
          <img :src="item.picUrl" :alt="item.name" class="card-img" />
        </div>
        <div class="card-mask">
          <div class="mask-description">
            <span>{{ item.copywriter }}</span>
          </div>
        </div>
      </div>
      <div class="card-title">
        <span class="title-main">{{ item.name }}</span>
        <span class="title-vice">{{ item.artistName }}</span>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from "vue";
import { useRouter } from "vue-router";

import LeadingTitle from "@/components/common/LeadingTitle.vue";
import { getPersonalizedMV } from "@/service/modules/recommend";
import { PersonalizedMv } from "@/types/recommend-types";

const router = useRouter();
let MvData = ref<PersonalizedMv[]>([]);

const playMv = (mv) => {
  // 路由跳转
  router.push({
    name: "mvdetail",
    query: {
      id: mv.id,
    },
  });
};

onMounted(async () => {
  const res = await getPersonalizedMV();
  MvData.value = res.result;
});
</script>

<style scoped lang="scss">
.Mv-card {
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  grid-gap: 10px;

  .card-item {
    .card-cover {
      position: relative;
      cursor: pointer;
      overflow: hidden;

      &:hover .card-mask {
        position: absolute;
        top: 0;
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
        top: -8rem;
        bottom: 0;
        left: 0;
        right: 0;
        color: #fff;
        height: 4rem;
        background-color: rgba(0, 0, 0, 0.3);
        transition: all 400ms ease-out;

        .mask-description {
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
        }
      }
    }

    .card-title {
      color: #e2e8f0;
      display: flex;
      flex-direction: column;
      margin: 0.5rem 0;
      .title-main {
        font-size: 1.2rem;
      }
      .title-vice {
        font-size: 0.75rem;
        margin-top: 0.3rem;
        color: #8b8b8b;
      }
    }
  }
}
</style>
