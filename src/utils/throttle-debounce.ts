// debounce 防抖 -> 触发后重新计时
// 在一定时间内，将事件触发变成一次
export const debounce = (fn, delay = 200) => {
  let timer = null;
  return function() {
      if(timer) {
          clearTimeout(timer);
      }
      const args = arguments;
      timer = setTimeout(() => {
          fn.apply(this, args);
          timer = null;
      }, delay);
  }
}

// throttle 节流 -> 触发后只生效一次
// 将一段时间内的连续多次触发变成间隔触发，减少触发频率，稀释执行频率
export const throttle = (fn, delay = 400) => {
	let timer = true;
    return function() {
        if(!timer) return;
        timer = false;
        const args = arguments;
        setTimeout(() => {
            fn.apply(this, args);
            timer = true;
        }, delay);
    }
}