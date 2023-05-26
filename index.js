const { timeStamp, error } = require('console');
const { DH_CHECK_P_NOT_SAFE_PRIME } = require('constants');
const Discord = require('discord.js');
const { send } = require('process');
// const { lookup } = require('dns');
// const { get } = require('http');
// const { e, not } = require('mathjs');
// const { send } = require('process');
const command = require('./command.js')
const client = new Discord.Client()
const config = require ('./config.json')
const whitelist = (`348296915143884801`,`692062388991688814`,`463174263973871626`,`330818210561785856`)
//const db = require(`quick.db`)
/*const lookupreact = require(`./lookupreact.js`)
const sklguide = require(`./sklguide.js`);
const { e } = require('mathjs');
const os = require(`os`);
//const { Model } = require('mongoose');
const corpinfo = require('./corpinfo.js');
const version = "1.0.0"
// const mongo = require("./mongo")
// const mongoose = require(`mongoose`)*/
require('events').EventEmitter.defaultMaxListeners = 30;

client.on('ready', async () => {
    console.log('The client is ready!') 
    })

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

//     command(client, 'invite', (message) => {
//         const embed = new Discord.MessageEmbed()
//         .addField('Invite DwayneBot',`[Invite link (Recommended)](https://discord.com/api/oauth2/authorize?client_id=780813319137263618&permissions=2147483639&scope=bot)
// [Invite link (Admin)](https://discord.com/oauth2/authorize?client_id=780813319137263618&permissions=8&scope=bot)`)
             
        
//         .setAuthor(message.author.username)

//         message.channel.send(embed)
//     })
    
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
**rock**: Built Different
**conflip**: flips a coin`
        }, 
    {name: "Idlecap-related Commands", value: 
    `**m**: Shows the prestige point costs
**lb**: Shows the server-wide leaderboards for multiplier, incomes and balance
**p <id>**: Bot will react and show evaluation of a looked up user
**gcalc**: Will calculate the actual gift amount after taxes.`
})

        message.channel.send(embed)
    })

    command(client,'stats',  (message) => {
         const users = client.users.cache;
         const channels = client.channels.cache;
        // console.log(users.size);        
        // client.uptime is in millseconds
      // this is just maths, I won't explain much of it
      // % is modulo, AKA the remainder of a division
      //let days = Math.floor(client.uptime / 86400000);
      let hours = Math.floor(client.uptime / 3600000) % 24;
      let minutes = Math.floor(client.uptime / 60000) % 60;
      let seconds = Math.floor(client.uptime / 1000) % 60;
     const fs = require("fs")
     const content = fs.readFileSync('./index.js', 'utf8').split('\n')
     const test = content.length   
     const content1 = fs.readFileSync('./lookupreact.js', 'utf8').split('\n')
     const test1 = content1.length  
      const logo =  'https://static.bangkokpost.com/media/content/20200903/c1_3738615.jpg'
      const embed = new Discord.MessageEmbed()
        
        .setTitle('DwayneBot statistics')
        .setDescription('The prefix is `;`')
        .setColor('#FEFFA3')
        .setThumbnail(logo)
        .addFields({name: "🖥 Bot Information", value: `Creator: **The Rock#1333**
Version: **${version}**
Lines of code: **${test + test1}**`},
{name:"📊 Bot Statistics", value:`Users: **${users.size}**
Channels: **${channels.size}**
Servers: **${client.guilds.cache.size}**`},
{name: "🌐 Hosting Information", value:`Memory Usage: **${(((process.memoryUsage().heapUsed)/(os.totalmem()) * 100).toFixed(2))}% (${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)}mb)**
RAM: **${(os.totalmem()/ 1024 / 1024).toFixed(2)}mb**
Uptime: **${hours} hours ${minutes} minutes ${seconds} seconds**
Database: **Quick.db ${require("quick.db").version}**
Kernel: **${os.version()}**
Operating System: **${os.release}**`})
        .setTimestamp()

        message.channel.send(embed)
    }) 
    command(client, `gcalc`, (message) => {
        const fs = require("fs")
        let content = message.content.split(" ");
        let args = content.slice(1);

        client.taxes = require('./tax.json')
        //if (isNaN(args)) return message.channel.send("Specify numbers only lmao");
        let inputvalue = Number(args[0])//fetches value for calculations

        let taxcharge = client.taxes[inputvalue.toString().length].gift
        let aftertaxvalue = Math.floor((inputvalue * taxcharge)).toLocaleString(`en`)
        var a = Math.floor((inputvalue * 0.7)).toLocaleString(`en`), b = aftertaxvalue
        var c = inputvalue.toString().length > 29? a : b
                            message.channel.send(`${c}`)
    }) 
    command(client, `bpcalc`, (message) => {
        const fs = require(`fs`)
        let content = message.content.split(` `)
        let args = content.splice(1);

        client.prestige = require(`./prestiges.json`)
        let prestigevalue = Number(args[0])
        let calcvalue = Number(args[1])
        let costperpoint = 2000*((prestigevalue*prestigevalue*prestigevalue))+10000*(prestigevalue*prestigevalue);
        let balprescalc = calcvalue / costperpoint 

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

    command(client, "guide", (message) => {
        if (message.member.roles.cache.has(`850275705975472189`))
        {
        const Embedguide = new Discord.MessageEmbed()
        .setColor(`#FEFFA3`)
        .addField(`Guides`,`[Prestige Guide](https://docs.google.com/document/d/15FonIjH2xuxVSX5BJsfvHi2b9qUEIAmnq3mtj2UrO0o/edit?usp=sharing)` )
        
        
        message.channel.send(Embedguide)
}})
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
        //pages is very flexible, as long as you change the array at the top you're set
let pages = ["Page one", "Page two"];
let page = 1;
    const embed = new Discord.MessageEmbed()
        .setColor(0xffffff) //sets color here
        .setTitle(`Prestige cost for each Level`)
        .setFooter(`Page 1 of 2`)
        .setDescription(`1 = 12,000\n2 = 56,000\n3 = 144,000\n4 = 288,000\n5 = 500,000\n6 = 792,000\n7 = 1,176,000\n8 = 1,664,000\n9 = 2,268,000
10 = 3,000,000\n11 = 3,872,000\n12 = 4,896,000\n13 = 6,084,000\n14 = 7,448,000\n15 = 9,000,000\n16 = 10,752,000\n17 = 12,716,000\n18 = 14,904,000\n19 = 17,328,000
20 = 20,000,000`)

    message.channel.send(embed).then(msg => {
        msg.react('⏪').then(r => {
            msg.react('⏩');
            //filters
            const isBackwards = (reaction, user) => reaction.emoji.name === '⏪' && user.id === message.author.id;
            const isForwards = (reaction, user) => reaction.emoji.name === '⏩' && user.id === message.author.id;

            const backwards = msg.createReactionCollector(isBackwards);
            const forwards = msg.createReactionCollector(isForwards);

            backwards.on("collect", r => {
                if (page === 0) return;
                page--;
                embed.setTitle(`Prestige cost for each Level`)
                embed.setDescription(`1 = 12,000\n2 = 56,000\n3 = 144,000\n4 = 288,000\n5 = 500,000\n6 = 792,000\n7 = 1,176,000\n8 = 1,664,000\n9 = 2,268,000
10 = 3,000,000\n11 = 3,872,000\n12 = 4,896,000\n13 = 6,084,000\n14 = 7,448,000\n15 = 9,000,000\n16 = 10,752,000\n17 = 12,716,000\n18 = 14,904,000\n19 = 17,328,000
20 = 20,000,000`);
                embed.setFooter(`page 1 of 2`);
                msg.edit(embed)
            });

            forwards.on("collect", r => {
                if (page === pages.length) return;
                page++;
                embed.setTitle(`Prestige cost for each Level`)
                embed.setDescription(`21 = 22,932,000\n22 = 26,136,000\n23 = 29,624,000\n24 = 33,408,000\n25 = 37,500,000\n26 = 41,912,000\n27 = 46,656,000\n28 = 51,744,000
29 = 57,188,000\n30 = 63,000,000\n31 = 69,192,000\n32 = 75,776,000\n33 = 82,764,000\n34 = 90,168,000\n35 = 98,000,000\n36 = 106,272,000\n37 = 114,996,000\n38 = 124,184,000
39 = 133,848,000\n40 = 144,000,000`);
                embed.setFooter(`Page 2 of 2`);
                msg.edit(embed)
            });
        });
    });
})

 

//client.on(`message`, (message) => { sklguide})

/*client.on("message" , (message) => {
    lookupreact
})
client.on("message" , (message) => {
    corpinfo
})*/
// client.on("message", async (message) => {
    
//     const collector = new Discord.MessageCollector(message.channel, m => m.embeds.length > 0, { maxProcessed: 1, max: 1 });
//     if(message.content === ',c') {
//     if (!message.member.roles.cache.has(`850275705975472189`)) return;
//         collector.on(`collect`, (el, c) =>{
//             //var profile = new db.table(`Profile list`)
//             let name = el.embeds[0].author.name;
//             var corpname = name.split(`📈 `).pop().split(`x`)[0]

//             let cmulti = el.embeds[0].fields[7].value;
//             var corpmulti = Number(cmulti.split(`📈 `).pop().split(`x`)[0])
//             if(corpname.includes(`SKL`)) {db.set(`${message.author}`)

//             }
//             })
//         }
//     })
client.on("message", async (message) => {
    if(message.content === ';stats') {
        message.channel.send("I'M WORKING!")
    }
})
            
client.on("message", async (message) => {
    
    const collector = new Discord.MessageCollector(message.channel, m => m.embeds.length > 0, { maxProcessed: 1, max: 1 });
    if(message.content === ',p') {
    if (!message.member.roles.cache.has(`850275705975472189`)) return;
        collector.on(`collect`, (el, c) =>{
            //var profile = new db.table(`Profile list`)
            let Coins = el.embeds[0].fields[5].value;
            var coinbal = Number(Coins.split(`<:coin:713481704152629290> `).pop().split(`\n`)[0])
            if(el.embeds[0].author.name.includes(`Moon`)){
            let TotalMultiplier = el.embeds[0].fields[8].value;
            var moonmultibal = Number(TotalMultiplier.split(`📈 `).pop().split(`x`)[0])
            let Balance = el.embeds[0].fields[1].value;
            let moonmoneybal = Number(Balance.split(`💰 $`).pop().split(`\n`)[0].replace(/,/g,''))
            let Income = el.embeds[0].fields[2].value;
            var moonincomebal = Number(Income.split(`💸 $`).pop().split(`/min`)[0].replace(/,/g,''))
            // let Name = el.embeds[0].author.name
            // let username = name.split(``).pop().split(`\n`)[0]
            if(db.get(`${message.author.id}.coins`) === null) {
                db.set(`${message.author.id}.coins`, coinbal),
                db.set(`${message.author.id}.moonmulti`, moonmultibal),
                db.set(`${message.author.id}.moonbalance`, moonmoneybal),
                db.set(`${message.author.id}.moonincome`, moonincomebal)
            } else  db.set(`${message.author.id}.coins`, coinbal),
            db.set(`${message.author.id}.moonmulti`, moonmultibal),
            db.set(`${message.author.id}.moonbalance`, moonmoneybal),
            db.set(`${message.author.id}.moonincome`, moonincomebal)
        
            }else if(!el.embeds[0].author.name.includes(`Moon`)) {
            let TotalMultiplier = el.embeds[0].fields[7].value;
            var multibal = Number(TotalMultiplier.split(`📈 `).pop().split(`x`)[0])
            let Balance = el.embeds[0].fields[1].value;
            let moneybal = Number(Balance.split(`💰 $`).pop().split(`\n`)[0].replace(/,/g,''))
            let Income = el.embeds[0].fields[2].value;
            var incomebal = Number(Income.split(`💸 $`).pop().split(`/min`)[0].replace(/,/g,''))
            //console.log(moneybal)
           // profile.set(`Daily Boost`, dailyboost)
            //profile.get(`Daily Boost`)
            //db.get(`Daily Boost`)
            if(db.get(`${message.author.id}.coins`) === null) {
                
                db.set(`${message.author.id}.coins`, coinbal),
                db.set(`${message.author.id}.multi`, multibal),
                db.set(`${message.author.id}.balance`, moneybal),
                db.set(`${message.author.id}.income`, incomebal)

                
            } else db.set(`${message.author.id}.coins`, coinbal),
                    db.set(`${message.author.id}.multi`, multibal),
                    db.set(`${message.author.id}.balance`, moneybal),
                    db.set(`${message.author.id}.income`, incomebal)
        }

    })  // to be continued, for if user has admin, run commands
    }
})
//client.on("messageCreate", (message) => {
    // check if the message is a slash command
  //  if (message.type !== "APPLICATION_COMMAND") return;

