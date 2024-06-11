const { EmbedBuilder } = require('discord.js');
module.exports = (client, bot) => {
    async function shout(mensagem, img) {

        const { title, link, id, author } = data.items[0];
        const embed = new EmbedBuilder({
            title: title,
            description: mensagem,
            url: link,
            timestamp: Date.now(),
            image: {
                url: img,
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

        const guild = await client.guilds.fetch('508850110969413632').catch(console.error); //508850110969413632
        const channel = await guild.channels.fetch('1041581919688720467').catch(console.error); //1041581919688720467

        const canalDoLunar = -1001156955497
        const furryArteRPG = -1001384735750
        const studioCaudas = -1001334148893

        await channel.send({ content: "@everyone", embeds: [embed] });
        await bot.telegram.sendMessage(canalDoLunar, mensagem);
        await bot.telegram.sendMessage(furryArteRPG, mensagem);
        await bot.telegram.sendMessage(studioCaudas, mensagem);
    }
}