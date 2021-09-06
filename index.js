const { timeStamp } = require('console');
const { DH_CHECK_P_NOT_SAFE_PRIME } = require('constants');
const Discord = require('discord.js');
const { lookup } = require('dns');
const { get } = require('http');
const { e, not } = require('mathjs');
const { send } = require('process');
const command = require('./command')
const client = new Discord.Client()
const config = require ('./config.json')
const whitelist = (`348296915143884801`,`692062388991688814`,`463174263973871626`,`330818210561785856`)
const lookupreact = require(`./lookupreact.js`)
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
command(client, `sklguide`, (message) => {
    const { member, mentions } = message
    if (member.hasPermission('ADMINISTRATOR')) {
        const blue = `#99c8fb`
        const embed2 = new Discord.MessageEmbed()
        .setTitle(`Prestiging - FAQ`)
        .setDescription(`**What is Prestiging?**
> **Prestiging** fully resets certain aspects of your business, those of which can be found under the **$prestige** embed. 
> In exchange you acquire a certain amount of **coins, briefcases, and prestige points**, which are the main topic of discussion in this guide.

**What are prestige points and what do they do?**
> **Prestige points** are a form of currency in IdleCap that are **not purchased** but rather **accumulated** through increasing your money, or what is in your balance. 
> When you first start out, $12,000 dollars translates to one prestige point. Prestige points are **given after a user prestiges**, and can be used to buy boosts until your next prestige.
`)
        .setColor(blue)
        const embed3 = new Discord.MessageEmbed()
        .setColor(blue)
        .setTitle(`📝 Things to Note`)
        .setDescription(`Each Time you prestige, the amount of money required for each prestige point increases, which makes it harder to earn prestige points.

*Given below is the list of specific prices for Money per prestige point for each Prestige Level.*`)
        const embed4 = new Discord.MessageEmbed()
        .setColor(blue)
        .setTitle(`Money Per Prestige point`)
        .setDescription(`1 = 12,000\n2 = 56,000\n3 = 144,000\n4 = 288,000\n5 = 500,000\n6 = 792,000\n7 = 1,176,000\n8 = 1,664,000\n9 = 2,268,000
10 = 3,000,000\n11 = 3,872,000\n12 = 4,896,000\n13 = 6,084,000\n14 = 7,448,000\n15 = 9,000,000\n16 = 10,752,000\n17 = 12,716,000\n18 = 14,904,000\n19 = 17,328,000
20 = 20,000,000

*For the full list, you can use ${"`;m`"}*
`)
        const embed5 = new Discord.MessageEmbed()
        .setColor(blue)
        .setTitle(`Summary`)
        .setDescription(`**Prestiging** in Idlecapitalist is arguably **the most important yet overlooked** aspect of the game.
The reason being is that it can skyrocket your income by hundreds all the way up to 10,000.95 max.
If you fall behind or prestige too early, it becomes **EXTREMELY** difficult to catch back up and stay on course.
*if this happens, the ${"`$reset`"} command is always an option*.
    `)
    const embed6 = new Discord.MessageEmbed()
    .setColor(blue)
    .setTitle(`When to Prestige`)
    .setDescription(`Knowing when to Prestige can either **make** or **break** a business. Although it may be fun to experiment and find your ideal number, it is recommended that you prestige after hitting the milestones mentioned below.
> After you achieve a multiplier of 7,000x, you __**MUST**__ aim for 7000x or even more before the next prestige, or else you will be **losing income** and **therefore earning less prestige points per day.**
    `)
    const embed7 = new Discord.MessageEmbed()
    .setColor(blue)
    .setTitle(`Recommended Prestige Milestones`)
    .setDescription(`List of potential prestige points you must have before prestiging.
**Prestige 1:** ~1,000,000 → **(60x)**
**Prestige 2:** ~10,000,000 → **(190x)**
**Prestige 3:** ~100,000,000 → **(600x)**
**Prestige 4:** 279,340,210 → **(1000x)**
**Prestige 5:** 1,136,301,050 → **(2000x)**
**Prestige 6:** 2,536,257,780 → **(3000x)**
**Prestige 7:** 4,623,060,060 → **(4000x)**
**Prestige 8:** 7,989,494,838 → **(5000x)**
**Prestige 9:** 16,397,515,139 → **(6000x)**
**Prestige 10:** 53,401,181,263 → **(7000x)**

> *Once you're past Prestige 10, you can dm **<@117076562687426567>** if you still require help with prestiging*
`)
.setFooter(`Values on the right show the recommended multiplier`)
const embed8 = new Discord.MessageEmbed()
        .setColor(blue)
        .setTitle(`Important Note`)
        .setDescription(`Since price of weekly tasks scale with income, it is recommended to prestige as soon as __weekly tasks__ **reset**.
Moreover, if you can setup a gift for yourself after you prestige, you can save yourself alot of hours of waiting to complete your weekly tasks.
Otherwise, increasing your income slowly to unlock the next business and purchasing ${"`$wt`"} directly can also be efficient, where briefcases could also be used to speed up the process.`)
const embed9 = new Discord.MessageEmbed()
        .setColor(blue)
        .setTitle(`How to make the most out of your Prestige`)
        .setDescription(`Two very neglected aspects of prestiging are your **potential coins and potential briefcases**.
Knowing how to get the most out of each prestige can net you around a **100 more coins and 20 more briefcases** in 4-5 prestiges.
> The amount of __digits__ in your number of potential prestige points determine how many coins/briefcases you will **receive**. *Specifics below.*`)
const embed10 = new Discord.MessageEmbed()
        .setColor(blue)
        .setDescription(`> **10k - 99.9k pp (5 digits)**  → 25 coins, 4 briefcases
> **100k - 999.9k pp (6 digits)**  → 36 coins, 5 briefcases
> **1m - 9.9m pp (7 digits)**  → 49 coins, 6 briefcases
> **10m - 99.9m pp (8 digits)**  → 64 coins, 7 briefcases
> **100m - 999.8m pp (9 digits)**  → 81 coins, 8 briefcases
> **1bil - 9.9bil pp (10 digits)** → 100 coins, 9 briefcases
> **10bil - 99.9bil pp (11 digits)** → 121 coins, 10 briefcases
> **100bil - 999.9bil pp (12 digits)** → 144 coins, 11 briefcases`)
        .setFooter(`No. of coins = digits of pp **squared**, No of briefcases = digits of pp - 1`)
        const embed11 = new Discord.MessageEmbed()
        .setColor(blue)
        .setTitle(`How to Invest your Prestige Points`)
        .setDescription(`There are multiple of ways to plan and invest your prestige points.
To calculate the multiplier you will receive, you can use ${'`~pcalc`'}, which takes into account the **price of caps**.
To know how much prestige points you need to reach a **desired multiplier**, you can use ${'$$mcalc'}.
You can also you this [website](https://ppcalc.marmar.io/)`)
        const embed12 = new Discord.MessageEmbed()
        .setColor(blue)
        .setTitle(`Late Game Advice`)
        .setDescription(`Reaping the most **profit** after you reach a high multiplier is as important in the end game as it is in the early to mid game stages.
It is **heavily advised** that you try to get the atleast the minimum prestige points needed **to maintain** your multiplier. 
You are also encouraged to aim for higher to grow your income and achieve greater heights!
Moreover, it would be very **nice of you** if you could help your fellow entreprenuers by **gifting money frequently** and also if you could **donate** to the corporation :D`)

        const embed13 = new Discord.MessageEmbed()
        .setColor(blue)
        .setTitle(`Additional Information`)
        .setDescription(`**__Multi Cap prices (incl. Caps)__**
**1000x **= 279,340,210\n**1500x **= 629,118,200\n**2000x **= 1,119,801,050\n**2500x **= 1,753,639,510\n**3000x **= 2,536,257,780\n**3500x **= 3,481,719,210
**4000x **= 4,623,060,060\n**4500x **= 6,054,529,185\n**5000x **= 7,989,494,838\n**5500x **= 10,979,393,524\n**6000x **= 16,397,515,139\n**6500x **= 27,677,088,733
**7000x **= 53,401,181,263\n**7500x **= 115,027,466,918\n**8000x **= 266,200,123,846\n**8500x **= 641,029,604,741\n**9000x** = 1,574,792,035,064\n**9500x **= 3,905,677,732,845
**10000x **= 9,729,162,490,493`)
        const embed14 = new Discord.MessageEmbed()
        .setColor(blue)
        .setTitle(`Additional Information Pt.2`)
        .setDescription(`**__Earth Weekly Tasks Hour of Income__**
Pizza - 2\nCarwash - 3\nRestaurant - 4\nBank - 5\nOil - 6\nAirport - 8\nHospital - 12\nShipyard  - 14\nFactory - 18\nSpace - 24\nUniversity - 26
Robotics - 28 \nFirm - 30\nUranium - 32\nPlant - 34\nReactor - 36\nSoftware - 38\nTelecommunications - 40\nVirtual - 40
**TOTAL TIME: __16 DAYS & 16 HOURS__**`)
        const embed15 = new Discord.MessageEmbed()
        .setColor(blue)
        .setTitle(`When to start saving for prestige`)
        .setDescription(`For the last section, we are going to end this off by leaving it up to you, the reader. 
If we were to micromanage everything you did, then wouldn't it just ruin the fun of playing the game?
In my professional opinion, I would advise you to make enough of an income that will help you reach your desired prestige points within 3-5 days because the period of saving should never take more than a week.
This is to avoid missing out on the new sets of weekly tasks.`)
        const embed16 = new Discord.MessageEmbed()
        .setColor(blue)
        .setTitle(`Last Words`)
        .setDescription(`To wrap this up, I just wanted to say thank you for taking the time to read this guide. Our corporation, let alone server, wouldn't be the same without you wondeful individuals.
So **Thank you**, truly, and have fun reading the rest of this guide!! :D - Nate`)
        const embed17 = new Discord.MessageEmbed()
        .setColor(blue)
        .setTitle(`⭐ Credits`)
        .setDescription(`**__Creation of the guide__**
**1.** <@264072985642532864>
**2.** <@117076562687426567>
**3.** <@348296915143884801>

**Bot Creators**
**1.** <@158624640887947264> - Cryptology
**2.** <@212031171930882049> - SickleCap
**3.** <@348296915143884801> - DwayneBot

**Useful Contributors**
**1.** <@117076562687426567>
**2.** <@264072985642532864>
**3.** <@775426877933355069>
**4.** <@330818210561785856>

**And Lastly, THANK YOU FOR READING!!**
        `)
        .setFooter(`these guys contributed their hearts and souls into this guide`)
const embed = new Discord.MessageEmbed()
        .setImage(`https://cdn.discordapp.com/attachments/803791338880630824/884348785772339200/sickleguide6.png`)
        .setColor(blue)
        message.channel.send(embed).then( 
            message.channel.send(embed2)
        ).then(message.channel.send(embed3)).then(message.channel.send(embed4)).then(message.channel.send(embed5)).then(message.channel.send(embed6)).then(message.channel.send(embed7)).then(message.channel.send(embed8)).then(message.channel.send(embed9)).then(
            message.channel.send(embed10)).then(message.channel.send(embed11)).then(message.channel.send(embed12)).then(message.channel.send(embed13)).then(message.channel.send(embed14)).then(message.channel.send(embed15)).then(message.channel.send(embed16)).then(message.channel.send(embed17))
    } else return;
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
        let costperpoint = client.prestige[prestigevalue-1].priceperpoint;
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
    lookupreact
})

