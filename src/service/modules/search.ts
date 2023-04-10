// search 相关 api
import { get, post } from "../api/request"

interface ApiRes {
  code: boolean;
}

export const getSearchHot = () => {
  return get({
    url: '/search/hot/detail',
  })
}