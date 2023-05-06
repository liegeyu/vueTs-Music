<template>
  <div class="songlist-container">
    <div class="songlist-first" @click="clickHeader">
      <!-- bg -->
      <div
        class="first-bg"
        :style="{
          backgroundImage: `url(${
            topPlaylists[0]?.coverImgUrl ? topPlaylists[0].coverImgUrl : ''
          })`,
        }"
      ></div>

      <img
        class="first-img"
        :src="topPlaylists[0]?.coverImgUrl ? topPlaylists[0].coverImgUrl : ''"
        :alt="topPlaylists[0]?.name ? topPlaylists[0].name : ''"
      />
      <div class="first-des">
        <div class="des-header">
          <IconPark
            :icon="CrownThree"
            :size="20"
            :stroke-width="5"
            class="icon-button"
          />
          <span>精品歌单</span>
        </div>
        <span>{{ topPlaylists[0]?.name ? topPlaylists[0].name : "" }}</span>
      </div>
    </div>
    <!-- nav -->
    <div class="songlist-nav">
      <div class="nav-btn">
        <el-popover
          ref="popover"
          placement="right"
          :width="200"
          trigger="click"
          v-model:visible="showPopo"
          popper-class="popo-tagbox"
        >
          <template #reference>
            <el-button class="all-video-btn">{{ activeTag.name }} ></el-button>
          </template>
          <div class="popo-container" style="width: 750px">
            <span
              class="popo-header"
              :class="
                activeTag.name == playlistCatlistTagAll.name ? 'tag-active' : ''
              "
              @click="clickTag(playlistCatlistTagAll)"
            >
              全部歌单
            </span>
            <template
              v-for="(cate, cateIndex) in playlistCatlistTagCates"
              :key="cateIndex"
            >
              <div class="cate-title">
                <span>{{ cate }}</span>
                <div class="cate-right">
                  <div
                    class="cate-box"
                    v-for="(tag, index) in playlistCatlistTagSub.filter(
                      (tag) => tag.category == cateIndex
                    )"
                    :key="index"
                  >
                    <div
                      class="tag-more"
                      @click="clickTag(tag)"
                      :class="activeTag.name == tag.name ? 'tag-active' : ''"
                    >
                      {{ tag.name }}
                    </div>
                  </div>
                </div>
              </div>
            </template>
          </div>
        </el-popover>
      </div>
      <div class="nav-more">
        <template v-for="item in playlistHotTag.slice(0, 10)" :key="item.id">
          <span
            @click="clickTag(item.playlistTag)"
            class="tag-span"
            :class="item.name == activeTag.name ? 'tag-active' : ''"
            >{{ item.name }}</span
          >
        </template>
      </div>
    </div>

    <!-- songlists -->
    <div class="songlist-body">
      <template v-for="playlist in topPlaylists" :key="playlist.id">
        <div style="margin-bottom: 10px">
          <SongCard
            :id="playlist.id"
            :cardImg="playlist.coverImgUrl"
            :cardName="playlist.name"
            :playCount="playlist.playCount"
          />
        </div>
      </template>
    </div>
  </div>
</template>

<script setup lang="ts">
import { onMounted, ref, watch } from "vue";
import { useRouter } from "vue-router";

import { CrownThree } from "@icon-park/vue-next";
import IconPark from "@/components/common/IconPark.vue";
import SongCard from "@/components/common/SongCard.vue";
import {
  getPlaylistHotTag,
  getPlaylistCatlistTag,
  getTopPlaylistHighQuality,
} from "@/service/modules/playlist";
import {
  PlaylistHotTag,
  PlaylistCatlistTagSub,
  PlaylistCatlistTagAll,
  PlaylistCatlistTagCategories,
  TopHighQualityPlaylist,
} from "@/types/playlist-types";

