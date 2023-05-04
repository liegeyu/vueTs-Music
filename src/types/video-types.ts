// mvdetail
export interface MvDetail {
	id: number;
	name: string;
	artistId: number;
	artistName: string;
	briefDesc: string;
	desc?: any;
	cover: string;
	coverId_str: string;
	coverId: number;
	playCount: number;
	subCount: number;
	shareCount: number;
	commentCount: number;
	duration: number;
	nType: number;
	publishTime: string;
	price?: any;
	brs: Br[];
	artists: Artist[];
	commentThreadId: string;
	videoGroup: VideoGroup[];
}

export interface Br {
	size: number;
	br: number;
	point: number;
}

export interface Artist {
	id: number;
	name: string;
	img1v1Url: string;
	followed: boolean;
	alias?: string[];
	transNames?: any;
}

export interface VideoGroup {
	id: number;
	name: string;
	type: number;
	alg?: any;
}

// mvall
export interface MvAll {
	id: number;
	cover: string;
	name: string;
	playCount: number;
	briefDesc?: any;
	desc?: any;
	artistName: string;
	artistId: number;
	duration: number;
	mark: number;
	subed: boolean;
	artists: Artist[];
}

// getMvUrl
export interface MvUrl {
  id: number;
	url: string;
	r: number;
	size: number;
	md5: string;
	code: number;
	expi: number;
	fee: number;
	mvFee: number;
	st: number;
	promotionVo?: any;
	msg: string;
}

// mvdetailinfo
export interface MvDetailInfo {
	likedCount: number;
	shareCount: number;
	commentCount: number;
	liked: boolean;
	code: number;
}

// relatedVideo
export interface RelatedAllVideo {
	alg: string;
	type: number;
	title: string;
	durationms: number;
	creator: Creator[];
	playTime: number;
	coverUrl: string;
	vid: string;
	aliaName?: any;
	transName?: any;
	markTypes: any[];
	liveRoom?: any;
}

export interface Creator {
	userId: number;
	userName: string;
}

// videodetail
export interface VideoDetail {
	vid: string;
	creator: Creator;
	coverUrl: string;
	title: string;
	description: string;
	durationms: number;
	threadId: string;
	playTime: number;
	praisedCount: number;
	commentCount: number;
	shareCount: number;
	subscribeCount: number;
	publishTime: number;
	avatarUrl: string;
	width: number;
	height: number;
	resolutions: Resolution[];
	videoGroup: VideoGroup[];
	hasRelatedGameAd: boolean;
	advertisement: boolean;
	authType: number;
	markTypes: number[];
	videoUserLiveInfo?: any;
}

export interface Expert {
	1: string;
}

export interface AvatarDetail {
	userType: number;
	identityLevel: number;
	identityIconUrl: string;
}

export interface Creator {
	authStatus: number;
	followed: boolean;
	accountStatus: number;
	userId: number;
	userType: number;
	nickname: string;
	avatarUrl: string;
	expertTags?: any;
	experts: Expert;
	avatarDetail: AvatarDetail;
}

export interface Resolution {
	size: number;
	resolution: number;
}

export interface VideoGroup {
	id: number;
	name: string;
	alg?: any;
}

// videourl
export interface VideoUrl {
	id: string;
	url: string;
	size: number;
	validityTime: number;
	needPay: boolean;
	payInfo?: any;
	r: number;
}

// videogrouplist
export interface VideoGrouplist {
	id: number;
	name: string;
	url?: any;
	relatedVideoType?: any;
	selectTab: boolean;
	abExtInfo?: any;
}

// videogroup
export interface VideoLists {
	msg: string;
	code: number;
	hasmore: boolean;
	datas: VideoListDatas[];
	rcmdLimit: number;
}

export interface VideoListDatas {
	type: number;
	displayed: boolean;
	alg: string;
	extAlg?: any;
	data: VideoListData;
}

export interface VideoListData {
	alg: string;
	scm: string;
	threadId: string;
	coverUrl: string;
	height: number;
	width: number;
	title: string;
	description?: any;
	commentCount: number;
	shareCount: number;
	resolutions: Resolution[];
	creator: CreatorVideoGroup;
	urlInfo?: any;
	videoGroup: VideoGroup[];
	previewUrl: string;
	previewDurationms: number;
	hasRelatedGameAd: boolean;
	markTypes: number[];
	relateSong: any[];
	relatedInfo?: any;
	videoUserLiveInfo?: any;
	vid: string;
	durationms: number;
	playTime: number;
	praisedCount: number;
	praised: boolean;
	subscribed: boolean;
}

export interface CreatorVideoGroup {
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
	experts: Expert;
	djStatus: number;
	vipType: number;
	remarkName?: any;
	avatarImgIdStr: string;
	backgroundImgIdStr: string;
}

export interface Resolution {
	resolution: number;
	size: number;
}

export interface Expert {
	1: string;
	2: string;
}