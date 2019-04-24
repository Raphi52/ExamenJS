/* Afin de lancer le bot il suffit de le créer sur https://discordapp.com/developers/applications/

https://www.digitaltrends.com/gaming/how-to-make-a-discord-bot/

enfin , entrer node myBot.js dans l'invite de commande a la racine du projet si je n'ai pas fait un executable d'ici la fin

*/
var XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;
const $ = require('jQuery');
const Discord = require('discord.js')
const client = new Discord.Client()
client.login("NTY4MzU3ODE4NTk2NTg5NTY5.XMBstw.O1qTRRm64M5kRKCYVf1O2Zd_NpU");
client.on('ready', () => {
  console.log("connected as " + client.user.tag);

  // client.user.setActivity("Youtube", {type: "WATCHING"})
  client.user.setActivity("Destroy humans")
  client.guilds.forEach((guild) => {
    console.log(guild.name);
    guild.channels.forEach((channel) => {
      console.log(` - ${channel.name} ${channel.type} ${channel.id}`);
    })
  })
  var channelId = "462328073690546202"; //<============================== Entrer l'id de n'importe quel channel discord ici
  let generalChannel = client.channels.get(channelId);
  const attach = new Discord.Attachment("./img/beer.jpg");
  let askMeteo = ["meteo", "temps", "temperature", "temperatures"];

  var city;
  //var key = "0550744c07a243329904e426943916f5";
  // Create a request variable and assign a new XMLHttpRequest object to it.
  //IMPORTANT : cet objet me cause des erreurs je remplace ses fonctions par du jquery
  var request = new XMLHttpRequest();
  // Open a new connection, using the GET request on the URL endpoint


  request.onload = function () {
    // Begin accessing JSON data here
  //  meteoActuelle = request.open('GET', 'https://api.weatherbit.io/v2.0/current?city=' + city + '&key=' + key, true);
  }
  // Send request
 // request.send()
 
  
  





  
  });
  

  //$.getJSON('https://api.weatherbit.io/v2.0/current?city='+city+'&key='+key , function(data) {
  //  console.log(data);
  //});
  //var data;
  //$.ajax({
 // dataType: 'json',
   /*  url: 'https://api.weatherbit.io/v2.0/current?city=' + city + '&key=' + key,
      data: data,
        success: function(data) {
          // begin accessing JSON data here
          console.log(data)
        },
})
}) */
client.on("message", (receivedMessage) => {
  //pour éviter la boucle infini, si le message vient du bot alors ne rien faire
  if (receivedMessage.author == client.user) {
    return null;
  }
  receivedMessage.channel.send("Message recu:" + receivedMessage.author.toString() + ":" + receivedMessage.content)
  if (receivedMessage.content === "caca" || receivedMessage.content === "💩") {

    receivedMessage.react("💩")
  }

  askMeteo.forEach((meteo) => {
    //je renseigne ma variable city déclaré plus haut pour qu'elle soit accessible hors de toute accolade
    cityTemp = receivedMessage.split(" ");
    //elle sera égale au mot après n'importe quel element de mon tableau meteo quand les mots seront séparé par un espace
    city = cityTemp[1];
    if (receivedMessage.content === meteo.toString().ignoreCase()) {
      const url = "https://www.prevision-meteo.ch/services/json/%22"+City 

      $.ajax({
          "url": url,
          "type": "GET",
          "success": function(data, status) {
              var parsedResponse = data;
              console.log(parsedResponse);
              var villeChoisie = parsedResponse.city_info.name;
              var tempsVilleChoisie = parsedResponse.current_condition.tmp+"°C";
    
            
          receivedMessage.channel.send(villeChoisie + ":" + tempsVilleChoisie);
          
        }})
      console.log(meteoActuelle);
      // Begin accessing JSON data here
      var data = JSON.parse(this.response)

      data.forEach(temp => {
        // Log each movie's title
        console.log(temp.title)
        receivedMessage.channel.send(data.toString());
      })
    }
  });
  if (receivedMessage.content.startsWith("!")) {
    processCommand(receivedMessage)
  }
  // faire un tableau des messages = message
  if (message) {
    receivedMessage.channel.send('yo!')
  }
})

function processCommand(receivedMessage) {
  //enleve le "!"
  let fullCommand = receivedMessage.content.substr(1)
  // split le reste du string en morceaux(mots) séparés par un espace = " " dans un array -> splitCommand
  let splitCommand = fullCommand.split(" ")
  //prend le premier mot dans l array comme étant la primaryCommand
  let primaryCommand = splitCommand[0]
  //les mots restant dans l'array deviennent des arguments (slice prend tous les mots apres le chiffre indique -> ici 1 car 0 désigne help)
  let arguments = splitCommand.slice(1)

  if (primaryCommand == "help") {
    helpCommand(arguments, receivedMessage)
  } else if (primaryCommand == "multiply") {
    multiplyCommand(arguments, receivedMessage)
  } else {
    receivedMessage.channel.send("commande inconnu, essayez '!help' ou '!multiply'")
  }
}

function multiplyCommand(arguments, receivedMessage) {
  if (arguments.length < 2) {
    receivedMessage.channel.send("pas assez d'arguments a multiplier, essaie: '!multiply 2 10'")
    return
  }
  let product = 1
  arguments.forEach((value) => {
    //La fonction parseFloat() permet de transformer une chaîne de caractères en un nombre flottant après avoir analysée celle-ci (parsing).
    //value est une itération de arguments a la maniere de $user pour $users
    product = product * parseFloat(value)
  })
  receivedMessage.channel.send("le résultat de " + arguments + " est: " + product)
}

function helpCommand(arguments, receivedMessage) {
  if (arguments.length == 0) {
    receivedMessage.channel.send("quel est le fuck? go --> '!help [topic]'")
  } else {
    receivedMessage.channel.send("tu as besoin d'aide avec " + arguments + "?")
  }
}