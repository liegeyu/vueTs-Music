// 歌曲相关 api
import Request from "../api/request";
import { ApiRes } from "@/types/common-types";
import { Song, SongUrl} from "@/types/player-types"

// 歌曲详情
export const getSongDetail = (params) => {
  return Request.get<ApiRes<Song[]>>({
    url: "/song/detail",
    params,
  })
}

// 歌曲Url
export const getSongUrl = (params) => {
  return Request.get<ApiRes<SongUrl>>({
    url: "/song/url",
    params
  })
}