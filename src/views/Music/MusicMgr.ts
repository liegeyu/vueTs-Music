import { ref, watch } from "vue";
import { useRoute, useRouter } from "vue-router";

interface MusicMenu {
  label: string;
  name: string;
}

export function useMusicMgr() {
  const menus: MusicMenu[] = [
    {
        label: '排行榜',
        name: 'rankinglist',
    },
    {
        label: '私人定制',
        name: 'customize',
    },
    {
        label: '歌单',
        name: 'songlist',
    },
    {
        label: '歌手',
        name: 'singerlist',
    }
  ];

  const route = useRoute();
  const router = useRouter();
  const currentMenu = ref(route.name);

  // 路由改变
  watch(
    () => route.name,
    (newRoute) => {
      currentMenu.value = newRoute;
    }
  )

  // tab 切换
  const changeTab = (newTab) => {
    if (menus.some(menu => {
      return menu.name === newTab
    })) {
      router.push({
        path: `/music/${newTab}`,
      })
    }
  }

  return {
    menus,
    currentMenu,
    changeTab,
  }
}