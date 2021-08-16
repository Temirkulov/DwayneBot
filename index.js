const { timeStamp } = require('console');
const { DH_CHECK_P_NOT_SAFE_PRIME } = require('constants');
const Discord = require('discord.js');
const { send } = require('process');
const command = require('./command')
const client = new Discord.Client()
const config = require ('./config.json')
const whitelist = (`348296915143884801`,`692062388991688814`,`463174263973871626`,`330818210561785856`)
require('events').EventEmitter.defaultMaxListeners = 20;

client.on('ready', () => {
    console.log('The client is ready!')

    command(client, 'ping', (message) => {
        message.channel.send('Pinging...').then(sent => {
            sent.edit(`Pog! Latency is ${sent.createdTimestamp - message.createdTimestamp}ms. API Latency is ${Math.round(client.ws.ping)}ms`);
        })
      })
      
    command(client, 'speedjar',message => {
        if(message.channel.id === '776985762499002408') {
            const filter = (m) => !m.author.id === !message.author.id && m.content.includes('sell')
        message.channel.send(":taco: I'm feeling a little extra hungry today");
        message.channel
        .awaitMessages(filter,{max: 2, time: 30000, errors:['time ran out']})
        .then((collected) => {
            console.log(collected.size);
            const msg = collected.first();
            console.log(msg.content);
        })
        .catch((err) => console.log(err));
    }
    })
    command(client, 'status', message => {
        const content = message.content.replace(';status ', '')
        if(message.author.id === "348296915143884801")

        client.user.setPresence({
            activity: {
                name: content,
                type: 0,
            }
        })
    })

    command(client, 'invite', (message) => {
        const embed = new Discord.MessageEmbed()
        .addField('Invite DwayneBot',`[Invite link (Recommended)](https://discord.com/api/oauth2/authorize?client_id=780813319137263618&permissions=2147483639&scope=bot)
[Invite link (Admin)](https://discord.com/oauth2/authorize?client_id=780813319137263618&permissions=8&scope=bot)`)
             
        
        .setAuthor(message.author.username)

        message.channel.send(embed)
    })
    
    command(client, 'help', (message) => {
        const logo = 
        'https://static.bangkokpost.com/media/content/20200903/c1_3738615.jpg'
        
        const embed = new Discord.MessageEmbed()
        
        .setDescription('The prefix is `;`')
        .setColor('#FEFFA3')
        .setTitle('DwayneBot Help Menu')
        .setThumbnail(logo)
        .addFields(
            {name: "Help Commands", value: 
            `**Help**: Lists out the Help commands
**ping**: Checks the bot's ping
**stats**: Displays the Dwaynebot Statistics
**update**: Shows the new bot features
**pickup**: Sends pickup lines - inspired by lacking ✰#0959
**rock**: Built Different`
        }, 
        {name:"Admin Commands", value:
        `**cc/clearchannel**: Clears last 100 messages
**kick**: Kicks a specified user
**ban**: Bans a specified user
        `
    },
    {name: "Developer Commands", value: 
    `**c-ask**: Customer Prank - ask to sell
**c-busy**: Customer Prank - Everyone is Lazy
**c-sell**: Customer Prank - Sells to The Rock
**status**: Change Bot Status`
}
        )
        message.channel.send(embed)
    })
    command(client,'ban', (message) => {
        const { member, mentions } = message

        const tag = `<@${member.id}>`

        if (member.hasPermission('ADMINISTRATOR') || 
        member.hasPermission('BAN_MEMBERS')
        ) {
                const target = mentions.users.first()
                if(target) {
                   const targetMember = message.guild.members.cache.get(target.id)
                   targetMember.ban()
                   message.channel.send(`${tag} That user has been banned.`)
                } else {
                    message.channel.send(`${tag} Please specify someone to ban.`)
                } 
                
            } else {
                message.channel.send(
                    `<${member.id}> You don't have permission to use this command.`
                    )
            }
    })
    command(client,'kick', (message) => {
        const { member, mentions } = message

        const tag = `<@${member.id}>`

        if (member.hasPermission('ADMINISTRATOR') || 
        member.hasPermission('KICK_MEMBERS')
        ) {
                const target = mentions.users.first()
                if(target) {
                   const targetMember = message.guild.members.cache.get(target.id)
                   targetMember.kick()
                   message.channel.send(`${tag} That user has been kicked.`)
                } else {
                    message.channel.send(`${tag} Please specify someone to kick.`)
                } 
                
            } else {
                message.channel.send(
                    `<${member.id}> You don't have permission to use this command.`
                    )
            }
    })
    command(client,'c-ask',(message) => {
        if(message.author.id === "348296915143884801","692062388991688814")  {
            const channelIDs = `716745665643937862`
            client.channels.cache.get(channelIDs).send(":taco: I'm feeling a little extra hungry today, could I buy \`1050`\ tacos? `Type 'sell' to sell them tacos!`")
            message.react('✅')
        } else return

    })
    command(client,'c-sell',(message) => {
        if(message.author.id === "348296915143884801","692062388991688814")  {
            const channelIDs = `716745665643937862`
            client.channels.cache.get(channelIDs).send(":moneybag: Nice doing business with you **The Rock**! I believe I owe you `$10500` and heres a 10% tip of `$1050` for being awesome!")
            message.react('✅')
        } else return
    })
    command(client,'c-busy',(message) => {
        if(message.author.id === "348296915143884801","692062388991688814") {
            const channelIDs = `716745665643937862`
            client.channels.cache.get(channelIDs).send(":rage: Well it seems like everyone working here is lazy, I'm going to the fast food joint across the road.")
            message.react('✅')
        } else return
    })
    

    
    command(client,'stats',(message) => {
        
        // client.uptime is in millseconds
      // this is just maths, I won't explain much of it
      // % is modulo, AKA the remainder of a division
      //let days = Math.floor(client.uptime / 86400000);
      let hours = Math.floor(client.uptime / 3600000) % 24;
      let minutes = Math.floor(client.uptime / 60000) % 60;
      let seconds = Math.floor(client.uptime / 1000) % 60;
      const logo = 
        'https://static.bangkokpost.com/media/content/20200903/c1_3738615.jpg'
      const embed = new Discord.MessageEmbed()
        
        .setTitle('DwayneBot statistics')
        .setDescription('The prefix is `;`')
        .setColor('#FEFFA3')
        .setThumbnail(logo)
        .addField("Bot statistics",` 
        Uptime: **${hours} hours ${minutes} minutes ${seconds} seconds**
Creator: **The Rock**
Servers: **${client.guilds.cache.size}**
Version: **1.10.0.0**
Memory Usage: **${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)}mb**
System: **Windows 10**
Host: **Heroku**`)
        .setTimestamp()
    
        
        message.channel.send(embed)
    }) 
    command(client, 'coinflip',(message) => {
        function getRandomInt(min, max) {
            min = Math.ceil(min);
            max = Math.floor(max);
            return Math.floor(Math.random() * (max - min)) + min;
          }
        var msg2 = Array(2);
		msg2[1] = "Heads";
	    msg2[2] = "Tails";
        var x = getRandomInt(0, 8);
		if (x < 4){
			message.channel.send(msg2[1]);
		}
		else{
			message.channel.send(msg2[2]);
		}

    }) 
    command(client, 'update',(message) =>{
        const logo = 
        'https://static.bangkokpost.com/media/content/20200903/c1_3738615.jpg'
      const embed = new Discord.MessageEmbed()

      .setColor('#FEFFA3')
      .setThumbnail(logo)
      .setTitle('Bot Information')
      .addFields( {name: `New features (1.10.0.0)`, value:`
-**Huge New Update**
- new reaction: 👁, which reacts to ,give or ,gift and is used to calculate the prestige report!
- this eases your work as it calculates various stuff related to prestige points!
- also Minor fixes here and there.
-command is limited to Exclusives role members
-Special Thanks  to @oCryptic#3169 for helping in this huge new command
`},
    )

    message.channel.send(embed)
    })
    command(client, "gcalc",(message) => {
        
    })
    command(client, "rock",(message) => {
        var tests = ["Built different💯🥶",
    "Cut from different cloth📠💯",
"🥶Race:First place💯🏎️💨",
"Breed:Different🥶💯",
 "When the doc tried to draw my blood, ice came out :cold_face: :100:",
"I tried to pay attention but attention paid me💯🤷🥶",
"I don't cruise control, I control the cruise:speaking_head::fax:",
"They fed me to the wolves and i returned leading the pack:point_up_2::gorilla::100:",
"Never in doubt, if I can’t make it with you i’ll make it without:100:",
"We not from here:man_dancing::100::point_up:"];
        var test = Math.floor(Math.random() * tests.length);

    message.channel.send(String([tests[test]]));
    })
    
    command(client,"m",(message) => {   
        message.channel.send(`1 = 12,000
2 = 56,000
3 = 144,000
4 = 288,000
5 = 500,000
6 = 792,000
7 = 1,176,000
8 = 1,664,000
9 = 2,268,000
10 = 3,000,000
11 = 3,872,000
12 = 4,896,000
13 = 6,084,000
14 = 7,448,000
15 = 9,000,000
16 = 10,752,000
17 = 12,716,000
18 = 14,904,000
19 = 17,328,000
20 = 20,000,000
21 = 22,932,000
22 = 26,136,000
23 = 29,624,000
24 = 33,408,000
25 = 37,500,000
26 = 41,912,000
27 = 46,656,000
28 = 51,744,000
29 = 57,188,000
30 = 63,000,000`)
})
    command(client, "pickup",(message) => {
        var tests = ["Are you a keyboard ? Because you are my type",
    "I thought Happiness starts with H. But why does mine starts with U",
    "feel my shirt.............its boyfriend material",
    "My doctor says I'm lacking vitamin U",
    "If you were a triangle you'd be acute one",
    "Are you a camera? Because every time I look at you, I smile!",
    "Do you like science because I've got my ion you",
    "Have you been to the doctor's lately? Cause I think you're lacking some vitamin me",
    "boy you got my heartbeat running away :woman_running:,beating like a drum and it’s coming ur way:heart_eyes:",
    "are you a banana? cause i find you a peeling",
    "are you a 90 degree angle? Cause you are looking right",
    "Is your name Google? Because you have everything I've been searching for.",
    "Do your legs hurt from running through my dreams all night?",
    "If a fat man puts you in a bag at night, don't worry I told Santa I wanted you for Christmas",
    "Thank god I'm wearing gloves because you are too hot to handle",
    "girl, when u go to hell, hades resigns cos u are hotter than hell",
    "even if there wasn't gravity on earth, I'd still fall for you",
    "Are you lost ma'am? Because heaven is a long way from here",
    "So, aside from taking my breath away, what do you do for a living?",
    "If covid-19 doesn’t take you out.. can I?",
    "You can't spell virus without U and I",
    "You can’t spell quarantine without “u r a q t”",
    "Did your license get suspended for driving all these guys crazy?",
    "Are you the cure for Alzheimer’s? Because you’re unforgettable",
    "Are you australian? Because you meet all of my koalafications"];
        var test = Math.floor(Math.random() * tests.length);
         message.channel.send(String([tests[test]]));  
    
        })
client.on('message', message => {
    if (message.content.includes("<@!348296915143884801>") ||
        (/\brock\b/i.test(message.content)) )
        { 
        message.react('763029066722443264');
    }
    
    })

})
client.on("message" , (message) => {
const collector = new Discord.MessageCollector(message.channel, (m) => m.embeds.length > 0, { maxProcessed: 1, max: 1 });
if (message.content === ",give") {
    collector.on("collect", (el, c) => {
        let text = el.embeds[0].description;
        var getRec = text.split("Max you can receive: **$").pop().split("**")[0].replace(/,/g, '');
        el.react("👁️").then((r) => {
            const filter = (reaction, user) => reaction.emoji.name === "👁️";
            el.awaitReactions(filter, { max: 1 }).then((collected) => {
                const arrayUsers = collected.get("👁️").users.cache; //.get(message.member.user.id)
                arrayUsers.forEach((index) => {
                    if (index.id === message.member.user.id) {
                        if (message.member.roles.cache.has(`876815413915303956`)) //checks if member has the 'Exclusives' role
                        {
                        const filter = m => Number(m.content) >= 1 && Number(m.content) <= 50; //sets limit on number 
                        message.channel.send(`What is your prestige level?(NUMBERS ONLY)`);
                        message.channel.awaitMessages(filter, { max: 1, time : 10000, errors: ["time"] })
                        .then((collected) => {
                            const msg = collected.first();
                            const fs = require("fs");
                            const logo = 
                            'https://static.bangkokpost.com/media/content/20200903/c1_3738615.jpg'
                            let bil = 1000000000
                            client.msgs = require('./prestiges.json')
                            let _message = client.msgs[msg.content-1].priceperpoint;
                            let ppp = (getRec / _message);
                            let days = (bil / ppp);
                            let hours = (days * 24);
                            const embed1 = new Discord.MessageEmbed()
                            .setTitle("Prestige Report")
                            .setThumbnail(logo)
                            .setColor(`#FEFFA3`)
                            .setDescription(`**Prestige Points Per Day**
${ppp.toLocaleString(`en`)}

**Time until**:
**1 bil**: ${days.toFixed(2)} Days or ${hours.toFixed(2)} Hours
**10 bil**: ${(10000000000 / ppp).toFixed(2)} Days or ${((10000000000 / ppp) * 24).toFixed(2)} Hours
**100 bil**: ${(100000000000 / ppp).toFixed(2)} Days or ${((100000000000 / ppp) * 24).toFixed(2)} Hours

**Multiplier**
**1000x**: ${(279340210 / ppp).toFixed(2)} Days or ${((279340210 / ppp) * 24).toFixed(2)} Hours
**1500x**: ${(628118200 / ppp).toFixed(2)} Days or ${((628118200 / ppp) * 24).toFixed(2)} Hours
**2000x**: ${(1116301050 / ppp).toFixed(2)} Days or ${((1116301050 / ppp) * 24).toFixed(2)} Hours
**2500x**: ${(1743889510 / ppp).toFixed(2)} Days or ${((1743889510 / ppp) * 24).toFixed(2)} Hours
**3000x**: ${(2510882780 / ppp).toFixed(2)} Days or ${((2510882780 / ppp) * 24).toFixed(2)} Hours
**3500x**: ${(3417281710 / ppp).toFixed(2)} Days or ${((3417281710 / ppp) * 24).toFixed(2)} Hours

*all prices shown without accounting price of Multiplier Caps*
`)
                            .setFooter(`Requested by ${message.author.username}`)
message.channel.send(embed1)
                        })
                        .catch((collected) => {
                            message.channel.send(`Time's up, you took your sweet time!`);
                            })
                        
                    }else message.channel.send(`You don't have the required role!`); }
                });

            });
        });
    });
}

});
client.login(config.token)
