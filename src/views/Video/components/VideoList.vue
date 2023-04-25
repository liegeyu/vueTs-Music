<template>
  <div class="videoList-container">
    <template v-for="item in 30" :key="item">
      <div class="video-item">
        <img class="video-img" src="" alt="" />
        <div class="img-des">
          <span class="des-times">1000</span>
          <span class="des-duration">10:49</span>
        </div>
        <div class="video-des">
          <p class="video-title">这是标题</p>
          <p class="video-creator">by {{ "作者" }}</p>
        </div>
      </div>
    </template>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped lang="scss">
.videoList-container {
  max-width: 1250px;
  margin: 2rem auto 0;
  display: grid;
  grid-template-columns: auto auto auto auto;
  column-gap: 2rem;
  .video-item {
    .video-img {
      width: 100%;
      height: 150px;
      border-radius: 1rem;
    }

    .img-des {
      position: relative;
      z-index: 10;
      .des-times {
        position: absolute;
        top: -145px;
        right: 10px;
      }

      .des-duration {
        position: absolute;
        right: 10px;
        bottom: 5px;
      }
    }

    .video-des {
      .video-title {
        color: #d5d5d5;
        padding: 0.5rem 0;
      }

      .video-creator {
        color: #555555;
        padding-bottom: 0.5rem;
      }
    }
  }
}
</style>
