// 评论相关 interface
// /comment/playlist
export interface CommentPlaylist {
	isMusician: boolean;
	cnum: number;
	userId: number;
	topComments: any[];
	moreHot: boolean;
	hotComments: HotComment[];
	commentBanner?: any;
	code: number;
	comments: Comments[];
	total: number;
	more: boolean;
}

export interface HotComment {
	user: User;
	beReplied: any[];
	pendantData?: any;
	showFloorComment?: any;
	status: number;
	commentId: number;
	content: string;
	richContent?: any;
	contentResource?: any;
	time: number;
	timeStr: string;
	needDisplayTime: boolean;
	likedCount: number;
	expressionUrl?: any;
	commentLocationType: number;
	parentCommentId: number;
	decoration: Decoration;
	repliedMark?: any;
	grade?: any;
	userBizLevels?: any;
	ipLocation: IpLocation;
	owner: boolean;
	liked: boolean;
}

export interface Comments {
	user: User;
	beReplied: any[];
	pendantData: PendantData;
	showFloorComment?: any;
	status: number;
	commentId: number;
	content: string;
	richContent?: any;
	contentResource?: any;
	time: number;
	timeStr: string;
	needDisplayTime: boolean;
	likedCount: number;
	expressionUrl?: any;
	commentLocationType: number;
	parentCommentId: number;
	decoration: Decoration;
	repliedMark?: any;
	grade?: any;
	userBizLevels?: any;
	ipLocation: IpLocation;
	owner: boolean;
	liked: boolean;
}

export interface Decoration {}

export interface IpLocation {
	ip?: any;
	location: string;
	userId: number;
}

export interface User {
	locationInfo?: any;
	liveInfo?: any;
	anonym: number;
	commonIdentity?: any;
	userId: number;
	avatarDetail?: any;
	userType: number;
	avatarUrl: string;
	followed: boolean;
	mutual: boolean;
	remarkName?: any;
	socialUserId?: any;
	vipRights: VipRight;
	nickname: string;
	authStatus: number;
	expertTags?: any;
	experts?: any;
	vipType: number;
	target?: any;
}

export interface PendantData {
	id: number;
	imageUrl: string;
}

export interface VipRight {
	associator: Associator;
	musicPackage: MusicPackage;
	redplus?: any;
	redVipAnnualCount: number;
	redVipLevel: number;
}

export interface Associator {
	vipCode: number;
	rights: boolean;
	iconUrl: string;
}

export interface MusicPackage {
	vipCode: number;
	rights: boolean;
	iconUrl: string;
}