module.exports = {
    name : 'mute',
    permissions: ["MANAGE_MESSAGES"],
    description: "sustur komutudur.",
    permissions: ["MUTE_MEMBERS"],
    execute(client, message, args){
            const target = message.mentions.users.first();
            if(target){
                let mainRole = message.guild.roles.cache.find(role => role.id === '812642757213945877');
                let muteRole = message.guild.roles.cache.find(role => role.id === '812666640780230677');

                let memberTarget= message.guild.members.cache.get(target.id);

                memberTarget.roles.remove(mainRole.id);
                memberTarget.roles.add(muteRole.id);
                message.channel.send(`<@${memberTarget.user.id}> kullanıcı susturuldu.`)
            } else{
                message.channel.send('Kullanıcıyı sunucuda bulamadık.');
            }



    }

}
