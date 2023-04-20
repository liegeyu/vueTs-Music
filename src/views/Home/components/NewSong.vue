<template>
  <div class="newsong-container">
    <LeadingTitle title="推荐新音乐" />
    <div class="newsong-card">
      <div class="card-item" v-for="item in newSongData" :key="item.id">
        <div class="card-cover" @click="playSong(item)">
          <div class="card-img">
            <img :src="item.picUrl" :alt="item.name" class="card-img" />
          </div>
          <div class="card-mask">
            <div class="round-c">
              <div class="triangle"></div>
            </div>
          </div>
        </div>
        <div class="card-description" @dblclick="playSong(item)">
          <div class="des-title">{{ item.name }}</div>
          <div class="des-vice">{{ item.song.artists[0]?.name }}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from "vue";
import { useStore } from "vuex";

import { getSongDetail } from "@/service/modules/player";
import LeadingTitle from "@/components/common/LeadingTitle.vue";
import { getNewSong } from "@/service/modules/recommend";
import { NewSong } from "@/types/recommend-types";
import { Song } from "@/types/player-types";

const store = useStore();
let newSongData = ref<NewSong[]>([]);
let newSongList = ref([]);

const playSong = (songItem) => {
  // 播放
  console.log(songItem);
  const song = songItem.song;
  store.dispatch("player/playMusic", { id: song.id });
  // 存入songlist
  store.commit("playlist/setSongListId", "843949843");
  store.commit("playlist/setSongList", newSongList.value);
  // 将音乐存入 playlist
  const songListId = store.getters.songListId;
  const playerListId = store.getters.playerListId;
  if (songListId !== playerListId) {
    store.commit("player/setPlayerListId", songListId);
    store.commit("player/setPlayerList", store.getters.songlist);
    store.dispatch("player/initRandomSongIndexArr");
  }
};

// 构造新音乐的 songlist
const initNewSongList = async (songDataAll) => {
  let songIdArr = [];
  songDataAll.forEach((newSong) => {
    songIdArr.push(newSong.song.id);
  });
  const res = await getSongDetail({ ids: songIdArr.join(",") });
  return res.songs;
};

onMounted(async () => {
  const res = await getNewSong({ limit: 12 });
  newSongData.value = res.result;
  newSongList.value = await initNewSongList(res.result);
});
</script>

<style scoped lang="scss">
.newsong-container {
  .newsong-card {
    color: #d5d5d5;
    display: grid;
    grid-template-columns: repeat(3, minmax(0, 1fr));
    grid-gap: 18px;
    margin-bottom: 1.5rem;

    .card-item {
      display: grid;
      grid-template-columns: 1.4fr 8.6fr;
      border-radius: 0.3rem;

      &:hover {
        background-color: rgba(255, 255, 255, 0.1);
      }

      .card-cover {
        position: relative;
        cursor: pointer;

        .card-img {
          border-radius: 0.5rem;
          width: 100%;
          height: 100%;
        }
        .card-mask {
          position: absolute;
          top: 0;
          bottom: 0;
          left: 0;
          right: 0;
          display: flex;
          justify-content: center;
          align-items: center;

          .round-c {
            background-color: rgba(255, 255, 255, 0.9);
            border-radius: 1.2rem;
            padding: 0.5rem;
            padding-left: 0.6rem;
            .triangle {
              width: 0;
              height: 0;
              border-left: 1.2rem solid #34d399;
              border-top: 0.6rem solid transparent;
              border-bottom: 0.6rem solid transparent;
              border-radius: 0.2rem;
            }
          }
        }
      }

      .card-description {
        padding-left: 0.9rem;
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        .des-title {
          font-size: 1.1rem;
        }
        .des-vice {
          color: #6b6b6b;
          font-size: 1.05rem;
        }
      }
    }
  }
}
</style>
