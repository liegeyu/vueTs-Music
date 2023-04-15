// 歌单相关 api
import Request from "../api/request";
import { ApiRes } from "@/types/common-types";
import { PlayListDetail } from "@/types/playlist-types";

export const getPlayListDetail = (params) => {
  return Request.get<ApiRes<PlayListDetail>>({
    url: "/playlist/detail",
    params
  })
}

// export const getPlaylistTrackAll = (params) => {
//   return Request.get<>({
//     url: "/playlist/track/all",
//     params
//   })
// }