module.exports = {
  TOKEN: "",
  ownerID: ["1053871662283628615", ""],
  botInvite: "https://discord.com/api/oauth2/authorize?client_id=1203769055912267807&permissions=8&scope=bot",
  supportServer: "https://discord.gg/5TwPhJVjCk",
  mongodbURL: "mongodb+srv://shiva:shiva@musicbotyt.ouljywv.mongodb.net/?retryWrites=true&w=majority",
  status: 'LONELY STARS',
  commandsDir: './commands',
  language: "vi",
  embedColor: "00fbff",
  errorLog: "",


  sponsor: {
    status: false,
    url: "https://www.youtube.com/channel/UCPbAvYWBgnYhliJa1BIrv0A",
  },

  voteManager: {
    status: false,
    api_key: "",
    vote_commands: ["back", "channel", "clear", "dj", "filter", "loop", "nowplaying", "pause", "playnormal", "playlist", "queue", "resume", "save", "play", "skip", "stop", "time", "volume"],
    vote_url: "",
  },

  shardManager: {
    shardStatus: false
  },

  playlistSettings: {
    maxPlaylist: 10,
    maxMusic: 75,
  },

  opt: {
    DJ: {
      commands: ['back', 'clear', 'filter', 'loop', 'pause', 'resume', 'skip', 'stop', 'volume', 'shuffle']
    },

    voiceConfig: {
      leaveOnFinish: false,
      leaveOnStop: false,
      leaveOnEmpty: {
        status: true,
        cooldown: 1,
      },

    },

    maxVol: 15000000000000000000000000000000000000000000000,

  }
}
