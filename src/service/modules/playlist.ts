// 歌单相关 api(排行榜等也是歌单故存放一起)
import Request from "../api/request";
import { ApiRes } from "@/types/common-types";
import { 
  PlayListDetail, 
  TopListDetailAll, 
  HignQualityTag, 
  PlaylistHotTags 
} from "@/types/playlist-types";
import { Song } from "@/types/player-types"
// 歌单详情
export const getPlayListDetail = (params) => {
  return Request.get<ApiRes<PlayListDetail>>({
    url: "/playlist/detail",
    params
  })
}

// 歌单列表
export const getPlaylistTrackAll = (params) => {
  return Request.get<ApiRes<Song[]>>({
    url: "/playlist/track/all",
    params
  })
}

// 所有榜单内容摘要
export const getToplistDetail = () => {
  return Request.get<TopListDetailAll>({
    url: "/toplist/detail",
  })
}

// 精品歌单标签列表
export const getHighQualityTag = () => {
  return Request.get<ApiRes<HignQualityTag[]>>({
    url: "/playlist/highquality/tags"
  })
}

// 歌单分类
export const getPlaylistCatlistTag = () => {
  return Request.get<ApiRes<HignQualityTag[]>>({
    url: "/playlist/catlist"
  })
}

// 热门歌单分类
export const getPlaylistHotTag = () => {
  return Request.get<PlaylistHotTags>({
    url: "/playlist/hot"
  })
}
