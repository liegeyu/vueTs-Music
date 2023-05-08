// getArtistList
export interface ArtistList {
  artists: Artist[];
  more: boolean;
  code: number;
}

export interface Artist {
  albumSize: number;
  alias: string[];
  briefDesc: string;
  fansCount: number;
  followed: boolean;
  id: number;
  img1v1Id: number;
  img1v1Id_str: string;
  img1v1Url: string;
  musicSize: number;
  name: string;
  picId: number;
  picId_str: string;
  picUrl: string;
  topicPerson: number;
  trans: string;
  showPrivateMsg?: any;
  isSubed?: any;
  accountId: number;
  transNames?: any;
  mvSize?: any;
  publishTime?: any;
  identifyTag?: any;
  alg?: string;
}

// getArtistDetail
export interface Identify {
  imageUrl?: any;
  imageDesc: string;
  actionUrl: string;
}

export interface Rank {
  rank: number;
  type: number;
}

export interface ArtistDetailArtist {
  id: number;
  cover: string;
  avatar: string;
  name: string;
  transNames: any[];
  alias: string[];
  identities: string[];
  identifyTag?: any;
  briefDesc: string;
  rank: Rank;
  albumSize: number;
  musicSize: number;
  mvSize: number;
}

export interface SecondaryExpertIdentiy {
  expertIdentiyId: number;
  expertIdentiyName: string;
  expertIdentiyCount: number;
}

export interface Data {
  videoCount: number;
  identify: Identify;
  artist: ArtistDetailArtist;
  blacklist: boolean;
  preferShow: number;
  showPriMsg: boolean;
  secondaryExpertIdentiy: SecondaryExpertIdentiy[];
}

export interface ArtistDetail {
  code: number;
  message: string;
  data: Data;
}

// getArtistDesc
export interface Introduction {
  ti: string;
  txt: string;
}

export interface Content {
  type: number;
  id: number;
  content: string;
}

export interface Topic {
  id: number;
  addTime: number;
  mainTitle: string;
  title: string;
  content: Content[];
  userId: number;
  cover: number;
  headPic: number;
  shareContent: string;
  wxTitle: string;
  showComment: boolean;
  status: number;
  seriesId: number;
  pubTime: number;
  readCount: number;
  tags: string[];
  pubImmidiatly: boolean;
  auditor: string;
  auditTime: number;
  auditStatus: number;
  startText: string;
  delReason: string;
  showRelated: boolean;
  fromBackend: boolean;
  rectanglePic: number;
  updateTime: number;
  reward: boolean;
  summary: string;
  memo?: any;
  adInfo: string;
  categoryId: number;
  hotScore: number;
  recomdTitle: string;
  recomdContent: string;
  number: number;
}

export interface Creator {
  userId: number;
  userType: number;
  nickname: string;
  avatarImgId: number;
  avatarUrl: string;
  backgroundImgId: number;
  backgroundUrl: string;
  signature: string;
  createTime: number;
  userName: string;
  accountType: number;
  shortUserName: string;
  birthday: number;
  authority: number;
  gender: number;
  accountStatus: number;
  province: number;
  city: number;
  authStatus: number;
  description: string;
  detailDescription: string;
  defaultAvatar: boolean;
  expertTags?: any;
  experts?: any;
  djStatus: number;
  locationStatus: number;
  vipType: number;
  followed: boolean;
  mutual: boolean;
  authenticated: boolean;
  lastLoginTime: number;
  lastLoginIP: string;
  remarkName?: any;
  viptypeVersion: number;
  authenticationTypes: number;
  avatarDetail?: any;
  anchor: boolean;
}

export interface TopicData {
  topic: Topic;
  creator: Creator;
  shareCount: number;
  commentCount: number;
  likedCount: number;
  liked: boolean;
  rewardCount: number;
  rewardMoney: number;
  relatedResource?: any;
  rectanglePicUrl: string;
  coverUrl: string;
  categoryId: number;
  categoryName: string;
  reward: boolean;
  shareContent: string;
  wxTitle: string;
  addTime: number;
  seriesId: number;
  showComment: boolean;
  showRelated: boolean;
  memo?: any;
  summary: string;
  recmdTitle: string;
  recmdContent: string;
  readCount: number;
  url: string;
  title: string;
  tags: string[];
  commentThreadId: string;
  mainTitle: string;
  id: number;
  number: number;
}

export interface ArtistDesc {
  introduction: Introduction[];
  briefDesc: string;
  count: number;
  topicData: TopicData[];
  code: number;
}

// getArtistMvs
export interface ArtistMvArtist {
  img1v1Id: number;
  topicPerson: number;
  briefDesc: string;
  picUrl: string;
  img1v1Url: string;
  albumSize: number;
  trans: string;
  musicSize: number;
  alias: any[];
  picId: number;
  name: string;
  id: number;
  img1v1Id_str: string;
}

export interface ArtistMv {
  id: number;
  name: string;
  status: number;
  artist: ArtistMvArtist;
  imgurl16v9: string;
  imgurl: string;
  artistName: string;
  duration: number;
  playCount: number;
  publishTime: string;
  subed: boolean;
}

