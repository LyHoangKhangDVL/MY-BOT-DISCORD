const db = require("../mongoDB");
const { EmbedBuilder } = require('discord.js');

module.exports = {
  name: "resume",
  description: "Start paused music.",
  permissions: "0x0000000000000800",
  options: [],
  voiceChannel: true,
  run: async (client, interaction) => {
    const queue = client.player.getQueue(interaction.guild.id);

    try {
      if (!queue) {
        return interaction.reply({ content: '⚠️ Queue is empty!!', ephemeral: true });
      }

      if (!queue.paused) {
        return interaction.reply({ content: '⚠️ No paused music!!', ephemeral: true });
      }

      const success = queue.resume();

      const embed = new EmbedBuilder()
        .setColor('#7645fe')
        .setAuthor({
          name: 'Song Resumed',
          iconURL: 'https://media.discordapp.net/attachments/1203768107697573900/1203770662280368168/20240129_005847_0000.png?ex=65d24dca&is=65bfd8ca&hm=d7476a326f0f26d17b9ef380ef01bc722cf67ef4e7bfa136a908748de9515625&',
          url: 'https://discord.gg/5TwPhJVjCk'
        })
        .setDescription(success ? '**The music springs back to life!!**' : '❌ Error: Unable to resume song')
        

      return interaction.reply({ embeds: [embed] });
    } catch (e) {
      console.error(e);
    }
  },
};
