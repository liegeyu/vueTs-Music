interface ArtistMenu {
  label: string;
  name: string;
}

export function useArtistMgr() {
  const menus: ArtistMenu[] = [
    {
        label: '专辑',
        name: 'collection',
    },
    {
        label: 'MV',
        name: 'mv',
    },
    {
        label: '歌手详情',
        name: 'artistdetail',
    },
    {
        label: '相似歌手',
        name: 'similarsinger',
    }
  ];

  return {
    menus,
  }
}