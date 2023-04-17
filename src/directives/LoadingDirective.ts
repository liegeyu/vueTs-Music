// myLoading 指令
import { Directive } from "vue";

const LoadingDirective: Directive = {
    mounted(el, binding) {
    const loadingEl = document.createElement("div");
    const text = '加载中...';
    const content = `
    <div class="loading">
      <span class="loading-text">${text}</span>
    </div>
    `
    loadingEl.innerHTML = content;
    el.instance = loadingEl;
    el.appendChild(el.instance);
  },
  updated(el, binding) {
    if (binding.value !== binding.oldValue) {
      binding.value ? el.appendChild(el.instance) : el.removeChild(el.instance);
    }
  },
  
}

export default LoadingDirective;