// 格式时间
export const formatDuration = (time: number): string => {
  const s = Math.floor(time) % 60;
  time = Math.floor(time / 60);
  const m = time % 60;
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