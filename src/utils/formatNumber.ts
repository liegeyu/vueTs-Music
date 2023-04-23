// 格式时间 s
export const formatDuration = (time: number | null | undefined): string => {
  if (Number.isNaN(time) || time == null) {
    return "00:00"
  }
  const s = Math.floor(time) % 60;
  const m = Math.floor(time / 60) % 60;
  const mm = m < 10 ? `0${m}` : m;
  const ss = s < 10 ? `0${s}` : s;
  return `${mm} : ${ss}`;
}

// 格式时间 ms
export const formatDurationMs = (time: number | null | undefined): string => {
  if (Number.isNaN(time) || time == null) {
    return "00:00"
  }
  time = time / 1000;
  const s = Math.floor(time) % 60;
  const m = Math.floor(time / 60) % 60;
  const mm = m < 10 ? `0${m}` : m;
  const ss = s < 10 ? `0${s}` : s;
  return `${mm} : ${ss}`;
}

// 格式时间戳 -> 时间
export const formatTimeStamp = (timestamp: number): string => {
  let date = new Date(timestamp);
  let Y = date.getFullYear() + '-';
  let M = date.getMonth() + 1 < 10 ? `0${date.getMonth() + 1}-` : `${date.getMonth() + 1}-`;
  let D = date.getDate() < 10 ? `0${date.getDate()}` : `${date.getDate()}`;

  return Y + M + D;
}

// 格式数字
export function formatNumber(number: number): string | number {
  if (number > 100000000) {
      return Number((number / 100000000).toFixed(1)) + ' 亿';
  }
  if (number > 10000000) {
      return Number((number / 10000000).toFixed(1)) + ' 千万';
  }
  if (number > 10000) {
      return Number((number / 10000).toFixed(1)) + ' 万';
  }

  return number;
}