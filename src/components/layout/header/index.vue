<template>
  <div class="header-container bg-main">
    <div class="headerBar-left">
      <IconPark
        :icon="Left"
        :size="iconSize"
        :stroke-width="2"
        class="icon-button"
        @click="$router.back()"
      />
      <IconPark
        :icon="Right"
        :size="iconSize"
        :stroke-width="2"
        class="icon-button"
        @click="$router.forward()"
      />
      <div class="search-bar">
        <SearchPopo />
      </div>
    </div>
    <div class="headerBar-right">
      <UserLogin />
      <IconPark
        :icon="Mail"
        :size="iconSize"
        :stroke-width="2"
        class="icon-button"
      />
      <IconPark
        :icon="Platte"
        :size="iconSize"
        :stroke-width="2"
        class="icon-button"
      />
      <IconPark
        :icon="HamburgerButton"
        :size="iconSize"
        :stroke-width="2"
        class="icon-button"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
// import { useRouter } from "vue-router";

import IconPark from "@/components/common/IconPark.vue";
import SearchPopo from "./components/SearchPopo.vue";
import UserLogin from "./components/UserLogin.vue";
import {
  Left,
  Right,
  Mail,
  Platte,
  HamburgerButton,
} from "@icon-park/vue-next";

// const router = useRouter();
const iconSize = 22;
</script>

<style lang="scss" scoped>
.header-container {
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;

  .headerBar-left {
    display: flex;
    align-items: center;
    padding-left: 1.25rem;

    .search-bar {
      margin-left: 0.5rem;
      font-size: 0.75rem;
      line-height: 1rem;

      :deep(.el-input__wrapper) {
        width: 235px;
        box-shadow: 0 0 0 0px
          var(--el-input-border-color, var(--el-border-color)) inset;
        cursor: default;
        border: 1px solid #56524d;
        border-radius: 2rem;
        background-color: #1e1e1f;
        transition: all 0.1s linear;

        &:hover {
          border: 1px solid #c0c4cc;
        }

        &:focus-within {
          border: 1px solid #059669;
        }
        .el-input__inner {
          color: #fff;
        }
      }
    }
  }

  .headerBar-right {
    display: flex;
    align-items: center;
    margin-right: 1.25rem;
  }
}
</style>
