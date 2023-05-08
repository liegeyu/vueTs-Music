<template>
  <div class="singerlist-container">
    <div class="singerlist-kinds">
      <div v-for="option in singerOptions" :key="option.key" class="kinds-box">
        <div class="kinds-title">{{ option.name }}：</div>
        <div class="kinds-line">
          <el-space wrap :size="10" :spacer="spacer">
            <div
              type="text"
              class="kind-item"
              :class="{
                active:
                  (item.key === pageData.type && option.key === 'type') ||
                  (item.key === pageData.area && option.key === 'area') ||
                  (item.key === pageData.initial && option.key === 'initial'),
              }"
              v-for="(item, index) in option.list"
              :key="index"
              @click="optionChange(option.key, item.key)"
            >
              {{ item.name }}
            </div>
          </el-space>
        </div>
      </div>
    </div>
    <!-- body -->
    <div class="singerlist-body" v-myLoading="loading.visible">
      <div
        v-for="(artist, index) in artists"
        :key="artist.id"
        class="list-item"
        @click="clickArtist(artist)"
      >
        <img
          :src="index < 24 ? artist.img1v1Url : ''"
          :data-src="artist.img1v1Url"
          :alt="artist.img1v1Id_str"
          class="singer-img"
        />
        <div class="singer-name">{{ artist.name }}</div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { onMounted, onUnmounted, ref, reactive, h, computed } from "vue";
import { useStore } from "vuex";
import { useRoute, useRouter } from "vue-router";

import { getArtistList } from "@/service/modules/singer";
import { Artist } from "@/types/singer-types";
import { ElDivider } from "element-plus";
import { throttle } from "@/utils/throttle-debounce";
import { useMusicMgr } from "../MusicMgr";
import { useLoading } from "@/hooks/useLoading";

const { singerOptions } = useMusicMgr();
const { loading, showLoading, hideLoading } = useLoading();
const store = useStore();
const route = useRoute();
const router = useRouter();

const spacer = h(ElDivider, {
  direction: "vertical",
});
const pageData = reactive({
  init: false,
  loading: false,
  page: 1,
  limit: 60,
  initial: "-1",
  type: -1,
  area: -1,
});

const artists = ref<Artist[]>([]);
const scrollBar = computed<HTMLElement>(() => store.getters.scrollBar);

const optionChange = (keyName: string, keyValue: number | string) => {
  pageData.page = 1;
  if (keyName === "type") pageData.type = keyValue as number;
  if (keyName === "area") pageData.area = keyValue as number;
  if (keyName === "initial") pageData.initial = keyValue as string;
  artists.value = [];
  getArtistData();
};

const clickArtist = (singer) => {
  router.push({
    path: "/artistDetail",
    query: {
      singerId: singer.id,
    },
  });
};

const getArtistData = async () => {
  showLoading();
  const artistRes = await getArtistList(pageData);

  if (pageData.page === 1) {
    artists.value = artistRes.artists;
    lazyLoadingImg();
  } else {
    artists.value.push(...artistRes.artists);
  }
  hideLoading();
};

const lazyLoadingImg = () => {
  const imgs = document.querySelectorAll("img[data-src]");
  let scrollBoxHeight = scrollBar.value.scrollHeight;

  for (let i = 0; i < imgs.length; i++) {
    const rect = imgs[i].getBoundingClientRect();
    if (rect.top < scrollBoxHeight) {
      imgs[i].setAttribute("src", imgs[i].getAttribute("data-src"));
      imgs[i].removeAttribute("data-src");
    }
  }
};

const scrollHandler = async (e) => {
  if (route.meta?.name === "singerlist") {
    const el = e.target as HTMLElement;
    let elScrollTop = el.scrollTop;
    let clientHeight = document.documentElement.clientHeight;
    let elHeight = el.scrollHeight;

    // lazy-loading
    lazyLoadingImg();
    // bottom-loading
    if (elScrollTop + clientHeight - 80 >= elHeight) {
      pageData.page++;
      await getArtistData();
    }
  }
};

onMounted(() => {
  getArtistData();

  let addEvent = setInterval(() => {
    if (scrollBar.value !== undefined) {
      // lazy-loading
      lazyLoadingImg();
      // addEvent-scroll
      scrollBar.value.addEventListener("scroll", throttle(scrollHandler));
      clearInterval(addEvent);
    }
  }, 500);
});

onUnmounted(() => {
  scrollBar.value.removeEventListener("scroll", throttle(scrollHandler));
});
</script>

<style scoped lang="scss">
.singerlist-container {
  max-width: 1150px;
  min-width: 1100px;
  margin: 0 auto;

  :deep(.el-divider--vertical) {
    border-color: #363636;
  }

  .singerlist-kinds {
    .kinds-box {
      display: flex;
      margin-bottom: 1rem;
      color: #858b8b;

      .kinds-title {
        white-space: nowrap;
        color: #d8d5d5;
      }

      .kinds-line {
        margin-left: 1rem;

        .kind-item {
          padding: 0.2rem 0.5rem;
          border-radius: 1rem;
          cursor: pointer;
        }
      }
    }
  }

  .singerlist-body {
    display: grid;
    grid-template-columns: repeat(6, minmax(0, 1fr));
    column-gap: 10px;

    .list-item {
      cursor: pointer;

      .singer-img {
        width: 170px;
        height: 170px;
        border-radius: 1rem;
      }

      .singer-name {
        font-size: 1.1rem;
        color: #d5d5d5;
        margin-bottom: 1rem;
      }
    }
  }
}
</style>
