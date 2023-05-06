<template>
  <div class="ranking-list">
    <div class="ranking-kind-title">官方榜</div>
    <template v-for="item in beforeTop" :key="item.id">
      <div class="before-toplist">
        <div class="before-left">
          <SongCard
            :id="item.id"
            :cardImg="item.coverImgUrl"
            :playCount="item.playCount"
          />
        </div>
        <div class="before-right">
          <div class="list-box">
            <div
              class="list-item"
              v-for="(track, index) in item.tracks"
              :key="index"
            >
              <span class="list-index">{{ index + 1 }}</span>
              <span class="list-first">{{ track.first }}</span>
              <span class="list-second">{{ track.second }}</span>
            </div>
          </div>
        </div>
      </div>
    </template>

    <div class="ranking-kind-title">全球榜</div>
    <div class="all-list">
      <template v-for="item in otherTop" :key="item.id">
        <div class="all-list-item">
          <SongCard
            :id="item.id"
            :cardImg="item.coverImgUrl"
            :cardName="item.name"
            :playCount="item.playCount"
          />
        </div>
      </template>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed, onMounted, ref } from "vue";

import SongCard from "@/components/common/SongCard.vue";
import { getToplistDetail } from "@/service/modules/playlist";
import { TopListDetailList } from "@/types/playlist-types";

let topList = ref<TopListDetailList[]>([]);
const beforeTop = computed(() => topList.value.slice(0, 4));
const otherTop = computed(() => topList.value.slice(4));

onMounted(async () => {
  const res = await getToplistDetail();
  topList.value = res.list;
});
</script>

<style scoped lang="scss">
.ranking-list {
  max-width: 1150px;
  min-width: 1100px;
  margin: 0 auto;

  .ranking-kind-title {
    font-weight: bold;
    font-size: 1.5rem;
    padding-bottom: 1.25rem;
  }

  .before-toplist {
    display: flex;
    margin-bottom: 3rem;

    .before-left {
      max-width: 120px;
      max-height: 120px;
    }

    .before-right {
      flex: 1;
      padding-left: 2rem;

      .list-box {
        display: flex;
        flex-direction: column;

        .list-item:nth-child(2n + 1) {
          background-color: #2f2f2f;
        }

        .list-item {
          padding: 0.8rem 0;
          display: flex;
          font-size: 1.2rem;

          &:hover {
            background-color: #333333;
          }

          .list-index {
            padding-left: 0.5rem;
            color: #34d399;
          }

          .list-first {
            margin-left: 1rem;
            color: #d5d5d5;
            cursor: pointer;
            &:hover {
              color: #fff;
            }
          }

          .list-second {
            margin-left: auto;
            padding-right: 1rem;
            color: #6e6e64;
            cursor: pointer;

            &:hover {
              color: #d5d5d5;
            }
          }
        }
      }
    }
  }

  .all-list {
    display: grid;
    grid-template-columns: repeat(5, minmax(0, 1fr));
    column-gap: 2rem;
    .all-list-item {
      margin-bottom: 1rem;
    }
  }
}
</style>
