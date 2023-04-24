// user 相关 api
import Request from "../api/request";
import { ApiRes } from "@/types/common-types";

import  { UserProfile, VisitorInfo } from "@/types/user-types";

// 游客登录
export const visitorLogin = () => {
  return Request.get<VisitorInfo>({
    url: "/register/anonimous",
  })
}