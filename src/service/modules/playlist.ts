// 歌单相关 api
import Request from "../api/request";
import { ApiRes } from "@/types/common-types";
import { PlayListDetail, SongList } from "@/types/playlist-types";

// 歌单详情
export const getPlayListDetail = (params) => {
  return Request.get<ApiRes<PlayListDetail>>({
    url: "/playlist/detail",
    params
  })
}

// 歌单列表
export const getPlaylistTrackAll = (params) => {
  return Request.get<ApiRes<SongList[]>>({
    url: "/playlist/track/all",
    params
  })
}