const router = useRouter();
let playlistCatlistTagAll = ref<PlaylistCatlistTagAll>(
  {} as PlaylistCatlistTagAll
);
let playlistCatlistTagSub = ref<PlaylistCatlistTagSub[]>([]);
let playlistCatlistTagCates = ref<PlaylistCatlistTagCategories>(
  {} as PlaylistCatlistTagCategories
);
let playlistHotTag = ref<PlaylistHotTag[]>([]);
let topPlaylists = ref<TopHighQualityPlaylist[]>([]);

let activeTag = ref<PlaylistCatlistTagAll>({} as PlaylistCatlistTagAll);
let showPopo = ref<boolean>(false);

const clickTag = async (tag) => {
  activeTag.value = tag;
  showPopo.value = false;
  await getPlaylist(tag);
};

const clickHeader = () => {
  router.push({
    name: "playlist",
    query: {
      id: topPlaylists.value[0].id,
    },
  });
};

const getPlaylist = async (tag) => {
  const params = {
    cat: tag.name,
  };
  const topPlaylistHighQualityRes = await getTopPlaylistHighQuality(params);
  topPlaylists.value = topPlaylistHighQualityRes.playlists;
};

onMounted(async () => {
  const playlistHotTagRes = await getPlaylistHotTag();
  const playlistCatlistTagRes = await getPlaylistCatlistTag();
  const topPlaylistHighQualityRes = await getTopPlaylistHighQuality(undefined);

  playlistHotTag.value = playlistHotTagRes.tags;
  playlistCatlistTagAll.value = playlistCatlistTagRes.all;
  playlistCatlistTagSub.value = playlistCatlistTagRes.sub;
  playlistCatlistTagCates.value = playlistCatlistTagRes.categories;
  topPlaylists.value = topPlaylistHighQualityRes.playlists;

  activeTag.value = playlistCatlistTagAll.value;

  console.log(playlistHotTagRes.tags);
  console.log(playlistCatlistTagRes);
  console.log(topPlaylistHighQualityRes);
});
</script>

<style scoped lang="scss">
.songlist-container {
  max-width: 1150px;
  min-width: 1100px;
  margin: 0 auto;

  .songlist-first {
    position: relative;
    height: 170px;
    width: 100%;
    overflow: hidden;
    border-radius: 0.6rem;
    background-color: aliceblue;
    display: flex;
    align-items: center;
    cursor: pointer;

    .first-bg {
      filter: blur(25px);
      height: 170px;
      width: 100%;
      position: absolute;
    }

    .first-img {
      height: 145px;
      width: 145px;
      border-radius: 0.6rem;
      margin: 0 15px;
      position: absolute;
      box-shadow: 1px 1px 5px #817f7f;
    }

    .first-des {
      position: absolute;
      margin-left: 180px;
      font-size: 1.4rem;

      .des-header {
        margin-bottom: 2rem;
        color: #e7aa5a;
        border: 1px solid #e7aa5a;
        width: 110px;
        padding: 0.5rem 0.5rem;
        border-radius: 10rem;
        font-weight: bold;

        .icon-button {
          color: #e7aa5a;
        }
      }
    }
  }

  .songlist-nav {
    display: flex;
    margin: 1.5rem 0;
    align-items: center;

    .nav-more {
      margin-left: auto;
      font-size: 1.1rem;
      .tag-span {
        cursor: pointer;
        margin: 0 0.3rem;
        color: #8b8b8b;
        padding: 0 0.3rem;

        &:hover {
          color: #d5d5d5;
        }
      }

      .tag-span.tag-active {
        color: #34d399;
      }
    }
  }

  .songlist-body {
    display: grid;
    grid-template-columns: repeat(5, minmax(0, 1fr));
    column-gap: 10px;
  }

  .all-video-btn {
    background-color: #2b2b2b;
    border: 1px solid #4b4b4b;
    border-radius: 5rem;
    color: #cad5ca;

    &:hover {
      background-color: #363636;
    }
  }
}
</style>
