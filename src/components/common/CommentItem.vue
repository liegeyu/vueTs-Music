<template>
  <div class="comment-content">
    <el-avatar :src="commentDetail.user.avatarUrl"></el-avatar>
    <div class="content-right">
      <div class="user-box">
        <span class="user-name">{{ `${commentDetail.user.nickname}：` }}</span>
        <div class="comment-text">{{ commentDetail.content }}</div>
      </div>
      <div class="comment-des">
        <span class="comment-time">{{
          `${commentDetail.timeStr} ${commentDetail.time}`
        }}</span>
        <div class="like-count">
          <IconPark
            :icon="ThumbsUp"
            :size="18"
            :stroke-width="4"
            class="icon-button"
          />
          <span>{{ commentDetail.likedCount }}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { defineProps } from "vue";

import IconPark from "@/components/common/IconPark.vue";
import { ThumbsUp } from "@icon-park/vue-next";
import { HotComment } from "@/types/comment-types";

defineProps({
  commentDetail: {
    type: Object,
    default: () => {},
  },
});
</script>

<style scoped lang="scss">
.comment-content {
  display: flex;
  padding: 1.5rem 0;
  border-bottom: 2px solid #363636;
  .content-right {
    display: flex;
    flex-direction: column;
    margin-left: 1.2rem;
    width: 100%;
    .user-box {
      display: flex;
      .user-name {
        color: #69acc0;
        cursor: pointer;
        &:hover {
          color: #7ecbe2;
        }
      }
      .comment-text {
        color: #d5d5d5;
      }
    }
    .comment-des {
      display: flex;
      align-items: flex-end;
      .comment-time {
        flex: 1;
        color: #6b6b6b;
      }
      .like-count,
      .icon-button {
        color: #7b8b8b;
      }
      .like-count {
        display: flex;
        align-items: center;
        &:hover {
          color: #d5d5d5;
        }
      }
      .icon-button {
        padding: 0;
        &:hover {
          color: #d5d5d5;
        }
      }
    }
  }
}
</style>
