export default {
  menus: (state) => { return state.layout.menus },
  songListId: (state) => { return state.playlist.songListId },
  songlist: (state) => { return state.playlist.songlist },
  music: (state) => { return state.player.music },
  currentMusicIndex: (state) => { 
    return state.player.playerList.findIndex(
      song => song.id === state.player.musicId
    ); 
  },
  playerListId: (state) => { return state.player.playerListId },
  playerList: (state) => { return state.player.playerList },
  playerListLen: (state) => { return state.player.playerList.length },
  volume: (state) => { return state.player.volume },
  currentTime: (state) => { return state.player.currentTime },
  duration: (state) => { return state.player.duration },
  isPause: (state) => { return state.player.isPause },
  isMuted: (state) => { return state.player.isMuted },
  loopType: (state) => { return state.player.loopType },
  showPlayerList: (state) => { return state.player.showPlayerList },
  mvDetail: (state) => { return state.mvdetail.mvDetail },
  mvUrl: (state) => { return state.mvdetail.mvUrl },
  relatedAllVideo: (state) => { return state.mvdetail.relatedAllVideo },
}