client.on(`message`, async (message) => {
    if(message.content.startsWith(';lb')){
    if (!message.member.roles.cache.has(`850275705975472189`)) return;
        let content = message.content.split(" ");
        let args = (content.slice(1))
        const error1 = `:x:Choose either Multi, balance, income` 
        
       if(args[0] === `income`|| args[0] === `balance` || args[0] === `multi` ||args[0] === `caps`|| args[0] === `coins`) {
        const error1 = `:x:Choose either Multi, balance, income` 
         const { member, mentions } = message
                //db.all().forEach(i => {db.delete(i.ID)})      
                //<@${money[i].ID}>
                if(args[1]===`Moon`||args[1]===`M`||args[1]===`m`||args[1]===`moon`){
                    if (args[0] === `income`){
                        let money1 = db.all().filter(x => x.data.moonincome !== undefined)
                            let money = money1.sort((a, b) => b.data.moonincome - a.data.moonincome)
                            money.length = 10;
                            var finalLb = "";
                            for (var i in money) {
                                let acc = await client.users.fetch(money[i].ID)
                                finalLb += `**${money.indexOf(money[i])+1}. ${acc.id? acc.tag.replace(/[\u04c7-\u0591\u05D0-\u05EA\u05F0-\u05F4\u0600-\u06FF]/gi, "") : "Unknown User#0000"}** - ${`$${money[i].data.moonincome.toLocaleString(`en`)}/min`}\n`;}
                                const embed = new Discord.MessageEmbed() /*MessageEmbed*/
                                .setAuthor(`Moon Income LB - ${message.guild.name}`, message.guild.iconURL())
                                .setColor("#FEFFA3")
                                .setDescription(finalLb)
                                .setFooter(message.author.tag,`https://cdn.discordapp.com/emojis/791335909021712394.gif?v=1`)
                                .setTimestamp()
                           message.channel.send(embed);
                       }
                        else if (args[0]===`balance`){
                            let money1 = db.all().filter(x => x.data.moonbalance !== undefined)
                            // data = data.filter(function( element ) {
                            //     return element !== undefined;
                            //  });                             
                            let money = (money1.sort((a, b) => b.data.moonbalance - a.data.moonbalance))

                            money.length = 10;

                            var finalLb = "";
                            for (var i in money) {
                                let acc = await client.users.fetch(money[i].ID)
                                finalLb += `**${money.indexOf(money[i])+1}. ${acc.id? acc.tag.replace(/[\u04c7-\u0591\u05D0-\u05EA\u05F0-\u05F4\u0600-\u06FF]/gi, "") : "Unknown User#0000"}** - ${`${(money[i].data.moonbalance).toLocaleString(`en`)}`}\n`;}
                                const embed = new Discord.MessageEmbed() /*MessageEmbed*/
                                .setAuthor(`Moon Richest LB - ${message.guild.name}`, message.guild.iconURL())
                                .setColor("#FEFFA3")
                                .setDescription(finalLb)
                                .setFooter(message.author.tag, `https://cdn.discordapp.com/emojis/791335909021712394.gif?v=1`)
                                .setTimestamp()
                           message.channel.send(embed);
                        }
                        else if (args[0]===`multi`){
                            let money1 = db.all().filter(x => x.data.moonmulti !== undefined)
                            let money = money1.sort((a, b) => b.data.moonmulti - a.data.moonmulti)
                            money.length = 10;
                                    
                            var finalLb = "";
                            for (var i in money) {
                                let acc = await client.users.fetch(money[i].ID)
                                finalLb += `**${money.indexOf(money[i])+1}. ${acc.id? acc.tag.replace(/[\u04c7-\u0591\u05D0-\u05EA\u05F0-\u05F4\u0600-\u06FF]/gi, "") : "Unknown User#0000"}** - ${`${money[i].data.moonmulti}x`}\n`;}
                                const embed = new Discord.MessageEmbed() /*MessageEmbed*/
                                .setAuthor(`Moon Multiplier LB - ${message.guild.name}`, message.guild.iconURL())
                                .setColor("#FEFFA3")
                                .setDescription(finalLb)
                                .setFooter(message.author.tag, `https://cdn.discordapp.com/emojis/791335909021712394.gif?v=1`)
                                .setTimestamp()
                           message.channel.send(embed);
                        }
                        else if (args[0]===`caps`){
                            let money1 = db.all().filter(x => x.data.moonstorage !== undefined)
                            let money = money1.sort((a, b) => b.data.moonstorage - a.data.moonstorage)
                            money.length = 10;
                                    
                            var finalLb = "";
                            for (var i in money) {
                                let acc = await client.users.fetch(money[i].ID)
                                finalLb += `**${money.indexOf(money[i])+1}. ${acc.id? acc.tag.replace(/[\u04c7-\u0591\u05D0-\u05EA\u05F0-\u05F4\u0600-\u06FF]/gi, "") : "Unknown User#0000"}** - ${`${(money[i].data.moonstorage).toLocaleString(`en`)}`}\n`;}
                                const embed = new Discord.MessageEmbed() /*MessageEmbed*/
                                .setAuthor(`Moon Cap LB - ${message.guild.name}`, message.guild.iconURL())
                                .setColor("#FEFFA3")
                                .setDescription(finalLb)
                                .setFooter(message.author.tag,`https://emoji.gg/assets/emoji/7835_earth.png`)
                                .setTimestamp()
                           message.channel.send(embed);
                        }
                        else if (args[0]===`coins`){
                            const { member, mentions } = message
                            if (member.hasPermission('ADMINISTRATOR')) {
                            //db.all().forEach(i => {db.delete(i.ID)})      
                            //<@${money[i].ID}>
                            let money1 = db.all()
                            let money = money1.sort((a, b) => b.data.coins - a.data.coins)
                            money.length = 10;
                                    
                            var finalLb = "";
                            for (var i in money) {
                                let acc = await client.users.fetch(money[i].ID)
                                finalLb += `**${money.indexOf(money[i])+1}. ${acc.id? acc.tag.replace(/[\u04c7-\u0591\u05D0-\u05EA\u05F0-\u05F4\u0600-\u06FF]/gi, "") : "Unknown User#0000"}** - ${`${(money[i].data.coins).toLocaleString(`en`)} <:coin:885138850329002054>`}\n`;}
                                const embed = new Discord.MessageEmbed() /*MessageEmbed*/
                                .setAuthor(`Coin LB - ${message.guild.name}`, message.guild.iconURL())
                                .setColor("#FEFFA3")
                                .setDescription(finalLb)
                                .setFooter(message.author.tag, `https://cdn.discordapp.com/emojis/791335909021712394.gif?v=1`)
                                .setTimestamp()
                           message.channel.send(embed);
                   }}} else {
            
           if (args[0] === `income`){
            let money1 = db.all().filter(x => x.data.income !== undefined)
                let money = money1.sort((a, b) => b.data.income - a.data.income)
                money.length = 10;
                        
                var finalLb = "";
                for (var i in money) {
                    let acc = await client.users.fetch(money[i].ID)
                    finalLb += `**${money.indexOf(money[i])+1}. ${acc.id? acc.tag.replace(/[\u04c7-\u0591\u05D0-\u05EA\u05F0-\u05F4\u0600-\u06FF]/gi, "") : "Unknown User#0000"}** - ${`$${(money[i].data.income).toLocaleString(`en`)}/min`}\n`;}
                    const embed = new Discord.MessageEmbed() /*MessageEmbed*/
                    .setAuthor(`Income LB - ${message.guild.name}`, message.guild.iconURL())
                    .setColor("#FEFFA3")
                    .setDescription(finalLb)
                    .setFooter(message.author.tag,`https://emoji.gg/assets/emoji/7835_earth.png`)
                    .setTimestamp()
               message.channel.send(embed);
           }
            else if (args[0]===`balance`){
                let money1 = db.all().filter(x => x.data.balance !== undefined)
                let money = money1.sort((a, b) => b.data.balance - a.data.balance)
                money.length = 10;
                        
                var finalLb = "";
                for (var i in money) {
                    let acc = await client.users.fetch(money[i].ID)
                    finalLb += `**${money.indexOf(money[i])+1}. ${acc.id? acc.tag.replace(/[\u04c7-\u0591\u05D0-\u05EA\u05F0-\u05F4\u0600-\u06FF]/gi, "") : "Unknown User#0000"}** - ${`$${(money[i].data.balance).toLocaleString(`en`)}`}\n`;}
                    const embed = new Discord.MessageEmbed() /*MessageEmbed*/
                    .setAuthor(`Richest LB - ${message.guild.name}`, message.guild.iconURL())
                    .setColor("#FEFFA3")
                    .setDescription(finalLb)
                    .setFooter(message.author.tag,`https://emoji.gg/assets/emoji/7835_earth.png`)
                    .setTimestamp()
               message.channel.send(embed);
            }
            else if (args[0]===`multi`){
                let money1 = db.all().filter(x => x.data.multi !== undefined)
                let money = money1.sort((a, b) => b.data.multi - a.data.multi)
                money.length = 10;
                        
                var finalLb = "";
                for (var i in money) {
                    let acc = await client.users.fetch(money[i].ID)
                    finalLb += `**${money.indexOf(money[i])+1}. ${acc.id? acc.tag.replace(/[\u04c7-\u0591\u05D0-\u05EA\u05F0-\u05F4\u0600-\u06FF]/gi, "") : "Unknown User#0000"}** - ${`${(money[i].data.multi)}x`}\n`;}
                    const embed = new Discord.MessageEmbed() /*MessageEmbed*/
                    .setAuthor(`Multiplier LB - ${message.guild.name}`, message.guild.iconURL())
                    .setColor("#FEFFA3")
                    .setDescription(finalLb)
                    .setFooter(message.author.tag,`https://emoji.gg/assets/emoji/7835_earth.png`)
                    .setTimestamp()
               message.channel.send(embed);
            }
            else if (args[0]===`caps`){
                let money1 = db.all().filter(x => x.data.storage !== undefined)
                let money = money1.sort((a, b) => b.data.storage - a.data.storage)
                money.length = 10;
                        
                var finalLb = "";
                for (var i in money) {
                    let acc = await client.users.fetch(money[i].ID)
                    finalLb += `**${money.indexOf(money[i])+1}. ${acc.id? acc.tag.replace(/[\u04c7-\u0591\u05D0-\u05EA\u05F0-\u05F4\u0600-\u06FF]/gi, "") : "Unknown User#0000"}** - ${`${(money[i].data.storage).toLocaleString(`en`)}`}\n`;}
                    const embed = new Discord.MessageEmbed() /*MessageEmbed*/
                    .setAuthor(`Cap LB - ${message.guild.name}`, message.guild.iconURL())
                    .setColor("#FEFFA3")
                    .setDescription(finalLb)
                    .setFooter(message.author.tag,`https://emoji.gg/assets/emoji/7835_earth.png`)
                    .setTimestamp()
               message.channel.send(embed);
            }
            else if (args[0]===`coins`){
                const { member, mentions } = message
                if (member.hasPermission('ADMINISTRATOR')) {
                //db.all().forEach(i => {db.delete(i.ID)})      
                //<@${money[i].ID}>
                let money1 = db.all()
                let money = money1.sort((a, b) => b.data.coins - a.data.coins)
                money.length = 10;
                        
                var finalLb = "";
                for (var i in money) {
                    let acc = await client.users.fetch(money[i].ID)
                    finalLb += `**${money.indexOf(money[i])+1}. ${acc.id? acc.tag.replace(/[\u04c7-\u0591\u05D0-\u05EA\u05F0-\u05F4\u0600-\u06FF]/gi, "") : "Unknown User#0000"}** - ${`${(money[i].data.coins).toLocaleString(`en`)} <:coin:885138850329002054>`}\n`;}
                    const embed = new Discord.MessageEmbed() /*MessageEmbed*/
                    .setAuthor(`Coin LB - ${message.guild.name}`, message.guild.iconURL())
                    .setColor("#FEFFA3")
                    .setDescription(finalLb)
                    .setFooter(message.author.tag,`https://emoji.gg/assets/emoji/7835_earth.png`)
                    .setTimestamp()
               message.channel.send(embed);
                        }} else message.channel.send(error1);
                    
    }
} else message.channel.send(error1)
    }})

