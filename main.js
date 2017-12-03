//DISCORD PROTECT CODE 
//BY Iriko#2004
const Discord = require('discord.js')
const bot = new Discord.Client()
const token = "LE TOKEN DU BOT";//LE TOKEN

//WEATHER COMMANDE
const weather = require("weather-js");

//GUESS NUMBER GAME 
var number_random = 0;
var party_launch = false;

//UTILITAIRE
var prefix = "/";//LE PREFIX
var mention = "<@358916708821499904>";//ID DU BOT

//CONSOLE LOG / LE STATUS / LE JEU
bot.on('ready', () => {
  console.log('Discord Protect® 2017');//CONSOLE LOG
  console.log('By Iriko#2004')//CONSOLE LOG
bot.user.setGame("/help");//Discord Protect Joue à /help
bot.user.setStatus("dnd"); //dnd , online , ldle
});


//LES COMMANDES HELP
bot.on('message', message => {
  if (message.content.startsWith(prefix + "help")) {
    var help_embed = new Discord.RichEmbed()
      .setColor('#6697EA')
      .addField("Commandes du Bot", "`/help` : Affiche ce message \n`/ping` : Le Bot Répond : Pong \n`/sinfo` : Toute les Information sur le Serveur ! \n`/userinfo` : Donne des Informations sur l'utilisateur mentionné. \n`/meteo` : Affiche la meteo.\n`/say` : Le Bot dit une phrase.\n`/reportlist` : Affiche la liste des utilisateur discord ban du serveur.\n`/purge` : Supprime des message dans le chat\n`/invite` : Donne le lien d'invite du serveur\n`/repo` : Report un utilisateur est donné la cause\n`/gn game` : Donne les Info pour faire un Guess Number Game ! (Jeu qui consiste à trouvez un nombre sur une echelle de <0 à 5000>)\n`/markdown` : Guide Markdown")
      .addField("-------------------------------------", "Le Prefix Actuel du Serveur est `/`\nFaite `/h.<nom de la commande>` pour plus d'info sur la commande")
      .setFooter('Discord Protect® 2017 By Iriko#2004')
      message.channel.sendEmbed(help_embed)
    //message.channel.sendMessage("Voici les Commandes du Bot :\n /help pour afficher ce message")
    console.log("Commande Help")
  }
        if (message.content.startsWith(prefix + "h.ping")) {
            var help_ping_embed = new Discord.RichEmbed()
            .setColor('#B74D06')
            .addField("Commande Ping", " `/ping` : Pour avoir le temps d'envoie du message")
            message.channel.sendEmbed(help_ping_embed)
        }
            if (message.content.startsWith(prefix + "h.userinfo")) {
                var help_user_embed = new Discord.RichEmbed()
                .setColor('#B74D06')
                .addField("Commande Info User", " `/userinfo` + mention : Donne des information sur un utilisateur")
                message.channel.sendEmbed(help_user_embed)
            }
                if (message.content.startsWith(prefix + "h.say")) {
              var help_say_embed = new Discord.RichEmbed()
                .setColor('#B74D06')
               .addField("Commande Say", " `/say` + Ce que l'on veux qu'il dis : Faire dire une phrase au bot")
               message.channel.sendEmbed(help_say_embed)
                }
                  if (message.content.startsWith(prefix + "h.reportlist")) {
                  var help_repolist_embed = new Discord.RichEmbed()
                 .setColor('#B74D06')
                 .addField("Commande Report List", " `/reportlist` : Donne les information des reports sur le serveur")
                message.channel.sendEmbed(help_repolist_embed)
                  }
                  if (message.content.startsWith(prefix + "h.invite")) {
                    var help_invite_embed = new Discord.RichEmbed()
                    .setColor('#B74D06')
                    .addField("Commande Ping", " `/invite` : Donne le lien d'invite du serveur ")
                    message.channel.sendEmbed(help_invite_embed)
                  }
                        if (message.content.startsWith(prefix + "h.sinfo")) {
                        var help_sinfo_embed = new Discord.RichEmbed()
                        .setColor('#B74D06')
                        .addField("Commande Serveur Info", " `/sinfo` : Toute les Infomation sur le serveur.")
                        message.channel.sendEmbed(help_sinfo_embed)
                        }
                            if (message.content.startsWith(prefix + "h.meteo")) {
                            var help_meteo_embed = new Discord.RichEmbed()
                            .setColor('#B74D06')
                            .addField("Commande Meteo", " `/meteo` + nom de la ville + nom du pays")
                            message.channel.sendEmbed(help_meteo_embed)
                            }
                                if (message.content.startsWith(prefix + "h.purge")) {
                                var help_purge_embed = new Discord.RichEmbed()
                                .setColor('#B74D06')
                                .addField("Commande Purge", "`/purge` + *nombre de messages*")
                                .addField("Commande Purge Mention","`/purge` + *mention* + *nombre de messages*")
                                message.channel.sendEmbed(help_purge_embed)
                                }
                                    if (message.content.startsWith(prefix + "h.repo")) {
                                    var help_report_embed = new Discord.RichEmbed()
                                    .setColor('#B74D06')
                                    .addField("Commande Report", " `/repo` + mention + raison")
                                    message.channel.sendEmbed(help_report_embed)
                                    }
                                }
                            )

