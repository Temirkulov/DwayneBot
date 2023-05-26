const Discord = require('discord.js');
const client = new Discord.Client()
const config = require ('./config.json')

module.exports = client.on("message" , (message) => {
    if(message.content === ',presguide'){ 
        if (message.author.id === `348296915143884801`) {
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
    .setTitle(`💠 Recommended Prestige Milestones`)
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
        .setTitle(`❗ Important Note`)
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
        .setFooter(`No. of coins = digits of pp squared, No of briefcases = digits of pp - 1`)
        const embed11 = new Discord.MessageEmbed()
        .setColor(blue)
        .setTitle(`📈 How to Invest your Prestige Points`)
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
Pizza - 2\nCarwash - 3\nRestaurant - 4\nBank - 5\nOil - 6\nAirport - 7\nHospital - 8\nShipyard  - 9\nFactory - 10\nSpace - 12\nUniversity - 14
Robotics - 16 \nFirm - 18\nUranium - 20\nPlant - 20\nReactor - 20\nSoftware - 20\nTelecommunications - 20\nVirtual - 20
**Total Time: __9 DAYS & 18 HOURS__**`)
        const embed15 = new Discord.MessageEmbed()
        .setColor(blue)
        .setTitle(`Additional Information Pt.3`)
        .setDescription(`**__Moon Weekly Tasks Hour of Income__**\nSatellite - 2\nOutpost - 4\nSolar - 6\nHotel - 8\nMall - 10\nPlant - 12\nDome - 14\nProjector - 16\nCondenser - 18\nEmulator - 20
Ion - 22\nForcefield -  24\nMachine - 26 
**TOTAL TIME: __7 DAYS 14 HOURS__**`)
        const embed17 = new Discord.MessageEmbed()
        .setColor(blue)
        .setTitle(`Moon Business Unlocks`)
        .setDescription(`**__Moon Business Unlocks__**\n:office: **Moon Hotel** - Unlocked at Prestige 1\n:hotel: **Interstellar Mall** - Unlocked at Prestige 2\n:factory: **Rover Production Plant** - Unlocked at Prestige 4
:pick: **Mining Dome** - Unlocked at Prestige 6\n:telescope: **Holographic Projector** - Unlocked at Prestige 8\n:petri_dish: **Antimatter Condenser** - Unlocked at Prestige 10\n:hole: **Black Hole Emulator** - Unlocked at Prestige 12
:inbox_tray: **Ion Storage** - Unlocked at Prestige 14\n:globe_with_meridians: **Forcefield Control** - Unlocked at Prestige 16\n:hourglass: **Time Machine ** - Unlocked at Prestige 18`)
         const embed16 = new Discord.MessageEmbed()
        .setColor(blue)
        .setTitle(`Earth Business Unlocks`)
        .setDescription(`**__Earth Business Unlocks__**\n✈️ **Airport** - Unlocked at Prestige 1\n🏥 **Hospital** - Unlocked at Prestige 2\n🚢 **Shipyard** - Unlocked at Prestige 3
🏭 **Car Factory** - Unlocked at Prestige 5\n🚀 **Space Center** - Unlocked at Prestige 8\n🏫 **University** - Unlocked at Prestige 10\n🤖 **Robotics Factory** - Unlocked at Prestige 12
🏘️ **Real Estate Firm** - Unlocked at Prestige 14\n🏗️ **Uranium Mine** - Unlocked at Prestige 16\n♻️ **Geothermal Power Plant** - Unlocked at Prestige 18\n☢️ **Nuclear Reactor** - Unlocked at Prestige 20
💻 **Software Development Firm** - Unlocked at Prestige 22\n📞 **Telecommunications Industry** - Unlocked at Prestige 24\n🥽 **Virtual Reality** - Unlocked at Prestige 26`)
        const embed18 = new Discord.MessageEmbed()
        .setColor(blue)
        .setTitle(`<:coin:885138850329002054> Coins & Mine :pick:`)
        .setDescription(`Prioritize buying mine with ${"`,mine buy`"} for 10 coins and leveling it up to lvl 2 afterwards with ${"`,mine upgrade`"} for 8 coins.
For a total price of **18 coins**, you will start making **4 coins/day**, which earns your coins back within **5 days**. 
*Eventually you would want to upgrade your mine even further, and this is when it becomes a **long-term investment.** since it will take a much longer time to earn your coins back.*

> *Keep in mind that all of SKL's top players have a mine of lvl 5+, if you're unsure when to go past mine level 2, you can dm <@239879874121170946>*`)
        const embed19 = new Discord.MessageEmbed()
        .setColor(blue)
        .setTitle(`When to start saving for prestige`)
        .setDescription(`For the last section, we are going to end this off by leaving it up to you, the reader. 
If we were to micromanage everything you did, then wouldn't it just ruin the fun of playing the game?
In my professional opinion, I would advise you to make enough of an income that will help you reach your desired prestige points within 3-5 days because the period of saving should never take more than a week.
This is to avoid missing out on the new sets of weekly tasks.`)
        const embed20 = new Discord.MessageEmbed()
        .setColor(blue)
        .setTitle(`Last Words`)
        .setDescription(`To wrap this up, I just wanted to say thank you for taking the time to read this guide. Our corporation, let alone server, wouldn't be the same without you wondeful individuals.
So **Thank you**, truly, and have fun reading the rest of this guide!! :D - Nate`)
        const embed21 = new Discord.MessageEmbed()
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
**5.** <@239879874121170946>

**And Lastly, THANK YOU FOR READING!!**
        `)
        .setFooter(`Made for the Community, by the Community`)
const embed = new Discord.MessageEmbed()
        .setImage(`https://cdn.discordapp.com/attachments/803791338880630824/884348785772339200/sickleguide6.png`)
        .setColor(blue)
        message.channel.send(embed).then(message.channel.send(embed2)).then(message.channel.send(embed3)).then(message.channel.send(embed4)).then(message.channel.send(embed5)).then(message.channel.send(embed6)).then(message.channel.send(embed7)).then(message.channel.send(embed8)).then(message.channel.send(embed9)).then(message.channel.send(embed10)).then(message.channel.send(embed11)).then(message.channel.send(embed12)).then(message.channel.send(embed13)).then(message.channel.send(embed14)).then(message.channel.send(embed15)).then(message.channel.send(embed17)).then(message.channel.send(embed16)).then(message.channel.send(embed18)).then(message.channel.send(embed19)).then(message.channel.send(embed20)).then(message.channel.send(embed21))
    } else return;
}})

client.login(config.token)