// client.on(`message`, async (message) => {
//         if(message.content === ';lb'){
//             const { member, mentions } = message
//                 if (member.hasPermission('ADMINISTRATOR')) {
//                 //db.all().forEach(i => {db.delete(i.ID)})      
//                 //<@${money[i].ID}>
//                 let money1 = db.all()
//                 let money = money1.sort((a, b) => b.data.balance - a.data.balance)
//                 money.length = 10;
                        
//                 var finalLb = "";
//                 for (var i in money) {
//                     let acc = await client.users.fetch(money[i].ID)
//                     finalLb += `**${money.indexOf(money[i])+1}. ${acc.id? acc.tag: "Unknown User#0000"}** - $${(money[i].data.balance).toLocaleString(`en`)}\n`;}
//                     const embed = new Discord.MessageEmbed() /*MessageEmbed*/
//                     .setAuthor(`Richest LB - ${message.guild.name}`, message.guild.iconURL())
//                     .setColor("#FEFFA3")
//                     .setDescription(finalLb)
//                     .setFooter(message.author.tag)
//                     .setTimestamp()
//                message.channel.send(embed);
//                         } else return;
//                        }})


client.on(`message`, async (message) => {
    if(message.content === ';cleardb'){
        if(message.author.id === "348296915143884801") {
        message.channel.send(`Are you sure you want to clear the database?`).then
        message.channel.awaitMessages(m => m.author.id == message.author.id,
            {max: 1, time: 30000}).then(collected => {
                    // only accept messages by the user who sent the command
                    // accept only 1 message, and return the promise after 30000ms = 30s

                    // first (and, in this case, only) message of the collection
                    if (collected.first().content.toLowerCase() == 'yes') {
                            message.reply('Database has been cleared.');
                            db.all().forEach(i => {db.delete(i.ID)}
                            )}

                    else
                            message.channel.send('Operation canceled.');      
            }).catch(() => {
                    message.channel.send('No answer after 30 seconds, operation canceled.');
            });


}}else return 
})

client.on(`message`, async (message) => {
    if(message.content.startsWith(';delete')){
        if(message.author.id === "348296915143884801") {
            let content = message.content.split(" ");
            let args = content.slice(1)
            let showdetails = db.get(`${args[0]}`)
            if(db.has(args[0])) { (db.delete(`${args[0]}`), message.channel.send(`User has been deleted.`))}
            else message.channel.send(`User not found`)
            .catch(() => {
                message.channel.send(`User doesn't exist`)
            })

        // for (var i in showdetails) { client.users.fetch(money[i].ID)
        //     let acc = await client.users.fetch(showdetails[i].ID)

        }}})
        // if (showdetails===null || showdetails === undefined) {message.channel.send(`User doesn't exist in database!`)}
        // else {

//         message.channel.send(`Are you sure you want to delete ${showdetails.ID}?`).then
//         message.channel.awaitMessages(m => m.author.id == message.author.id,
//             {max: 1, time: 30000}).then(collected => {
//                     // only accept messages by the user who sent the command
//                     // accept only 1 message, and return the promise after 30000ms = 30s

//                     // first (and, in this case, only) message of the collection
//                     // if (collected.first().content.toLowerCase() == 'yes') {
//                     //         message.reply('Database has been cleared.');
//                     //         db.delete(showdetails.data)
//                     //         }

//                     // else if (collected.first().content.toLowerCase() == 'no') {
//                     //         message.channel.send('Operation canceled.');  }    
//             }).catch(() => {
//                     message.channel.send('No answer after 30 seconds, operation canceled.');
//             });
                
            
// }}else message.channel.send(`Only the creator can do that.`) 
// })
client.on("message", async (message) => {

    const collector = new Discord.MessageCollector(message.channel, m => m.embeds.length > 0, { maxProcessed: 1, max: 1 });
    if(message.content === ',stats') {
    if (!message.member.roles.cache.has(`850275705975472189`)) return;
        collector.on(`collect`, (el, c) =>{
            if(el.embeds[0].author.name.includes(`Earth`)) {
            let daily = el.embeds[0].fields[6].value;
            let earthdaily = daily.split(`Daily Income Hours: `).pop().split(`\n`)[0]
            let prestige = el.embeds[0].fields[3].value;
            let earthprestige = Number(prestige.split(`💠 `).pop().split(`\n`)[0])+1
            let storagecap = el.embeds[0].fields[6].value;
            let earthstoragecap = storagecap.split(`Business Cap: `).pop().split(`\n`)[0].replace(/,/g,"")
            if(db.get(`${message.author.id}.prestige`)===null) {
            db.set(`${message.author.id}.daily`, earthdaily),
            db.set(`${message.author.id}.prestige`, earthprestige),
            db.set(`${message.author.id}.storage`, earthstoragecap)}
                else db.set(`${message.author.id}.daily`, earthdaily),
                     db.set(`${message.author.id}.prestige`, earthprestige),
                     db.set(`${message.author.id}.storage`, earthstoragecap)
        } else if(el.embeds[0].author.name.includes(`Moon`)){
            let daily = el.embeds[0].fields[6].value;
            let moondaily = daily.split(`Daily Income Hours: `).pop().split(`\n`)[0]
            let prestige = el.embeds[0].fields[3].value;
            let moonprestige = Number(prestige.split(`💠 `).pop().split(`\n`)[0])+1
            let storagecap = el.embeds[0].fields[6].value;
            let moonstoragecap = storagecap.split(`Business Cap: `).pop().split(`\n`)[0].replace(/,/g,"")
            if (db.get(`${message.author.id}.moonprestige`) === null){
            db.set(`${message.author.id}.moondaily`, moondaily),
            db.set(`${message.author.id}.moonprestige`, moonprestige),
            db.set(`${message.author.id}.moonstorage`, moonstoragecap)}
            else db.set(`${message.author.id}.moondaily`, moondaily),
                 db.set(`${message.author.id}.moonprestige`, moonprestige),
                 db.set(`${message.author.id}.moonstorage`, moonstoragecap)
        }
    })
    }
})

