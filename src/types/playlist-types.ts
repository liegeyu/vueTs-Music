// 歌单相关 interface
// /playlist/detail
export interface PlayListDetail {
  id: number;
  name: string;
  coverImgId: number;
  coverImgUrl: string;
  coverImgId_str: string;
  adType: number;
  userId: number;
  createTime: number;
  status: number;
  opRecommend: boolean;
  highQuality: boolean;
  newImported: boolean;
  updateTime: number;
  trackCount: number;
  specialType: number;
  privacy: number;
  trackUpdateTime: number;
  commentThreadId: string;
  playCount: number;
  trackNumberUpdateTime: number;
  subscribedCount: number;
  cloudTrackCount: number;
  ordered: boolean;
  description: string;
  tags: string[];
  updateFrequency?: any;
  backgroundCoverId: number;
  backgroundCoverUrl?: any;
  titleImage: number;
  titleImageUrl?: any;
  englishTitle?: any;
  officialPlaylistType?: any;
  subscribers: PlayListDetailSubscribers[];
  subscribed: boolean;
  creator: PlayListDetailCreator;
  tracks: PlayListDetailTracks[];
  videoIds?: any;
  videos?: any;
  trackIds: PlayListDetailTrackIds[];
  shareCount: number;
  commentCount: number;
  remixVideo?: any;
  sharedUsers?: any;
  historySharedUsers?: any;
}

export interface PlayListDetailSubscribers {
  defaultAvatar: boolean;
  province: number;
  authStatus: number;
  followed: boolean;
  avatarUrl: string;
  accountStatus: number;
  gender: number;
  city: number;
  birthday: number;
  userId: number;
  userType: number;
  nickname: string;
  signature: string;
  description: string;
  detailDescription: string;
  avatarImgId: number;
  backgroundImgId: number;
  backgroundUrl: string;
  authority: number;
  mutual: boolean;
  expertTags?: any;
  experts?: any;
  djStatus: number;
  vipType: number;
  remarkName?: any;
  authenticationTypes: number;
  avatarDetail?: any;
  avatarImgIdStr: string;
  backgroundImgIdStr: string;
  anchor: boolean;
  avatarImgId_str: string;
}

export interface PlayListDetailCreator {
  defaultAvatar: boolean;
  province: number;
  authStatus: number;
  followed: boolean;
  avatarUrl: string;
  accountStatus: number;
  gender: number;
  city: number;
  birthday: number;
  userId: number;
  userType: number;
  nickname: string;
  signature: string;
  description: string;
  detailDescription: string;
  avatarImgId: number;
  backgroundImgId: number;
  backgroundUrl: string;
  authority: number;
  mutual: boolean;
  expertTags?: any;
  experts?: any;
  djStatus: number;
  vipType: number;
  remarkName?: any;
  authenticationTypes: number;
  avatarDetail: PlayListDetailCreatorAvatarDetail;
  avatarImgIdStr: string;
  backgroundImgIdStr: string;
  anchor: boolean;
  avatarImgId_str: string;
}

export interface PlayListDetailCreatorAvatarDetail {
  userType: number;
  identityLevel: number;
  identityIconUrl: string;
}

export interface PlayListDetailTracks {
  name: string;
  id: number;
  pst: number;
  t: number;
  ar: PlayListDetailTracksAr[];
  alia: any[];
  pop: number;
  st: number;
  rt: string;
  fee: number;
  v: number;
  crbt?: any;
  cf: string;
  al: PlayListDetailTracksAl;
  dt: number;
  h: PlayListDetailTracksH;
  m: PlayListDetailTracksM;
  l: PlayListDetailTracksL;
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
  single: number;
  noCopyrightRcmd?: any;
  cp: number;
  mv: number;
  rtype: number;
  rurl?: any;
  mst: number;
  publishTime: number;
}

export interface PlayListDetailTracksAr {
  id: number;
  name: string;
  tns: any[];
  alias: any[];
}

export interface PlayListDetailTracksAl {
  id: number;
  name: string;
  picUrl: string;
  tns: any[];
  pic_str: string;
  pic: number;
}

export interface PlayListDetailTracksH {
  br: number;
  fid: number;
  size: number;
  vd: number;
}

export interface PlayListDetailTracksM {
  br: number;
  fid: number;
  size: number;
  vd: number;
}

export interface PlayListDetailTracksL {
  br: number;
  fid: number;
  size: number;
  vd: number;
}

