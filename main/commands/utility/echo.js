const { SlashCommandBuilder, PermissionFlagsBits } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('echo')
		.setDescription('Repete sua mensagem')
		.addStringOption(option =>
			option
				.setName('message')
				.setDescription('A mensagem pra repetir'))
		.setDefaultMemberPermissions(PermissionFlagsBits.BanMembers)
		.setDMPermission(false),
};

module.exports = {
	// data: new SlashCommandBuilder()...
	async execute(interaction) {
        const message = interaction.options.getString('message') ?? 'No reason provided';

		await interaction.reply(`${message}`);
	},
};