<template>
  <div class="carousel-container">
    <el-carousel
      v-if="loaded"
      :interval="4000"
      :autoplay="false"
      class="carousel-main"
      type="card"
      height="200px"
    >
      <el-carousel-item v-for="item in imgData" :key="item">
        <img
          :src="item.pic"
          :alt="item.typeTitle"
          class="slide-img"
          @click="clickSlide(item)"
        />
      </el-carousel-item>
    </el-carousel>
  </div>
</template>

<script setup lang="ts">
import { ref, reactive, onMounted } from "vue";

import { Banner } from "@/types/recommend-types";
import { getBanner } from "@/service/modules/recommend";

let loaded = ref<boolean>(false);
let imgData = ref<Banner[]>([]);

const clickSlide = (item) => {};

onMounted(async () => {
  const res = await getBanner({ type: 1 });
  imgData.value = res.banners;
  console.log(imgData.value);
  loaded.value = true;
});
</script>

<style lang="scss" scoped>
.el-carousel__item h3 {
  color: #475669;
  opacity: 0.75;
  line-height: 200px;
  margin: 0;
  text-align: center;
}

.el-carousel__item {
  border-radius: 1rem;
}

.carousel-container {
  display: flex;
  justify-content: center;
  width: 100%;
  .carousel-main {
    width: 1100px;
    .slide-img {
      width: 100%;
      height: 100%;
    }
  }
}
</style>
