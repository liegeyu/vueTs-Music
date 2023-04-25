// user 相关 api
import Request from "../api/request";
import { ApiRes } from "@/types/common-types";

import  { 
  VisitorInfo, 
  QRCodeKey, 
  QRCodeCreateData, 
  QRCodeKeyState,
  UserAccount,
  LoginStatus
} from "@/types/user-types";

// 游客登录
export const visitorLogin = () => {
  return Request.get<VisitorInfo>({
    url: "/register/anonimous",
  })
}

// 二维码key, 携带时间戳
export const getQRCodeLoginKey = (params) => {
  return Request.get<ApiRes<QRCodeKey>>({
    url: "/login/qr/key",
    params,
  })
}

// 二维码生成
export const getQRCreateByKey = (params) => {
  return Request.get<ApiRes<QRCodeCreateData>>({
    url: "/login/qr/create",
    params,
  })
}

// 检测二维码状态
export const getQRCodeState = (params) => {
  return Request.get<QRCodeKeyState>({
    url: "/login/qr/check",
    params,
  })
}

// 退出登录
export const getLogOut = (params) => {
  return Request.get<{ code: number; }>({
    url: "/logout",
    params,
  })
}

// 登录状态
export const getLoginStatus = (params) => {
  return Request.get<LoginStatus>({
    url: "/login/status",
    params
  })
}

// 获取用户信息
export const getUserDetail = (params) => {
  return Request.get({
    url: "/user/detail",
    params
  })
}

// 获取账号信息
export const getUserAccount = (params) => {
  return Request.get<UserAccount>({
    url: "/user/account",
    params
  })
}