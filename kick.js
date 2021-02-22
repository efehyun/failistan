const { MessageEmbed } = require('discord.js')

module.exports = {
    name: 'kick',
    description: 'kick komudu',
    permissions: ["KICK_MEMBERS"],
    execute(client, message, args, cmd, Discord){
        const member = message.mentions.users.first();
        const memberTarger = message.guild.members.cache.get(member.id);
        const dcYardımEmbed = new MessageEmbed()
        .setColor('ff2d00')
        .setTitle('Kullanıcı Bilgisi')
        .setTimestamp(Date.now())
        .setDescription(`${memberTarger} kullanıcısı kicklendi.`)
        .setFooter('Failistan |  Apex Legends Türkiye');
    
        
        if(member){
            const memberTargerId = message.guild.members.cache.get(member.id);
            memberTargerId.ban();
            message.channel.send(dcYardımEmbed);
        }else{
            message.channel.send('Kullanıcı kicklenemedi.');
        }
    
    }
}