<template>
  <div class="music-container">
    <div class="music-main">
      <el-tabs v-model="currentMenu" @tab-change="changeTab">
        <el-tab-pane
          v-for="(item, index) in menus"
          :key="index"
          lazy
          :label="item.label"
          :name="item.name"
        ></el-tab-pane>
      </el-tabs>
    </div>
    <router-view></router-view>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, computed, reactive } from "vue";

import { useMusicMgr } from "./MusicMgr";
const { menus, currentMenu, changeTab } = useMusicMgr();
</script>

<style lang="scss" scoped>
.music-container {
  .music-main {
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
  }
}
</style>
