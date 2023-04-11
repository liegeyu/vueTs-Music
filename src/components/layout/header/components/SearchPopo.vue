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
        v-model="inputValue"
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
        <div v-if="showHot">
          <div class="popover-title">热门搜索</div>
          <div
            class="popover-content"
            v-for="(item, index) in searchHot"
            :key="item.searchWord"
            @click="hotClick(item.searchWord)"
          >
            <div class="popo-left">
              <span>{{ index + 1 }}.</span>
              <span>{{ item.searchWord }}</span>
            </div>
            <div class="popo-right">{{ item.score }}</div>
          </div>
        </div>
        <div v-else>
          <SearchSuggest />
        </div>
      </el-scrollbar>
    </div>
  </el-popover>
</template>

<script setup lang="ts">
import { ref, computed, onMounted } from "vue";
import { useStore } from "vuex";
import { Search } from "@icon-park/vue-next";

import SearchSuggest from "./SearchSuggest.vue";
import { getSearchHot, getSearchHotSuggest } from "@/service/modules/search";
import { SearchHotData } from "@/types/search-types";

const store = useStore();
let showSearchView = ref<boolean>(false);
let showHot = ref<boolean>(true);
let inputValue = ref<string>("");
const searchValue = computed<string>(() => store.state.search.searchValue);

const searchInput = async () => {
  store.commit("search/setSearchValue", inputValue.value);
  if (!inputValue.value) {
    showHot.value = true;
    return;
  }
  showHot.value = false;
  store.dispatch("search/fetchSearchHotSuggest", inputValue.value);
  showSearchView.value = true;
};

const hotClick = async (key: string) => {
  inputValue.value = key;
  store.commit("search/setSearchValue", key);
  showHot.value = false;
  store.dispatch("search/fetchSearchHotSuggest", key);
  showSearchView.value = true;
};

const searchHot = ref<SearchHotData[]>([]);
onMounted(async () => {
  const res = await getSearchHot();
  searchHot.value = res.data;
});
</script>

<style lang="scss" scoped></style>
