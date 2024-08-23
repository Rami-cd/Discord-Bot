const { Events } = require('discord.js');

module.exports = {
	name: Events.ClientReady,
	once: true, // sepcifies if this event should run once or no.
	execute(client) {
		console.log(`Ready! Logged in as ${client.user.tag}`);
	},
};
