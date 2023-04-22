<template>
  <div class="mvdetail-container">
    <div class="mvdetail-left">
      <LeadingTitle title="视频详情" :lead="true" />
      <div class="mv-box">
        <div class="mv">
          <video class="video-box" :src="mvUrl?.url" autoplay controls />
        </div>
        <div class="mv-info">
          <div class="creator-info">
            <el-avatar
              :src="mvDetail?.artists ? mvDetail?.artists[0]?.img1v1Url : ''"
              :size="45"
            ></el-avatar>
            <span class="info-nickname">{{
              mvDetail?.artists ? mvDetail?.artists[0]?.name : ""
            }}</span>
          </div>
          <h1 class="info-title">{{ mvDetail.name ? mvDetail.name : "" }}</h1>
          <div class="publish-info">
            <span
              >发布:
              {{ mvDetail.publishTime ? mvDetail.publishTime : "" }}</span
            >
            <div class="info-tags" v-if="mvDetail.videoGroup?.length > 0">
              <span>标签: </span>
              <div
                class="tag"
                v-for="item in mvDetail.videoGroup"
                :key="item.id"
              >
                {{ item.name }}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="mvdetail-comment"></div>
    </div>
    <div class="mvdetail-right">
      <span class="right-title">相关推荐</span>
      <div class="recommend-box">
        <template v-for="(video, index) in relatedAllVideo" :key="index">
          <RelateAllVideoCard :video="video" />
        </template>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, toRefs, onMounted } from "vue";
import { useRoute } from "vue-router";
import { useStore } from "vuex";

import LeadingTitle from "@/components/common/LeadingTitle.vue";
import RelateAllVideoCard from "@/components/common/RelateAllVideoCard.vue";

const route = useRoute();
const store = useStore();
const { mvDetail, mvUrl, relatedAllVideo } = toRefs(store.getters);
const mvId = ref<string | string[]>(route.query.id);

onMounted(async () => {
  await store.dispatch("mvdetail/fetchMvdetail", { mvid: mvId.value });
  await store.dispatch("mvdetail/fetchMvUrl", { id: mvId.value });
  await store.dispatch("mvdetail/fetchRelatedAllVideo", { id: mvId.value });
});
</script>

<style lang="scss" scoped>
.mvdetail-container {
  padding: 0 2.5rem;
  display: flex;
  flex-direction: row;
  .mvdetail-left {
    flex: 1;
    padding-right: 3rem;
    .mv-box {
      .mv {
        .video-box {
          width: 100%;
          aspect-ratio: 16 / 9;
          height: auto;
        }
      }
      .mv-info {
        .creator-info {
          padding: 1rem 0;
          display: flex;
          align-items: center;
          color: #d5d5d5;
          .info-nickname {
            font-size: 1.2rem;
            margin-left: 1rem;
          }
        }
        .info-title {
          color: #d5d5d5;
          font-size: 1.8rem;
          padding: 0.4rem;
        }
        .publish-info {
          display: flex;
          align-items: center;
          padding: 0.5rem 0;
          span {
            color: #454f55;
          }
          .info-tags {
            display: flex;
            align-items: center;
            margin-left: 2rem;
            .tag {
              margin: 0 0.3rem;
              padding: 0.2rem 0.7rem;
              color: #d6d6d6;
              background-color: #323232;
              text-align: center;
              border-radius: 1rem;
            }
          }
        }
      }
    }
    .mvdetail-comment {
    }
  }
  .mvdetail-right {
    min-width: 300px;
    max-width: 420px;

    .right-title {
      color: #fff;
      font-size: 1.45rem;
      line-height: 1.75rem;
      padding: 1.45rem 0 0.75rem;
      font-weight: bold;
      display: flex;
      align-items: center;
      cursor: pointer;
    }

    .recommend-box {
    }
  }
}
</style>
