// 公共接口
export interface ApiRes<T> {
  code: number;
  data?: T;
  result?: T;
  banners?: T;
  message?: string;
}