<template>
  <div style="display: inline-block">
    <div class="lead-title" @click="clickLead">
      <IconPark
        v-if="lead"
        style="display: flex; align-items: center"
        :icon="Left"
        :size="25"
        :stroke-width="2"
      />
      <span>{{ title }}</span>
      <IconPark
        v-if="!lead"
        style="display: flex; align-items: center"
        :icon="Right"
        :size="25"
        :stroke-width="2"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import { defineComponent, defineProps, PropType } from "vue";
import { Left, Right } from "@icon-park/vue-next";
import IconPark from "@/components/common/IconPark.vue";

interface Title {
  title: string;
}

defineProps({
  title: {
    type: String as PropType<Title["title"]>,
    default: "",
  },
  lead: {
    type: Boolean,
    default: false,
  },
});

// const clickLead = () => {
//   console.log("click lead");
// };
</script>

<style lang="scss" scoped>
.lead-title {
  color: #fff;
  font-size: 1.45rem;
  line-height: 1.75rem;
  padding: 1.45rem 0 0.75rem;
  font-weight: bold;
  display: flex;
  align-items: center;
  cursor: pointer;
}
</style>
