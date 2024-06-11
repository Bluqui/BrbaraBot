const { SlashCommandBuilder } = require('discord.js');
const { message } = require('telegraf/filters');

async function askNCollect(msgToAsk, time, place) {
        place.channel.send(msgToAsk).then(msg=>{msg.delete({timeout: time})});

    const filter = m => m.author.id === message.author.id;
    const collectorPromise = new Promise(resolve => {
        const collector = place.channel.createMessageCollector(filter);
        collector.once('collect', m => resolve(m));
        collector.once('end', () => resolve(null));
        setTimeout(() => resolve(null), time);
    });

    const collected = await Promise.race([collectorPromise, new Promise(resolve => setTimeout(() => resolve(null), time))]);

    return collected;
}

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
        await interaction.reply(`Você escolheu ${tipoEscolhido}.`);
        const collected = await askNCollect('Envie a mensagem que será divulgada', 400000, interaction);
        if(collected){
            message.reply(collected)
        }


        //await interaction.reply(`${message}`);
	},
};