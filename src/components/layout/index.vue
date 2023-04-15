<template>
  <div class="app-wrapper">
    <div class="app-aside">
      <Menu />
    </div>
    <div class="app-container">
      <div class="app-header">
        <Header />
      </div>
      <div class="app-content bg-vice">
        <el-scrollbar>
          <div class="main-content">
            <router-view></router-view>
          </div>
        </el-scrollbar>
      </div>
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

<style lang="scss" scoped>
.app-wrapper {
  width: 100vw;
  height: 100vh;
  min-width: 1300px;
  display: flex;
  align-items: stretch;
  overflow: hidden;

  .app-aside {
    width: 16rem;
    height: 100vh;
  }

  .app-container {
    display: flex;
    flex-direction: column;
    flex: 1;

    .app-header {
      height: 4.5rem;
    }

    .app-content {
      overflow: hidden;
      flex: 1;

      .main-content {
        width: 100%;
        min-width: 1100px;
        // max-width: 1536px;
        margin-left: auto;
        margin-right: auto;
      }
    }

    .app-footer {
      height: 5.5rem;
    }
  }
}
</style>
