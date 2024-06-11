const { SlashCommandBuilder } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('shout')
		.setDescription('Envia sua mensagem pros canais do telegram e pros servidores do discord')
        .addStringOption(option =>
            option.setName('formato')
                .setDescription('Se a mensagem terá imagem ou se será somente texto')
                .setRequired(true)
                .addChoices(
                    { name: 'Texto', value: 'gif_funny' },
                    { name: 'Texto + Imagem', value: 'gif_meme' },
                )),
	async execute(interaction) {
		await interaction.reply('Pong!');
	},
};