bot.on('message', message => {
    if (message.content.startsWith(prefix + "markdown")) {
      var mark_embed = new Discord.RichEmbed()
        .setColor('#6697EA')
        .addField("Markdown Text", "*italique* : `*italique*`\n**Gras** : `**Gras**`\n***Gras Italique*** : `***Gras Italique***`\n__souligner__ : `__souligner__`\n~~barré~~ : `~~barré~~`")
        message.channel.sendEmbed(mark_embed)
}});

//SIMILAIRE A LA COMMANDE SAY
bot.on('message', message => {
	if (message.content.startsWith("/sug")){
		var sug = message.content.substr(5);
        bot.users.get('id de lutilisateur voulent reçevoir le message seul un utilisateur peut être mis').send(`Suggestion de : ` + message.author + " Dit : " + sug)
	}})

//SIMILAIRE A LA COMMANDE SAY
bot.on('message', message => {
    if (message.content.startsWith('/repo')) {
        var repo = message.content.substr(5);
        bot.users.get('id de lutilisateur voulent reçevoir le message.seul un utilisateur peut être mis').send("Report de : "+ message.author + " Raison : " + repo);
}})

bot.on('message', message => {
    if(message.content.startsWith(prefix +'ping')) {
        message.channel.send('Loading...').then(m => m.edit(`Pong ! **${m.createdTimestamp - message.createdTimestamp}ms.** `) );
       }
    }
)

bot.on('message', function(message){
    if (message.content == "/gn game start"){
        message.channel.send(message.author + " à Lancer la partie !")
        party_launch = true;
        number_random = Math.floor(Math.random() * (5000 - 0) + 0)
        bot.users.get('id de lutilisateur voulent reçevoir le message.seul un utilisateur peut être mis').send("Un Guess Game vient d'être lancer part : "+ message.author + " Nombre : " + number_random);
        console.log(number_random);
   }
    if (party_launch && message.content != null){
        if (Number.isInteger(parseInt(message.content))){

            if (message.content > number_random){
                message.reply('Plus petit !')
            }
            else if (message.content < number_random){
                message.reply('Plus Grand')
            }
            else{
                message.channel.send(message.author + " à Gagner la partie ! Le Nombre été : "+ number_random)
                party_launch = false;
                }
}}
    if (message.content == "/gn game stop"){
    if (party_launch == true){
    message.reply("Partie stopper !")
    party_launch == false;
            
        }else{
        message.reply("Il n'y as pas de partie en cours")}
}})

bot.on('message', message => {
    if (message.content == "/gn game"){
        var gn_game_embed = new Discord.RichEmbed()
        .setColor('#B74D06')
        .addField("Jeu Guess Numbers ", " `/gn game start` : Pour commencer une partie\n`/gn game stop` : Pour Stopper une Partie")
        message.channel.sendEmbed(gn_game_embed)
}});

bot.on('message', message => {
    var msgc = message.content //Pour nous éviter de réecrire "message.content" à chaque fois
    var membername = message.author.username
    var memberavatar = message.author.avatarURL
    if (msgc.startsWith(prefix + "sinfo")) {
        message.channel.send("", {
            embed: {
                color: 0xE15306, //La couleur que l'on voit sur le côté gauche de l'embed
                author: message.author.name,

                title: 'Informations sur le serveur', //Le titre de l'embed
                description: '', //La description, dans ce cas-ci mieux vaut la laisser vide
                fields: [
                    {
                        name: '**Nom**',
                        value: message.guild.name,
                        inline: true
    }, {
                        name: '**Membres**',
                        value: message.guild.memberCount,
                        inline: true
    }, {
                        name: '**Propriétaire**',
                        value: message.guild.owner.user.tag,
                        inline: true
    }, {
                        name: '**Région**',
                        value: message.guild.region,
                        inline: true
    }, {
                        name: '**ID**',
                        value: message.guild.id,
                        inline: true
                   }],
                thumbnail: {
                    url: message.guild.iconURL //l'avatar du bot
                },
                timestamp: new Date(), //La date d'aujourd'hui
                footer: {
                    text: 'Discord Protect® 2017 By Iriko#2004',
                },
                
                          author: {
                            name: membername,
                            icon_url: memberavatar,
                            proxy_icon_url: ' '
            }
        }});
    };
});

