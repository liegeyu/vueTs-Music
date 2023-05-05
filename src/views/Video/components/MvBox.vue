<template>
  <div class="mv-container">
    <div class="mvbox-header">
      <div class="area-box">
        <div class="area-line">
          <span style="color: #d5d5d5">地区：</span>
          <template v-for="(item, index) in areas" :key="index">
            <div class="area-item" @click="changeArea(item)">
              <span :class="item === selectArea ? 'is-active' : ''">{{
                item
              }}</span>
            </div>
          </template>
        </div>
        <div class="area-line">
          <span style="color: #d5d5d5">类型：</span>
          <template v-for="(item, index) in kinds" :key="index">
            <div class="area-item" @click="changeKinds(item)">
              <span :class="item === selectKind ? 'is-active' : ''">{{
                item
              }}</span>
            </div>
          </template>
        </div>
        <div class="area-line">
          <span style="color: #d5d5d5">排序：</span>
          <template v-for="(item, index) in orders" :key="index">
            <div class="area-item" @click="changeOrders(item)">
              <span :class="item === selectOrder ? 'is-active' : ''">{{
                item
              }}</span>
            </div>
          </template>
        </div>
      </div>
    </div>
    <div class="mvbox-body" v-myLoading="loading.visible">
      <VideoList type="mv" :videoGroupList="mvData" />
      <div class="pagination">
        <el-pagination
          small
          background
          v-model:current-page="mvPageNum"
          layout="prev, pager, next"
          :total="mvTotal"
          :page-size="48"
          @current-change="changePage"
        />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { onMounted, ref, toRefs, computed } from "vue";
import { useStore } from "vuex";

import VideoList from "./VideoList.vue";
import { useLoading } from "@/hooks/useLoading";

const store = useStore();
const { loading, showLoading, hideLoading } = useLoading();
const {
  selectArea,
  selectKind,
  selectOrder,
  areas,
  kinds,
  orders,
  mvTotal,
  mvData,
} = toRefs(store.getters);

let pageNum = ref<number>(1);

const mvPageNum = computed({
  get: () => {
    return store.getters.mvPageNum;
  },
  set: (val) => {
    changePage(val);
  },
});

const changePage = async (newPage) => {
  pageNum.value = newPage;
  showLoading();
  store.commit("video/setMvPageNum", pageNum.value);
  store.commit("video/setMvData", []);
  fetchStoreMvAll();
  hideLoading();
};

const changeArea = (area) => {
  showLoading();
  store.commit("video/setSelectArea", area);
  store.commit("video/setMvPageNum", 1);
  store.commit("video/setMvData", []);
  fetchStoreMvAll();
  hideLoading();
};

const changeKinds = (kind) => {
  showLoading();
  store.commit("video/setSelectKind", kind);
  store.commit("video/setMvPageNum", 1);
  store.commit("video/setMvData", []);
  fetchStoreMvAll();
  hideLoading();
};

const changeOrders = (order) => {
  showLoading();
  store.commit("video/setSelectOrder", order);
  store.commit("video/setMvPageNum", 1);
  store.commit("video/setMvData", []);
  fetchStoreMvAll();
  hideLoading();
};

const fetchStoreMvAll = () => {
  store.dispatch("video/fetchMvAll", {
    area: selectArea.value,
    type: selectKind.value,
    order: selectOrder.value,
    cookie: sessionStorage.getItem("cookie"),
    limit: 48,
    offset: (mvPageNum.value - 1) * 48,
  });
};

onMounted(() => {
  showLoading();
  fetchStoreMvAll();
  hideLoading();
});
</script>

<style scoped lang="scss">
.mv-container {
  max-width: 1150px;
  min-width: 1100px;
  margin: 1rem auto 0;
  .mvbox-header {
    .area-box {
      .area-line {
        display: flex;
        margin: 1rem 0;
        .area-item {
          width: 80px;
          text-align: center;
          border-right: 2px solid #3d3d3d;

          &:last-child {
            border: none;
          }

          span {
            color: #8b8b8b;
            padding: 0.2rem 0.8rem;
            border-radius: 1rem;
            cursor: pointer;
            &:hover {
              color: #b5b5b5;
            }
          }

          span.is-active {
            color: #34d399;
            background-color: #2e3f35;
          }
        }
      }
    }
  }

  .mvbox-body {
    .pagination {
      display: flex;
      justify-content: center;
      padding: 1rem 0;
    }
  }
}
</style>
