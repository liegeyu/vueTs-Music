// 评论相关 api
import Request from "../api/request";
import { CommentPlaylist } from "@/types/comment-types";

// // 歌曲评论
// export const getCommentMusic = (params) => {
//   return Request.get<ApiRes<>>({
//     url: "/comment/music",
//     params
//   })
// }

// // 专辑评论
// export const getCommentAlbum = (params) => {
//   return Request.get<ApiRes<>>({
//     url: "/comment/album",
//     params
//   })
// }

// 歌单评论
export const getCommentPlaylist = (params) => {
  return Request.get<CommentPlaylist>({
    url: "/comment/playlist",
    params
  })
}