bot.on('message', message => {
if (message.content.startsWith("/meteo")){
    var location = message.content.substr(6);
    var unit = "C";
    
    try {
        weather.find({search: location, degreeType: unit}, function(err, data) {
            if(err) {
                console.log(Date.now(), "DANGER", "Je ne peut pas trouvé d'information pour la méteo de " + location);
                message.reply("Erreur ! Faite `/h.meteo` pour plus d'information ;)");
            } else {
                data = data[0];
                message.channel.send("**Voici les Prevision meteo pour " + data.location.name + "** \n \n *Actuellement* :\n " + data.current.temperature + "°" + unit + " " + data.current.skytext + ", ressentie " + data.current.feelslike + "°, " + data.current.winddisplay + " Vent\n \n*Prévisions pour demain* :\nHaut: " + data.forecast[1].high + "°, Bas: " + data.forecast[1].low + "° " + data.forecast[1].skytextday + " avec " + data.forecast[1].precip + "% de chance de precipitation.");
            }
        });
    } catch(err) {
        console.log(Date.now(), "ERREUR", "Weather.JS a rencontré une erreur");
        message.reply("Idk pourquoi c'est cassé tbh :(");
        }
    }
});

//COMMANDE DE PURGE
bot.on('message', message => {
    if (message.content.startsWith('/purge')) {
    const user = message.mentions.users.first();
    const amount = !!parseInt(message.content.split(' ')[1]) ? parseInt(message.content.split(' ')[1]) : parseInt(message.content.split(' ')[2])
    if (!amount) return message.reply("Erreur ! Faite `/h.purge` pour plus d'information ;)");
    if (!amount && !user) return message.reply("Erreur ! Faite `/h.purge` pour plus d'information ;)");
    message.channel.fetchMessages({
     limit: amount,
    }).then((messages) => {
     if (user) {
     const filterBy = user ? user.id : Client.user.id;
     messages = messages.filter(m => m.author.id === filterBy).array().slice(0, amount);
     }
     message.channel.bulkDelete(messages).catch(error => console.log(error.stack));
    })}})
    
//COMMANDE SAY - Le bot dit quelque chose 
bot.on('message', message => {
if (message.content.startsWith("/say")){//Si le message commence part ("/say")
    message.delete(message.author); //SUPRIMME LA COMMANDE
    var say = message.content.substr(5);//On defini Say - [say = message.content.substr(5)]
    message.channel.send (say)//ENVOIE LA VARIABLE "SAY"
}})

//UTILISATEUR INFO - Avoir des info sur l'utilisateur mentionné
bot.on('message', message => {
if(message.content.startsWith("/userinfo")) {
    var memberavatar = message.author.avatarURL
    var membername = message.author.username
       var mentionned = message.mentions.users.first();
      var getvalueof;
      if(mentionned){
          var getvalueof = mentionned;
      } else {
          var getvalueof = message.author;
      }

      if(getvalueof.bot == true){
          var checkbot = "L'utilisateur est un bot";
      } else {
          var checkbot = "N'est pas un bot";
      }
      if(getvalueof.presence.status == 'online'){
        var status = "En ligne"; 
      }else {
        var status = "Hors ligne";
      }

    message.channel.sendMessage({
        embed: {
          type: 'rich',
          description: '',
          fields: [{
            name: 'Pseudo',
            value: getvalueof.username,
            inline: true
          }, {
            name: 'User id',
            value: getvalueof.id,
            inline: true
},{
            name: 'Status',
            value: status,
            inline: true
},{
            name: 'Bot',
            value: checkbot,
            inline: true
}],
        image: {
      url: getvalueof.avatarURL
        },
          color: 0xE46525,
          footer: {
            text: 'Discord Protect® 2017 By Iriko#2004',
            proxy_icon_url: ' '
          },

          author: {
            name: membername,
            icon_url: memberavatar,
            proxy_icon_url: ' '
          }
        }
});
}})

//MY AVATAR
bot.on('message', message => {
    if (message.content === '/myavatar') {
      message.reply(message.author.avatarURL);
    }
  });


//VOICE COMMAND JOIN
bot.on('message', message => {
    if (!message.guild) return;
  
    if (message.content === '/join') {
        if (message.member.voiceChannel) {
          message.member.voiceChannel.join()
            .then(connection => { // Connection is an instance of VoiceConnection
              message.reply('Je suis dans le channel vocal');
            })
            .catch(console.log);
        } else {
          message.reply('error');
        }
      }
    });

//VOICE COMMAND LEAVE
bot.on('message', message => {
    if (!message.guild) return;
  
    if (message.content === '/leave') {
      if (message.member.voiceChannel) {
        message.member.voiceChannel.leave()
        message.reply('Bye...');
      }
    }
})


bot.login('LE TOKEN DU BOT');
