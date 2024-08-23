const {SlashCommandBuilder} = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('server-info')
        .setDescription('dispay informations about the server'),
    async execute(interaction) {
        await interaction.reply(`this is the ${interaction.guild.name} guild of ${interaction.guild.memberCount} member${interaction.guild.memberCount === 1 ? '':'s'}.`);
    }
}