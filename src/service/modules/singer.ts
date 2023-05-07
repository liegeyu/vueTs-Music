// 歌手相关
import Request from "../api/request";
import { ApiRes } from "@/types/common-types";

import { ArtistList, ArtistDetail, ArtistDesc } from "@/types/singer-types";

// 歌手列表
export function getArtistList(params) {
  return Request.get<ArtistList>({
    url: 'artist/list', 
    params
  })
}

// 歌手详情
export function getArtistDetail(params) {
  return Request.get<ArtistDetail>({
    url: 'artist/detail', 
    params
  })
}

// 歌手描述
export function getArtistDesc(params) {
  return Request.get<ArtistDesc>({
    url: 'artist/desc', 
    params
  })
}