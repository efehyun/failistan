module.exports = {
    name : 'unmute',
    description: "gerisustur komutudur.",
    permissions: ["MUTE_MEMBERS"],
    execute(client, message, args){
            const target = message.mentions.users.first();
            if(target){
                let mainRole = message.guild.roles.cache.find(role => role.id === '812642757213945877');
                let muteRole = message.guild.roles.cache.find(role => role.id === '812666640780230677');

                let memberTarget= message.guild.members.cache.get(target.id);

                memberTarget.roles.remove(muteRole.id);
                memberTarget.roles.add(mainRole.id);
                message.channel.send(`<@${memberTarget.user.id}> kullanıcısının susturu geri açıldı.`)
            } else{
                message.channel.send('Kullanıcıyı sunucuda bulamadık.');
            }


        } 
        }




