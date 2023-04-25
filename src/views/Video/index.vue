<template>
  <div class="video-container">
    <div class="video-main">
      <el-tabs v-model="tabValue">
        <el-tab-pane lazy label="视频" name="videoBox">
          <div class="video-box">
            <div class="lead-popo">
              <div class="popo-btn" @click="clickGroupTag">
                <span>{{ currentGroup.name }} > </span>
              </div>
              <div class="popo-body" v-if="showGroupTag">
                <div class="popo-header">
                  <span>全部视频</span>
                </div>
                <div class="popo-list">
                  <div
                    class="group-item"
                    v-for="group in videoGroupList"
                    :key="group.id"
                    :class="currentGroup.id === group.id ? 'item-active' : ''"
                    @click="changeGroup(group)"
                  >
                    {{ group.name }}
                  </div>
                </div>
              </div>
            </div>
            <VideoList />
          </div>
        </el-tab-pane>
        <el-tab-pane lazy label="MV" name="mvBox">
          <MvBox />
        </el-tab-pane>
      </el-tabs>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from "vue";

import VideoList from "./components/VideoList.vue";
import MvBox from "./components/MvBox.vue";
import { VideoGroup } from "@/types/video-types";
import {
  getVideoGroupList,
  getVideoListByGroup,
} from "@/service/modules/video";

const popoGroup = ref<HTMLElement | null>(null);
let tabValue = ref<string>("videoBox");
let showGroupTag = ref<boolean>(false);
let videoGroupList = ref<VideoGroup[]>([]);
let currentGroup = ref<VideoGroup>({} as VideoGroup);

const clickGroupTag = () => {
  showGroupTag.value = !showGroupTag.value;
};

const changeGroup = (group) => {
  currentGroup.value = group;
  if (showGroupTag.value) {
    showGroupTag.value = false;
  }
};

onMounted(async () => {
  const videoGroupListRes = await getVideoGroupList();
  videoGroupList.value = videoGroupListRes.data;
  currentGroup.value = videoGroupListRes.data[0];
  console.log(currentGroup.value);
  const videoListByGroupRes = await getVideoListByGroup({
    id: currentGroup.value.id,
    cookie: sessionStorage.getItem("cookie"),
  });
  console.log(videoListByGroupRes);
});
</script>

<style lang="scss" scoped>
.video-container {
  .video-main {
    overflow: hidden;
    padding: 1rem 2rem;
    :deep(.el-tabs__header) {
      margin-bottom: 10px;
    }

    :deep(.el-tabs__item) {
      color: #d5d5d5;
      font-weight: bold;
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

    .lead-popo {
      max-width: 1250px;
      margin: 0 auto;
      position: relative;
      z-index: 1000;
      .popo-btn {
        text-align: center;
        display: inline-block;
        padding: 0.4rem 2.3rem;
        border: 1px solid #4b4b4b;
        border-radius: 2rem;
        cursor: pointer;
        &:hover {
          background-color: #363636;
        }
        span {
          color: #d5d5d5;
          font-size: 1.2rem;
        }
      }

      .popo-body {
        position: absolute;
        width: 650px;
        height: 410px;
        padding: 2rem 2rem 1rem;
        font-size: 1.1rem;
        color: #d5d5d5;
        background-color: #363636;
        top: 3.2rem;
        border-radius: 1rem;
        box-shadow: -1px -1px 10px #202020;

        .popo-header {
          padding: 0.5rem 0 1rem;
          border-bottom: 1px solid #4b4b4b;

          span {
            padding-left: 1.5rem;
          }
        }

        .popo-list {
          overflow: scroll;
          height: 350px;
          margin-top: 1rem;
          display: grid;
          grid-template-columns: auto auto auto auto auto auto;
          column-gap: 1rem;
          row-gap: 1rem;
          overflow-x: hidden;

          &::-webkit-scrollbar {
            background-color: #363636;
            width: 8px;
          }
          &::-webkit-scrollbar-thumb {
            background: #5e5e5e;
            border-radius: 5px;
          }

          .group-item {
            display: inline-block;
            text-align: center;
            padding: 0.8rem 0;
            border-radius: 2rem;

            &:hover {
              background-color: #404040;
              color: #34d399;
            }
          }

          .item-active {
            background-color: #316350;
          }
        }
      }
    }
  }
}
</style>
