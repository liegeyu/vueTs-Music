<template>
  <div class="album-container">
    <div class="top-songs"></div>
    <div class="albums-box">
      <div
        class="album-item"
        v-for="(album, albumIndex) in hotAlbums"
        :key="album.id"
      >
        <img :src="album.picUrl" :alt="album.name" class="album-pic" />
        <div class="album-des">
          <div class="album-title">{{ album.name }}</div>
          <div class="album-songs">
            <template
              v-for="(item, index) in albumContents[albumIndex]"
              :key="item.id"
            >
              <SongItem :song="item" :index="index" />
            </template>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { onMounted, ref, defineProps } from "vue";

import {
  ArtistAlbumsArtist,
  ArtistAlbums,
  HotAlbum,
  AlbumSong,
} from "@/types/singer-types";
import { getArtistAlbums, getAlbumContent } from "@/service/modules/singer";
import SongItem from "@/views/PlayList/components/SongItem.vue";

const props = defineProps({
  singerId: {
    type: String,
    defalut: -1,
  },
});

let hotAlbums = ref<HotAlbum[]>([]);
let albumContents = ref<AlbumSong[][]>([]);

const getAlbumSongs = async () => {
  for (let i = 0; i < hotAlbums.value.length; i++) {
    const res = await getAlbumContent({ id: hotAlbums.value[i].id });
    albumContents.value.push(res.songs);
  }
  console.log(albumContents.value);
};

const getSingerAlbums = async () => {
  const artistAlbumsRes = await getArtistAlbums({
    id: props.singerId,
    limit: 5,
  });
  console.log(artistAlbumsRes);
  hotAlbums.value = artistAlbumsRes.hotAlbums;
  await getAlbumSongs();
};

onMounted(async () => {
  await getSingerAlbums();
});
</script>

<style scoped lang="scss">
.album-container {
  .top-songs {
  }
  .albums-box {
    display: flex;
    flex-direction: column;

    .album-item {
      display: flex;
      margin-bottom: 5rem;

      .album-pic {
        width: 170px;
        height: 170px;
        box-shadow: 5px 0 3px rgba(255, 255, 255, 0.3);
      }

      .album-des {
        color: #d5d5d5;
        margin-left: 5rem;
        float: right;
        width: 100%;
        .album-title {
          font-size: 1.5rem;
          font-weight: bold;
        }
        .album-songs {
          margin-top: 1rem;
        }
      }
    }
  }
}
</style>
