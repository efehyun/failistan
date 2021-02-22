const { MessageEmbed } = require('discord.js')
module.exports = {
    name: 'rolbilgi',
    aliases: [" "],
    permissions: ["SEND_MESSAGES"],
    description: 'roller hakkında bilgi komutu',
    execute(client, message, args, Discord){
        const rolbilgiEmbed = new MessageEmbed()
        .setColor('RANDOM')
        .setTitle('Sunucu Rolleri Hakkında')
        .setAuthor(message.author.tag, message.author.displayAvatarURL({ dynamic: true }))
        .setDescription('Sunucumuzun rolleri aşağıdaki gibidir.')
        .addFields(
            {name: '<@KOD>', value: ' Moderator olan kişilere verilir.'},
            {name: '<@KOD>', value: '<#kod> kanalında yardım konusunda bilgili olan kişilere verilir.'},
            {name: '<@KOD>', value: ''},
            {name: '<@KOD>', value: ''},
            {name: '<@KOD>', value: ''},
            {name: '<@KOD>', value: ''},
            {name: '<@KOD>', value: ''},
            {name: '<@KOD>', value: ''},
            {name: '<@KOD>', value: ''},
            {name: '<@KOD>', value: ''},

        )
        .setFooter('Failistan |  Apex Legends Türkiye | Rol Bilgisi');
        message.channel.send(rolbilgiEmbed);
    }
}
