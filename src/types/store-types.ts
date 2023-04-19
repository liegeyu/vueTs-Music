// 定义接口 interface
// vuex 相关
import { Menus } from './layout-types'
import { SearchSuggest } from './search-types'
import { Song, SongUrl } from "./player-types"

export interface RootState {}

export interface UserState {
  token: string;
  cookie: string;
  showLogin: boolean;
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

export interface LayoutState {
  menus: Menus[];
}

export interface SearchState {
	searchValue: string;
	suggestData: SearchSuggest;
}

export interface PlayerState {
	audio: HTMLAudioElement;
	music: Song;
	musicUrl: SongUrl;
	playerList: Song[];
	playerListId: number;
	musicId: number;
	beforeVolume: number;
	volume: number;
	currentTime: number;
	duration: number;
	isMuted: boolean;
	isPause: boolean;
	isEnded: boolean;
	loopType: number;
	randomSongIndexArr: number[];
}

export interface PlaylistStore {
	songListId: number;
	songlist: Song[];
}