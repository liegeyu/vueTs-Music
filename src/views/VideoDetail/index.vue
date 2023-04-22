<template>
  <div class="mvdetail-container">
    <div class="mvdetail-left">
      <LeadingTitle
        :title="viewType === 1 ? 'MV详情' : '视频详情'"
        :lead="true"
      />
      <div class="mv-box">
        <div class="mv">
          <video
            class="video-box"
            :src="
              viewType === 1 ? mvUrl?.url : videoUrl?.url ? videoUrl?.url : ''
            "
            autoplay
            controls
          />
        </div>
        <div class="mv-info">
          <div class="creator-info">
            <el-avatar
              :src="
                viewType === 1
                  ? mvDetail?.artists
                    ? mvDetail?.artists[0]?.img1v1Url
                    : ''
                  : videoDetail?.creator?.avatarUrl
              "
              :size="45"
            ></el-avatar>
            <span class="info-nickname">{{
              viewType === 1
                ? mvDetail?.artists
                  ? mvDetail?.artists[0]?.name
                  : ""
                : videoDetail?.creator?.nickname
            }}</span>
          </div>
          <h1 class="info-title">
            {{
              viewType === 1
                ? mvDetail.name
                  ? mvDetail.name
                  : ""
                : videoDetail?.title
            }}
          </h1>
          <div class="publish-info">
            <span
              >发布:
              {{
                viewType === 1
                  ? mvDetail.publishTime
                  : formatTimeStamp(videoDetail.publishTime)
              }}</span
            >
            <div
              class="info-tags"
              v-if="viewType === 1 && mvDetail.videoGroup?.length > 0"
            >
              <span>标签: </span>
              <div
                class="tag"
                v-for="item in mvDetail.videoGroup"
                :key="item.id"
              >
                {{ item.name }}
              </div>
            </div>
            <div
              class="info-tags"
              v-else-if="viewType === 0 && videoDetail.videoGroup?.length > 0"
            >
              <span>标签: </span>
              <div
                class="tag"
                v-for="item in videoDetail.videoGroup"
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
import { ref, toRefs, onMounted, watch, getCurrentInstance } from "vue";
import { useRoute } from "vue-router";
import { useStore } from "vuex";

import LeadingTitle from "@/components/common/LeadingTitle.vue";
import RelateAllVideoCard from "@/components/common/RelateAllVideoCard.vue";
import { formatTimeStamp } from "@/utils/formatNumber";

const route = useRoute();
const store = useStore();
const instance = getCurrentInstance();
const { mvDetail, mvUrl, videoDetail, videoUrl, relatedAllVideo } = toRefs(
  store.getters
);
let videoId = ref<string | string[]>(route.query.id);
let viewType = ref<number>(Number(route.query.type));

watch(
  () => [route.query.type, route.query.id],
  async (newVal) => {
    viewType.value = Number(newVal[0]);
    videoId.value = newVal[1];
    if (Number(newVal[0]) === 1) {
      await store.dispatch("videodetail/fetchMvdetail", {
        mvid: videoId.value,
      });
      await store.dispatch("videodetail/fetchMvUrl", { id: videoId.value });
    } else if (Number(newVal[0]) === 0) {
      await store.dispatch("videodetail/fetchVideoDetail", {
        id: videoId.value,
      });
      await store.dispatch("videodetail/fetchVideoUrl", {
        id: videoId.value,
      });
    }
    await store.dispatch("videodetail/fetchRelatedAllVideo", {
      id: videoId.value,
    });
  }
);

onMounted(async () => {
  if (Number(route.query.type) === 1) {
    await store.dispatch("videodetail/fetchMvdetail", { mvid: videoId.value });
    await store.dispatch("videodetail/fetchMvUrl", { id: videoId.value });
  } else if (Number(route.query.type) === 0) {
    await store.dispatch("videodetail/fetchVideoDetail", {
      id: videoId.value,
    });
    await store.dispatch("videodetail/fetchVideoUrl", { id: videoId.value });
  }
  await store.dispatch("videodetail/fetchRelatedAllVideo", {
    id: videoId.value,
  });
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
  }
}
</style>