client.on("message" , (message) => {
const collector = new Discord.MessageCollector(message.channel, m => m.embeds.length > 0, { maxProcessed: 1, max: 1 });
if(message.content === ',p'){
    if (!message.member.roles.cache.has(`891941551838740530`))return; //checks if member has the 'Super Exclusives' role
    collector.on('collect', (el, c) =>{
      let text = el.embeds[0].fields[1].value;
      var balance = Number(text.split('💰 $').pop().split('\n')[0].replace(/,/g, ''))
      let text2 = el.embeds[0].fields[2].value;
      var income = Number(text2.split('💸 $').pop().split('\n')[0].replace(`/min`, '').replace(/,/g,''))
      var authorlocation = el.embeds[0].author.name;
      let location = authorlocation.split(``).pop().split(`\n`)[0];
            el.react('💵').then(r => {
              const filter = (reaction, user) => reaction.emoji.name === '💵'
            el.awaitReactions(filter, {max:1}).then(collected => {
              const arrayUsers = collected.get('💵').users.cache //.get(message.member.user.id)
                    arrayUsers.forEach(index => {
                      if(index.id === message.member.user.id){
                       if(!el.embeds[0].author.name.includes(`Moon`)){
                           if(db.get(`${message.author.id}.prestige`)===undefined){
                               message.channel.send(`Run ,stats first!`)
                           } else {
                            let bil = 1000000000
                            client.msgs = require('./prestiges.json')
                            let prestigeval = Number(db.get(`${message.author.id}.prestige`))
                            let prestigelevel = 2000*((prestigeval*prestigeval*prestigeval))+10000*(prestigeval*prestigeval); //matches prestige level from json file
                            let ppm = (income / prestigelevel) //prestige points per minute
                            let ppd = (ppm * 1440)  // prestige points per day
                            let mpd = income * 1440
                            let giftReceive = income * 1440 //max gift amount 
                            client.taxes = require('./tax.json')
                            let taxcharge = client.taxes[giftReceive.toString().length].gift;
                            let AfterTaxGift = (giftReceive * taxcharge).toLocaleString(`en`)
                            let giftGive = income * 120 // giftable amt
                            let taxchargegift = client.taxes[giftGive.toString().length].gift;
                            let AfterTaxGive = (giftGive * taxchargegift).toLocaleString(`en`)
                            client.moneyshort = require('./incomeperday.json') 
                            let bpp = balance / prestigelevel //balance prestige points
                            let bmb = (bil) - bpp // billion minus balance
                            let tmb = (bil*10) - bpp //ten billion minus balance
                            let hmb = (bil*100) - bpp // hundred billion minus balance
                            let trilmb = (bil*1000) - bpp // shows tril pp minus balance pp
                            let tentrilmb = (bil*10000) - bpp // shows ten tril minus bal pp
                            var zero = 0 , bal = bpp;  
                            var cib = bal > 1000000000? zero : bmb; //check if balance pp is greater than stated, show zero, else calc how much left
                            var citb = bal > 10000000000? zero : tmb; //check if ten bil pp
                            var cihb = bal > 100000000000? zero : hmb; //check if hundred bil pp
                            var cit = bal > 1000000000000? zero : trilmb //check if tril pp
                            var citt = bal > 10000000000000? zero : tentrilmb //check if ten tril pp
                            var fin = `✅Finished`
                            var bilpp= (cib/ppd) > 0? `$${(((cib / ppd)*mpd)/(client.moneyshort[Math.floor((cib/ ppd)*mpd).toString().length-1].dividedby)).toFixed(2)} ${client.moneyshort[((cib / ppd)*mpd).toString().length-1].name}` : fin
                            var tenbilpp = (citb/ppd) > 0? `$${(((citb / ppd)*mpd)/(client.moneyshort[Math.floor((citb / ppd)*mpd).toString().length-1].dividedby)).toFixed(2)} ${client.moneyshort[((citb / ppd)*mpd).toString().length-1].name}`: fin
                            var hundbilpp = (cihb/ppd) > 0? `$${(((cihb / ppd)*mpd)/(client.moneyshort[Math.floor((cihb / ppd)*mpd).toString().length-1].dividedby)).toFixed(2)} ${client.moneyshort[((cihb / ppd)*mpd).toString().length-1].name}`: fin
                            var trilpp = (cit/ppd) > 0? `$${(((cit / ppd)*mpd)/(client.moneyshort[Math.floor((cit / ppd)*mpd).toString().length-1].dividedby)).toFixed(2)} ${client.moneyshort[((cit / ppd)*mpd).toString().length-1].name}`: fin
                            var tentrilpp = (citt/ppd) > 0? `$${(((citt / ppd)*mpd)/(client.moneyshort[Math.floor((citt / ppd)*mpd).toString().length-1].dividedby)).toFixed(2)} ${client.moneyshort[((citt / ppd)*mpd).toString().length-1].name}` : fin
                            let x100 = (2787950 - bpp) // pp left for x100
                            let x500 = (69702250 - bpp) // pp left for x500
                            let x1000 = (279340210 - bpp) 
                            let x1500 = (629118200 - bpp)
                            let x2000 = 1119801050 - bpp
                            let x2500 = 1753639510 - bpp
                            let x3000 = (2536257780- bpp)
                            let x3500 = (3481719210 - bpp)
                            let x4000 = (4623060060 - bpp)
                            let x4500 = (6054529185 -bpp) 
                            let x5000 = (7989494838 - bpp)
                            let x5500 = 10979393524 - bpp
                            let x6000 = (16397515140 - bpp)
                            let x6500 = 27677088733 - bpp
                            let x7000 = (53401181263 - bpp)
                            let x7500 = 115027466918 - bpp
                            let x8000 = (266200123846 - bpp)
                            let x8500 = (641029604741 -bpp)
                            let x9000 = 1574792035064 - bpp
                            let x9500 = 3905677732845 - bpp
                            let x10000 = 9729162490493 - bpp
                            var check100 = bal > 2787950? zero : x100 //checks if balance pp is greater than pp req for 100x 
                            var check500 = bal > 69702250? zero : x500 // checks for 500x
                            var check1000 = bal > 279340210? zero : x1000 //checks for 1000x
                            var check1500 = bal > 629118200? zero : x1500
                            var check2000 = bal > (1119801050)? zero : x2000 
                            var check2500 = bal > 1753639510? zero : x2500
                            var check3000 = bal > 2536257780? zero : x3000
                            var check3500 = bal > 3481719210? zero : x3500
                            var check4000 = bal > 4623060060? zero : x4000
                            var check4500 = bal > 6054529185? zero: x4500
                            var check5000 = bal > 7989494838? zero: x5000
                            var check5500 = bal > 10979393524? zero: x5500
                            var check6000 = bal > 16397515140? zero: x6000
                            var check6500 = bal > 27677088733? zero : x6500
                            var check7000 = bal > 53401181263? zero: x7000
                            var check7500 = bal > 115027466918? zero: x7500
                            var check8000 = bal > 266200123846? zero: x8000
                            var check8500 = bal > 641029604741? zero: x8500
                            var check9000 = bal > 1574792035064? zero: x9000
                            var check9500 = bal > 3905677732845? zero: x9500
                            var check10000 = bal > 9729162490493? zero: x10000  
                            var tt100 = (check100/ppd) > 0? `**100x**: ${`$${(((check100 / ppd)*mpd)/(client.moneyshort[Math.floor((check100 / ppd)*mpd).toString().length-1].dividedby)).toFixed(2)} ${client.moneyshort[Math.floor((check100 / ppd)*mpd).toString().length-1].name}`}`: `**100x**: ✅ Achieved`
                            var tt500 = (check500/ppd) > 0? `**500x**: ${`$${(((check500 / ppd)*mpd)/(client.moneyshort[Math.floor((check500 / ppd)*mpd).toString().length-1].dividedby)).toFixed(2)} ${client.moneyshort[Math.floor((check500 / ppd)*mpd).toString().length-1].name}`}`: `**500x**: ✅ Achieved`
                            var tt1000 = (check1000/ppd) > 0? `**1000x**: ${`$${(((check1000 / ppd)*mpd)/(client.moneyshort[Math.floor((check1000 / ppd)*mpd).toString().length-1].dividedby)).toFixed(2)} ${client.moneyshort[Math.floor((check1000 / ppd)*mpd).toString().length-1].name}`}`: `**1000x**: ✅ Achieved`
                            var tt1500 = (check1500/ppd) > 0? `**1500x**: ${`$${(((check1500 / ppd)*mpd)/(client.moneyshort[Math.floor((check1500 / ppd)*mpd).toString().length-1].dividedby)).toFixed(2)} ${client.moneyshort[Math.floor((check1500 / ppd)*mpd).toString().length-1].name}`}`: `**1500x**: ✅ Achieved`
                            var tt2000 = (check2000/ppd) > 0? `**2000x**: ${`$${(((check2000 / ppd)*mpd)/(client.moneyshort[Math.floor((check2000 / ppd)*mpd).toString().length-1].dividedby)).toFixed(2)} ${client.moneyshort[Math.floor((check2000 / ppd)*mpd).toString().length-1].name}`}`: `**2000x**: ✅ Achieved`
                            var tt2500 = (check2500/ppd) > 0? `**2500x**: ${`$${(((check2500 / ppd)*mpd)/(client.moneyshort[Math.floor((check2500 / ppd)*mpd).toString().length-1].dividedby)).toFixed(2)} ${client.moneyshort[Math.floor((check2500 / ppd)*mpd).toString().length-1].name}`}`: `**2500x**: ✅ Achieved`
                            var tt3000 = (check3000/ppd) > 0? `**3000x**: ${`$${(((check3000 / ppd)*mpd)/(client.moneyshort[Math.floor((check3000 / ppd)*mpd).toString().length-1].dividedby)).toFixed(2)} ${client.moneyshort[Math.floor((check3000 / ppd)*mpd).toString().length-1].name}`}`: `**3000x**: ✅ Achieved`
                            var tt3500 = (check3500/ppd) > 0? `**3500x**: ${`$${(((check3500 / ppd)*mpd)/(client.moneyshort[Math.floor((check3500 / ppd)*mpd).toString().length-1].dividedby)).toFixed(2)} ${client.moneyshort[Math.floor((check3500 / ppd)*mpd).toString().length-1].name}`}`: `**3500x**: ✅ Achieved`
                            var tt4000 = (check4000/ppd) > 0? `**4000x**: ${`$${(((check4000 / ppd)*mpd)/(client.moneyshort[Math.floor((check4000 / ppd)*mpd).toString().length-1].dividedby)).toFixed(2)} ${client.moneyshort[Math.floor((check4000 / ppd)*mpd).toString().length-1].name}`}`: `**4000x**: ✅ Achieved`
                            var tt4500 = (check4500/ppd) > 0? `**4500x**: ${`$${(((check4500 / ppd)*mpd)/(client.moneyshort[Math.floor((check4500 / ppd)*mpd).toString().length-1].dividedby)).toFixed(2)} ${client.moneyshort[Math.floor((check4500 / ppd)*mpd).toString().length-1].name}`}`: `**4500x**: ✅ Achieved`
                            var tt5000 = (check5000/ppd) > 0? `**5000x**: ${`$${(((check5000 / ppd)*mpd)/(client.moneyshort[Math.floor((check5000 / ppd)*mpd).toString().length-1].dividedby)).toFixed(2)} ${client.moneyshort[Math.floor((check5000 / ppd)*mpd).toString().length-1].name}`}`: `**5000x**: ✅ Achieved`
                            var tt5500 = (check5500/ppd) > 0? `**5500x**: ${`$${(((check5500 / ppd)*mpd)/(client.moneyshort[Math.floor((check5500/ ppd)*mpd).toString().length-1].dividedby)).toFixed(2)} ${client.moneyshort[Math.floor((check5500 /ppd)*mpd).toString().length-1].name}`}`: `**5500x**: ✅ Achieved`
                            var tt6000 = (check6000/ppd) > 0? `**6000x**: ${`$${(((check6000 / ppd)*mpd)/(client.moneyshort[Math.floor((check6000/ ppd)*mpd).toString().length-1].dividedby)).toFixed(2)} ${client.moneyshort[Math.floor((check6000/ ppd)*mpd).toString().length-1].name}`}`: `**6000x**: ✅ Achieved`
                            var tt6500 = (check6500/ppd) > 0? `**6500x**: ${`$${(((check6500 / ppd)*mpd)/(client.moneyshort[Math.floor((check6500 / ppd)*mpd).toString().length-1].dividedby)).toFixed(2)} ${client.moneyshort[Math.floor((check6500/ ppd)*mpd).toString().length-1].name}`}`: `**6500x**: ✅ Achieved`
                            var tt7000 = (check7000/ppd) > 0? `**7000x**: ${`$${(((check7000 / ppd)*mpd)/(client.moneyshort[Math.floor((check7000 / ppd)*mpd).toString().length-1].dividedby)).toFixed(2)} ${client.moneyshort[Math.floor((check7000/ ppd)*mpd).toString().length-1].name}`}`: `**7000x**: ✅ Achieved`
                            var tt7500 = (check7500/ppd) > 0? `**7500x**: ${`$${(((check7500 / ppd)*mpd)/(client.moneyshort[Math.floor((check7500 / ppd)*mpd).toString().length-1].dividedby)).toFixed(2)} ${client.moneyshort[Math.floor((check7500/ ppd)*mpd).toString().length-1].name}`}`: `**7500x**: ✅ Achieved`
                            var tt8000 = (check8000/ppd) > 0? `**8000x**: ${`$${(((check8000 / ppd)*mpd)/(client.moneyshort[Math.floor((check8000 / ppd)*mpd).toString().length-1].dividedby)).toFixed(2)} ${client.moneyshort[Math.floor((check8000/ ppd)*mpd).toString().length-1].name}`}`: `**8000x**: ✅ Achieved`
                            var tt8500 = (check8500/ppd) > 0? `**8500x**: ${`$${(((check8500 / ppd)*mpd)/(client.moneyshort[Math.floor((check8500 / ppd)*mpd).toString().length-1].dividedby)).toFixed(2)} ${client.moneyshort[Math.floor((check8500/ ppd)*mpd).toString().length-1].name}`}`: `**8500x**: ✅ Achieved`
                            var tt9000 = (check9000/ppd) > 0? `**9000x**: ${`$${(((check9000 / ppd)*mpd)/(client.moneyshort[Math.floor((check9000 / ppd)*mpd).toString().length-1].dividedby)).toFixed(2)} ${client.moneyshort[Math.floor((check9000/ ppd)*mpd).toString().length-1].name}`}`: `**9000x**: ✅ Achieved`
                            var tt9500 = (check9500/ppd) > 0? `**9500x**: ${`$${(((check9500 / ppd)*mpd)/(client.moneyshort[Math.floor((check9500 / ppd)*mpd).toString().length-1].dividedby)).toFixed(2)} ${client.moneyshort[Math.floor((check9500/ ppd)*mpd).toString().length-1].name}`}`: `**9500x**: ✅ Achieved`
                            var tt10000 = (check10000/ppd) > 0? `**10000x**: ${`$${(((check10000 / ppd)*mpd)/(client.moneyshort[Math.floor((check10000 / ppd)*mpd).toString().length-1].dividedby)).toFixed(2)} ${client.moneyshort[Math.floor((check10000 / ppd)*mpd).toString().length-1].name}`}`: `**10000x**: ✅ Achieved`
                            //the bottom is used for the dynamic input of 9 multi milestones, where 1 is achieved and 8 are potential
                            // checkifach means check if achieved and multiplier number is the milestone
                            var checkifach6000 = (check6000/ppd) > 0?  `${tt5500}\n${tt6000}\n${tt6500}\n${tt7000}\n${tt7500}\n${tt8000}\n${tt8500}\n${tt9000}\n${tt9500}`: `${tt6000}\n${tt6500}\n${tt7000}\n${tt7500}\n${tt8000}\n${tt8500}\n${tt9000}\n${tt9500}\n${tt10000}`
                            var checkifach5500 = (check5500/ppd) > 0? `${tt5000}\n${tt5500}\n${tt6000}\n${tt6500}\n${tt7000}\n${tt7500}\n${tt8000}\n${tt8500}\n${tt9000}` : checkifach6000
                            var checkifach5000 = (check5000/ppd) > 0? `${tt4500}\n${tt5000}\n${tt5500}\n${tt6000}\n${tt6500}\n${tt7000}\n${tt7500}\n${tt8000}\n${tt8500}` : checkifach5500
                            var checkifach4500 = (check4500/ppd) > 0? `${tt4000}\n${tt4500}\n${tt5000}\n${tt5500}\n${tt6000}\n${tt6500}\n${tt7000}\n${tt7500}\n${tt8000}` : checkifach5000
                            var checkifach4000 = (check4000/ppd) > 0? `${tt3500}\n${tt4000}\n${tt4500}\n${tt5000}\n${tt5500}\n${tt6000}\n${tt6500}\n${tt7000}\n${tt7500}` : checkifach4500
                            var checkifach3500 = (check3500/ppd) > 0? `${tt3000}\n${tt3500}\n${tt4000}\n${tt4500}\n${tt5000}\n${tt5500}\n${tt6000}\n${tt6500}\n${tt7000}` : checkifach4000
                            var checkifach3000 = (check3000/ppd) > 0? `${tt2500}\n${tt3000}\n${tt3500}\n${tt4000}\n${tt4500}\n${tt5000}\n${tt5500}\n${tt6000}\n${tt6500}` : checkifach3500
                            var checkifach2500 = (check2500/ppd) > 0? `${tt2000}\n${tt2500}\n${tt3000}\n${tt3500}\n${tt4000}\n${tt4500}\n${tt5000}\n${tt5500}\n${tt6000}` : checkifach3000
                            var checkifach2000 = (check2000/ppd) > 0? `${tt1500}\n${tt2000}\n${tt2500}\n${tt3000}\n${tt3500}\n${tt4000}\n${tt4500}\n${tt5000}\n${tt5500}` : checkifach2500
                            var checkifach1500 = (check1500/ppd) > 0? `${tt1000}\n${tt1500}\n${tt2000}\n${tt2500}\n${tt3000}\n${tt3500}\n${tt4000}\n${tt4500}\n${tt5000}` : checkifach2000
                            var checkifach1000 = (check1000/ppd) > 0? `${tt500}\n${tt1000}\n${tt1500}\n${tt2000}\n${tt2500}\n${tt3000}\n${tt3500}\n${tt4000}\n${tt4500}` : checkifach1500
                            var checkifach500 = (check500/ppd) > 0? `${tt100}\n${tt500}\n${tt1000}\n${tt1500}\n${tt2000}\n${tt2500}\n${tt3000}\n${tt3500}\n${tt4000}` : checkifach1000
                            var checkifach100 = (check100/ppd) > 0? `${tt100}\n${tt500}\n${tt1000}\n${tt1500}\n${tt2000}\n${tt2500}\n${tt3000}\n${tt3500}\n${tt4000}` : checkifach500
                            //money shortening json file
                            //the bottom below are a couple of if-else statements, if the balance bpp is higher than req for multi? Write achieved,
                            //else, calculate pp req to reach multi and then multiply it by prestige level price point
                            //then using money shortening json file we convert the values into 2 integers and give the name of the number To make it easier
                            // var mu100x = x100>0? `${((x100 * prestigelevel)/client.moneyshort[(x100 * costperpoint).toString().length-1].dividedby).toFixed(2)} ${client.moneyshort[(i * costperpoint).toString().length-1].name}`: ach 
                            // var mu500x = j>0? `${((j * costperpoint)/client.moneyshort[(j * costperpoint).toString().length-1].dividedby).toFixed(2)} ${client.moneyshort[(j * costperpoint).toString().length-1].name}`: ach
                            // var mu1000x = k>0? `${((k * costperpoint)/client.moneyshort[(k * costperpoint).toString().length-1].dividedby).toFixed(2)} ${client.moneyshort[(k * costperpoint).toString().length-1].name}`: ach
                            // var mu2000x = l>0? `${((l * costperpoint)/client.moneyshort[(l * costperpoint).toString().length-1].dividedby).toFixed(2)} ${client.moneyshort[(l * costperpoint).toString().length-1].name}`: ach
                            // var mu3000x = m>0? `${((m * costperpoint)/client.moneyshort[(m * costperpoint).toString().length-1].dividedby).toFixed(2)} ${client.moneyshort[(m * costperpoint).toString().length-1].name}`: ach
                            // var mu3500x = n>0? `${((n * costperpoint)/client.moneyshort[(n * costperpoint).toString().length-1].dividedby).toFixed(2)} ${client.moneyshort[(n * costperpoint).toString().length-1].name}`: ach
                            // var mu4000x = o>0? `${((o * costperpoint)/client.moneyshort[(o * costperpoint).toString().length-1].dividedby).toFixed(2)} ${client.moneyshort[(o * costperpoint).toString().length-1].name}`: ach
                            const embed1 = new Discord.MessageEmbed()
                            .setTitle("Profile Report")
                            .setAuthor(`${message.author.username}`,`${message.author.avatarURL()}`)
                            .setThumbnail(message.author.avatarURL())
                            .setColor(`#FEFFA3`)
                             .setDescription(
`**PP/Day**: ${ppd.toLocaleString(`en`)}
**Current PP**: ${bpp.toLocaleString(`en`)}
**PP/Day(with daily)**: ${(ppd + (Number(db.get(`${message.author.id}.daily`))*income*60)/(prestigelevel)).toLocaleString(`en`)}

**🤑 Money until**: 
**1 bil**: ${bilpp} ${bilpp === `✅Finished`? `` : `${((bpp/cib)*100).toFixed(2)}%`}
**10 bil**: ${tenbilpp} ${tenbilpp === `✅Finished`? `` : `${((bpp/citb)*100).toFixed(2)}%`}
**100 bil**: ${hundbilpp} ${hundbilpp === `✅Finished`? `` : `${((bpp/cihb)*100).toFixed(2)}%`}
**1 tril**: ${trilpp} ${trilpp === `✅Finished`? `` : `${((bpp/cit)*100).toFixed(2)}%`}
**10 tril**: ${tentrilpp} ${tentrilpp === `✅Finished`? `` : `${((bpp/citt)*100).toFixed(2)}%`}

**💸 Money Until**
${checkifach100}`)
                            .setFooter(`Developed by The Rock#1333`,`https://cdn.discordapp.com/attachments/776985762499002408/877895083268128788/pngegg.png`)
                            message.channel.send(embed1)
                                  } 
                                } else if(el.embeds[0].author.name.includes(`Moon`)) {
                                    if(db.get(`${message.author.id}.moonprestige`)===undefined){
                                        message.channel.send(`Run ,stats first!`)
                                    } else {
                                     let bil = 1000000000
                                     client.msgs = require('./prestiges.json')
                                     let prestigeval = Number(db.get(`${message.author.id}.moonprestige`))
                                     let prestigelevel = 2000*((prestigeval*prestigeval*prestigeval))+10000*(prestigeval*prestigeval); //matches prestige level from json file
                                     let ppm = (income / prestigelevel) //prestige points per minute
                                     let ppd = (ppm * 1440)  // prestige points per day
                                     let mpd = income * 1440
                                     let giftReceive = income * 1440 //max gift amount 
                                     client.taxes = require('./tax.json')
                                     let taxcharge = client.taxes[giftReceive.toString().length].gift;
                                     let AfterTaxGift = (giftReceive * taxcharge).toLocaleString(`en`)
                                     let giftGive = income * 120 // giftable amt
                                     let taxchargegift = client.taxes[giftGive.toString().length].gift;
                                     let AfterTaxGive = (giftGive * taxchargegift).toLocaleString(`en`)
                                     client.moneyshort = require('./incomeperday.json') 
                                     let bpp = balance / prestigelevel //balance prestige points
                                     let bmb = (bil) - bpp // billion minus balance
                                     let tmb = (bil*10) - bpp //ten billion minus balance
                                     let hmb = (bil*100) - bpp // hundred billion minus balance
                                     let trilmb = (bil*1000) - bpp // shows tril pp minus balance pp
                                     let tentrilmb = (bil*10000) - bpp // shows ten tril minus bal pp
                                     var zero = 0 , bal = bpp; 
                                     var cib = bal > 1000000000? zero : bmb; //check if balance pp is greater than stated, show zero, else calc how much left
                                     var citb = bal > 10000000000? zero : tmb; //check if ten bil pp
                                     var cihb = bal > 100000000000? zero : hmb; //check if hundred bil pp
                                     var cit = bal > 1000000000000? zero : trilmb //check if tril pp
                                     var citt = bal > 10000000000000? zero : tentrilmb //check if ten tril pp
                                     var fin = `✅Finished`
                                     var bilpp= (cib/ppd) > 0? `$${(((cib / ppd)*mpd)/(client.moneyshort[Math.floor((cib/ ppd)*mpd).toString().length-1].dividedby)).toFixed(2)} ${client.moneyshort[((cib / ppd)*mpd).toString().length-1].name}` : fin
                                     var tenbilpp = (citb/ppd) > 0? `$${(((citb / ppd)*mpd)/(client.moneyshort[Math.floor((citb / ppd)*mpd).toString().length-1].dividedby)).toFixed(2)} ${client.moneyshort[((citb / ppd)*mpd).toString().length-1].name}`: fin
                                     var hundbilpp = (cihb/ppd) > 0? `$${(((cihb / ppd)*mpd)/(client.moneyshort[Math.floor((cihb / ppd)*mpd).toString().length-1].dividedby)).toFixed(2)} ${client.moneyshort[((cihb / ppd)*mpd).toString().length-1].name}`: fin
                                     var trilpp = (cit/ppd) > 0? `$${(((cit / ppd)*mpd)/(client.moneyshort[Math.floor((cit / ppd)*mpd).toString().length-1].dividedby)).toFixed(2)} ${client.moneyshort[((cit / ppd)*mpd).toString().length-1].name}`: fin
                                     var tentrilpp = (citt/ppd) > 0? `$${(((citt / ppd)*mpd)/(client.moneyshort[Math.floor((citt / ppd)*mpd).toString().length-1].dividedby)).toFixed(2)} ${client.moneyshort[((citt / ppd)*mpd).toString().length-1].name}` : fin
                                     let x100 = (2787950 - bpp) // pp left for x100
                                     let x500 = (69702250 - bpp) // pp left for x500
                                     let x1000 = (279340210 - bpp) 
                                     let x1500 = (629118200 - bpp)
                                     let x2000 = 1119801050 - bpp
                                     let x2500 = 1753639510 - bpp
                                     let x3000 = (2536257780- bpp)
                                     let x3500 = (3481719210 - bpp)
                                     let x4000 = (4623060060 - bpp)
                                     let x4500 = (6054529185 -bpp) 
                                     let x5000 = (7989494838 - bpp)
                                     let x5500 = 10979393524 - bpp
                                     let x6000 = (16397515140 - bpp)
                                     let x6500 = 27677088733 - bpp
                                     let x7000 = (53401181263 - bpp)
                                     let x7500 = 115027466918 - bpp
                                     let x8000 = (266200123846 - bpp)
                                     let x8500 = (641029604741 -bpp)
                                     let x9000 = 1574792035064 - bpp
                                     let x9500 = 3905677732845 - bpp
                                     let x10000 = 9729162490493 - bpp
                                     var check100 = bal > 2787950? zero : x100 //checks if balance pp is greater than pp req for 100x 
                                     var check500 = bal > 69702250? zero : x500 // checks for 500x
                                     var check1000 = bal > 279340210? zero : x1000 //checks for 1000x
                                     var check1500 = bal > 629118200? zero : x1500
                                     var check2000 = bal > (1119801050)? zero : x2000 
                                     var check2500 = bal > 1753639510? zero : x2500
                                     var check3000 = bal > 2536257780? zero : x3000
                                     var check3500 = bal > 3481719210? zero : x3500
                                     var check4000 = bal > 4623060060? zero : x4000
                                     var check4500 = bal > 6054529185? zero: x4500
                                     var check5000 = bal > 7989494838? zero: x5000
                                     var check5500 = bal > 10979393524? zero: x5500
                                     var check6000 = bal > 16397515140? zero: x6000
                                     var check6500 = bal > 27677088733? zero : x6500
                                     var check7000 = bal > 53401181263? zero: x7000
                                     var check7500 = bal > 115027466918? zero: x7500
                                     var check8000 = bal > 266200123846? zero: x8000
                                     var check8500 = bal > 641029604741? zero: x8500
                                     var check9000 = bal > 1574792035064? zero: x9000
                                     var check9500 = bal > 3905677732845? zero: x9500
                                     var check10000 = bal > 9729162490493? zero: x10000  
                                     var tt100 = (check100/ppd) > 0? `**100x**: ${`$${(((check100 / ppd)*mpd)/(client.moneyshort[Math.floor((check100 / ppd)*mpd).toString().length-1].dividedby)).toFixed(2)} ${client.moneyshort[Math.floor((check100 / ppd)*mpd).toString().length-1].name}`}`: `**100x**: ✅ Achieved`
                                     var tt500 = (check500/ppd) > 0? `**500x**: ${`$${(((check500 / ppd)*mpd)/(client.moneyshort[Math.floor((check500 / ppd)*mpd).toString().length-1].dividedby)).toFixed(2)} ${client.moneyshort[Math.floor((check500 / ppd)*mpd).toString().length-1].name}`}`: `**500x**: ✅ Achieved`
                                     var tt1000 = (check1000/ppd) > 0? `**1000x**: ${`$${(((check1000 / ppd)*mpd)/(client.moneyshort[Math.floor((check1000 / ppd)*mpd).toString().length-1].dividedby)).toFixed(2)} ${client.moneyshort[Math.floor((check1000 / ppd)*mpd).toString().length-1].name}`}`: `**1000x**: ✅ Achieved`
                                     var tt1500 = (check1500/ppd) > 0? `**1500x**: ${`$${(((check1500 / ppd)*mpd)/(client.moneyshort[Math.floor((check1500 / ppd)*mpd).toString().length-1].dividedby)).toFixed(2)} ${client.moneyshort[Math.floor((check1500 / ppd)*mpd).toString().length-1].name}`}`: `**1500x**: ✅ Achieved`
                                     var tt2000 = (check2000/ppd) > 0? `**2000x**: ${`$${(((check2000 / ppd)*mpd)/(client.moneyshort[Math.floor((check2000 / ppd)*mpd).toString().length-1].dividedby)).toFixed(2)} ${client.moneyshort[Math.floor((check2000 / ppd)*mpd).toString().length-1].name}`}`: `**2000x**: ✅ Achieved`
                                     var tt2500 = (check2500/ppd) > 0? `**2500x**: ${`$${(((check2500 / ppd)*mpd)/(client.moneyshort[Math.floor((check2500 / ppd)*mpd).toString().length-1].dividedby)).toFixed(2)} ${client.moneyshort[Math.floor((check2500 / ppd)*mpd).toString().length-1].name}`}`: `**2500x**: ✅ Achieved`
                                     var tt3000 = (check3000/ppd) > 0? `**3000x**: ${`$${(((check3000 / ppd)*mpd)/(client.moneyshort[Math.floor((check3000 / ppd)*mpd).toString().length-1].dividedby)).toFixed(2)} ${client.moneyshort[Math.floor((check3000 / ppd)*mpd).toString().length-1].name}`}`: `**3000x**: ✅ Achieved`
                                     var tt3500 = (check3500/ppd) > 0? `**3500x**: ${`$${(((check3500 / ppd)*mpd)/(client.moneyshort[Math.floor((check3500 / ppd)*mpd).toString().length-1].dividedby)).toFixed(2)} ${client.moneyshort[Math.floor((check3500 / ppd)*mpd).toString().length-1].name}`}`: `**3500x**: ✅ Achieved`
                                     var tt4000 = (check4000/ppd) > 0? `**4000x**: ${`$${(((check4000 / ppd)*mpd)/(client.moneyshort[Math.floor((check4000 / ppd)*mpd).toString().length-1].dividedby)).toFixed(2)} ${client.moneyshort[Math.floor((check4000 / ppd)*mpd).toString().length-1].name}`}`: `**4000x**: ✅ Achieved`
                                     var tt4500 = (check4500/ppd) > 0? `**4500x**: ${`$${(((check4500 / ppd)*mpd)/(client.moneyshort[Math.floor((check4500 / ppd)*mpd).toString().length-1].dividedby)).toFixed(2)} ${client.moneyshort[Math.floor((check4500 / ppd)*mpd).toString().length-1].name}`}`: `**4500x**: ✅ Achieved`
                                     var tt5000 = (check5000/ppd) > 0? `**5000x**: ${`$${(((check5000 / ppd)*mpd)/(client.moneyshort[Math.floor((check5000 / ppd)*mpd).toString().length-1].dividedby)).toFixed(2)} ${client.moneyshort[Math.floor((check5000 / ppd)*mpd).toString().length-1].name}`}`: `**5000x**: ✅ Achieved`
                                     var tt5500 = (check5500/ppd) > 0? `**5500x**: ${`$${(((check5500 / ppd)*mpd)/(client.moneyshort[Math.floor((check5500/ ppd)*mpd).toString().length-1].dividedby)).toFixed(2)} ${client.moneyshort[Math.floor((check5500 /ppd)*mpd).toString().length-1].name}`}`: `**5500x**: ✅ Achieved`
                                     var tt6000 = (check6000/ppd) > 0? `**6000x**: ${`$${(((check6000 / ppd)*mpd)/(client.moneyshort[Math.floor((check6000/ ppd)*mpd).toString().length-1].dividedby)).toFixed(2)} ${client.moneyshort[Math.floor((check6000/ ppd)*mpd).toString().length-1].name}`}`: `**6000x**: ✅ Achieved`
                                     var tt6500 = (check6500/ppd) > 0? `**6500x**: ${`$${(((check6500 / ppd)*mpd)/(client.moneyshort[Math.floor((check6500 / ppd)*mpd).toString().length-1].dividedby)).toFixed(2)} ${client.moneyshort[Math.floor((check6500/ ppd)*mpd).toString().length-1].name}`}`: `**6500x**: ✅ Achieved`
                                     var tt7000 = (check7000/ppd) > 0? `**7000x**: ${`$${(((check7000 / ppd)*mpd)/(client.moneyshort[Math.floor((check7000 / ppd)*mpd).toString().length-1].dividedby)).toFixed(2)} ${client.moneyshort[Math.floor((check7000/ ppd)*mpd).toString().length-1].name}`}`: `**7000x**: ✅ Achieved`
                                     var tt7500 = (check7500/ppd) > 0? `**7500x**: ${`$${(((check7500 / ppd)*mpd)/(client.moneyshort[Math.floor((check7500 / ppd)*mpd).toString().length-1].dividedby)).toFixed(2)} ${client.moneyshort[Math.floor((check7500/ ppd)*mpd).toString().length-1].name}`}`: `**7500x**: ✅ Achieved`
                                     var tt8000 = (check8000/ppd) > 0? `**8000x**: ${`$${(((check8000 / ppd)*mpd)/(client.moneyshort[Math.floor((check8000 / ppd)*mpd).toString().length-1].dividedby)).toFixed(2)} ${client.moneyshort[Math.floor((check8000/ ppd)*mpd).toString().length-1].name}`}`: `**8000x**: ✅ Achieved`
                                     var tt8500 = (check8500/ppd) > 0? `**8500x**: ${`$${(((check8500 / ppd)*mpd)/(client.moneyshort[Math.floor((check8500 / ppd)*mpd).toString().length-1].dividedby)).toFixed(2)} ${client.moneyshort[Math.floor((check8500/ ppd)*mpd).toString().length-1].name}`}`: `**8500x**: ✅ Achieved`
                                     var tt9000 = (check9000/ppd) > 0? `**9000x**: ${`$${(((check9000 / ppd)*mpd)/(client.moneyshort[Math.floor((check9000 / ppd)*mpd).toString().length-1].dividedby)).toFixed(2)} ${client.moneyshort[Math.floor((check9000/ ppd)*mpd).toString().length-1].name}`}`: `**9000x**: ✅ Achieved`
                                     var tt9500 = (check9500/ppd) > 0? `**9500x**: ${`$${(((check9500 / ppd)*mpd)/(client.moneyshort[Math.floor((check9500 / ppd)*mpd).toString().length-1].dividedby)).toFixed(2)} ${client.moneyshort[Math.floor((check9500/ ppd)*mpd).toString().length-1].name}`}`: `**9500x**: ✅ Achieved`
                                     var tt10000 = (check10000/ppd) > 0? `**10000x**: ${`$${(((check10000 / ppd)*mpd)/(client.moneyshort[Math.floor((check10000 / ppd)*mpd).toString().length-1].dividedby)).toFixed(2)} ${client.moneyshort[Math.floor((check10000 / ppd)*mpd).toString().length-1].name}`}`: `**10000x**: ✅ Achieved`
                                     //the bottom is used for the dynamic input of 9 multi milestones, where 1 is achieved and 8 are potential
                                     // checkifach means check if achieved and multiplier number is the milestone
                                     var checkifach6000 = (check6000/ppd) > 0?  `${tt5500}\n${tt6000}\n${tt6500}\n${tt7000}\n${tt7500}\n${tt8000}\n${tt8500}\n${tt9000}\n${tt9500}`: `${tt6000}\n${tt6500}\n${tt7000}\n${tt7500}\n${tt8000}\n${tt8500}\n${tt9000}\n${tt9500}\n${tt10000}`
                                     var checkifach5500 = (check5500/ppd) > 0? `${tt5000}\n${tt5500}\n${tt6000}\n${tt6500}\n${tt7000}\n${tt7500}\n${tt8000}\n${tt8500}\n${tt9000}` : checkifach6000
                                     var checkifach5000 = (check5000/ppd) > 0? `${tt4500}\n${tt5000}\n${tt5500}\n${tt6000}\n${tt6500}\n${tt7000}\n${tt7500}\n${tt8000}\n${tt8500}` : checkifach5500
                                     var checkifach4500 = (check4500/ppd) > 0? `${tt4000}\n${tt4500}\n${tt5000}\n${tt5500}\n${tt6000}\n${tt6500}\n${tt7000}\n${tt7500}\n${tt8000}` : checkifach5000
                                     var checkifach4000 = (check4000/ppd) > 0? `${tt3500}\n${tt4000}\n${tt4500}\n${tt5000}\n${tt5500}\n${tt6000}\n${tt6500}\n${tt7000}\n${tt7500}` : checkifach4500
                                     var checkifach3500 = (check3500/ppd) > 0? `${tt3000}\n${tt3500}\n${tt4000}\n${tt4500}\n${tt5000}\n${tt5500}\n${tt6000}\n${tt6500}\n${tt7000}` : checkifach4000
                                     var checkifach3000 = (check3000/ppd) > 0? `${tt2500}\n${tt3000}\n${tt3500}\n${tt4000}\n${tt4500}\n${tt5000}\n${tt5500}\n${tt6000}\n${tt6500}` : checkifach3500
                                     var checkifach2500 = (check2500/ppd) > 0? `${tt2000}\n${tt2500}\n${tt3000}\n${tt3500}\n${tt4000}\n${tt4500}\n${tt5000}\n${tt5500}\n${tt6000}` : checkifach3000
                                     var checkifach2000 = (check2000/ppd) > 0? `${tt1500}\n${tt2000}\n${tt2500}\n${tt3000}\n${tt3500}\n${tt4000}\n${tt4500}\n${tt5000}\n${tt5500}` : checkifach2500
                                     var checkifach1500 = (check1500/ppd) > 0? `${tt1000}\n${tt1500}\n${tt2000}\n${tt2500}\n${tt3000}\n${tt3500}\n${tt4000}\n${tt4500}\n${tt5000}` : checkifach2000
                                     var checkifach1000 = (check1000/ppd) > 0? `${tt500}\n${tt1000}\n${tt1500}\n${tt2000}\n${tt2500}\n${tt3000}\n${tt3500}\n${tt4000}\n${tt4500}` : checkifach1500
                                     var checkifach500 = (check500/ppd) > 0? `${tt100}\n${tt500}\n${tt1000}\n${tt1500}\n${tt2000}\n${tt2500}\n${tt3000}\n${tt3500}\n${tt4000}` : checkifach1000
                                     var checkifach100 = (check100/ppd) > 0? `${tt100}\n${tt500}\n${tt1000}\n${tt1500}\n${tt2000}\n${tt2500}\n${tt3000}\n${tt3500}\n${tt4000}` : checkifach500
                                     const embed1 = new Discord.MessageEmbed()
                                     .setTitle("Profile Report")
                                     .setAuthor(`${message.author.username}`,`${message.author.avatarURL()}`)
                                     .setThumbnail(message.author.avatarURL())
                                     .setColor(`#FEFFA3`)
                                      .setDescription(
`**PP/Day**: ${ppd.toLocaleString(`en`)}\n**Current PP**: ${bpp.toLocaleString(`en`)}\n**PP/Day(with Daily)**: ${(ppd+(Number(db.get(`${message.author.id}.daily`))*income*60)/(prestigelevel)).toLocaleString(`en`)}\n
**🤑 Money until**:\n**1 bil**: ${bilpp}\n**10 bil**: ${tenbilpp}\n**100 bil**: ${hundbilpp}\n**1 tril**: ${trilpp}\n**10 tril**: ${tentrilpp}\n
**💸 Money Until**
${checkifach100}`)
                                     .setFooter(`Developed by The Rock#1333`,`https://cdn.discordapp.com/attachments/776985762499002408/877895083268128788/pngegg.png`)
                                     message.channel.send(embed1)

                                }

                                }
                            }})
                            })
                        })
                    })
                   }
                })
