<template>
  <div class="app-wrapper">
    <div class="app-aside">
      <Menu />
    </div>
    <div class="app-container">
      <div class="app-header">
        <Header />
      </div>
      <div class="app-content bg-vice" ref="scrollBar">
        <!-- <el-scrollbar> -->
        <div class="main-content">
          <!-- <keep-alive v-if="$route.meta.keepAlive">
              <router-view></router-view>
            </keep-alive>
            <router-view v-else></router-view> -->
          <router-view v-slot="{ Component }">
            <keep-alive v-if="$route.meta.keepAlive">
              <component :is="Component"></component>
            </keep-alive>
            <component v-else :is="Component"></component>
          </router-view>
        </div>
        <!-- </el-scrollbar> -->
        <Drawer v-if="showPlayerList" />
      </div>
      <div class="app-footer">
        <Footer />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed, onMounted, ref, provide } from "vue";
import Header from "./header/index.vue";
import Menu from "./menu/index.vue";
import Footer from "./footer/index.vue";
import Drawer from "./drawer/index.vue";
import { useStore } from "vuex";

const store = useStore();
const scrollBar = ref<HTMLElement | null>(null);

const showPlayerList = computed(() => store.getters.showPlayerList);

onMounted(() => {
  store.commit("layout/setScrollBar", scrollBar.value);
});
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
    min-width: 200px;
    height: 100vh;
  }

  .app-container {
    display: flex;
    flex-direction: column;
    flex: 1;
    .app-header {
      height: 4.5rem;
      z-index: 1000;
    }

    .app-content {
      overflow: scroll;
      overflow-x: hidden;
      flex: 1;
      &::-webkit-scrollbar {
        background-color: #2b2b2b;
        width: 8px;
      }
      &::-webkit-scrollbar-thumb {
        background: #5e5e5e;
        border-radius: 5px;
      }

      .main-content {
        width: 100%;
        min-width: 1100px;
        // max-width: 1536px;
        margin-left: auto;
        margin-right: auto;
      }
    }

    .app-footer {
      height: 6rem;
      z-index: 1000;
    }
  }
}
</style>
