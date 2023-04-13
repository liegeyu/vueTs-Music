<template>
  <div class="main-container">
    <h1 class="main-title">推荐</h1>
    <SlideShow />
    <Personalized />
    <NewSong />
  </div>
</template>

<script setup lang="ts">
import SlideShow from "@/components/common/SlideShow.vue";
import Personalized from "./components/Personalized.vue";
import NewSong from "./components/NewSong.vue";
</script>

<style lang="scss" scoped>
.main-container {
  padding: 0 8.25rem;
  .main-title {
    color: #fff;
    font-weight: 700;
    font-size: 1.875rem;
    line-height: 2.25rem;
    padding: 2rem 0 1rem;
  }
}
</style>
