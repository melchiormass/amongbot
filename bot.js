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
            while (booleanFunc == True){
                message.channel.send('Les joueurs ont été mutés !');
                booleanFunc = false;
            }
        });
    }else if (message.content == '!unmuteall'){
        members.forEach(member =>{
            member.voice.setMute(false);
            member.voice.setDeaf(false);
            while(booleanFunc == True){
                message.channel.send('Les joueurs ont été démutés !');
                booleanFunc = false;
            }
        });
    }
});

booleanFunc = True;

client.login('ODA5ODY4MjUwMDI4MTc5NTU2.YCbWlQ.uX6JvtVMdnBjbd6na9C-qgcmBrE');
