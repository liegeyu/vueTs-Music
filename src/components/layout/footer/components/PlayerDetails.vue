<template>
  <div class="detail-container">
    <img
      alt="default"
      class="music-pic"
      :src="music.al?.picUrl || defalutPic"
    />

    <div class="detail-info">
      <div class="detail-title">
        <span class="title-main">{{
          music?.name ? music.name : "开源云音乐"
        }}</span>
        <span class="title-vic"
          >- {{ music?.ar ? music?.ar[0].name : `hairyCloudMusic` }}</span
        >
      </div>
      <div class="detail-btn-box">
        <IconPark :icon="Like" size="20" :stroke-width="3" class="detail-btn" />
        <IconPark
          :icon="DownTwo"
          size="20"
          :stroke-width="3"
          class="detail-btn"
        />
        <IconPark
          :icon="MoreTwo"
          size="20"
          :stroke-width="3"
          class="detail-btn"
        />
        <el-badge :value="1000" :max="999" class="badge">
          <IconPark
            :icon="Comment"
            size="20"
            :stroke-width="3"
            class="detail-btn"
          />
        </el-badge>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from "vue";
import { useStore } from "vuex";
import { Like, DownTwo, MoreTwo, Comment } from "@icon-park/vue-next";
import defalutPic from "@/assets/imgs/defaulticon.png";

const store = useStore();

const music = computed(() => store.getters.music);
</script>

<style scoped lang="scss">
.detail-container {
  display: flex;
  color: #fff;
  .music-pic {
    width: 4rem;
    height: 4rem;
    cursor: pointer;
  }

  .detail-info {
    font-size: 1.25rem;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    margin-left: 0.75rem;
    margin-bottom: 0.5rem;

    .detail-title {
      // width: 100%;
      cursor: pointer;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
      margin-bottom: 0.5rem;
      .title-main {
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
        max-width: 27rem;
        display: inline-block;
      }

      .title-vic {
        color: #929cad;
      }
    }
    .detail-btn-box {
      display: flex;
      column-gap: 0.75rem;
      color: #929cad;
      .detail-btn {
        cursor: pointer;
        &:hover {
          color: #34d399;
        }
      }
      .badge {
        :deep(.el-badge__content) {
          color: #929cad;
          background-color: rgba(28, 25, 23, 0.9);
          transform: scale(0.7) translate(45px, -5px);
          border: none;
        }
      }
    }
  }
}
</style>
