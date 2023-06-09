// loading
import { reactive } from "vue";

interface Loading {
  visible: boolean;
  text: string;
}

export const useLoading = () => {
  const loading = reactive<Loading>({
    visible: false,
    text: '',
  })

  const showLoading = ( text = '加载中...') => {
    loading.visible = true;
    loading.text = text;
  }

  const hideLoading = () => {
    setTimeout(() => {
      loading.visible = false;
      loading.text = '';
    }, 200)

  }

  return {
    loading,
    showLoading,
    hideLoading
  }
}
