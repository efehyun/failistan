module.exports = {
    name: 'temizle',
    description: 'mesaj temizler',
    cooldown: 10,
    permissions: ["MANAGE_MESSAGES"],
    async execute(client, message, args, Discord){

        if(message.member.roles.cache.has('812667281049255937')){

        if(!args[0]) return message.reply("Lütfen temizlemek istediğin mesaj sayısını gir.");
        if(isNaN(args[0])) return message.reply("Lütfen mesaj sayısını giriniz.");

        if(args[0] > 100) return message.reply("100 mesajtan fazlasını silemezsin.");
        if(args[0] < 1) return message.reply("En az 1 mesaj silmelisin.");

        await message.channel.messages.fetch({limit: args[0]}).then(messages =>{
            message.channel.bulkDelete(messages);
        });
        } else return message.channel.send("Komutu kullanmak için iznin yok.");
    }
}