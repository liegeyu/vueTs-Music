// video 相关 api
import Request from "../api/request";
import { ApiRes } from "@/types/common-types";
import { MvUrl, MvDetail, MvDetailInfo, RelatedAllVideo } from "@/types/mv-types";

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

// 相关视频
export const getRelatedAllVideo = async (params) => {
  return Request.get<ApiRes<RelatedAllVideo[]>>({
    url: "/related/allvideo",
    params,
  })
}