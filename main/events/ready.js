const { Events, ActivityType } = require('discord.js');

module.exports = {
	name: Events.ClientReady,
	once: true,
	execute(client) {
		console.log(`Ready! Logged in as ${client.user.tag}`);
		client.user.setPresence({
			activities: [{ name: `aos seus comandos!`, type: ActivityType.Listening }],
			status: 'ABACATE',
		});
		async function telegramBot() {
			'../utility/telegramSender.js'
		}
	},
};