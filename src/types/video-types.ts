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
}

export interface VideoGroup {
	id: number;
	name: string;
	type: number;
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