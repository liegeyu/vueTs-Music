<template>
  <div v-if="searchSuggest">
    <div
      class="suggest-container"
      v-for="(order, index) in searchSuggest.order"
      :key="index"
    >
      <div class="suggest-title">{{ getTitle(order) }}</div>

      <div v-if="order === 'songs'">
        <div
          class="suggest-item"
          v-for="item in searchSuggest.songs"
          :key="item.id"
        >
          <span class="item-left">{{ item.name }}</span>
          <span class="item-right">- {{ item.artists[0]?.name }}</span>
        </div>
      </div>

      <div v-if="order === 'albums'">
        <div
          class="suggest-item"
          v-for="item in searchSuggest.albums"
          :key="item.id"
        >
          <span class="item-left">{{ item.name }}</span>
          <span class="item-right">- {{ item.artist?.name }}</span>
        </div>
      </div>

      <div v-if="order === 'artists'">
        <div
          v-for="item in searchSuggest.artists"
          :key="item.id"
          class="suggest-item"
        >
          <el-avatar size="small" :src="item.img1v1Url" />
          <span class="item-right" style="color: #10b981">{{ item.name }}</span>
        </div>
      </div>

      <div v-if="order === 'playlists'">
        <div
          v-for="item in searchSuggest.playlists"
          :key="item.id"
          class="suggest-item"
        >
          <el-avatar size="small" :src="item.coverImgUrl" />
          <span class="item-right truncate flex-1 w-1" style="color: #10b981">
            {{ item.name }}
          </span>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from "vue";
import { useStore } from "vuex";
import { Search } from "@icon-park/vue-next";

const store = useStore();
const searchSuggest = computed(() => store.state.search.suggestData);

const getTitle = (name: string) => {
  switch (name) {
    case "songs":
      return "单曲";
    case "albums":
      return "专辑";
    case "artists":
      return "歌手";
    case "playlists":
      return "歌单";
    default:
      return name;
  }
};
</script>

<style lang="scss" scoped>
.suggest-container {
  .suggest-title {
    padding: 0.475rem 0.725rem 0.5rem;
  }

  .suggest-item {
    display: flex;
    flex-direction: row;
    align-items: center;
    font-size: 0.9rem;
    padding: 0.275rem 0.725rem;
    cursor: pointer;

    &:hover {
      background-color: #44403c;
    }

    .item-left {
      color: #10b981;
    }

    .item-right {
      padding-left: 0.55rem;
    }
  }
}
</style>