/*client.on("message" , (message) => {
const collector = new Discord.MessageCollector(message.channel, m => m.embeds.length > 0, { maxProcessed: 1, max: 1 });
if(message.content === ',p'){
    //if (message.member.roles.cache.has(`876815413915303956`)) //checks if member has the 'Exclusives' role
    //{
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
                            let prestigelevel = client.msgs[msg.content-1].priceperpoint; //matches prestige level from json file
                            let ppm = (income / prestigelevel) //prestige points per minute
                            let ppd = (ppm * 1440)  // prestige points per day
                            let giftReceive = income * 1440 //max gift amount 
                            client.taxes = require('./tax.json')
                            let taxcharge = client.taxes[giftReceive.toString().length].gift;
                            let AfterTaxGift = (giftReceive * taxcharge).toLocaleString(`en`)
                            let giftGive = income * 120 // giftable amt
                            let taxchargegift = client.taxes[giftGive.toString().length].gift;
                            let AfterTaxGive = (giftGive * taxchargegift).toLocaleString(`en`)
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
                            var bilpp= (cib/ppd) > 0? `${(cib / ppd).toFixed(2)} Days or ${((cib / ppd) * 24).toFixed(2)} Hours` : fin
                            var tenbilpp = (citb/ppd) > 0? `${(citb / ppd).toFixed(2)} Days or ${((citb / ppd) * 24).toFixed(2)} Hours` : fin
                            var hundbilpp = (cihb/ppd) > 0? `${(cihb / ppd).toFixed(2)} Days or ${((cihb / ppd) * 24).toFixed(2)} Hours` : fin
                            var trilpp = (cit/ppd) > 0? `${(cit / ppd).toFixed(2)} Days or ${((cit / ppd) * 24).toFixed(2)} Hours` : fin
                            var tentrilpp = (citt/ppd) > 0? `${(citt / ppd).toFixed(2)} Days or ${((citt / ppd) * 24).toFixed(2)} Hours` : fin
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
                            var tt100 = (check100/ppd) > 0? `**100x**: ${(check100 / ppd).toFixed(2)} Days or ${((check100 / ppd) * 24).toFixed(2)} Hours` : `**100x**: ✅ Achieved`
                            var tt500 = (check500/ppd) > 0? `**500x**: ${(check500 / ppd).toFixed(2)} Days or ${((check500 / ppd) * 24).toFixed(2)} Hours` : `**500x**: ✅ Achieved`
                            var tt1000 = (check1000/ppd) > 0? `**1000x**: ${(check1000 / ppd).toFixed(2)} Days or ${((check1000 / ppd) * 24).toFixed(2)} Hours` : `**1000x**: ✅ Achieved`
                            var tt1500 = (check1500/ppd) > 0? `**1500x**: ${(check1500 / ppd).toFixed(2)} Days or ${((check1500 / ppd) * 24).toFixed(2)} Hours` : `**1500x**: ✅ Achieved`
                            var tt2000 = (check2000/ppd) > 0? `**2000x**: ${(check2000 / ppd).toFixed(2)} Days or ${((check2000 / ppd) * 24).toFixed(2)} Hours` : `**2000x**: ✅ Achieved`
                            var tt2500 = (check2500/ppd) > 0? `**2500x**: ${(check2500 / ppd).toFixed(2)} Days or ${((check2500 / ppd) * 24).toFixed(2)} Hours` : `**2500x**: ✅ Achieved`
                            var tt3000 = (check3000/ppd) > 0? `**3000x**: ${(check3000 / ppd).toFixed(2)} Days or ${((check3000 / ppd) * 24).toFixed(2)} Hours` : `**3000x**: ✅ Achieved`
                            var tt3500 = (check3500/ppd) > 0? `**3500x**: ${(check3500 / ppd).toFixed(2)} Days or ${((check3500 / ppd) * 24).toFixed(2)} Hours` : `**3500x**: ✅ Achieved`
                            var tt4000 = (check4000/ppd) > 0? `**4000x**: ${(check4000 / ppd).toFixed(2)} Days or ${((check4000 / ppd) * 24).toFixed(2)} Hours` : `**4000x**: ✅ Achieved`
                            var tt4500 = (check4500/ppd) > 0? `**4500x**: ${(check4500 / ppd).toFixed(2)} Days or ${((check4500 / ppd) * 24).toFixed(2)} Hours` : `**4500x**: ✅ Achieved`
                            var tt5000 = (check5000/ppd) > 0? `**5000x**: ${(check5000 / ppd).toFixed(2)} Days or ${((check5000 / ppd) * 24).toFixed(2)} Hours` : `**5000x**: ✅ Achieved`
                            var tt5500 = (check5500/ppd) > 0? `**5500x**: ${(check5500 / ppd).toFixed(2)} Days or ${((check5500 / ppd) * 24).toFixed(2)} Hours` : `**5500x**: ✅ Achieved`
                            var tt6000 = (check6000/ppd) > 0? `**6000x**: ${(check6000 / ppd).toFixed(2)} Days or ${((check6000 / ppd) * 24).toFixed(2)} Hours` : `**6000x**: ✅ Achieved`
                            var tt6500 = (check6500/ppd) > 0? `**6500x**: ${(check6500 / ppd).toFixed(2)} Days or ${((check6500 / ppd) * 24).toFixed(2)} Hours` : `**6500x**: ✅ Achieved`
                            var tt7000 = (check7000/ppd) > 0? `**7000x**: ${(check7000 / ppd).toFixed(2)} Days or ${((check7000 / ppd) * 24).toFixed(2)} Hours` : `**7000x**: ✅ Achieved`
                            var tt7500 = (check7500/ppd) > 0? `**7500x**: ${(check7500 / ppd).toFixed(2)} Days or ${((check7500 / ppd) * 24).toFixed(2)} Hours` : `**7500x**: ✅ Achieved`
                            var tt8000 = (check8000/ppd) > 0? `**8000x**: ${(check8000 / ppd).toFixed(2)} Days or ${((check8000 / ppd) * 24).toFixed(2)} Hours` : `**8000x**: ✅ Achieved`
                            var tt8500 = (check8500/ppd) > 0? `**8500x**: ${(check8500 / ppd).toFixed(2)} Days or ${((check8500 / ppd) * 24).toFixed(2)} Hours` : `**8500x**: ✅ Achieved`
                            var tt9000 = (check9000/ppd) > 0? `**9000x**: ${(check9000 / ppd).toFixed(2)} Days or ${((check9000 / ppd) * 24).toFixed(2)} Hours` : `**9000x**: ✅ Achieved`
                            var tt9500 = (check9500/ppd) > 0? `**9500x**: ${(check9500 / ppd).toFixed(2)} Days or ${((check9500 / ppd) * 24).toFixed(2)} Hours` : `**9500x**: ✅ Achieved`
                            var tt10000 = (check10000/ppd) > 0? `**10000x**: ${(check10000 / ppd).toFixed(2)} Days or ${((check10000 / ppd) * 24).toFixed(2)} Hours` : `**10000x**: ✅ Achieved`

                            //the bottom is used for the dynamic input of 9 multi milestones, where 1 is achieved and 8 are potential

                            // checkifach means check if achieved and multiplier number is the milestone
                            var checkifach6000 = (check6000/ppd) > 0?  `${tt5500}
${tt6000}
${tt6500}                           
${tt7000}
${tt7500}
${tt8000}
${tt8500}
${tt9000}
${tt9500}`: `${tt6000}
${tt6500}                           
${tt7000}
${tt7500}
${tt8000}
${tt8500}
${tt9000}
${tt9500}  
${tt10000}`
                            var checkifach5500 = (check5500/ppd) > 0? `${tt5000}
${tt5500}                            
${tt6000}
${tt6500}                           
${tt7000}
${tt7500}
${tt8000}
${tt8500}
${tt9000}` : checkifach6000
                            var checkifach5000 = (check5000/ppd) > 0? `${tt4500}
${tt5000}
${tt5500}
${tt6000}
${tt6500}                           
${tt7000}
${tt7500}
${tt8000}
${tt8500}` : checkifach5500
                            var checkifach4500 = (check4500/ppd) > 0? `${tt4000}
${tt4500}  
${tt5000}                     
${tt5500}
${tt6000}
${tt6500}                           
${tt7000}
${tt7500}
${tt8000}` : checkifach5000
                            var checkifach4000 = (check4000/ppd) > 0? `${tt3500}
${tt4000}
${tt4500}                           
${tt5000}
${tt5500}
${tt6000}
${tt6500}
${tt7000}
${tt7500}` : checkifach4500
                            var checkifach3500 = (check3500/ppd) > 0? `${tt3000}
${tt3500}
${tt4000}
${tt4500}                           
 ${tt5000}
${tt5500}
${tt6000}
${tt6500}
${tt7000}` : checkifach4000
                            var checkifach3000 = (check3000/ppd) > 0? `${tt2500}
${tt3000}
${tt3500}
${tt4000}
${tt4500}                           
${tt5000}
${tt5500}
${tt6000}
${tt6500}` : checkifach3500
                            var checkifach2500 = (check2500/ppd) > 0? `${tt2000}
${tt2500}
${tt3000}
${tt3500}                           
${tt4000}
${tt4500}
${tt5000}
${tt5500}
${tt6000}` : checkifach3000
                            var checkifach2000 = (check2000/ppd) > 0? `${tt1500}
${tt2000}
${tt2500}
${tt3000}
${tt3500}                           
${tt4000}
${tt4500}
${tt5000}
${tt5500}` : checkifach2500
                            var checkifach1500 = (check1500/ppd) > 0? `${tt1000}
${tt1500}
${tt2000}
${tt2500}
${tt3000}
${tt3500}                           
${tt4000}
${tt4500}
${tt5000}` : checkifach2000
                            var checkifach1000 = (check1000/ppd) > 0? `${tt500}
${tt1000}
${tt1500}
${tt2000}                           
${tt2500}
${tt3000}
${tt3500}
${tt4000}
${tt4500}` : checkifach1500
                            var checkifach500 = (check500/ppd) > 0? `${tt100}
${tt500}
 ${tt1000}
${tt1500}                           
${tt2000}
${tt2500}
${tt3000}
${tt3500}
${tt4000}` : checkifach1000
                            var checkifach100 = (check100/ppd) > 0? `${tt100}
${tt500}
${tt1000}
${tt1500}                           
${tt2000}
${tt2500}
${tt3000}
${tt3500}
${tt4000}` : checkifach500

                     

                            
                            let prestigelevel = msg.content-1 //fetches prestigelevel
                            let costperpoint = client.msgs[prestigelevel].priceperpoint
                            client.moneyshort = require('./incomeperday.json') //money shortening json file
                            //the bottom below are a couple of if-else statements, if the balance bpp is higher than req for multi? Write achieved,
                            //else, calculate pp req to reach multi and then multiply it by prestige level price point
                            //then using money shortening json file we convert the values into 2 integers and give the name of the number To make it easier
                            var mu100x = i>0? `${((i * costperpoint)/client.moneyshort[(i * costperpoint).toString().length-1].dividedby).toFixed(2)} ${client.moneyshort[(i * costperpoint).toString().length-1].name}`: ach 
                            var mu500x = j>0? `${((j * costperpoint)/client.moneyshort[(j * costperpoint).toString().length-1].dividedby).toFixed(2)} ${client.moneyshort[(j * costperpoint).toString().length-1].name}`: ach
                            var mu1000x = k>0? `${((k * costperpoint)/client.moneyshort[(k * costperpoint).toString().length-1].dividedby).toFixed(2)} ${client.moneyshort[(k * costperpoint).toString().length-1].name}`: ach
                            var mu2000x = l>0? `${((l * costperpoint)/client.moneyshort[(l * costperpoint).toString().length-1].dividedby).toFixed(2)} ${client.moneyshort[(l * costperpoint).toString().length-1].name}`: ach
                            var mu3000x = m>0? `${((m * costperpoint)/client.moneyshort[(m * costperpoint).toString().length-1].dividedby).toFixed(2)} ${client.moneyshort[(m * costperpoint).toString().length-1].name}`: ach
                            var mu3500x = n>0? `${((n * costperpoint)/client.moneyshort[(n * costperpoint).toString().length-1].dividedby).toFixed(2)} ${client.moneyshort[(n * costperpoint).toString().length-1].name}`: ach
                            var mu4000x = o>0? `${((o * costperpoint)/client.moneyshort[(o * costperpoint).toString().length-1].dividedby).toFixed(2)} ${client.moneyshort[(o * costperpoint).toString().length-1].name}`: ach
                            const embed1 = new Discord.MessageEmbed()
                            .setTitle("Profile Report")
                            .setAuthor(`${message.author.username}`,`${message.author.avatarURL()}`)
                            .setThumbnail(message.author.avatarURL())
                            .setColor(`#FEFFA3`)
                             .setDescription(
`**PP/Day**: ${ppd.toLocaleString(`en`)}
**Current PP**: ${bpp.toLocaleString(`en`)}

**⌛ Time until**: 
**1 bil**: ${bilpp}
**10 bil**: ${tenbilpp}
**100 bil**: ${hundbilpp}
**1 tril**: ${trilpp}
**10 tril**: ${tentrilpp}

**📈 Multiplier**
${checkifach100}

**💸 Money Until**

        
        `)
                            .setFooter(`Developed by The Rock#1333`,`https://cdn.discordapp.com/attachments/776985762499002408/877895083268128788/pngegg.png`)

                            message.channel.send(embed1)
                        })
                      }})})})})}
                    ;
                })*/
client.login(config.token)