export interface PlayListDetailTrackIds {
  id: number;
  v: number;
  t: number;
  at: number;
  alg?: any;
  uid: number;
  rcmdReason: string;
  sc?: any;
}

// getToplistDetail
export interface TopListDetailAll {
  list: TopListDetailList[];
  artistToplist: ArtistToplist;
  rewardToplist: RewardToplist;
}

export interface TopListDetailList {
  subscribers: any[];
	subscribed?: any;
	creator?: any;
	artists?: any;
	tracks: Track[];
	updateFrequency: string;
	backgroundCoverId: number;
	backgroundCoverUrl?: any;
	titleImage: number;
	coverText?: any;
	titleImageUrl?: any;
	englishTitle?: any;
	opRecommend: boolean;
	recommendInfo?: any;
	socialPlaylistCover?: any;
	trackNumberUpdateTime: number;
	adType: number;
	subscribedCount: number;
	cloudTrackCount: number;
	userId: number;
	createTime: number;
	highQuality: boolean;
	specialType: number;
	updateTime: number;
	coverImgId: number;
	newImported: boolean;
	anonimous: boolean;
	trackUpdateTime: number;
	trackCount: number;
	coverImgUrl: string;
	commentThreadId: string;
	totalDuration: number;
	privacy: number;
	playCount: number;
	description: string;
	status: number;
	ordered: boolean;
	tags: any[];
	name: string;
	id: number;
	coverImgId_str: string;
	toplistType: string;
}

export interface Track {
	first: string;
	second: string;
}

export interface ArtistToplist {
	coverUrl: string;
	artists: ArtistToplistArtist[];
	name: string;
	upateFrequency: string;
	position: number;
	updateFrequency: string;
}

export interface ArtistToplistArtist {
	first: string;
	second: string;
	third: number;
}

export interface RewardToplist {
	coverUrl: string;
	songs: Song[];
	name: string;
	position: number;
}

