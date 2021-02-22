const { MessageEmbed } = require('discord.js')

module.exports = {
    name: 'dcyardım',
    description: 'dc için yardım komudu',
    cooldown: 120,
    permissions: ["SEND_MESSAGES"],
    execute(client, message, args, Discord){
        const dcYardımEmbed = new MessageEmbed()
        .setColor('#f3ce75')
        .setTitle('Sunucu Hakkında')
        .setAuthor(message.author.tag, message.author.displayAvatarURL({ dynamic: true }))
        .setDescription('Sunucumuz kanalları hakkında bilgiler.')
        .setTimestamp(Date.now())
        .addFields(
            {name: 'Genel Kanalımız', value: '<#812642970306084874> kanalımızda Apex dışı konularda  konuşabilirsiniz.'},
            {name: 'Highlights ,', value: '<#812770284557565953> kanalımızda güzel bulduğunuz oyun anlarını paylaşabilirsiniz.'},
            {name: 'Yardım-Destek', value: 'Oyun içinde bir hata ile mi karşılaşıyorsunuz? Bunu <#812770382691565588> kanalında belirtin ve diğer sunucu üyeleri ile yardımlaşın.'},
            {name: 'Bot Komutları', value: 'Topluluğa açık olan bot komutlarını <#812770344943222824> kanalında kullanabilirsiniz.'},
            {name: 'Oyun Odaları', value: '<#812774210296348672> kategorisinde bulunan odalarda oyun oynayabilirsiniz.'},
            {name: 'Ranked Oyun Odaları', value: '<#812776614403506249> kategorisinde bulunan odalarda dereceli oyun oynayabilirsiniz.'}
        )
        .setFooter('Failistan |  Apex Legends Türkiye | Discord Bilgi');
        message.channel.send(dcYardımEmbed);
    }
}