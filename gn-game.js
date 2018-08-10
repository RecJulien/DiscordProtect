bot.on('message', function(message){
    if (message.content == "/gn start"){
        message.channel.send(message.author + " à Lancer la partie !")
        party_launch = true;
        number_random = Math.floor(Math.random() * (500 - 0) + 0)
        bot.users.get('285190114236170240').send("Un Guess Game vient d'être lancer part : "+ message.author + " Nombre : " + number_random);
        console.log(number_random);
   }
    if (party_launch && message.content != null){
        if (Number.isInteger(parseInt(message.content))){

            if (message.content > number_random){
                message.reply('Plus petit !')
                message.react('🔚')
            }
            else if (message.content < number_random){
                message.reply('Plus Grand')
                message.react('🔜')
            }
            else{
                message.channel.send(message.author + " à Gagner la partie ! Le Nombre été : "+ number_random)
                party_launch = false;
                message.react('🎉')
                }
}}
    if (message.content == "/gn stop"){
    if (party_launch == true){
    message.reply("Partie stopper !")
    party_launch == false;
            
        }else{
        message.reply("Il n'y as pas de partie en cours")}
        message.react('❌')
}})

bot.on('message', message => {
    if(message.content.startsWith(prefix +'gn cheat')) {
        if (party_launch == true){
        message.delete(message.author);
        message.channel.send('Ohlala ! '+ message.author +' à cheater !')
        message.author.send('Voici le nombre : '+ number_random);
        
        }else{
        party_launch == false;
        message.reply("Il n'y as pas de partie en cours")}
        }})
