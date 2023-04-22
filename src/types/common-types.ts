// 公共接口
export interface ApiRes<T> {
  code: number;
  data?: T;
  result?: T;
  playlist?: T;
  songs?: T;
  urls?: T;
  banners?: T;
  message?: string;
}