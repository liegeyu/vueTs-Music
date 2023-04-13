<template>
  <div class="lead-title">
    <sapn>{{ title }}</sapn>
    <IconPark
      style="display: flex; align-items: center"
      :icon="Right"
      :size="25"
      :stroke-width="2"
    />
  </div>
</template>

<script setup lang="ts">
import { defineComponent, defineProps, PropType } from "vue";
import { Right } from "@icon-park/vue-next";
import IconPark from "@/components/common/IconPark.vue";

interface Title {
  title: string;
}

defineProps({
  title: {
    type: String as PropType<Title["title"]>,
    default: "",
  },
});
</script>

<style lang="scss" scoped>
.lead-title {
  color: #fff;
  font-size: 1.45rem;
  line-height: 1.75rem;
  padding: 1.45rem 0 0.75rem;
  display: flex;
  align-items: center;
  cursor: pointer;
}
</style>
