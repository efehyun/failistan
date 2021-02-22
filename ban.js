const { MessageEmbed } = require('discord.js')

module.exports = {
    name: 'ban',
    description: 'ban komudu',
    permissions: ["BAN_MEMBERS"],
    execute(client, message, args, cmd, Discord){
        const member = message.mentions.users.first();
        const memberTarger = message.guild.members.cache.get(member.id);
        const dcYardımEmbed = new MessageEmbed()
        .setColor('ff2d00')
        .setTitle('Ban')
        .setTimestamp(Date.now())
        .setDescription(`${memberTarger} kullanıcısı banlandı.`)
        .setFooter('Failistan |  Apex Legends Türkiye | Ban');
    
        
        if(member){
            const memberTargerId = message.guild.members.cache.get(member.id);
            memberTargerId.ban();
            message.channel.send(dcYardımEmbed);
        }else{
            message.channel.send('Kullanıcı banlanamadı.');
        }
    
    }
}