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
