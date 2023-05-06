<template>
  <div class="singerlist-container">
    <div class="singerlist-kinds">
      <div
        v-for="option in singerOptions"
        :key="option.key"
        class="flex text-xs mb-5"
      >
        <div class="flex-shrink-0 text-slate-400">{{ option.name }}：</div>
        <div class="ml-3">
          <el-space wrap :size="10" :spacer="spacer">
            <div
              type="text"
              class="hover-text px-1 py-0.5"
              :class="{
                active:
                  (item.key === pageData.type && option.key === 'type') ||
                  (item.key === pageData.area && option.key === 'area') ||
                  (item.key === pageData.initial && option.key === 'initial'),
              }"
              v-for="(item, index) in option.list"
              :key="index"
              @click="optionChange(option.key, item.key)"
            >
              {{ item.name }}
            </div>
          </el-space>
        </div>
      </div>
    </div>
    <div class="singerlist-body"></div>
  </div>
</template>

<script setup lang="ts">
import { onMounted } from "vue";

import { useMusicMgr } from "../MusicMgr";
const { singerOptions } = useMusicMgr();

onMounted(() => {});
</script>

<style scoped lang="scss"></style>
