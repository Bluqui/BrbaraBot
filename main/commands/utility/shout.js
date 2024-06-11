const { SlashCommandBuilder } = require('discord.js');
const { message } = require('telegraf/filters');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('shout')
		.setDescription('Envia sua mensagem pros canais do telegram e pros servidores do discord')
        .addStringOption(option =>
            option.setName('formato')
                .setDescription('Se a mensagem terá imagem ou se será somente texto')
                .setRequired(true)
                .addChoices(
                    { name: 'Texto', value: 'txt' },
                    { name: 'Texto + Imagem', value: 'img' },
                )),
	async execute(interaction) {
		const tipoEscolhido = interaction.options.getString('formato')
        const collectorFilter = m => m.content.includes('a')
        const collector = interaction.channel.createMessageCollector({ time: 5_000 });

        await interaction.reply(`Você escolheu ${tipoEscolhido}.\nEnvie a mensagem que será divulgada`)

        collector.on('collect', m => {
            console.log(`Collected ${m.content}`);
        });
        
        collector.on('end', collected => {
            console.log(`Collected ${collected.size} items`);
        });

        /*await interaction.followUp({ content: `Você escolheu ${tipoEscolhido}.\nEnvie a mensagem que será divulgada`, fetchReply: true} )
        .then( () => {
            interaction.channel.awaitMessages({ filter: collectorFilter, max: 1, time: 30_000, errors: ['time'] })
			.then(collected => {
				interaction.followUp(`Sua mensagem a ser divulgada é:\n${collected.first()}\n Correto?`);
			})
			.catch(collected => {
				interaction.reply('Parece que você demorou de mais... :(');
			});
        } );*/


        //await interaction.reply(`${message}`);
	},
};