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
    <div class="mvbox-body"></div>
  </div>
</template>

<script setup lang="ts">
import { ref, toRefs } from "vue";
import { useStore } from "vuex";

const store = useStore();
const { selectArea, selectKind, selectOrder, areas, kinds, orders } = toRefs(
  store.getters
);

const changeArea = (area) => {
  store.commit("video/setSelectArea", area);
};

const changeKinds = (kind) => {
  store.commit("video/setSelectKind", kind);
};

const changeOrders = (order) => {
  store.commit("video/setSelectOrder", order);
};
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
  }
}
</style>
