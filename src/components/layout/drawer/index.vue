<template>
  <div class="drawer-right" ref="drawer">
    <div class="playerlist-header">
      <h2 style="padding: 1.6rem 0 1rem; color: #d7d7d7">当前播放</h2>
      <div class="header-info">
        <span class="all-number">总{{ "35" }}首</span>
        <span class="clear-btn" @click="clearPlayerList">清空列表</span>
      </div>
    </div>
    <div class="playerlist-body">
      <PlayerList :playerList="playerList" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, watchEffect, onMounted, onUnmounted } from "vue";
import { useStore } from "vuex";
import PlayerList from "./components/playerlist.vue";

const store = useStore();
const drawer = ref<HTMLElement | null>(null);
const showPlayerList = computed(() => store.getters.showPlayerList);
const playerList = computed(() => store.getters.playerList);
// 清空 playerlist, 初始化 footer 下所有内容
const clearPlayerList = () => {
  console.log("click clear");
  store.commit("player/initState");
};

const clickDrawerOutside = (e) => {
  const playlistBtn = document?.querySelector(".playerlist-btn");
  if (
    playlistBtn &&
    (playlistBtn === e.target || playlistBtn.contains(e.target))
  ) {
    return;
  }
  const drawerEl = drawer.value;
  if (drawerEl && !drawerEl.contains(e.target as HTMLElement)) {
    if (showPlayerList) {
      store.commit("player/toggleShowPlayerList");
    }
  }
};

onMounted(() => {
  document.addEventListener("click", clickDrawerOutside);
});

onUnmounted(() => {
  document.removeEventListener("click", clickDrawerOutside);
});
</script>

<style lang="scss" scoped>
.drawer-right {
  box-sizing: border-box;
  position: absolute;
  top: 4.5rem;
  right: 0;
  bottom: 6rem;
  width: 34.5rem;
  z-index: 100;
  background-color: #363636;
  .playerlist-header {
    padding: 0 2rem;
    border-bottom: 1px solid #5a5959;
    height: 85px;
    .header-info {
      display: flex;
      justify-content: space-between;
      font-size: 1.1rem;
      padding-bottom: 1rem;
      .all-number {
        color: #5e5e5e;
      }
      .clear-btn {
        color: #85b9e6;
        cursor: pointer;
      }
    }
  }
  .playerlist-body {
    position: absolute;
    top: 85px;
    bottom: 0;
    right: 0;
    left: 0;
    // overflow: scroll;
    overflow-x: hidden;
    &::-webkit-scrollbar {
      background-color: #2b2b2b;
      width: 8px;
    }
    &::-webkit-scrollbar-thumb {
      background: #5e5e5e;
      border-radius: 5px;
    }
  }
}
</style>
