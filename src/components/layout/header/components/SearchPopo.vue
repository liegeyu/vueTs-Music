<template>
  <el-popover
    popper-class="popper-container"
    width="200px"
    trigger="click"
    :visible="showSearchView"
  >
    <template #reference>
      <el-input
        class="inputDeep"
        v-model="searchValue"
        clearable
        placeholder="搜索音乐、MV、歌单"
        :prefix-icon="Search"
        @input="searchInput"
        @focus="showSearchView = true"
        @focusout="showSearchView = false"
      />
    </template>
    <div class="popper-card">
      <el-scrollbar>
        <div>
          <div class="popover-title">热门搜索</div>
          <div class="popover-content">
            <div class="popo-left">
              <span>1.</span>
              <span>马思琪</span>
            </div>
            <div class="popo-right">1000</div>
          </div>
        </div>
      </el-scrollbar>
    </div>
  </el-popover>
</template>

<script setup lang="ts">
import { ref, onMounted, Ref, defineComponent } from "vue";
import { Search } from "@icon-park/vue-next";
import { getSearchHot } from "@/service/modules/search";

let showSearchView: Ref<boolean> = ref(false);
let searchValue: Ref<string> = ref("");

const searchInput = () => {};

onMounted(async () => {
  const res = await getSearchHot();
  console.log(res.data);
});
</script>

<style lang="scss" scoped></style>
