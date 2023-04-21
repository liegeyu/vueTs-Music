<template>
  <div class="drawer-right" ref="drawer"></div>
</template>

<script setup lang="ts">
import { ref, computed, watchEffect, onMounted, onUnmounted } from "vue";
import { useStore } from "vuex";

const store = useStore();
const drawer = ref<HTMLElement | null>(null);
const showPlayerList = computed(() => store.getters.showPlayerList);

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
  position: absolute;
  top: 4.5rem;
  right: 0;
  bottom: 5rem;
  width: 34.5rem;
  z-index: 100;
  background-color: #363636;
}
</style>
