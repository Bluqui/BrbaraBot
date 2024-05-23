const { Events, ActivityType } = require('discord.js');

module.exports = {
	name: Events.ClientReady,
	once: true,
	execute(client) {
		console.log(`Ready! Logged in as ${client.user.tag}`);
		client.user.setPresence({
			activities: [{ name: `aos seus comandos!`, type: ActivityType.Listening }],
			status: 'dnd', // 'ABACATE' não é um status válido, use 'online', 'idle', 'dnd'
		});

		setInterval(() => client.videoCheck(), 5 * 1000);
	},
};