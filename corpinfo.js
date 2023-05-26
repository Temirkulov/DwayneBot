const Discord = require('discord.js');
const client = new Discord.Client()
const config = require ('./config.json')

module.exports = client.on("message" , (message) => {
    if(message.content === ',corpinfo'){ 
       if (!message.author.id === `348296915143884801`)return;
        const blue = `#99c8fb`
        const embed = new Discord.MessageEmbed()
        .setColor(blue)
        .setImage(`https://cdn.discordapp.com/attachments/803791338880630824/890869183867392020/corpinfo4.png`)
        const embed1 = new Discord.MessageEmbed()
        .setColor(blue)
        .setTitle(`Weekly Requirement`)
        .setDescription(`**Note**: If you are below Prestige 10, you are **exempt from any requirements.**
${"```Donate atleast 24 hours of your balance a week.```"}
▫ Please note that the corporation provides you with a total of **56 hours** of additional income from our daily bonus, all we ask for is only 24 hours.\n
▫ Donations out of generosity are very appreciated!`)
        const embed2 = new Discord.MessageEmbed()
        .setColor(blue)
        .setTitle(`📊 Leaderboards`)
        .setDescription(`We are the **top** corporation in Idlecapitalist.
**Ranks**\n▫ Richest - **1st**\n▫ Multiplier - **1st**\n▫ Level - **1st**\n▫ Employees - **1st**\n
Our Feeders(SKLA, HSKL) are also among **the best** on this bot.`)
        const embed3 = new Discord.MessageEmbed()
        .setColor(blue)
        .setTitle(`🤖 Our Bots`)
        .setDescription(`**We currently have 3 idlecap-related bots to aid with your development.**
<:Cryptology4:794639898950893621> **Cryptology** - developed by <@158624640887947264>
${"`~pcalc`"} → Calculate potential multiplier with a given amount, inclusive of cap prices.
${"`,req`"} → Request a Gift in <#855027791102869504>
Moreover, it outputs a profile report for your business and shows the most optimal weekly task purchases.\n
<:Rock_smile:763468694483107871> **DwayneBot** - developed by <@348296915143884801>
${"`;lb`"} → Displays server leaderboard for either earth or moon.
${"`;m`"} → Displays cost per prestige point for each prestige level.
${"`;gcalc`"} → Calculates gift amount after taxes for a given amount.\n
<:sickleCorp:815977022777327638> **SickleCap** - developed by <@212031171930882049>
${"`sc!req`"} → Request a gift in <#855027791102869504>
Currently discontinued until further notice.\n
🖥️ **IdlecapitalistHelper** - developed by <@110463653261623296>
${"`$$pcalc`"} → Calculates potential multiplier with a given amount, without accounting cap prices.
${"`$$mcalc`"} → Calculates prestige points needed to achieve a given multiplier, without accounting cap prices.
`)
        const embed4 = new Discord.MessageEmbed()
        .setColor(blue)
        .setTitle(`👑 Corporation Hierarchy`)
        .setDescription(`**Owner**
> 🕴 <@117076562687426567>\n> **Managers**\n> 👨‍💼 <@775426877933355069>\n> **Recruiters**\n> ☎ <@725729303509205023>\n> ☎ <@429385862988693505>\n> ☎ <@239879874121170946>\n> ☎ <@579461875474104320>\n> ☎ <@481962288606216202>\n
**Feeder Owners**\n> **SKLA** - <@757200814673756261>\n> **HSKL** - <@856228824890474567>\n> **Feeder Recruiters**\n> **SKLA** - <@617133684549484584>\n> **SKLA** - <@455791226814464012>\n> **HSKL** - <@722516747802116208>`)
        const embed5 = new Discord.MessageEmbed()
        .setColor(blue)
        .setTitle(`🏛 Prestige Roles!`)
        .setDescription(`> <@&877466305123479563>\n> <@&877466696628199424>\n> <@&877467000794918913>\n> <@&877473949708070923>\n> <@&877467340168650752>\n> <@&877467525720440832>\n> <@&877467661821427722>\n> <@&877467796148195370>`)
        message.channel.send(embed).then(message.channel.send(embed1)).then(message.channel.send(embed2)).then(message.channel.send(embed3)).then(message.channel.send(embed4)).then(message.channel.send(embed5))
        }
})
client.login(config.token)