// 推荐页面相关 interface
export interface Banner {
  pic:string
  targetId:number
  targetType:number
  typeTitle:string
  bannerId:number
}

export interface Personalized {
  id: number;
  type: number;
  name: string;
  copywriter: string;
  picUrl: string;
  canDislike: boolean;
  trackNumberUpdateTime: number;
  playCount: number;
  trackCount: number;
  highQuality: boolean;
  alg: string;
}

export interface NewSong {
  id: number;
  type: number;
  name: string;
  picUrl: string;
  canDislike: boolean;
  song: Song;
  alg: string;
}

export interface Song {
  name: string;
  id: number;
  position: number;
  alias: any[];
  status: number;
  fee: number;
  copyrightId: number;
  disc: string;
  no: number;
  artists: SongArtists[];
  album: SongAlbum;
  starred: boolean;
  popularity: number;
  score: number;
  starredNum: number;
  duration: number;
  playedNum: number;
  dayPlays: number;
  hearTime: number;
  ringtone: string;
  copyFrom: string;
  commentThreadId: string;
  ftype: number;
  rtUrls: any[];
  copyright: number;
  mark: number;
  originCoverType: number;
  single: number;
  mvid: number;
  bMusic: SongBMusic;
  rtype: number;
  hMusic: SongHMusic;
  mMusic: SongMMusic;
  lMusic: SongLMusic;
  exclusive: boolean;
  privilege: SongPrivilege;
}

export interface SongArtists {
  name: string;
  id: number;
  picId: number;
  img1v1Id: number;
  briefDesc: string;
  picUrl: string;
  img1v1Url: string;
  albumSize: number;
  alias: any[];
  trans: string;
  musicSize: number;
  topicPerson: number;
}

export interface SongAlbum {
  name: string;
  id: number;
  type: string;
  size: number;
  picId: number;
  blurPicUrl: string;
  companyId: number;
  pic: number;
  picUrl: string;
  publishTime: number;
  description: string;
  tags: string;
  company: string;
  briefDesc: string;
  artist: PNSSongAlbumArtist;
  songs: any[];
  alias: any[];
  status: number;
  copyrightId: number;
  commentThreadId: string;
  artists: PNSSongAlbumArtists[];
  subType: string;
  onSale: boolean;
  mark: number;
  picId_str: string;
}

export interface SongBMusic {
  id: number;
  size: number;
  extension: string;
  sr: number;
  dfsId: number;
  bitrate: number;
  playTime: number;
  volumeDelta: number;
}

export interface SongHMusic {
  id: number;
  size: number;
  extension: string;
  sr: number;
  dfsId: number;
  bitrate: number;
  playTime: number;
  volumeDelta: number;
}

export interface SongMMusic {
  id: number;
  size: number;
  extension: string;
  sr: number;
  dfsId: number;
  bitrate: number;
  playTime: number;
  volumeDelta: number;
}

export interface SongLMusic {
  id: number;
  size: number;
  extension: string;
  sr: number;
  dfsId: number;
  bitrate: number;
  playTime: number;
  volumeDelta: number;
}

export interface SongPrivilege {
  id: number;
  fee: number;
  payed: number;
  st: number;
  pl: number;
  dl: number;
  sp: number;
  cp: number;
  subp: number;
  cs: boolean;
  maxbr: number;
  fl: number;
  toast: boolean;
  flag: number;
  preSell: boolean;
  playMaxbr: number;
  downloadMaxbr: number;
  freeTrialPrivilege: SongPrivilegeFreeTrialPrivilege;
  chargeInfoList: SongPrivilegeChargeInfoList[];
}

export interface SongPrivilegeFreeTrialPrivilege {
  resConsumable: boolean;
  userConsumable: boolean;
}

export interface SongPrivilegeChargeInfoList {
  rate: number;
  chargeType: number;
}