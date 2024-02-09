module.exports = {
  TOKEN: "",
  ownerID: ["1053871662283628615", ""],
  botInvite: "https://discord.com/api/oauth2/authorize?client_id=1203769055912267807&permissions=8&scope=bot",
  supportServer: "https://discord.gg/5TwPhJVjCk",
  mongodbURL: "mongodb+srv://progamer:h8W7ssRe14l68w4P@cluster0.d5ps15t.mongodb.net/?retryWrites=true&w=majority",
  status: 'LONELY STARS',
  commandsDir: './commands',
  language: "vi",
  embedColor: "00fbff",
  errorLog: "",


  sponsor: {
    status: true,
    url: "https://discord.gg/wZHjUG4AYC",
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
    maxPlaylist: 100,
    maxMusic: 750,
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

    maxVol: 999999999999999,

  }
}
