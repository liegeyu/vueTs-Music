// search 相关 api
import Request from "../api/request";
import { ApiRes } from "@/types/common-types";
import { SearchHotData, SearchSuggest } from '@/types/search-types';

export const getSearchHot = () => {
  return Request.get<ApiRes<SearchHotData[]>>({
    url: '/search/hot/detail',
  })
}

export const getSearchHotSuggest = (params) => {
  return Request.get<ApiRes<SearchSuggest[]>>({
    url: "/search/suggest",
    params
  })
}