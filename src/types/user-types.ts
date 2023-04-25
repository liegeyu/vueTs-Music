export interface LoginStatus {
	code: number;
	account: Account;
	profile: UserProfile;
}

export interface UserAccount {
	code: number;
	account: Account;
	profile: UserProfile;
}

export interface UserProfile {
  userId: number;
	userType: number;
	nickname: string;
	avatarImgId: number;
	avatarUrl: string;
	backgroundImgId: number;
	backgroundUrl: string;
	signature?: any;
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
	description?: any;
	detailDescription?: any;
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

export interface Account {
	id: number;
	userName: string;
	type: number;
	status: number;
	whitelistAuthority: number;
	createTime: number;
	tokenVersion: number;
	ban: number;
	baoyueVersion: number;
	donateVersion: number;
	vipType: number;
	anonimousUser: boolean;
	paidFee: boolean;
}

// visitorLogin
export interface VisitorInfo {
  code: number;
  userId: number;
  createTime: number;
  cookie: string;
}

// QR-code
export interface QRCodeKey {
	unikey: string;
}

export interface QRCodeCreateData {
	qrurl: string;
	qrimg: string;
}

export interface QRCodeKeyState {
	code: number;
	message: string;
	cookie: string;
}