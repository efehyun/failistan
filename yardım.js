const { MessageEmbed } = require('discord.js');

module.exports = {
    name: 'yardım',
    description: 'bot için yardım komudu',
    cooldown: 120,
    permissions: ["SEND_MESSAGES"],
    execute(client, message, args, cmd, Discord){

        const yardımEmbed = new MessageEmbed()
        .setColor('RANDOM')
        .setTitle('Bot Hakkında')
        .setAuthor(message.author.tag, message.author.displayAvatarURL({ dynamic: true }))
        .setTimestamp(Date.now())
        .setDescription('Üyeler için açık olan komutlar aşağıdaki gibidir.')
        .addFields(
            {name: 'Prefix', value: '*'},
            {name: '*yardım', value: 'Bot komutlar için yardım komutudur.'},
            {name: '*dcyardım', value: 'Sunucu kanalları hakkında bilgi veren komuttur.'},
            {name: '*kurallar', value: 'Kuralları gösteren komuttur.'},
        )
        .setFooter('Failistan | Apex Legends Türkiye | Bot Yardım');
        
        message.channel.send(yardımEmbed);
    }   



}