export interface ArtistMvs {
  mvs: ArtistMv[];
  time: number;
  hasMore: boolean;
  code: number;
}

// getArtistAlbums
export interface ArtistAlbumsArtist {
  img1v1Id: number;
  topicPerson: number;
  followed: boolean;
  trans: string;
  alias: string[];
  picId: number;
  musicSize: number;
  albumSize: number;
  briefDesc: string;
  picUrl: string;
  img1v1Url: string;
  name: string;
  id: number;
  picId_str: string;
  img1v1Id_str: string;
}

export interface HotAlbum {
  songs: any[];
  paid: boolean;
  onSale: boolean;
  mark: number;
  awardTags?: any;
  companyId: number;
  blurPicUrl: string;
  pic: number;
  alias: any[];
  artists: ArtistAlbumsArtist[];
  copyrightId: number;
  picId: number;
  artist: ArtistAlbumsArtist;
  briefDesc: string;
  publishTime: number;
  company: string;
  picUrl: string;
  commentThreadId: string;
  description: string;
  tags: string;
  status: number;
  subType: string;
  name: string;
  id: number;
  type: string;
  size: number;
  picId_str: string;
  isSub: boolean;
}

export interface ArtistAlbums {
  artist: ArtistAlbumsArtist;
  hotAlbums: HotAlbum[];
  more: boolean;
  code: number;
}

// getAlbumContent
export interface AlbumContent {
  resourceState: boolean;
  album: AlbumContentAlbum;
  songs: AlbumSong[];
  code: number;
}

export interface ResourceInfo {
  id: number;
  userId: number;
  name: string;
  imgUrl: string;
  creator?: any;
  encodedId?: any;
  subTitle?: any;
  webUrl?: any;
}

export interface CommentThread {
  id: string;
  resourceInfo: ResourceInfo;
  resourceType: number;
  commentCount: number;
  likedCount: number;
  shareCount: number;
  hotCount: number;
  latestLikedUsers?: any;
  resourceOwnerId: number;
  resourceTitle: string;
  resourceId: number;
}

export interface Info {
  commentThread: CommentThread;
  latestLikedUsers?: any;
  liked: boolean;
  comments?: any;
  resourceType: number;
  resourceId: number;
  commentCount: number;
  likedCount: number;
  shareCount: number;
  threadId: string;
}

export interface AlbumContentAlbum {
  songs: any[];
  paid: boolean;
  onSale: boolean;
  mark: number;
  awardTags?: any;
  companyId: number;
  blurPicUrl: string;
  alias: any[];
  artists: ArtistAlbumsArtist[];
  copyrightId: number;
  picId: number;
  artist: ArtistAlbumsArtist;
  pic: number;
  publishTime: number;
  company: string;
  briefDesc: string;
  picUrl: string;
  commentThreadId: string;
  description: string;
  tags: string;
  status: number;
  subType: string;
  name: string;
  id: number;
  type: string;
  size: number;
  picId_str: string;
  info: Info;
}

export interface AlbumSong {
  rtUrls: any[];
  ar: Ar[];
  al: Al;
  st: number;
  noCopyrightRcmd?: any;
  songJumpInfo?: any;
  alia?: any[];
  pop: number;
  rt: string;
  mst: number;
  cp: number;
  crbt?: any;
  cf: string;
  dt: number;
  rtUrl?: any;
  ftype: number;
  rtype: number;
  rurl?: any;
  pst: number;
  no: number;
  fee: number;
  djId: number;
  mv: number;
  t: number;
  v: number;
  h: H;
  l: L;
  sq: Sq;
  hr: Hr;
  cd: string;
  a?: any;
  m: M;
  name: string;
  id: number;
  privilege: Privilege;
}

export interface Ar {
  id: number;
  name: string;
  alia: string[];
}

export interface Al {
  id: number;
  name: string;
  picUrl: string;
  tns: string[];
  pic_str: string;
  pic: number;
}

export interface H {
  br: number;
  fid: number;
  size: number;
  vd: number;
  sr: number;
}

export interface L {
  br: number;
  fid: number;
  size: number;
  vd: number;
  sr: number;
}

export interface Sq {
  br: number;
  fid: number;
  size: number;
  vd: number;
  sr: number;
}

export interface Hr {
  br: number;
  fid: number;
  size: number;
  vd: number;
  sr: number;
}

export interface M {
  br: number;
  fid: number;
  size: number;
  vd: number;
  sr: number;
}

export interface FreeTrialPrivilege {
  resConsumable: boolean;
  userConsumable: boolean;
  listenType?: any;
}

export interface ChargeInfoList {
  rate: number;
  chargeUrl?: any;
  chargeMessage?: any;
  chargeType: number;
}

export interface Privilege {
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
  maxBrLevel: string;
  playMaxBrLevel: string;
  downloadMaxBrLevel: string;
  plLevel: string;
  dlLevel: string;
  flLevel: string;
  rscl?: any;
  freeTrialPrivilege: FreeTrialPrivilege;
  chargeInfoList: ChargeInfoList[];
}
