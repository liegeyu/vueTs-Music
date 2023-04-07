<template>
  <div class="app-wrapper">
    <div class="app-aside">
      <Menu />
    </div>
    <div class="app-container">
      <div class="app-header">
        <Header />
      </div>
      <div class="app-content"></div>
      <div class="app-footer">
        <Footer />
      </div>
    </div>
    <Drawer />
  </div>
</template>

<script setup lang="ts">
import Header from "./header/index.vue";
import Menu from "./menu/index.vue";
import Footer from "./footer/index.vue";
import Drawer from "./drawer/index.vue";
</script>

<style lang="scss" scoped></style>
