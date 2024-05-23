const { EmbedBuilder } = require('discord.js');
const Parser = require('rss-parser');
const parser = new Parser();
const fs = require('fs');
const path = require('path');


module.exports = (client, bot) => {
	client.videoCheck = async () => {
        let data;

        try {
            data = await parser.parseURL('https://youtube.com/feeds/videos.xml?channel_id=UC_1LM6bRLPtFWfEm7_klEtQ');
			
        } catch (error) {
            console.error('Failed to fetch the RSS feed:', error);
            return;
        }

        // Adicione logs para verificar a estrutura de `data`
        //console.log('RSS feed data:', data);

        if (!data || !data.items || data.items.length === 0) {
            console.error('No items found in the RSS feed');
            return;
        }

        const filePath = path.join(__dirname, 'video.json');
        let jsonData;

        try {
            const rawData = fs.readFileSync(filePath, 'utf8');
            jsonData = JSON.parse(rawData);
        } catch (error) {
            console.error('Failed to read or parse video.json:', error);
            return; 
        }

		if (jsonData.id !== data.items[0].id) {
			// New video or video not sent
			fs.writeFileSync(filePath, JSON.stringify({ id: data.items[0].id }));

			const guild = await client.guilds
				.fetch('1242439113131692062') //508850110969413632
				.catch(console.error);

			const channel = await guild.channels
				.fetch('1243203472673865740') //1041581919688720467
				.catch(console.error);

			const { title, link, id, author } = data.items[0];
			const embed = new EmbedBuilder({
				title: title,
				url: link,
				timestamp: Date.now(),
				image: {
					url: `https://img.youtube.com/vi/${id.slice(9)}/maxresdefault.jpg`,
				},
				author: {
					name: author,
					iconURL:
						'https://yt3.googleusercontent.com/WwnsPTSVrzAhImIpff3oowku1hhLlOfaHYUPFiKWpBZdYnv1niokyrptzicQJv60SatAZTMrUA=s160-c-k-c0x00ffffff-no-rj',
					url: 'https://www.youtube.com/@STUDIOCAUDAS/?sub_confirmation=1',
				},
				footer: {
					text: client.user.tag,
					iconURL: client.user.displayAvatarURL(),
				},
			});

			await channel.send({ embeds: [embed] })
            .then(async message => {
                console.log("ENviando MENSAGEM");

                // Enviando mensagem para o chat do Telegram usando a instância do bot do Telegraf
                await bot.telegram.sendMessage(-1001742331684, `Saiu vídeo novo lá na Studio Caudas! Bora lá conferir ^^\nhttps://youtu.be/r5PV5f-IYF0?si=m-qZkeNozHmhEmvJ`);
            })
            .catch(console.error);
		}
	};
};
