<template>
  <div class="menu-container bg-main">
    <el-scrollbar>
      <div
        class="menuItem-container"
        v-for="(menuItem, index) in menus"
        :key="index"
      >
        <div class="menuItem-title text-main">{{ menuItem.name }}</div>
        <div
          class="menuItem-main text-main"
          v-for="menu in menuItem.menus"
          :key="menu.key"
          :class="{ active: currentKey === menu.key }"
          @click="changeMenu(menu)"
        >
          <IconPark :icon="menu.icon" :theme="menu.theme" size="18" />
          <span class="menuItem-child-title">{{ menu.name }}</span>
        </div>
      </div>
    </el-scrollbar>
  </div>
</template>

<script setup lang="ts">
import { ref, reactive, watch, onMounted } from "vue";
import {
  useRoute,
  useRouter,
  RouteLocationNormalizedLoaded,
  Router,
} from "vue-router";
import { useStore, Store } from "vuex";

import IconPack from "@/components/common/IconPark.vue";

import { MenuItem, Menus } from "@/types/layout-types";

const route = useRoute();
const router = useRouter();
const store = useStore();
const currentKey = ref(route.meta.menu);
let menus: Menus[] = reactive([]);

watch(
  () => route.meta.menu,
  (menu) => {
    currentKey.value = menu;
  }
);

const changeMenu = async (menu: MenuItem) => {
  await router.push({ path: `/${menu.key}`, replace: true });
  currentKey.value = menu.key;
};

onMounted(() => {
  menus = store.getters.menus;
});
</script>

<style lang="scss" scoped>
.menu-container {
  height: 100vh;

  .menuItem-container {
    margin-top: 2.5rem;
    padding: 0 1.7rem;

    .menuItem-title {
      font-size: 1.25rem;
      padding: 0 1rem 0.5rem;
    }

    .menuItem-main {
      display: flex;
      cursor: pointer;
      align-items: center;
      border-radius: 0.25rem;
      padding: 0.5rem 1rem;
      margin-top: 0.4rem;
      font-size: 1.15rem;
      line-height: 1.25rem;

      .menuItem-child-title {
        margin-left: 0.25rem;
      }
    }

    .menuItem-main:hover {
      background-color: #44403c;
    }
  }
}
</style>
