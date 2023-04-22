// video 相关 api
import Request from "../api/request";
import { ApiRes } from "@/types/common-types";
import { MvUrl, MvDetail, MvDetailInfo, RelatedAllVideo, VideoDetail, VideoUrl } from "@/types/video-types";

// mv 数据
export const getMvDetail = async (params) => {
  return Request.get<ApiRes<MvDetail>>({
    url: "/mv/detail",
    params,
  })
}

// mv 地址
export const getMvUrl = async (params) => {
  return Request.get<ApiRes<MvUrl>>({
    url: "/mv/url",
    params,
  })
}

// mv 点赞转发评论数数据
export const getMvDetailInfo = async (params) => {
  return Request.get<ApiRes<MvDetailInfo>>({
    url: "/mv/detail/info",
    params,
  })
}

// video 详情
export const getVideoDetail = async (params) => {
  return Request.get<ApiRes<VideoDetail>>({
    url: "/video/detail",
    params,
  })
}

// video 地址
export const getVideoUrl = async (params) => {
  return Request.get<ApiRes<VideoUrl[]>>({
    url: "/video/url",
    params,
  })
}

// 相关 video
export const getRelatedAllVideo = async (params) => {
  return Request.get<ApiRes<RelatedAllVideo[]>>({
    url: "/related/allvideo",
    params,
  })
}
