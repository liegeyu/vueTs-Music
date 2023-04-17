<template>
  <div class="comment-container" v-myLoading="loading.visible">
    <div class="comment-text">
      <el-input
        v-model="textValue"
        maxlength="140"
        show-word-limit
        type="textarea"
      />
    </div>
    <div class="comment-actions">
      <div class="actions-left">
        <IconPark
          :icon="Pound"
          :size="20"
          :stroke-width="4"
          class="icon-button"
        />
        <IconPark
          :icon="AtSign"
          :size="20"
          :stroke-width="4"
          class="icon-button"
        />
        <IconPark
          :icon="EmotionHappy"
          :size="20"
          :stroke-width="4"
          class="icon-button"
        />
      </div>
      <div class="actions-right">
        <div class="put-comment">
          <span>评论</span>
        </div>
      </div>
    </div>
    <div class="comment-main">
      <div class="hot-comment-wrapper">
        <h3 style="color: #cad5d5">精彩评论</h3>
        <template v-for="(item, index) in hotComments" :key="index">
          <CommentItem :commentDetail="item" />
        </template>
      </div>
      <div class="comment-wrapper">
        <h3 style="color: #cad5d5; margin-top: 2rem">最近评论</h3>
        <template v-for="(item, index) in comments" :key="index">
          <CommentItem :commentDetail="item" />
        </template>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, reactive, defineProps, onMounted } from "vue";

import CommentItem from "./CommentItem.vue";
import IconPark from "@/components/common/IconPark.vue";
import { Pound, AtSign, EmotionHappy } from "@icon-park/vue-next";
import { getCommentPlaylist } from "@/service/modules/comment";
import { Comments, HotComment } from "@/types/comment-types";
import { useLoading } from "@/hooks/useLoading";

const { loading, showLoading, hideLoading } = useLoading();
const props = defineProps({
  playlistId: {
    type: Number,
    defalut: null,
  },
});

let textValue = ref<string>("");
let comments = ref<Comments[]>([]);
let hotComments = ref<HotComment[]>([]);

onMounted(async () => {
  showLoading();
  const res = await getCommentPlaylist({ id: props.playlistId });
  hotComments.value = res.hotComments;
  comments.value = res.comments;
  hideLoading();
  console.log(hotComments.value);
});
</script>

<style scoped lang="scss">
.comment-container {
  padding-right: 2rem;

  .comment-text {
    :deep(.el-textarea__inner) {
      min-height: 80px !important;
      background-color: #3a3a3a;
      box-shadow: none;

      &:focus {
        box-shadow: none;
      }
    }
    :deep(.el-textarea .el-input__count) {
      background-color: #3a3a3a;
    }
  }

  .comment-actions {
    display: flex;
    align-items: center;
    margin: 0.5rem 0;
    .actions-left {
      flex: 1;
      .icon-button {
        color: #858585;
        &:hover {
          color: #cbcbcb;
        }
      }
    }
    .actions-right {
      margin-right: 2rem;
      border: 1px solid #4b4b4b;
      border-radius: 2rem;
      padding: 0.8rem 2rem;
      cursor: pointer;
      &:hover {
        background-color: #363636;
      }
      .put-comment {
        font-size: 1.1rem;
      }
    }
  }
}
</style>
