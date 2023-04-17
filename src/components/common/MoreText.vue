<template>
  <div class="text-container">
    <div v-if="hasMore">
      <span v-if="showMore">{{ text }}</span>
      <span v-else>{{ text.substring(0, limit) }}...</span>
      <span class="more-btn" @click="showMore = !showMore">{{
        `[${showMore ? "收起" : "详情"}]`
      }}</span>
    </div>
    <div v-else>{{ text }}</div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, defineProps } from "vue";

const props = defineProps({
  text: {
    type: String,
    default: "",
  },
  limit: {
    type: Number,
    defalut: 90,
  },
});

let hasMore = ref<boolean>(false);
let showMore = ref<boolean>(false);

onMounted(() => {
  if (props.text && props.text.length > props.limit) {
    hasMore.value = true;
  }
});
</script>

<style scoped lang="scss">
.text-container {
  color: #8b8b85;
  .more-btn {
    cursor: pointer;
    color: #6d6d69;
    margin-left: 0.5rem;
    &:hover {
      color: #96968b;
    }
  }
}
</style>
