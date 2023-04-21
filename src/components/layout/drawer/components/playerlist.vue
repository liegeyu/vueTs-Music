<template>
  <div class="playerlist-container">
    <div
      class="playerlist-item"
      v-for="item in playerList"
      :key="item.id"
      @dblclick="playSong(item)"
    >
      <div class="b-title">
        <div class="title-box">
          <span class="title-main text-ellipsis">{{ item.name }}</span>
          <span
            v-if="item.alia.length !== 0"
            class="title-vice text-ellipsis"
            >{{ `(${item?.alia[0]})` }}</span
          >
        </div>
        <div class="mv-tag" v-if="item?.mv !== 0">
          <span>MV</span>
        </div>
      </div>
      <div class="b-singer">
        <span>{{ item.ar[0].name }}</span>
      </div>
      <div class="b-duration">
        <span>{{ formatDuration(item.dt / 1000) }}</span>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { defineProps } from "vue";
import { useStore } from "vuex";
import { Song } from "@/types/player-types";
import { formatDuration } from "@/utils/formatNumber";

const props = defineProps({
  playerList: {
    type: Object,
    defalut: {} as Song[],
  },
});

const store = useStore();

const playSong = (song) => {
  store.dispatch("player/playMusic", { id: song.id });
  // 将歌单歌曲存入 playerList
  const songListId = store.getters.songListId;
  const playerListId = store.getters.playerListId;
  if (songListId !== playerListId) {
    store.commit("player/setPlayerListId", songListId);
    store.commit("player/setPlayerList", store.getters.songlist);
    store.dispatch("player/initRandomSongIndexArr");
  }
};
</script>

<style scoped lang="scss">
.playerlist-container {
  .playerlist-item {
    display: flex;
    padding: 0.6rem 1.5rem;
    font-size: 1.05rem;
    &:nth-child(2n) {
      background-color: #3a3a3a;
    }
    &:nth-child(2n + 1) {
      background-color: #363636;
    }
    &:hover {
      background-color: #3e3e3e;
    }
    .b-title {
      flex: 1 1 auto;
      color: #cbd5d5;
      display: flex;
      .title-box {
        max-width: 13rem;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
        .title-main {
        }
        .title-vice {
          color: #737373;
          margin-left: 0.5rem;
        }
      }
      .mv-tag {
        margin-left: 0.2rem;
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
      width: 23%;
      color: #8d8d8d;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
      span {
        cursor: pointer;
        &:hover {
          color: #cbd5d5;
        }
      }
    }
    .b-duration {
      width: 6rem;
      padding-right: 1rem;
      color: #8d8d8d;
      display: flex;
      justify-content: flex-end;
    }
  }
}
</style>
