const { timeStamp } = require('console');
const { DH_CHECK_P_NOT_SAFE_PRIME } = require('constants');
const Discord = require('discord.js');
const { get } = require('http');
const { e, not } = require('mathjs');
const { send } = require('process');
const command = require('./command')
const client = new Discord.Client()
const config = require ('./config.json')
const whitelist = (`348296915143884801`,`692062388991688814`,`463174263973871626`,`330818210561785856`)
require('events').EventEmitter.defaultMaxListeners = 30;

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
    /*command(client, `gcalc`, (message) => {
        const fs = require("fs")
        const msg = message.content.split(";gcalc").pop().split("\n")[0]
        var args = msg.split(' ')
        client.taxes = require('./tax.json')

        let inputvalue = args[2]; //fetches value for calculations
                            //let taxcharge = client.taxes[inputvalue.toString().length].gift
                            //let aftertaxvalue = Math.floor((inputvalue * taxcharge)).toLocaleString(`en`)
                            //var a = .7, b = aftertaxvalue
                            //var c = inputvalue.toString().length > 29? a : b
                            message.channel.send(`$${msg}`)
    })*/
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
        var tests = ["Are you a keyboard ? Because you are my type","I thought Happiness starts with H. But why does mine starts with U",
"feel my shirt.............its boyfriend material","My doctor says I'm lacking vitamin U","If you were a triangle you'd be acute one",
"Are you a camera? Because every time I look at you, I smile!","Do you like science because I've got my ion you",
"Have you been to the doctor's lately? Cause I think you're lacking some vitamin me","boy you got my heartbeat running away :woman_running:,beating like a drum and it’s coming ur way:heart_eyes:",
"are you a banana? cause i find you a peeling","are you a 90 degree angle? Cause you are looking right",
"Is your name Google? Because you have everything I've been searching for.","Do your legs hurt from running through my dreams all night?",
"If a fat man puts you in a bag at night, don't worry I told Santa I wanted you for Christmas","Thank god I'm wearing gloves because you are too hot to handle",
"girl, when u go to hell, hades resigns cos u are hotter than hell","even if there wasn't gravity on earth, I'd still fall for you",
"Are you lost ma'am? Because heaven is a long way from here","So, aside from taking my breath away, what do you do for a living?",
"If covid-19 doesn’t take you out.. can I?","You can't spell virus without U and I","You can’t spell quarantine without “u r a q t”",
"Did your license get suspended for driving all these guys crazy?","Are you the cure for Alzheimer’s? Because you’re unforgettable",
"Are you australian? Because you meet all of my koalafications"];
        var test = Math.floor(Math.random() * tests.length);
         message.channel.send(String([tests[test]]));  
    
        })

})
client.on("message" , (message) => {
    if (!(isNaN(message.content.substr(-1))) && message.content.startsWith(`,p`)) {
    if (message.member.roles.cache.has(`876815413915303956`)) //checks if member has the 'Exclusives' role
    {
        const collector = new Discord.MessageCollector(message.channel, m => m.embeds.length > 0, { maxProcessed: 1, max: 1 });
        collector.on('collect', (el, c) => {
            //if (!(/^\d{18}$/.test(message.content.substr(-18)))) return;
            //if (el.embeds[0].description.includes(`❌`)){throw new Error("❌");}
            if( el.embeds[0].description) {
                if (el.embeds[0].description.includes(`❌`)) return;}
            //let texterror = el.embeds[0].description;
            //var error = texterror.split(`❌`).pop().split(`\n`)[0]
            let text = el.embeds[0].fields[5].value;
     var prestigeval = text.split('__Prestiges:__ ').pop().split('\n')[0].replace(/,/g, '')
     let textbal = el.embeds[0].fields[1].value;
     var balance = textbal.split(`💰 $`).pop().split(`\n`)[0].replace(/,/g,'')
     let textinc = el.embeds[0].fields[2].value;
     var income = textinc.split(`💸 $`).pop().split(`/min`)[0].replace(/,/g,'')
     let textpm = el.embeds[0].fields[3].value;
     var permmulti = textpm.split(`📈 `).pop().split(`x`)[0]
     let texttm = el.embeds[0].fields[4].value;
     var totalmulti = texttm.split(`📉`).pop().split(`x`)[0]
      el.react('📊').then(r => {
        const filter = (reaction, user) => reaction.emoji.name === '📊'
      el.awaitReactions(filter, {max:1}).then(collected => {
        const arrayUsers = collected.get('📊').users.cache //.get(message.member.user.id)
              arrayUsers.forEach(index => {
                if(index.id === message.member.user.id) {
                    let mpd = Math.floor(income * 1440) //gives the money made per day(24hrs)
                    let mpm = Math.floor(income)
                    const fs = require('fs')
                    client.name = require('./incomeperday.json')
                    let incomename = client.name[mpd.toString().length-1].name;
                    let incomenumber = client.name[mpd.toString().length-1].dividedby;
                    let incomenumber2 = (mpd / incomenumber)
                    let incomepmname = client.name[mpm.toString().length-1].name;
                    let incomepmnumber = client.name[mpm.toString().length-1].dividedby;
                    let incomepmnumber2 = (mpm / incomepmnumber)
                    client.prestiges = require(`./prestiges.json`)
                    let prestigepoints = client.prestiges[prestigeval].priceperpoint;
                    let prestige = Math.floor(prestigeval)+1
                    let ppd = Math.floor(mpd / prestigepoints) //prestige per day
                    let app = Math.floor(balance / prestigepoints) //accumulated prestige points
                    var x60 = 1000000
                    var x100 = 2787950
                    var x500 = 69702250
                    var x1000 = 279340210
                    var x1500 = 628118200+1000000
                    var x2000 = 1116301050+11000000
                    var x2500 = 1743889510+111000000
                    var x3000 = 2510882780+1111000000
                    var x3500 = 3417281710+11111000000
                    var x4000 = 4463085430+111111000000
                    var multicalc9 = app < x4000? `${((x4000-app)/ppd).toFixed(2)} Days to 4000x`: `✅Achieved 4000x`
                    var multicalc8 = app < x3500? `${((x3500-app)/ppd).toFixed(2)} Days to 3500x`: multicalc9
                    var multicalc7 = app < x3000? `${((x3000-app)/ppd).toFixed(2)} Days to 3000x`: multicalc8
                    var multicalc6 = app < x2500? `${((x2500-app)/ppd).toFixed(2)} Days to 2500x`: multicalc7
                    var multicalc5 = app < x2000? `${((x2000-app)/ppd).toFixed(2)} Days to 2000x`: multicalc6
                    var multicalc4 = app < x1500? `${((x1500-app)/ppd).toFixed(2)} Days to 1500x`: multicalc5
                    var multicalc3 = app < x1000? `${((x1000-app)/ppd).toFixed(2)} Days to 1000x`: multicalc4
                    var multicalc2 = app < x500? `${((x500-app)/ppd).toFixed(2)} Days to 500x`: multicalc3
                    var multicalc1 = app < x100? `${((x100-app)/ppd).toFixed(2)} Days  to 100x`: multicalc2
                    var multicalc = app < x60? `${((x60-app)/ppd).toFixed(2)} Days  to 100x`: multicalc1
                    let balanceacc = Math.floor(balance)
                    var godremarksincome = [`One of a kind player, $${incomenumber2.toFixed(2)} ${incomename} a day is ELITE`, `Earning $${incomepmnumber2.toFixed(2)} ${incomepmname}, dude's probably sitting on the lb rn`]
                    var excellentremarksincome = [`Dude makes $${incomenumber2.toFixed(2)} ${incomename} per day, this dude is top tier for prestige ${prestige}`,`This person earns $${incomenumber2.toFixed(2)} ${incomename} a day, which means they are EXCELLENT for Prestige ${prestige}`, `By earning $${incomepmnumber2.toFixed(2)} ${incomepmname} a minute, this person definitely a future incomelb typa player`,`At $${incomepmnumber2.toFixed(2)} ${incomepmname}, this person is on the right path because they know their stuff very well`]
                    var goodremarksincome = [`This person is a great fit for the corporation, with a good income of ${incomepmnumber2.toFixed(2)} ${incomepmname}`, `A good player overall, with a respectable daily earning of $${incomenumber2.toFixed(2)} ${incomename}`, `Definitely one to hire, there aren't many people earning more than $${incomepmnumber2.toFixed(2)} ${incomepmname} a minute at their prestige level`]
                    var averageremarksincome = [`A solid pick for the corporation overall, at Prestige ${prestige} earning ${incomenumber2.toFixed(2)} ${incomename} a day isn't bad at all`,`Having an income of $${incomepmnumber2.toFixed(2)} ${incomepmname} a minute is nice at Prestige ${prestige}`]
                    var badremarksincome = [`This person is just trash, like fr man what is ${incomepmnumber2.toFixed(2)} ${incomepmname} per min`,`With all due respect, with an income of $${incomepmnumber2.toFixed(2)} ${incomepmname} per minute, the only place this mans going is to the garbage bin`, `Earning $${incomenumber2.toFixed(2)} ${incomename} per day at Prestige ${prestige} this person is on another level of ass`]
                    var godremarksstring = godremarksincome[Math.floor(Math.random() * godremarksincome.length)]
                    var excellentremarksstring = excellentremarksincome[Math.floor(Math.random()*godremarksincome.length)]
                    var goodremarksstring = goodremarksincome[Math.floor(Math.random() * goodremarksincome.length)]
                    var averageremarksstring = averageremarksincome[Math.floor(Math.random()*averageremarksincome.length)]
                    var badremarksstring = badremarksincome[Math.floor(Math.random()* badremarksincome.length)]
                    //Time For requirements for each tier
                    //String([godremarksincome[godremarksstring]])
                    var godplayer13 = prestige>=35 && totalmulti>=3500 && mpm>50000000000000? godremarksstring : excellentremarksstring
                    var excellentplayer13 = prestige>=35 && totalmulti>=3000 && mpm>45000000000000?  godplayer13 : goodremarksstring 
                    var goodplayer13 =prestige>=35 && totalmulti>=3000 && mpm>40000000000000?  excellentplayer13 : averageremarksstring
                    var averageplayer13 = prestige>=35 && totalmulti>=2500 && mpm>35000000000000?  goodplayer13 : badremarksstring
                    var badplayer13 = prestige>=35 && totalmulti>=2000 && mpm>30000000000000?  averageplayer13 :badremarksstring

                    var godplayer12 = prestige>=30 && totalmulti>=3500 && mpm>45000000000000? godremarksstring : excellentremarksstring
                    var excellentplayer12 = prestige>=30 && totalmulti>=3000 && mpm>40000000000000?  godplayer12 : goodremarksstring 
                    var goodplayer12 =prestige>=30 && totalmulti>=3000 && mpm>35000000000000?  excellentplayer12 : averageremarksstring
                    var averageplayer12 = prestige>=30 && totalmulti>=2500 && mpm>30000000000000?  goodplayer12 : badremarksstring
                    var badplayer12 = prestige>=30 && totalmulti>=2000 && mpm>2500000000000?  averageplayer12 :badremarksstring

                    var godplayer11 = prestige>=25 && totalmulti>=3500 && mpm>40000000000000? godremarksstring : excellentremarksstring
                    var excellentplayer11 = prestige>=25 && totalmulti>=3000 && mpm>35000000000000?  godplayer11 : goodremarksstring 
                    var goodplayer11 =prestige>=25 && totalmulti>=3000 && mpm>30000000000000?  excellentplayer11 : averageremarksstring
                    var averageplayer11 = prestige>=25 && totalmulti>=2500 && mpm>2500000000000?  goodplayer11 : badremarksstring
                    var badplayer11 = prestige>=25 && totalmulti>=2000 && mpm>2000000000000?  averageplayer11 :badremarksstring

                    var godplayer10 = prestige>=20 && totalmulti>=3500 && mpm>30000000000000? godremarksstring : excellentremarksstring
                    var excellentplayer10 = prestige>=20 && totalmulti>=3000 && mpm>25000000000000?  godplayer10 : goodremarksstring 
                    var goodplayer10 =prestige>=20 && totalmulti>=3000 && mpm>20000000000000?  excellentplayer10 : averageremarksstring
                    var averageplayer10 = prestige>=20 && totalmulti>=2500 && mpm>1500000000000?  goodplayer10 : badremarksstring
                    var badplayer10 = prestige>=20 && totalmulti>=2000 && mpm>7500000000000?  averageplayer10 :badremarksstring


                    var godplayer9 = prestige>=18 && totalmulti>=3500 && mpm>20000000000000? godremarksstring : excellentremarksstring
                    var excellentplayer9 = prestige>=18 && totalmulti>=3000 && mpm>15000000000000?  godplayer9 : goodremarksstring 
                    var goodplayer9 =prestige>=18 && totalmulti>=3000 && mpm>10000000000000?  excellentplayer9 : averageremarksstring
                    var averageplayer9 = prestige>=18 && totalmulti>=2500 && mpm>7500000000000?  goodplayer9 : badremarksstring
                    var badplayer9 = prestige>=18 && totalmulti>=2000 && mpm>5000000000000?  averageplayer9 :badremarksstring

                    var godplayer8 = prestige>=16 && totalmulti>=3500 && mpm>12500000000000? godremarksstring : excellentremarksstring
                    var excellentplayer8 = prestige>=16 && totalmulti>=3000 && mpm>10000000000000?  godplayer8 : goodremarksstring 
                    var goodplayer8 =prestige>=16 && totalmulti>=3000 && mpm>7500000000000?  excellentplayer8 : averageremarksstring
                    var averageplayer8 = prestige>=16 && totalmulti>=2500 && mpm>5000000000000?  goodplayer8 : badremarksstring
                    var badplayer8 = prestige>=16 && totalmulti>=2000 && mpm>2500000000000?  averageplayer8 :badremarksstring

                    var godplayer7 = prestige>=14 && totalmulti>3500 && mpm>750000000000? godremarksstring : excellentremarksstring
                    var excellentplayer7 = prestige>=14 && totalmulti>3000 && mpm>500000000000?  godplayer7 : goodremarksstring 
                    var goodplayer7 =prestige>=14 && totalmulti>2500 && mpm>400000000000?  excellentplayer7 : averageremarksstring
                    var averageplayer7 = prestige>=14 && totalmulti>2000 && mpm>3000000000000?  goodplayer7 : badremarksstring
                    var badplayer7 = prestige>=14 && totalmulti>1500 && mpm>2000000000000?  averageplayer7 :badremarksstring

                    var godplayer6 = prestige>=12 && totalmulti>=3500 && mpm>3500000000000? godremarksstring : excellentremarksstring
                    var excellentplayer6 = prestige>=12 && totalmulti>=3000 && mpm>3000000000000?  godplayer6 : goodremarksstring 
                    var goodplayer6 = prestige>=12 && totalmulti>=2500 && mpm>2500000000000?  excellentplayer6 : averageremarksstring
                    var averageplayer6 = prestige>=12 && totalmulti>=2000 && mpm>2000000000000?  goodplayer6 : badremarksstring
                    var badplayer6 = prestige>=12 && totalmulti>=1500 && mpm>1000000000000?  averageplayer6 :badremarksstring

                    var godplayer5 =  prestige>=10 && totalmulti>3500 && mpm>2500000000000? godremarksstring :excellentremarksstring
                    var excellentplayer5 =  prestige>=10 && totalmulti>3000 && mpm>2000000000000?  godplayer5 : goodremarksstring 
                    var goodplayer5 =  prestige>=10 && totalmulti>2500 && mpm>1500000000000?  excellentplayer5 : averageremarksstring
                    var averageplayer5 =  prestige>=10 && totalmulti>1500 && mpm>1000000000000?  goodplayer5 : badremarksstring
                    var badplayer5 =   prestige>=10 && totalmulti>1250 && mpm>750000000000?  averageplayer5 :badremarksstring

                    var godplayer4 = prestige>=8 && totalmulti>=3000 && mpm>1500000000000? godremarksstring :excellentremarksstring
                    var excellentplayer4 = prestige>=8 && totalmulti>2500 && mpm>1000000000000?  godplayer4 : goodremarksstring 
                    var goodplayer4 = prestige>=8 && totalmulti>2000 && mpm>750000000000?  excellentplayer4 : averageremarksstring
                    var averageplayer4 = prestige>=8 && totalmulti>1500 && mpm>600000000000?  goodplayer4 : badremarksstring
                    var badplayer4 =  prestige>=8 && totalmulti>1000 && mpm>500000000000?  averageplayer4 :badremarksstring

                    var godplayer3 = prestige>=5 && totalmulti>=2500? godremarksstring :excellentremarksstring
                    var excellentplayer3 = prestige>=5 && totalmulti>=2000?  godplayer3 :goodremarksstring 
                    var goodplayer3 = prestige>=5 && totalmulti>=1500? excellentplayer3 : averageremarksstring
                    var averageplayer3 = prestige>=5 && totalmulti>=1000? goodplayer3 : badremarksstring
                    var badplayer3 = prestige>=5 && totalmulti>=500? averageplayer3 : badremarksstring

                    var godplayer2 = prestige>=4 && totalmulti>=1500? godremarksstring : excellentremarksstring
                    var excellentplayer2 = prestige>=4 && totalmulti>=1250?  godplayer2 : goodremarksstring 
                    var goodplayer2 = prestige>=4 && totalmulti>=750? excellentplayer2 : averageremarksstring
                    var averageplayer2 = prestige>=4 && totalmulti>=500? goodplayer2 : badremarksstring
                    var badplayer2 = prestige>=4 && totalmulti>=300? averageplayer2 : badremarksstring

                    var godplayer1 = prestige>=3 && totalmulti>=500? godremarksstring : excellentremarksstring
                    var excellentplayer1 = prestige>=3 && totalmulti>=300? godplayer1 : excellentremarksstring 
                    var goodplayer1 = prestige>=3 && totalmulti>=150? excellentplayer1 : averageremarksstring
                    var averageplayer1 = prestige>=3 && totalmulti>=100? goodplayer1 : badremarksstring
                    var badplayer1 = prestige>=3 && totalmulti>=50? averageplayer1 : badremarksstring

                    var godplayer = prestige>=2 && totalmulti>=150? godremarksstring : excellentremarksstring
                    var excellentplayer = prestige>=2 && totalmulti>=125? godplayer : goodremarksstring
                    var goodplayer = prestige>=2 && totalmulti>=100? excellentplayer : averageremarksstring
                    var averageplayer = prestige>=2 && totalmulti>=50? goodplayer : badremarksstring
                    var badplayer = prestige>=2 && totalmulti>=25? averageplayer : `Mans gotta reset`
                    
                    var determineprestige13 = prestige>=35? badplayer13 : badplayer12
                    var determineprestige12 = prestige>=30? determineprestige13 : badplayer11
                    var determineprestige11 = prestige>=25? determineprestige12 : badplayer10
                    var determineprestige10 = prestige>=20? determineprestige11 : badplayer9
                    var determineprestige9 = prestige>=18? determineprestige10 : badplayer8
                    var determineprestige8 = prestige>=16? determineprestige9 : badplayer7
                    var determineprestige7 = prestige>=14? determineprestige8 : badplayer6
                    var determineprestige6 = prestige>=12? determineprestige7 : badplayer5
                    var determineprestige5 = prestige>=10? determineprestige6 : badplayer4
                    var determineprestige4 = prestige>=8? determineprestige5 : badplayer3
                    var determineprestige3 = prestige>=5? determineprestige4 : badplayer2
                    var determineprestige2 = prestige>=4? determineprestige3 : badplayer1
                    var determineprestige1 = prestige>=3? determineprestige2 : badplayer
                    var determineprestige = prestige>=2? determineprestige1 : `Too new`

                    var godmultiremarks = [`${totalmulti}x at Prestige ${prestige} is phenomenal`, `${totalmulti}x is superb for Prestige ${prestige}`]
                    var excellentmultiremarks = [`${totalmulti}x is great for Prestige ${prestige}`, `For Prestige ${prestige}, ${totalmulti}x is impressive`]
                    var goodmultiremarks = [`${totalmulti}x is very good at Prestige ${prestige}`, `${totalmulti}x is nice as hell for Prestige ${prestige}`]
                    var averagemultiremarks = [`a multiplier of ${totalmulti}x is solid for prestige ${prestige}`, `${totalmulti}x is to be expected at Prestige ${prestige}`]
                    var badmultiremarks = [`horrible multiplier for Prestige ${prestige}`, `${totalmulti}x is garbage for Prestige ${prestige}`]
                    var godmultistring = godmultiremarks[Math.floor(Math.random() * godmultiremarks.length)]
                    var excellentmultistring = excellentmultiremarks[Math.floor(Math.random() * excellentmultiremarks.length)]
                    var goodmultistring = goodmultiremarks[Math.floor(Math.random() * goodmultiremarks.length)]
                    var averagemultistring = averagemultiremarks[Math.floor(Math.random() * averagemultiremarks.length)]
                    var badmultistring = badmultiremarks[Math.floor(Math.random() * badmultiremarks.length)]
                    
                    var prestige16gd = prestige>=16 && totalmulti>=3500? godmultistring : excellentmultistring
                    var prestige16e = prestige>=16 && totalmulti>=3250? prestige16gd : goodmultistring
                    var prestige16g = prestige>=16 && totalmulti>=3000? prestige16e : averagemultistring
                    var prestige16a = prestige>=16 && totalmulti>=2500? prestige16g : badmultistring
                    var prestige16b = prestige>=16 && totalmulti>=2000? prestige16a : badmultistring

                    var prestige14gd = prestige>=14 && totalmulti>=3500? godmultistring : excellentmultistring
                    var prestige14e = prestige>=14 && totalmulti>=3000? prestige14gd : goodmultistring
                    var prestige14g = prestige>=14 && totalmulti>=2500? prestige14e : averagemultistring
                    var prestige14a = prestige>=14 && totalmulti>=2000? prestige14g : badmultistring
                    var prestige14b = prestige>=14 && totalmulti>=1500? prestige14a : badmultistring

                    var prestige12gd = prestige>=12 && totalmulti>=3000? godmultistring : excellentmultistring
                    var prestige12e = prestige>=12 && totalmulti>=2750? prestige12gd : goodmultistring
                    var prestige12g = prestige>=12 && totalmulti>=2500? prestige12e : averagemultistring
                    var prestige12a = prestige>=12 && totalmulti>=2000? prestige12g : badmultistring
                    var prestige12b = prestige>=12 && totalmulti>=1500? prestige12a : badmultistring

                    var prestige10gd = prestige>=10 && totalmulti>=3000? godmultistring : excellentmultistring
                    var prestige10e = prestige>=10 && totalmulti>=2500? prestige10gd : goodmultistring
                    var prestige10g = prestige>=10 && totalmulti>=2000? prestige10e : averagemultistring
                    var prestige10a = prestige>=10 && totalmulti>=1500? prestige10g : badmultistring
                    var prestige10b = prestige>=10 && totalmulti>=1250? prestige10a : badmultistring

                    var prestige8gd = prestige>=8 && totalmulti>=3000? godmultistring : excellentmultistring
                    var prestige8e = prestige>=8 && totalmulti>=2500? prestige8gd : goodmultistring
                    var prestige8g = prestige>=8 && totalmulti>=2000? prestige8e : averagemultistring
                    var prestige8a = prestige>=8 && totalmulti>=1500? prestige8g : badmultistring
                    var prestige8b = prestige>=8 && totalmulti>=1000? prestige8a : badmultistring
                   
                    var prestige5gd = prestige>=5 && totalmulti>=2500? godmultistring : excellentmultistring
                    var prestige5e = prestige>=5 && totalmulti>=2000? prestige5gd : goodmultistring
                    var prestige5g = prestige>=5 && totalmulti>=1500? prestige5e : averagemultistring
                    var prestige5a = prestige>=5 && totalmulti>=1000? prestige5g : badmultistring
                    var prestige5b = prestige>=5 && totalmulti>=500? prestige5a : badmultistring

                    var prestige4gd = prestige>=4 && totalmulti>=1250? godmultistring : excellentmultistring
                    var prestige4e = prestige>=4 && totalmulti>=1000? prestige4gd : goodmultistring
                    var prestige4g = prestige>=4 && totalmulti>=750? prestige4e : averagemultistring
                    var prestige4a = prestige>=4 && totalmulti>=500? prestige4g : badmultistring
                    var prestige4b = prestige>=4 && totalmulti>=300? prestige4a : badmultistring

                    var prestige3gd = prestige>=3 && totalmulti>=750? godmultistring : excellentmultistring
                    var prestige3e = prestige>=3 && totalmulti>=500? prestige3gd : goodmultistring
                    var prestige3g = prestige>=3 && totalmulti>=350? prestige3e : averagemultistring
                    var prestige3a = prestige>=3 && totalmulti>=250? prestige3g : badmultistring
                    var prestige3b = prestige>=3 && totalmulti>=100? prestige3a : badmultistring

                    var prestige2gd = prestige>=2 && totalmulti>=500? godmultistring : excellentmultistring
                    var prestige2e = prestige>=2 && totalmulti>=250? prestige2gd : goodmultistring
                    var prestige2g = prestige>=2 && totalmulti>=100? prestige2e : averagemultistring
                    var prestige2a = prestige>=2 && totalmulti>=50? prestige2g : badmultistring
                    var prestige2b = prestige>=2 && totalmulti>=25? prestige2a : `Gotta reset buddy`

                    var prestigecalc8 = prestige>=16? prestige16b : prestige14b
                    var prestigecalc7 = prestige>=14? prestigecalc8 : prestige12b
                    var prestigecalc6 = prestige>=12? prestigecalc7 : prestige10b
                    var prestigecalc5 = prestige>=10? prestigecalc6 : prestige8b
                    var prestigecalc4 = prestige>=8? prestigecalc5 : prestige5b
                    var prestigecalc3 = prestige>=5? prestigecalc4 : prestige4b
                    var prestigecalc2 = prestige>=4? prestigecalc3 : prestige3b
                    var prestigecalc1 = prestige>=3? prestigecalc2 : prestige2b
                    var prestigecalc = prestige>=2? prestigecalc1 : `Too new to understand`

                    var permmultical3 = permmulti>=4? `This person is very experienced, a perm multi of ${permmulti}x could only mean they've been an active grinder or REALLY lucky`: `This person has a very respectable perm multi of ${permmulti}x, probably opened ALOT of briefcases` 
                    var permultical2 = permmulti>=3? permmultical3 : `Has a good permanent multiplier of ${permmulti}x, definitely opened a number of briefcases`
                    var permmultical1 = permmulti>=2.0? permultical2 : `probably opened a few briefcases which is why they got a perm multi of ${permmulti}x`
                    var permmultical = permmulti>=1.5? permmultical1 : `Permanent multi kinda low, probably new or just unlucky`
                    const embed1 = new Discord.MessageEmbed()
                    .setColor(`#FEFFA3`)
                    .setTitle(`Lookup User Report`)
                    .setThumbnail()
                    .addFields(
                        {name: "💠 Prestige", value: `
**Points per Day:** ${ppd.toLocaleString(`en`)}
**Accumulated:** ${app.toLocaleString(`en`)}
**Level** ${prestige}
                        `},
                        {name: "💰 Money", value: `
**Per Day:** $${mpd.toLocaleString(`en`)}
**Accumulated:** $${balanceacc.toLocaleString(`en`)}
                        `},
                        {name: `📈 Multiplier`, value: `
**Current**: ${totalmulti}x
**Potential**: ${multicalc}`
                        }, 
                        { name:`📝 Notes`, value: `
**1.** ${determineprestige}
**2.** ${prestigecalc}
**3.** ${permmultical}                      
                        `}
                    ).setFooter(`Requested by ${message.author.username}`)
                    message.channel.send(embed1)
                }})})})//} else return;
        })
    }} else return;
})
/*client.on("message" , (message) => {
const collector = new Discord.MessageCollector(message.channel, m => m.embeds.length > 0, { maxProcessed: 1, max: 1 });
if(message.content === ',p'){
    if (message.member.roles.cache.has(`876815413915303956`)) //checks if member has the 'Exclusives' role
    {
    collector.on('collect', (el, c) =>{
      let text = el.embeds[0].fields[1].value;
      var balance = text.split('💰 $').pop().split('\n')[0].replace(/,/g, '')
      let text2 = el.embeds[0].fields[2].value;
      var income = text2.split('💸 $').pop().split('\n')[0].replace(`/min`, '').replace(/,/g,'')
            el.react('📊').then(r => {
              const filter = (reaction, user) => reaction.emoji.name === '📊'
            el.awaitReactions(filter, {max:1}).then(collected => {
              const arrayUsers = collected.get('📊').users.cache //.get(message.member.user.id)
                    arrayUsers.forEach(index => {
                      if(index.id === message.member.user.id){
                        const filter = m => Number(m.content) >= 1 && Number(m.content) <= 50; //sets limit on number 
                        message.channel.send(`What is your prestige level?(NUMBERS ONLY)`);
                        message.channel.awaitMessages(filter, { max: 1, time : 10000, errors: ["time"] })
                        .then((collected) => {
                            const msg = collected.first()
                            const fs = require("fs");
                            const logo = 
                            'https://static.bangkokpost.com/media/content/20200903/c1_3738615.jpg'
                            let bil = 1000000000
                            client.msgs = require('./prestiges.json')
                            let _message = client.msgs[msg.content-1].priceperpoint;
                            let ppm = (income / _message) //prestige points per minute
                            let ppd = (ppm * 1440)  // prestige points per day
                            let giftReceive = income * 1440 //max gift amount 
                            client.taxes = require('./tax.json')
                            let taxcharge = client.taxes[giftReceive.toString().length].gift;
                            let AfterTaxGift = (giftReceive * taxcharge).toLocaleString(`en`)
                            let giftGive = income * 120 // giftable amt
                            let taxchargegift = client.taxes[giftGive.toString().length].gift;
                            let AfterTaxGive = (giftGive * taxchargegift).toLocaleString(`en`)
                            let bpp = balance / _message //balance prestige points
                            let bmb = 1000000000 - bpp // billion minus balance
                            var a = 0 , b = bpp; 
                            let tmb = 10000000000 - bpp //ten billion minus balance
                            let hmb = 100000000000 - bpp // hundred billion minus balance
                            var c = b > 1000000000? a : bmb; //shortened version of if-else statement
                            var d = b > 10000000000? a : tmb;
                            var e = b > 100000000000? a : hmb;
                            var fin = `✅Finished`
                            var f = (c/ppd) > 0? `${(c / ppd).toFixed(2)} Days or ${((c / ppd) * 24).toFixed(2)} Hours` : fin
                            var g = (d/ppd) > 0? `${(d / ppd).toFixed(2)} Days or ${((d / ppd) * 24).toFixed(2)} Hours` : fin
                            var h = (e/ppd) > 0? `${(e / ppd).toFixed(2)} Days or ${((e / ppd) * 24).toFixed(2)} Hours` : fin
                            let oneh = (2787950 - bpp)
                            let fiveh = (69702250 - bpp)
                            let onesh = (279340210 - bpp)
                            let twosh = ((279340210 + 11000000) - bpp)
                            let threesh = (3621882780- bpp)
                            let threefivesh = (14528281710 - bpp)
                            let foursh = (115574085430 - bpp)
                            var i = b > 2787950? a : oneh
                            var j = b > 69702250? a : fiveh
                            var k = b > 279340210? a : onesh
                            var l = b > (279340210 + 11000000)? a : twosh
                            var m = b > 3621882780? a : threesh
                            var n = b > 14528281710? a : threefivesh
                            var o = b > 115574085430? a : foursh
                            var ach = `✅ Achieved`
                            var q = (i/ppd) > 0? `${(i / ppd).toFixed(2)} Days or ${((i / ppd) * 24).toFixed(2)} Hours` : ach
                            var r = (j/ppd) > 0? `${(j / ppd).toFixed(2)} Days or ${((j / ppd) * 24).toFixed(2)} Hours` : ach
                            var s = (k/ppd) > 0? `${(k / ppd).toFixed(2)} Days or ${((k / ppd) * 24).toFixed(2)} Hours` : ach
                            var t = (l/ppd) > 0? `${(l / ppd).toFixed(2)} Days or ${((l / ppd) * 24).toFixed(2)} Hours` : ach
                            var u = (m/ppd) > 0? `${(m / ppd).toFixed(2)} Days or ${((m / ppd) * 24).toFixed(2)} Hours` : ach
                            var v = (n/ppd) > 0? `${(n / ppd).toFixed(2)} Days or ${((n / ppd) * 24).toFixed(2)} Hours` : ach
                            var w = (o/ppd) > 0? `${(o / ppd).toFixed(2)} Days or ${((o / ppd) * 24).toFixed(2)} Hours` : ach
                            
                            const embed1 = new Discord.MessageEmbed()
                            .setTitle("Profile Report")
                            .setAuthor(`${message.author.username}`,`${message.author.avatarURL()}`)
                            .setThumbnail(message.author.avatarURL())
                            .setColor(`#FEFFA3`)
                             .setDescription(
`**PP/Day**: ${ppd.toLocaleString(`en`)}
**Current PP**: ${bpp.toLocaleString(`en`)}

**⌛ Time until**: 
**1 bil**: ${f}
**10 bil**: ${g}
**100 bil**: ${h}

**📈 Multiplier**
**100x**: ${q}
**500x**: ${r}
**1000x**: ${s}
**2000x**: ${t}
**3000x**: ${u}
**3500x**: ${v}
**4000x**: ${w}
**📉 Suggested Prestige:**

**🎁 Gifts After Tax**
**Max Giftable**: ${AfterTaxGive}
**Max Receivable**: ${AfterTaxGift}
        


        `)
                            .setFooter(`Developed by The Rock#1333`,`https://cdn.discordapp.com/attachments/776985762499002408/877895083268128788/pngegg.png`)

                            message.channel.send(embed1)
                        })
                      }})})})})}
                    }else return;
                })*/

client.login(config.token)