const { SlashCommandBuilder } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('shout')
		.setDescription('Envia sua mensagem pros canais do telegram e pros servidores do discord'),
	async execute(interaction) {
		await interaction.reply('Pong!');
	},
};