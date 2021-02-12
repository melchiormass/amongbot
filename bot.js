const Discord = require('discord.js');
const client = new Discord.Client();


client.once('ready', () => {
    console.log('Le bot est prêt !');
})


client.on('message', (message) => {
    const channel = message.channel;
    const members = channel.members;

    if(message.content == '!muteall'){
        members.forEach(member =>{
            member.voice.setMute(true);
            member.voice.setDeaf(true);
            message.channel.send('Les joueurs ont été mutés !')
        });
    }else if (message.content == '!unmuteall'){
        members.forEach(member =>{
            member.voice.setMute(false);
            member.voice.setDeaf(false);
            message.channel.send('Les joueurs ont été démutés !')
        });
    }
});


client.login('YOUR_DISCORD_BOT_TOKEN');
