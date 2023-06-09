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

  const singerOptions: {
    name: string,
    key: string,
    list: {
      key: string | number,
      name: string,
    }[]
  }[] = [
    {
      name: '语种',
      key: 'area',
      list: [
        {key: -1, name: '全部'},
        {key: 7, name: '华语'},
        {key: 96, name: '欧美'},
        {key: 8, name: '日本'},
        {key: 16, name: '韩国'},
        {key: 0, name: '其他'},
      ]
    },
    {
      name: '分类',
      key: 'type',
      list: [
        {key: -1, name: '全部'},
        {key: 1, name: '男歌手'},
        {key: 2, name: '女歌手'},
        {key: 3, name: '乐队组合'},
      ]
    },
    {
      name: '筛选',
      key: 'initial',
      list: [
        {key: "-1", name: '热门'},
        {key: 'a', name: 'A'},
        {key: 'b', name: 'B'},
        {key: 'c', name: 'C'},
        {key: 'd', name: 'D'},
        {key: 'e', name: 'E'},
        {key: 'f', name: 'F'},
        {key: 'g', name: 'G'},
        {key: 'h', name: 'H'},
        {key: 'i', name: 'I'},
        {key: 'j', name: 'J'},
        {key: 'k', name: 'K'},
        {key: 'l', name: 'L'},
        {key: 'm', name: 'M'},
        {key: 'n', name: 'N'},
        {key: 'o', name: 'O'},
        {key: 'p', name: 'P'},
        {key: 'q', name: 'Q'},
        {key: 'r', name: 'R'},
        {key: 's', name: 'S'},
        {key: 't', name: 'T'},
        {key: 'u', name: 'U'},
        {key: 'v', name: 'V'},
        {key: 'w', name: 'W'},
        {key: 'x', name: 'X'},
        {key: 'y', name: 'Y'},
        {key: 'z', name: 'Z'},
        {key: '0', name: '#'},
      ]
    },
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
    singerOptions,
    currentMenu,
    changeTab,
  }
}