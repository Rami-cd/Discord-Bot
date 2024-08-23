const { SlashCommandBuilder } = require('discord.js');
const axios = require('axios');

const GIPHY_API_KEY = 'your_giphy_api_key';  // Replace with your Giphy API key

module.exports = {
    data: new SlashCommandBuilder()
        .setName('gif')
        .setDescription('Sends a random gif!')
        .addStringOption(option =>
            option.setName('category')
                .setDescription('The gif category')
                .setRequired(true)
                .addChoices(
                    { name: 'Funny', value: 'funny' },
                    { name: 'Meme', value: 'meme' },
                    { name: 'Movie', value: 'movie' },
                )),
    async execute(interaction) {
        const category = interaction.options.getString('category');
        
        try {
            // Fetch a random GIF from Giphy
            const response = await axios.get(`https://api.giphy.com/v1/gifs/random`, {
                params: {
                    api_key: GIPHY_API_KEY,
                    tag: category,
                    rating: 'g'
                }
            });

            const gifUrl = response.data.data.image_original_url;
            await interaction.reply(gifUrl);
        } catch (error) {
            console.error('Error fetching GIF:', error);
            await interaction.reply('Sorry, I couldn\'t find a GIF right now.');
        }
    },
};