client.on(`message`, (message)=>{
    if(message.content === ';profile' || message.content === ';p'){
        if (!message.member.roles.cache.has(`850275705975472189`))return; //checks if member has the 'Entreprenuers' role
           if(db.get(`${message.author.id}.coins`)===null) {message.channel.send(`No Earth Stats found. Run ,p and ,stats first!`)}
            let income = db.get(`${message.author.id}.income`)
           const embed = new Discord.MessageEmbed()
            .setTitle("Profile Analytics")
            .setThumbnail(message.author.avatarURL())
            .setDescription(`**Income/min**: ${(income).toLocaleString(`en`)}
**Income/day**: ${((income*1440).toFixed(2)).toLocaleString(`en`)}
**Income/week**: ${((income*10080).toFixed(2)).toLocaleString(`en`)}
`)
        message.channel.send(embed)
        }

})  

client.on(`message`, (message) =>{
    if(message.content===`;multi`) {
        if(db.get(`${message.author.id}.multi`)=== null){message.channel.send(embed)}  
        const embed = new Discord.MessageEmbed()
        .setAuthor(message.author.tag,message.author.avatarURL())
        .setColor(`#FEFFA3`)
        .setDescription(`**__Multi Cap prices (incl. Caps)__**\n**1000x **= 279,340,210\n**1500x **= 629,118,200\n**2000x **= 1,119,801,050\n**2500x **= 1,753,639,510
**3000x **= 2,536,257,780\n**3500x **= 3,481,719,210\n**4000x **= 4,623,060,060\n**4500x **= 6,054,529,185\n**5000x **= 7,989,494,838\n**5500x **= 10,979,393,524
**6000x **= 16,397,515,140\n**6500x **= 27,677,088,733\n**7000x **= 53,401,181,263\n**7500x **= 115,027,466,918\n**8000x **= 266,200,123,846\n**8500x **= 641,029,604,741
**9000x** = 1,574,792,035,064\n**9500x **= 3,905,677,732,845\n**10000x **= 9,729,162,490,493`)

        let x1000 = `**__Multi Cap prices (incl. Caps)__**\n**1000x **= 279,340,210 **← You are Here**\n**1500x **= 629,118,200\n**2000x **= 1,119,801,050\n**2500x **= 1,753,639,510\n**3000x **= 2,536,257,780\n**3500x **= 3,481,719,210\n**4000x **= 4,623,060,060\n**4500x **= 6,054,529,185\n**5000x **= 7,989,494,838\n**5500x **= 10,979,393,524\n**6000x **= 16,397,515,140\n**6500x **= 27,677,088,733\n**7000x **= 53,401,181,263\n**7500x **= 115,027,466,918\n**8000x **= 266,200,123,846\n**8500x **= 641,029,604,741\n**9000x** = 1,574,792,035,064\n**9500x **= 3,905,677,732,845\n**10000x **= 9,729,162,490,493`
        let x1500 = `**__Multi Cap prices (incl. Caps)__**\n**1000x **= 279,340,210\n**1500x **= 629,118,200 **← You are Here**\n**2000x **= 1,119,801,050\n**2500x **= 1,753,639,510\n**3000x **= 2,536,257,780\n**3500x **= 3,481,719,210\n**4000x **= 4,623,060,060\n**4500x **= 6,054,529,185\n**5000x **= 7,989,494,838\n**5500x **= 10,979,393,524\n**6000x **= 16,397,515,140\n**6500x **= 27,677,088,733\n**7000x **= 53,401,181,263\n**7500x **= 115,027,466,918\n**8000x **= 266,200,123,846\n**8500x **= 641,029,604,741\n**9000x** = 1,574,792,035,064\n**9500x **= 3,905,677,732,845\n**10000x **= 9,729,162,490,493`
        let x2000 = `**__Multi Cap prices (incl. Caps)__**\n**1000x **= 279,340,210\n**1500x **= 629,118,200\n**2000x **= 1,119,801,050 **← You are Here**\n**2500x **= 1,753,639,510\n**3000x **= 2,536,257,780\n**3500x **= 3,481,719,210\n**4000x **= 4,623,060,060\n**4500x **= 6,054,529,185\n**5000x **= 7,989,494,838\n**5500x **= 10,979,393,524\n**6000x **= 16,397,515,140\n**6500x **= 27,677,088,733\n**7000x **= 53,401,181,263\n**7500x **= 115,027,466,918\n**8000x **= 266,200,123,846\n**8500x **= 641,029,604,741\n**9000x** = 1,574,792,035,064\n**9500x **= 3,905,677,732,845\n**10000x **= 9,729,162,490,493`
        let x2500 = `**__Multi Cap prices (incl. Caps)__**\n**1000x **= 279,340,210\n**1500x **= 629,118,200\n**2000x **= 1,119,801,050\n**2500x **= 1,753,639,510 **← You are Here**\n**3000x **= 2,536,257,780\n**3500x **= 3,481,719,210\n**4000x **= 4,623,060,060\n**4500x **= 6,054,529,185\n**5000x **= 7,989,494,838\n**5500x **= 10,979,393,524\n**6000x **= 16,397,515,140\n**6500x **= 27,677,088,733\n**7000x **= 53,401,181,263\n**7500x **= 115,027,466,918\n**8000x **= 266,200,123,846\n**8500x **= 641,029,604,741\n**9000x** = 1,574,792,035,064\n**9500x **= 3,905,677,732,845\n**10000x **= 9,729,162,490,493`
        let x3000 = `**__Multi Cap prices (incl. Caps)__**\n**1000x **= 279,340,210\n**1500x **= 629,118,200\n**2000x **= 1,119,801,050\n**2500x **= 1,753,639,510\n**3000x **= 2,536,257,780 **← You are Here**\n**3500x **= 3,481,719,210\n**4000x **= 4,623,060,060\n**4500x **= 6,054,529,185\n**5000x **= 7,989,494,838\n**5500x **= 10,979,393,524\n**6000x **= 16,397,515,140\n**6500x **= 27,677,088,733\n**7000x **= 53,401,181,263\n**7500x **= 115,027,466,918\n**8000x **= 266,200,123,846\n**8500x **= 641,029,604,741\n**9000x** = 1,574,792,035,064\n**9500x **= 3,905,677,732,845\n**10000x **= 9,729,162,490,493`
        let x3500 = `**__Multi Cap prices (incl. Caps)__**\n**1000x **= 279,340,210\n**1500x **= 629,118,200\n**2000x **= 1,119,801,050\n**2500x **= 1,753,639,510\n**3000x **= 2,536,257,780\n**3500x **= 3,481,719,210 **← You are Here**\n**4000x **= 4,623,060,060\n**4500x **= 6,054,529,185\n**5000x **= 7,989,494,838\n**5500x **= 10,979,393,524\n**6000x **= 16,397,515,140\n**6500x **= 27,677,088,733\n**7000x **= 53,401,181,263\n**7500x **= 115,027,466,918\n**8000x **= 266,200,123,846\n**8500x **= 641,029,604,741\n**9000x** = 1,574,792,035,064\n**9500x **= 3,905,677,732,845\n**10000x **= 9,729,162,490,493`
        let x4000 = `**__Multi Cap prices (incl. Caps)__**\n**1000x **= 279,340,210\n**1500x **= 629,118,200\n**2000x **= 1,119,801,050\n**2500x **= 1,753,639,510\n**3000x **= 2,536,257,780\n**3500x **= 3,481,719,210\n**4000x **= 4,623,060,060 **← You are Here**\n**4500x **= 6,054,529,185\n**5000x **= 7,989,494,838\n**5500x **= 10,979,393,524\n**6000x **= 16,397,515,140\n**6500x **= 27,677,088,733\n**7000x **= 53,401,181,263\n**7500x **= 115,027,466,918\n**8000x **= 266,200,123,846\n**8500x **= 641,029,604,741\n**9000x** = 1,574,792,035,064\n**9500x **= 3,905,677,732,845\n**10000x **= 9,729,162,490,493`
        let x4500 = `**__Multi Cap prices (incl. Caps)__**\n**1000x **= 279,340,210\n**1500x **= 629,118,200\n**2000x **= 1,119,801,050\n**2500x **= 1,753,639,510\n**3000x **= 2,536,257,780\n**3500x **= 3,481,719,210\n**4000x **= 4,623,060,060\n**4500x **= 6,054,529,185 **← You are Here**\n**5000x **= 7,989,494,838\n**5500x **= 10,979,393,524\n**6000x **= 16,397,515,140\n**6500x **= 27,677,088,733\n**7000x **= 53,401,181,263\n**7500x **= 115,027,466,918\n**8000x **= 266,200,123,846\n**8500x **= 641,029,604,741\n**9000x** = 1,574,792,035,064\n**9500x **= 3,905,677,732,845\n**10000x **= 9,729,162,490,493`
        let x5000 = `**__Multi Cap prices (incl. Caps)__**\n**1000x **= 279,340,210\n**1500x **= 629,118,200\n**2000x **= 1,119,801,050\n**2500x **= 1,753,639,510\n**3000x **= 2,536,257,780\n**3500x **= 3,481,719,210\n**4000x **= 4,623,060,060\n**4500x **= 6,054,529,185\n**5000x **= 7,989,494,838 **← You are Here**\n**5500x **= 10,979,393,524\n**6000x **= 16,397,515,140\n**6500x **= 27,677,088,733\n**7000x **= 53,401,181,263\n**7500x **= 115,027,466,918\n**8000x **= 266,200,123,846\n**8500x **= 641,029,604,741\n**9000x** = 1,574,792,035,064\n**9500x **= 3,905,677,732,845\n**10000x **= 9,729,162,490,493`
        let x5500 = `**__Multi Cap prices (incl. Caps)__**\n**1000x **= 279,340,210\n**1500x **= 629,118,200\n**2000x **= 1,119,801,050\n**2500x **= 1,753,639,510\n**3000x **= 2,536,257,780\n**3500x **= 3,481,719,210\n**4000x **= 4,623,060,060\n**4500x **= 6,054,529,185\n**5000x **= 7,989,494,838\n**5500x **= 10,979,393,524 **← You are Here**\n**6000x **= 16,397,515,140\n**6500x **= 27,677,088,733\n**7000x **= 53,401,181,263\n**7500x **= 115,027,466,918\n**8000x **= 266,200,123,846\n**8500x **= 641,029,604,741\n**9000x** = 1,574,792,035,064\n**9500x **= 3,905,677,732,845\n**10000x **= 9,729,162,490,493`
        let x6000 = `**__Multi Cap prices (incl. Caps)__**\n**1000x **= 279,340,210\n**1500x **= 629,118,200\n**2000x **= 1,119,801,050\n**2500x **= 1,753,639,510\n**3000x **= 2,536,257,780\n**3500x **= 3,481,719,210\n**4000x **= 4,623,060,060\n**4500x **= 6,054,529,185\n**5000x **= 7,989,494,838\n**5500x **= 10,979,393,524\n**6000x **= 16,397,515,140 **← You are Here**\n**6500x **= 27,677,088,733\n**7000x **= 53,401,181,263\n**7500x **= 115,027,466,918\n**8000x **= 266,200,123,846\n**8500x **= 641,029,604,741\n**9000x** = 1,574,792,035,064\n**9500x **= 3,905,677,732,845\n**10000x **= 9,729,162,490,493`
        let x6500 = `**__Multi Cap prices (incl. Caps)__**\n**1000x **= 279,340,210\n**1500x **= 629,118,200\n**2000x **= 1,119,801,050\n**2500x **= 1,753,639,510\n**3000x **= 2,536,257,780\n**3500x **= 3,481,719,210\n**4000x **= 4,623,060,060\n**4500x **= 6,054,529,185\n**5000x **= 7,989,494,838\n**5500x **= 10,979,393,524\n**6000x **= 16,397,515,140\n**6500x **= 27,677,088,733 **← You are Here**\n**7000x **= 53,401,181,263\n**7500x **= 115,027,466,918\n**8000x **= 266,200,123,846\n**8500x **= 641,029,604,741\n**9000x** = 1,574,792,035,064\n**9500x **= 3,905,677,732,845\n**10000x **= 9,729,162,490,493`
        let x7000 = `**__Multi Cap prices (incl. Caps)__**\n**1000x **= 279,340,210\n**1500x **= 629,118,200\n**2000x **= 1,119,801,050\n**2500x **= 1,753,639,510\n**3000x **= 2,536,257,780\n**3500x **= 3,481,719,210\n**4000x **= 4,623,060,060\n**4500x **= 6,054,529,185\n**5000x **= 7,989,494,838\n**5500x **= 10,979,393,524\n**6000x **= 16,397,515,140\n**6500x **= 27,677,088,733\n**7000x **= 53,401,181,263 **← You are Here**\n**7500x **= 115,027,466,918\n**8000x **= 266,200,123,846\n**8500x **= 641,029,604,741\n**9000x** = 1,574,792,035,064\n**9500x **= 3,905,677,732,845\n**10000x **= 9,729,162,490,493`
        let x7500 = `**__Multi Cap prices (incl. Caps)__**\n**1000x **= 279,340,210\n**1500x **= 629,118,200\n**2000x **= 1,119,801,050\n**2500x **= 1,753,639,510\n**3000x **= 2,536,257,780\n**3500x **= 3,481,719,210\n**4000x **= 4,623,060,060\n**4500x **= 6,054,529,185\n**5000x **= 7,989,494,838\n**5500x **= 10,979,393,524\n**6000x **= 16,397,515,140\n**6500x **= 27,677,088,733\n**7000x **= 53,401,181,263\n**7500x **= 115,027,466,918 **← You are Here**\n**8000x **= 266,200,123,846\n**8500x **= 641,029,604,741\n**9000x** = 1,574,792,035,064\n**9500x **= 3,905,677,732,845\n**10000x **= 9,729,162,490,493`
        let x8000 = `**__Multi Cap prices (incl. Caps)__**\n**1000x **= 279,340,210\n**1500x **= 629,118,200\n**2000x **= 1,119,801,050\n**2500x **= 1,753,639,510\n**3000x **= 2,536,257,780\n**3500x **= 3,481,719,210\n**4000x **= 4,623,060,060\n**4500x **= 6,054,529,185\n**5000x **= 7,989,494,838\n**5500x **= 10,979,393,524\n**6000x **= 16,397,515,140\n**6500x **= 27,677,088,733\n**7000x **= 53,401,181,263\n**7500x **= 115,027,466,918\n**8000x **= 266,200,123,846 **← You are Here**\n**8500x **= 641,029,604,741\n**9000x** = 1,574,792,035,064\n**9500x **= 3,905,677,732,845\n**10000x **= 9,729,162,490,493`
        let x8500 = `**__Multi Cap prices (incl. Caps)__**\n**1000x **= 279,340,210\n**1500x **= 629,118,200\n**2000x **= 1,119,801,050\n**2500x **= 1,753,639,510\n**3000x **= 2,536,257,780\n**3500x **= 3,481,719,210\n**4000x **= 4,623,060,060\n**4500x **= 6,054,529,185\n**5000x **= 7,989,494,838\n**5500x **= 10,979,393,524\n**6000x **= 16,397,515,140\n**6500x **= 27,677,088,733\n**7000x **= 53,401,181,263\n**7500x **= 115,027,466,918\n**8000x **= 266,200,123,846\n**8500x **= 641,029,604,741 **← You are Here**\n**9000x** = 1,574,792,035,064\n**9500x **= 3,905,677,732,845\n**10000x **= 9,729,162,490,493`
        let x9000 = `**__Multi Cap prices (incl. Caps)__**\n**1000x **= 279,340,210\n**1500x **= 629,118,200\n**2000x **= 1,119,801,050\n**2500x **= 1,753,639,510\n**3000x **= 2,536,257,780\n**3500x **= 3,481,719,210\n**4000x **= 4,623,060,060\n**4500x **= 6,054,529,185\n**5000x **= 7,989,494,838\n**5500x **= 10,979,393,524\n**6000x **= 16,397,515,140\n**6500x **= 27,677,088,733\n**7000x **= 53,401,181,263\n**7500x **= 115,027,466,918\n**8000x **= 266,200,123,846\n**8500x **= 641,029,604,741\n**9000x** = 1,574,792,035,064 **← You are Here**\n**9500x **= 3,905,677,732,845\n**10000x **= 9,729,162,490,493`
        let x9500 = `**__Multi Cap prices (incl. Caps)__**\n**1000x **= 279,340,210\n**1500x **= 629,118,200\n**2000x **= 1,119,801,050\n**2500x **= 1,753,639,510\n**3000x **= 2,536,257,780\n**3500x **= 3,481,719,210\n**4000x **= 4,623,060,060\n**4500x **= 6,054,529,185\n**5000x **= 7,989,494,838\n**5500x **= 10,979,393,524\n**6000x **= 16,397,515,140\n**6500x **= 27,677,088,733\n**7000x **= 53,401,181,263\n**7500x **= 115,027,466,918\n**8000x **= 266,200,123,846\n**8500x **= 641,029,604,741\n**9000x** = 1,574,792,035,064\n**9500x **= 3,905,677,732,845 **← You are Here**\n**10000x **= 9,729,162,490,493`
        let x10000 = `**__Multi Cap prices (incl. Caps)__**\n**1000x **= 279,340,210\n**1500x **= 629,118,200\n**2000x **= 1,119,801,050\n**2500x **= 1,753,639,510\n**3000x **= 2,536,257,780\n**3500x **= 3,481,719,210\n**4000x **= 4,623,060,060\n**4500x **= 6,054,529,185\n**5000x **= 7,989,494,838\n**5500x **= 10,979,393,524\n**6000x **= 16,397,515,140\n**6500x **= 27,677,088,733\n**7000x **= 53,401,181,263\n**7500x **= 115,027,466,918\n**8000x **= 266,200,123,846\n**8500x **= 641,029,604,741\n**9000x** = 1,574,792,035,064\n**9500x **= 3,905,677,732,845\n**10000x **= 9,729,162,490,493 **← You are Here**`
        var checkmulti18 = db.get(`${message.author.id}.multi`)<9600? x9500 : x10000
        var checkmulti17 = db.get(`${message.author.id}.multi`)<9100? x9000 : checkmulti18
        var checkmulti16 = db.get(`${message.author.id}.multi`)<8600? x8500 : checkmulti17
        var checkmulti15 = db.get(`${message.author.id}.multi`)<8100? x8000 : checkmulti16
        var checkmulti14 = db.get(`${message.author.id}.multi`)<7600? x7500 : checkmulti15
        var checkmulti13 = db.get(`${message.author.id}.multi`)<7100? x7000 : checkmulti14
        var checkmulti12 = db.get(`${message.author.id}.multi`)<6600? x6500 : checkmulti13
        var checkmulti11 = db.get(`${message.author.id}.multi`)<6100? x6000 : checkmulti12
        var checkmulti10 = db.get(`${message.author.id}.multi`)<5600? x5500 : checkmulti11
        var checkmulti9 = db.get(`${message.author.id}.multi`)<5100? x5000 : checkmulti10
        var checkmulti8 = db.get(`${message.author.id}.multi`)<4600? x4500 : checkmulti9
        var checkmulti7 = db.get(`${message.author.id}.multi`)<4100? x4000 : checkmulti8
        var checkmulti6 = db.get(`${message.author.id}.multi`)<3600? x3500 : checkmulti7
        var checkmulti5 = db.get(`${message.author.id}.multi`)<3100? x3000 : checkmulti6
        var checkmulti4 = db.get(`${message.author.id}.multi`)<2600? x2500 : checkmulti5
        var checkmulti3 = db.get(`${message.author.id}.multi`)<2100? x2000 : checkmulti4
        var checkmulti2 = db.get(`${message.author.id}.multi`)<1600? x1500 : checkmulti3
        var checkmulti = db.get(`${message.author.id}.multi`)<1100? x1000 : checkmulti2
        var footerstrings = [`You may want to aim for the next highest upgrade!`, `These values show the approximate range you are in.`, `A pretty little multi menu!`, `You may want to update your stats by running ,stats`]
        var footerstringrandom = footerstrings[Math.floor(Math.random() * footerstrings.length)]
        const embed2 = new Discord.MessageEmbed()
        .setAuthor(message.author.tag,message.author.avatarURL())
        .setColor(`#FEFFA3`)
        .setDescription(checkmulti)
        .setFooter(footerstringrandom)
         message.channel.send(embed2)

}
 })
client.login(config.token)