// 歌手相关
import Request from "../api/request";
import { ApiRes } from "@/types/common-types";

import { ArtistList } from "@/types/singer-types";

// 歌手列表
export async function getArtistList(params) {
  return Request.get<ArtistList>({
    url: 'artist/list', 
    params
  })
}