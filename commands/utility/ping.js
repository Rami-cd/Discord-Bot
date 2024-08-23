const {SlashCommandBuilder} = require('discord.js');

module.exports = {
    cooldown: 5, // add couldown to prevent spam.
    data: new SlashCommandBuilder()
        .setName('ping')
        .setDescription("send a ping"),
    async execute(interaction) {
        await interaction.reply('ping');
    },
};