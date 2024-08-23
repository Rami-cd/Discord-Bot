const {SlashCommandBuilder} = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('user-info')
        .setDescription('provides information about the user.'),
    async execute (interaction) {
        // interaction.member the guildmember object, (the server).
        // interaction.user is the user obj, is the user who run the cmd.
        await interaction.reply(`${interaction.user.username} who joined at ${interaction.guild.joinedAt}, ran this command.`);
    },
};