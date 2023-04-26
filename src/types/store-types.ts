// 定义接口 interface
// vuex 相关
import { Menus } from './layout-types'
import { SearchSuggest } from './search-types'
import { Song, SongUrl } from "./player-types"
import { UserProfile, Account } from "./user-types"
import { 
	MvUrl, 
	MvDetail, 
	MvDetailInfo, 
	VideoDetail, 
	VideoUrl, 
	RelatedAllVideo 
} from "./video-types";

export interface RootState {}

export interface UserState {
  token: string;
  cookie: string;
	userId: number;
	qrKey: string;
	qrUrl: string;
	qrImg: string;
	qrState: number;
  showLogin: boolean;
  profile: UserProfile;
	account: Account;
}

export interface LayoutState {
	scrollBar: HTMLElement | null;
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
	currentTime: number | string;
	duration: number;
	isMuted: boolean;
	isPause: boolean;
	isEnded: boolean;
	loopType: number;
	randomSongIndexArr: number[];
	showPlayerList: boolean;
}

export interface PlaylistStore {
	songListId: number;
	songlist: Song[];
}

export interface VideoDetailState {
	mvDetail: MvDetail;
	mvUrl: MvUrl;
	videoDetail: VideoDetail;
	videoUrl: VideoUrl[];
	relatedAllVideo: RelatedAllVideo[];
}

export interface VideoState {
	selectArea: string;
	selectKind: string;
	selectOrder: string;
	areas: string[];
	kinds: string[];
	orders: string[];
}