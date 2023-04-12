// 推荐 home 页面相关 api
import Request from "../api/request";
import { ApiRes } from "@/types/common-types";
import { Banner, Personalized } from "@/types/recommend-types";


export const getBanner = (params) => {
  return Request.get<ApiRes<Banner[]>>({
    url: "/banner",
    params
  })
}

export const getPersonalized = () => {
  return Request.get<ApiRes<Personalized[]>>({
    url: "/personalized",
  })
}