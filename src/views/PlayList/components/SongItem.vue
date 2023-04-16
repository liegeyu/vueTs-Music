<template>
  <div class="song-item">
    <div class="b-actions">
      <span>{{ index >= 9 ? index + 1 : `0${index + 1}` }}</span>
      <IconPark :icon="Like" :size="18" :stroke-width="2" class="action-btn" />
      <IconPark
        :icon="Download"
        :size="18"
        :stroke-width="2"
        class="action-btn"
      />
    </div>
    <div class="b-title">
      <span class="title-main text-ellipsis">{{ song.name }}</span>
      <span v-if="song.alia.length !== 0" class="title-vice text-ellipsis">{{
        `(${song?.alia[0]})`
      }}</span>
      <div class="mv-tag" v-if="song?.mv !== 0">
        <span>MV</span>
      </div>
    </div>
    <div class="b-singer">
      <span>{{ song.ar[0].name }}</span>
    </div>
    <div class="b-album text-ellipsis">
      <span>{{ song.al.name }}</span>
    </div>
    <div class="b-duration">
      <span>{{ song.dt }}</span>
    </div>
  </div>
</template>

<script setup lang="ts">
import { defineProps } from "vue";

import IconPark from "@/components/common/IconPark.vue";
import { Like, Download } from "@icon-park/vue-next";
defineProps({
  song: {
    type: Object,
    default: () => {},
  },
  index: {
    type: Number,
    default: 0,
  },
});
</script>

<style scoped lang="scss">
.song-item {
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 0.6rem 0;
  font-size: 1.1rem;

  cursor: default;
  &:nth-child(2n + 1) {
    background-color: #2f2f2f;
  }
  &:hover {
    background-color: #373737;
  }
  .b-actions {
    width: 6.5rem;
    display: flex;
    color: #565656;
    span {
      flex: 1;
    }
    .action-btn {
      cursor: pointer;
      &:hover {
        color: #cbd5d5;
      }
    }
  }
  .b-title {
    flex: 1 1 auto;
    color: #cbd5d5;
    display: flex;

    .title-main {
      max-width: 23rem;
    }
    .title-vice {
      color: #737373;
      margin-left: 0.5rem;
    }
    .mv-tag {
      margin-left: 0.5rem;
      font-size: 0.6rem;
      padding: 0.1rem 0.3rem;
      border: 1px solid #3bb98b;
      border-radius: 0.3rem;
      color: #3bb98b;
      cursor: pointer;
      &:hover {
        color: #42a07d;
        border-color: #42a07d;
      }
    }
  }
  .b-singer {
    width: 20%;
    color: #8d8d8d;
    span {
      cursor: pointer;
      &:hover {
        color: #cbd5d5;
      }
    }
  }
  .b-album {
    width: 30%;
    color: #8d8d8d;
    span {
      cursor: pointer;
      &:hover {
        color: #cbd5d5;
      }
    }
  }
  .b-duration {
    width: 10rem;
    color: #8d8d8d;
  }
}
</style>
