const { MessageEmbed } = require('discord.js')

module.exports = {
    name : 'kurallar',
    description: "Kurallar için embed komutudur.",
    cooldown: 120,
    permissions: ["SEND_MESSAGES"],
    execute(client, message, args, Discord) {
        const newEmbed = new MessageEmbed()
        .setColor('#f3ce75')
        .setTitle('Sunucu Kuralları')
        .setAuthor(message.author.tag, message.author.displayAvatarURL({ dynamic: true }))
        .setDescription('Sunucumuzun kuralları aşağıdaki gibidir.')
        .addFields(
            {name: 'Kural 1', value: 'Herkese karşı nazik olun.'},
            {name: 'Kural 2', value: 'Oyuncu aramalarınızı lütfen <#813037876148568084> kanalında yapın.'},
            {name: 'Kural 3', value: 'NSFW içerikler yasaktır.'}
        )
        .setFooter('Failistan | Apex Legends Türkiye');
        message.channel.send(newEmbed);
    }
    
}