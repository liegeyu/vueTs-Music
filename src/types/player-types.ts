// 播放相关 interface
// Music
export interface Music {
  name: string;
  id: number;
  pst: number;
  t: number;
  ar: MusicAr[];
  alia: string[];
  pop: number;
  st: number;
  rt?: any;
  fee: number;
  v: number;
  crbt?: any;
  cf: string;
  al: MusicAl;
  dt: number;
  h: MusicH;
  m: MusicM;
  l: MusicL;
  a?: any;
  cd: string;
  no: number;
  rtUrl?: any;
  ftype: number;
  rtUrls: any[];
  djId: number;
  copyright: number;
  s_id: number;
  mark: number;
  originCoverType: number;
  originSongSimpleData?: any;
  tagPicList?: any;
  resourceState: boolean;
  version: number;
  songJumpInfo?: any;
  entertainmentTags?: any;
  single: number;
  noCopyrightRcmd?: any;
  rtype: number;
  rurl?: any;
  mst: number;
  cp: number;
  mv: number;
  publishTime: number;
}

export interface MusicAr {
  id: number;
  name: string;
  tns: any[];
  alias: any[];
}

export interface MusicAl {
  id: number;
  name: string;
  picUrl: string;
  tns: any[];
  pic_str: string;
  pic: number;
}

export interface MusicH {
  br: number;
  fid: number;
  size: number;
  vd: number;
}

export interface MusicM {
  br: number;
  fid: number;
  size: number;
  vd: number;
}

export interface MusicL {
  br: number;
  fid: number;
  size: number;
  vd: number;
}