export interface Artist {
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

export interface Album {
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
	company?: any;
	briefDesc: string;
	artist: Artist;
	songs: any[];
	alias: any[];
	status: number;
	copyrightId: number;
	commentThreadId: string;
	artists: Artist[];
	subType: string;
	transName?: any;
	onSale: boolean;
	mark: number;
	gapless: number;
	dolbyMark: number;
	picId_str: string;
}

export interface SqMusic {
	name?: any;
	id: number;
	size: number;
	extension: string;
	sr: number;
	dfsId: number;
	bitrate: number;
	playTime: number;
	volumeDelta: number;
}

export interface HrMusic {
	name?: any;
	id: number;
	size: number;
	extension: string;
	sr: number;
	dfsId: number;
	bitrate: number;
	playTime: number;
	volumeDelta: number;
}

export interface BMusic {
	name?: any;
	id: number;
	size: number;
	extension: string;
	sr: number;
	dfsId: number;
	bitrate: number;
	playTime: number;
	volumeDelta: number;
}

export interface HMusic {
	name?: any;
	id: number;
	size: number;
	extension: string;
	sr: number;
	dfsId: number;
	bitrate: number;
	playTime: number;
	volumeDelta: number;
}

export interface MMusic {
	name?: any;
	id: number;
	size: number;
	extension: string;
	sr: number;
	dfsId: number;
	bitrate: number;
	playTime: number;
	volumeDelta: number;
}

export interface LMusic {
	name?: any;
	id: number;
	size: number;
	extension: string;
	sr: number;
	dfsId: number;
	bitrate: number;
	playTime: number;
	volumeDelta: number;
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
	artists: Artist[];
	album: Album;
	starred: boolean;
	popularity: number;
	score: number;
	starredNum: number;
	duration: number;
	playedNum: number;
	dayPlays: number;
	hearTime: number;
	sqMusic: SqMusic;
	hrMusic: HrMusic;
	ringtone: string;
	crbt?: any;
	audition?: any;
	copyFrom: string;
	commentThreadId: string;
	rtUrl?: any;
	ftype: number;
	rtUrls: any[];
	copyright: number;
	transName?: any;
	sign?: any;
	mark: number;
	originCoverType: number;
	originSongSimpleData?: any;
	single: number;
	noCopyrightRcmd?: any;
	mvid: number;
	bMusic: BMusic;
	mp3Url?: any;
	rtype: number;
	rurl?: any;
	hMusic: HMusic;
	mMusic: MMusic;
	lMusic: LMusic;
}

// getHighQuality
export interface HignQualityTag {
	id: number;
	name: string;
	type: number;
	category: number;
	hot: boolean;
}

// getPlaylistHotTag
export interface PlaylistHotTags {
  tags: PlaylistHotTag[];
  code: number;
}

export interface PlaylistHotTag {
	playlistTag: PlaylistTag;
	activity: boolean;
	hot: boolean;
	usedCount: number;
	position: number;
	category: number;
	createTime: number;
	name: string;
	id: number;
	type: number;
}

export interface PlaylistTag {
	id: number;
	name: string;
	category: number;
	usedCount: number;
	type: number;
	position: number;
	createTime: number;
	highQuality: number;
	highQualityPos: number;
	officialPos: number;
}

// getPlaylistCatlistTag
export interface PlaylistCatlistTags {
	code: number;
	all: PlaylistCatlistTagAll;
	sub: PlaylistCatlistTagSub[];
	categories: PlaylistCatlistTagCategories;
}

export interface PlaylistCatlistTagAll {
	name: string;
	resourceCount: number;
	imgId: number;
	imgUrl?: any;
	type: number;
	category: number;
	resourceType: number;
	hot: boolean;
	activity: boolean;
}

export interface PlaylistCatlistTagSub {
	name: string;
	resourceCount: number;
	imgId: number;
	imgUrl?: any;
	type: number;
	category: number;
	resourceType: number;
	hot: boolean;
	activity: boolean;
}

export interface PlaylistCatlistTagCategories {
	0: string;
	1: string;
	2: string;
	3: string;
	4: string;
}

// getTopPlaylistHighQuality
export interface TopPlaylistHighQuality {
	code: number;
	more: boolean;
	lasttime: number;
	total: number;
	playlists: TopHighQualityPlaylist[];
}

export interface TopHighQualityPlaylist {
	name: string;
	id: number;
	trackNumberUpdateTime: number;
	status: number;
	userId: number;
	createTime: number;
	updateTime: number;
	subscribedCount: number;
	trackCount: number;
	cloudTrackCount: number;
	coverImgUrl: string;
	coverImgId: number;
	description: string;
	tags: string[];
	playCount: number;
	trackUpdateTime: number;
	specialType: number;
	totalDuration: number;
	creator: Creator;
	tracks?: any;
	subscribers: Subscriber[];
	subscribed: boolean;
	commentThreadId: string;
	newImported: boolean;
	adType: number;
	highQuality: boolean;
	privacy: number;
	ordered: boolean;
	anonimous: boolean;
	coverStatus: number;
	recommendInfo?: any;
	socialPlaylistCover?: any;
	recommendText?: any;
	shareCount: number;
	coverImgId_str: string;
	commentCount: number;
	copywriter: string;
	tag: string;
}

export interface AvatarDetail {
	userType: number;
	identityLevel: number;
	identityIconUrl: string;
}

export interface Creator {
	defaultAvatar: boolean;
	province: number;
	authStatus: number;
	followed: boolean;
	avatarUrl: string;
	accountStatus: number;
	gender: number;
	city: number;
	birthday: number;
	userId: number;
	userType: number;
	nickname: string;
	signature: string;
	description: string;
	detailDescription: string;
	avatarImgId: number;
	backgroundImgId: number;
	backgroundUrl: string;
	authority: number;
	mutual: boolean;
	expertTags: string[];
	experts?: any;
	djStatus: number;
	vipType: number;
	remarkName?: any;
	authenticationTypes: number;
	avatarDetail: AvatarDetail;
	avatarImgIdStr: string;
	backgroundImgIdStr: string;
	anchor: boolean;
	avatarImgId_str: string;
}

export interface Subscriber {
	defaultAvatar: boolean;
	province: number;
	authStatus: number;
	followed: boolean;
	avatarUrl: string;
	accountStatus: number;
	gender: number;
	city: number;
	birthday: number;
	userId: number;
	userType: number;
	nickname: string;
	signature: string;
	description: string;
	detailDescription: string;
	avatarImgId: number;
	backgroundImgId: number;
	backgroundUrl: string;
	authority: number;
	mutual: boolean;
	expertTags?: any;
	experts?: any;
	djStatus: number;
	vipType: number;
	remarkName?: any;
	authenticationTypes: number;
	avatarDetail?: any;
	avatarImgIdStr: string;
	backgroundImgIdStr: string;
	anchor: boolean;
	avatarImgId_str: string;
}
