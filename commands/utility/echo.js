const { SlashCommandBuilder } = require('discord.js');

module.exports = {
    data : new SlashCommandBuilder()
        .setName('echo')
        .setDescription('Replies with your input!')
        .addStringOption(option =>
            option.setName('input')
                .setDescription('The input to echo back'))
        .addChannelOption(option =>
            option.setName('channel')
                .setDescription('The channel to echo into')) // Correctly nested description
        .addBooleanOption(option =>
            option.setName('ephemeral') // Decide if the echo should be public or not
                .setDescription('Whether or not the echo should be ephemeral')),

    async execute(interaction) {
        const input = interaction.options.getString('input');
        const ephemeral = interaction.options.getBoolean('ephemeral')|| false;
        const channel = interaction.options.getChannel('channel');

        if(channel) {
            await channel.send(input);
            await interaction.reply({content: `Message sent to ${channel}`, ephemeral: true});
        }else{
            await interaction.reply({content: input, ephemeral: ephemeral});
        }
    }
};
