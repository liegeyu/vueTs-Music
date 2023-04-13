<template>
  <div class="newsong-container">
    <LeadingTitle title="推荐新音乐" />
    <div class="newsong-card">
      <div class="card-item">
        <div class="card-cover">
          <div class="card-img"></div>
          <div class="card-mask"></div>
        </div>
        <div class="card-description">
          <div class="des-title"></div>
          <div class="des-vice"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import LeadingTitle from "@/components/common/LeadingTitle.vue";
</script>

<style scoped lang="scss">
.newsong-container {
  .newsong-card {
    display: grid;

    .card-item {
      display: grid;
    }
  }
}
</style>
