<template>
  <component
    :is="icon"
    :theme="theme"
    :size="size"
    :spin="spin"
    :fill="fill"
    :strokeLinecap="strokeLinecap"
    :strokeLinejoin="strokeLinejoin"
    :strokeWidth="strokeWidth"
  ></component>
</template>

<script setup lang="ts">
import { defineComponent, defineProps } from "vue";
import type { Icon } from "@icon-park/vue-next/lib/runtime";

interface MyIconPark {
  icon: Icon;
  theme?: "outline" | "filled" | "two-tone" | "multi-color";
  size?: number | string;
  spin?: boolean;
  fill?: string | string[];
  strokeLinecap?: "butt" | "round" | "square";
  strokeLinejoin?: "miter" | "round" | "bevel";
  strokeWidth?: number;
}

const props = defineProps<MyIconPark>();
</script>
