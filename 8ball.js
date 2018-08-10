bot.on('message', message => {
    const responses = [
        'Oui', 'Non', 'Peut être', 'Je ne peux pas répondre à cette question', "J'en suis sur",
     ]
    if (message.content == "/8ball"){
        message.reply("Erreur ! Faite `/8ball` + Votre question ;)")
        console.log('8BALL ERROR')
    
    }else{
    
     if (message.content.startsWith('/8ball')) {
        message.channel.send(`${responses[Math.floor(Math.random() * responses.length)]}`);
        console.log('8BALL PLAY')
     }
    }
})
