const Discord = require('discord.js');
const client = new Discord.Client()
const config = require ('./config.json')

module.exports = client.on("message" , (message) => {
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
     let corp = el.embeds[0].fields[0].value;
     var corpname = corp.split(`🏛 [`).pop().split(`]`)[0]
     console.log(corpname)
     let text = el.embeds[0].fields[5].value;
     var prestigeval = Number(text.split('__Prestiges:__ ').pop().split('\n')[0].replace(/,/g, ''))
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
                    // client.prestiges = require(`./prestiges.json`)
                    let prestigepoints = 2000*((prestigeval*prestigeval*prestigeval))+10000*(prestigeval*prestigeval);
                    let prestige = Math.floor(prestigeval)+1
                    let ppd = Math.floor(mpd / prestigepoints) //prestige per day
                    let app = Math.floor(balance / prestigepoints) //accumulated prestige points
                    let x100 = (2787950) // pp left for x100
                    let x500 = (69702250) // pp left for x500
                    let x1000 = (279340210) 
                    let x1500 = (629118200)
                    let x2000 = 1119801050 
                    let x2500 = 1753639510 
                    let x3000 = (2536257780)
                    let x3500 = (3481719210)
                    let x4000 = (4623060060)
                    let x4500 = (6054529185) 
                    let x5000 = (7989494838)
                    let x5500 = 10979393524 
                    let x6000 = 16397515140 
                    let x6500 = 27677088733 
                    let x7000 = 53401181263 
                    let x7500 = 115027466918 
                    let x8000 = 266200123846
                    let x8500 = 641029604741 
                    let x9000 = 1574792035064 
                    let x9500 = 3905677732845 
                    let x10000 = 9729162490493 
                    var multicalc21 = app < x10000? `${((x10000-app)/ppd).toFixed(2)} Days to 10000x`: `✅ Achieved 10000x`
                    var multicalc20 = app < x9500? `${((x9500-app)/ppd).toFixed(2)} Days to 9500x`: multicalc21
                    var multicalc19 = app < x9000? `${((x9000-app)/ppd).toFixed(2)} Days to 9000x`: multicalc20
                    var multicalc18 = app < x8500? `${((x8500-app)/ppd).toFixed(2)} Days to 8500x`: multicalc19
                    var multicalc17 = app < x8000? `${((x8000-app)/ppd).toFixed(2)} Days to 8000x`: multicalc18
                    var multicalc16 = app < x7500? `${((x7500-app)/ppd).toFixed(2)} Days to 7500x`: multicalc17
                    var multicalc15 = app < x7000? `${((x7000-app)/ppd).toFixed(2)} Days to 7000x`: multicalc16
                    var multicalc14 = app < x6500? `${((x6500-app)/ppd).toFixed(2)} Days to 6500x`: multicalc15
                    var multicalc13 = app < x6000? `${((x6000-app)/ppd).toFixed(2)} Days to 6000x`: multicalc14
                    var multicalc12 = app < x5500? `${((x5500-app)/ppd).toFixed(2)} Days to 5500x`: multicalc13
                    var multicalc11 = app < x5000? `${((x5000-app)/ppd).toFixed(2)} Days to 5000x`: multicalc12
                    var multicalc10 = app < x4500? `${((x4500-app)/ppd).toFixed(2)} Days to 4500x`: multicalc11
                    var multicalc9 = app < x4000? `${((x4000-app)/ppd).toFixed(2)} Days to 4000x`: multicalc10
                    var multicalc8 = app < x3500? `${((x3500-app)/ppd).toFixed(2)} Days to 3500x`: multicalc9
                    var multicalc7 = app < x3000? `${((x3000-app)/ppd).toFixed(2)} Days to 3000x`: multicalc8
                    var multicalc6 = app < x2500? `${((x2500-app)/ppd).toFixed(2)} Days to 2500x`: multicalc7
                    var multicalc5 = app < x2000? `${((x2000-app)/ppd).toFixed(2)} Days to 2000x`: multicalc6
                    var multicalc4 = app < x1500? `${((x1500-app)/ppd).toFixed(2)} Days to 1500x`: multicalc5
                    var multicalc3 = app < x1000? `${((x1000-app)/ppd).toFixed(2)} Days to 1000x`: multicalc4
                    var multicalc2 = app < x500? `${((x500-app)/ppd).toFixed(2)} Days to 500x`: multicalc3
                    var multicalc = app < x100? `${((x100-app)/ppd).toFixed(2)} Days  to 100x`: multicalc2
                    let balanceacc = Math.floor(balance)
                    var godremarksincome = [`One of a kind player, $${incomenumber2.toFixed(2)} ${incomename} a day is ELITE`, `Earning $${incomepmnumber2.toFixed(2)} ${incomepmname}, dude's probably sitting on the lb rn`,`Mf a TOP on god, $${incomenumber2.toFixed(2)} ${incomename} a day aint no joke for Prestige ${prestige}`]
                    var excellentremarksincome = [`Dude makes $${incomenumber2.toFixed(2)} ${incomename} per day, this dude is top tier for prestige ${prestige}`,`This person earns $${incomenumber2.toFixed(2)} ${incomename} a day, which means they are EXCELLENT for Prestige ${prestige}`, `By earning $${incomepmnumber2.toFixed(2)} ${incomepmname} a minute, this person definitely a future incomelb typa player`,`At $${incomepmnumber2.toFixed(2)} ${incomepmname}, this person is on the right path because they know their stuff very well`]
                    var goodremarksincome = [`This person is a great fit for the corporation, with a good income of ${incomepmnumber2.toFixed(2)} ${incomepmname}`, `A good player overall, with a respectable daily earning of $${incomenumber2.toFixed(2)} ${incomename}`, `Definitely one to hire, there aren't many people earning more than $${incomepmnumber2.toFixed(2)} ${incomepmname} a minute at their prestige level`]
                    var averageremarksincome = [`A solid pick for the corporation overall, at Prestige ${prestige} earning ${incomenumber2.toFixed(2)} ${incomename} a day isn't bad at all`,`Having an income of $${incomepmnumber2.toFixed(2)} ${incomepmname} a minute is nice at Prestige ${prestige}`]
                    var badremarksincome = [`This person is just trash, like fr man wtf is ${incomepmnumber2.toFixed(2)} ${incomepmname} per min`,`With all due respect, with an income of $${incomepmnumber2.toFixed(2)} ${incomepmname} per minute, the only place this mans going is to the garbage bin`, `Earning $${incomenumber2.toFixed(2)} ${incomename} per day at Prestige ${prestige} this person is on another level of ass`, `My service provider crashed by processing this garbage ass' profile, like wtf is $${incomepmnumber2}${incomepmname}/min, did this man think with his ass or sumn🤨`]
                    var godremarksstring = godremarksincome[Math.floor(Math.random() * godremarksincome.length)]
                    var excellentremarksstring = excellentremarksincome[Math.floor(Math.random()*godremarksincome.length)]
                    var goodremarksstring = goodremarksincome[Math.floor(Math.random() * goodremarksincome.length)]
                    var averageremarksstring = averageremarksincome[Math.floor(Math.random()*averageremarksincome.length)]
                    var badremarksstring = badremarksincome[Math.floor(Math.random()* badremarksincome.length)]
                    //Time For requirements for each tier
                    //String([godremarksincome[godremarksstring]])
                    var godplayer13 = prestige>=35 && totalmulti>=9000 && mpm>500000000000000? godremarksstring : excellentremarksstring
                    var excellentplayer13 = prestige>=35 && totalmulti>=8500 && mpm>450000000000000?  godplayer13 : goodremarksstring 
                    var goodplayer13 =prestige>=35 && totalmulti>=8000 && mpm>400000000000000?  excellentplayer13 : averageremarksstring
                    var averageplayer13 = prestige>=35 && totalmulti>=7500 && mpm>350000000000000?  goodplayer13 : badremarksstring
                    var badplayer13 = prestige>=35 && totalmulti>=7000 && mpm>300000000000000?  averageplayer13 :badremarksstring

                    var godplayer12 = prestige>=30 && totalmulti>=8500 && mpm>450000000000000? godremarksstring : excellentremarksstring
                    var excellentplayer12 = prestige>=30 && totalmulti>=8000 && mpm>400000000000000?  godplayer12 : goodremarksstring 
                    var goodplayer12 =prestige>=30 && totalmulti>=7500 && mpm>350000000000000?  excellentplayer12 : averageremarksstring
                    var averageplayer12 = prestige>=30 && totalmulti>=7000 && mpm>300000000000000?  goodplayer12 : badremarksstring
                    var badplayer12 = prestige>=30 && totalmulti>=6500 && mpm>25000000000000?  averageplayer12 :badremarksstring

                    var godplayer11 = prestige>=25 && totalmulti>=8000 && mpm>25000000000000? godremarksstring : excellentremarksstring
                    var excellentplayer11 = prestige>=25 && totalmulti>=7500 && mpm>20000000000000?  godplayer11 : goodremarksstring 
                    var goodplayer11 =prestige>=25 && totalmulti>=7000 && mpm>15000000000000?  excellentplayer11 : averageremarksstring
                    var averageplayer11 = prestige>=25 && totalmulti>=6500 && mpm>10000000000000?  goodplayer11 : badremarksstring
                    var badplayer11 = prestige>=25 && totalmulti>=5500 && mpm>7500000000000?  averageplayer11 :badremarksstring

                    var godplayer10 = prestige>=20 && totalmulti>=7500 && mpm>10000000000000? godremarksstring : excellentremarksstring
                    var excellentplayer10 = prestige>=20 && totalmulti>=7000 && mpm>7500000000000?  godplayer10 : goodremarksstring 
                    var goodplayer10 =prestige>=20 && totalmulti>=6500 && mpm>5500000000000?  excellentplayer10 : averageremarksstring
                    var averageplayer10 = prestige>=20 && totalmulti>=6000 && mpm>3500000000000?  goodplayer10 : badremarksstring
                    var badplayer10 = prestige>=20 && totalmulti>=5500 && mpm>3000000000000?  averageplayer10 :badremarksstring


                    var godplayer9 = prestige>=18 && totalmulti>=7000 && mpm>20000000000000? godremarksstring : excellentremarksstring
                    var excellentplayer9 = prestige>=18 && totalmulti>=6500 && mpm>15000000000000?  godplayer9 : goodremarksstring 
                    var goodplayer9 =prestige>=18 && totalmulti>=6000 && mpm>10000000000000?  excellentplayer9 : averageremarksstring
                    var averageplayer9 = prestige>=18 && totalmulti>=5500 && mpm>7500000000000?  goodplayer9 : badremarksstring
                    var badplayer9 = prestige>=18 && totalmulti>=5000 && mpm>5000000000000?  averageplayer9 :badremarksstring

                    var godplayer8 = prestige>=16 && totalmulti>=6500 && mpm>7500000000000? godremarksstring : excellentremarksstring
                    var excellentplayer8 = prestige>=16 && totalmulti>=6000 && mpm>5000000000000?  godplayer8 : goodremarksstring 
                    var goodplayer8 =prestige>=16 && totalmulti>=5500 && mpm>2500000000000?  excellentplayer8 : averageremarksstring
                    var averageplayer8 = prestige>=16 && totalmulti>=5000 && mpm>2000000000000?  goodplayer8 : badremarksstring
                    var badplayer8 = prestige>=16 && totalmulti>=4000 && mpm>1000000000000?  averageplayer8 :badremarksstring

                    var godplayer7 = prestige>=14 && totalmulti>6000 && mpm>2000000000000? godremarksstring : excellentremarksstring
                    var excellentplayer7 = prestige>=14 && totalmulti>5500 && mpm>1500000000000?  godplayer7 : goodremarksstring 
                    var goodplayer7 =prestige>=14 && totalmulti>5000 && mpm>1000000000000?  excellentplayer7 : averageremarksstring
                    var averageplayer7 = prestige>=14 && totalmulti>4500 && mpm>750000000000?  goodplayer7 : badremarksstring
                    var badplayer7 = prestige>=14 && totalmulti>3500 && mpm>650000000000?  averageplayer7 :badremarksstring

                    var godplayer6 = prestige>=12 && totalmulti>=5500 && mpm>1000000000000? godremarksstring : excellentremarksstring
                    var excellentplayer6 = prestige>=12 && totalmulti>=5000 && mpm>800000000000?  godplayer6 : goodremarksstring 
                    var goodplayer6 = prestige>=12 && totalmulti>=4500 && mpm>500000000000?  excellentplayer6 : averageremarksstring
                    var averageplayer6 = prestige>=12 && totalmulti>=4000 && mpm>400000000000?  goodplayer6 : badremarksstring
                    var badplayer6 = prestige>=12 && totalmulti>=3000 && mpm>250000000000?  averageplayer6 :badremarksstring

                    var godplayer5 =  prestige>=10 && totalmulti>5000 && mpm>500000000000? godremarksstring :excellentremarksstring
                    var excellentplayer5 =  prestige>=10 && totalmulti>4500 && mpm>400000000000?  godplayer5 : goodremarksstring 
                    var goodplayer5 =  prestige>=10 && totalmulti>4000 && mpm>250000000000?  excellentplayer5 : averageremarksstring
                    var averageplayer5 =  prestige>=10 && totalmulti>3500 && mpm>150000000000?  goodplayer5 : badremarksstring
                    var badplayer5 =   prestige>=10 && totalmulti>2500 && mpm>100000000000?  averageplayer5 :badremarksstring

                    var godplayer4 = prestige>=8 && totalmulti>=4000 && mpm>150000000000? godremarksstring :excellentremarksstring
                    var excellentplayer4 = prestige>=8 && totalmulti>3000 && mpm>100000000000?  godplayer4 : goodremarksstring 
                    var goodplayer4 = prestige>=8 && totalmulti>2500 && mpm>85000000000?  excellentplayer4 : averageremarksstring
                    var averageplayer4 = prestige>=8 && totalmulti>2000 && mpm>55000000000?  goodplayer4 : badremarksstring
                    var badplayer4 =  prestige>=8 && totalmulti>1500 && mpm>45000000000?  averageplayer4 :badremarksstring

                    var godplayer3 = prestige>=5 && totalmulti>=2500? godremarksstring :excellentremarksstring
                    var excellentplayer3 = prestige>=5 && totalmulti>=2000?  godplayer3 :goodremarksstring 
                    var goodplayer3 = prestige>=5 && totalmulti>=1500? excellentplayer3 : averageremarksstring
                    var averageplayer3 = prestige>=5 && totalmulti>=1000? goodplayer3 : badremarksstring
                    var badplayer3 = prestige>=5 && totalmulti>=750? averageplayer3 : badremarksstring

                    var godplayer2 = prestige>=4 && totalmulti>=1500? godremarksstring : excellentremarksstring
                    var excellentplayer2 = prestige>=4 && totalmulti>=1000?  godplayer2 : goodremarksstring 
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
                    var badmultiremarks = [`🗑 multiplier for Prestige ${prestige}`, `${totalmulti}x is **bad** for Prestige ${prestige}`]
                    var godmultistring = godmultiremarks[Math.floor(Math.random() * godmultiremarks.length)]
                    var excellentmultistring = excellentmultiremarks[Math.floor(Math.random() * excellentmultiremarks.length)]
                    var goodmultistring = goodmultiremarks[Math.floor(Math.random() * goodmultiremarks.length)]
                    var averagemultistring = averagemultiremarks[Math.floor(Math.random() * averagemultiremarks.length)]
                    var badmultistring = badmultiremarks[Math.floor(Math.random() * badmultiremarks.length)]
                    
                    var prestige16gd = prestige>=16 && totalmulti>=6500? godmultistring : excellentmultistring
                    var prestige16e = prestige>=16 && totalmulti>=5500? prestige16gd : goodmultistring
                    var prestige16g = prestige>=16 && totalmulti>=5000? prestige16e : averagemultistring
                    var prestige16a = prestige>=16 && totalmulti>=4500? prestige16g : badmultistring
                    var prestige16b = prestige>=16 && totalmulti>=4000? prestige16a : badmultistring

                    var prestige14gd = prestige>=14 && totalmulti>=6500? godmultistring : excellentmultistring
                    var prestige14e = prestige>=14 && totalmulti>=6000? prestige14gd : goodmultistring
                    var prestige14g = prestige>=14 && totalmulti>=5500? prestige14e : averagemultistring
                    var prestige14a = prestige>=14 && totalmulti>=5000? prestige14g : badmultistring
                    var prestige14b = prestige>=14 && totalmulti>=3500? prestige14a : badmultistring

                    var prestige12gd = prestige>=12 && totalmulti>=6000? godmultistring : excellentmultistring
                    var prestige12e = prestige>=12 && totalmulti>=5000? prestige12gd : goodmultistring
                    var prestige12g = prestige>=12 && totalmulti>=4500? prestige12e : averagemultistring
                    var prestige12a = prestige>=12 && totalmulti>=4000? prestige12g : badmultistring
                    var prestige12b = prestige>=12 && totalmulti>=3000? prestige12a : badmultistring

                    var prestige10gd = prestige>=10 && totalmulti>=5000? godmultistring : excellentmultistring
                    var prestige10e = prestige>=10 && totalmulti>=4500? prestige10gd : goodmultistring
                    var prestige10g = prestige>=10 && totalmulti>=4000? prestige10e : averagemultistring
                    var prestige10a = prestige>=10 && totalmulti>=3500? prestige10g : badmultistring
                    var prestige10b = prestige>=10 && totalmulti>=2500? prestige10a : badmultistring

                    var prestige8gd = prestige>=8 && totalmulti>=4000? godmultistring : excellentmultistring
                    var prestige8e = prestige>=8 && totalmulti>=3000? prestige8gd : goodmultistring
                    var prestige8g = prestige>=8 && totalmulti>=2500? prestige8e : averagemultistring
                    var prestige8a = prestige>=8 && totalmulti>=2000? prestige8g : badmultistring
                    var prestige8b = prestige>=8 && totalmulti>=1500? prestige8a : badmultistring
                   
                    var prestige5gd = prestige>=5 && totalmulti>=2500? godmultistring : excellentmultistring
                    var prestige5e = prestige>=5 && totalmulti>=2000? prestige5gd : goodmultistring
                    var prestige5g = prestige>=5 && totalmulti>=1500? prestige5e : averagemultistring
                    var prestige5a = prestige>=5 && totalmulti>=1000? prestige5g : badmultistring
                    var prestige5b = prestige>=5 && totalmulti>=750? prestige5a : badmultistring

                    var prestige4gd = prestige>=4 && totalmulti>=2000? godmultistring : excellentmultistring
                    var prestige4e = prestige>=4 && totalmulti>=1500? prestige4gd : goodmultistring
                    var prestige4g = prestige>=4 && totalmulti>=1000? prestige4e : averagemultistring
                    var prestige4a = prestige>=4 && totalmulti>=750? prestige4g : badmultistring
                    var prestige4b = prestige>=4 && totalmulti>=500? prestige4a : badmultistring

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

                    var prestige30gdr = ppd>22500000000? `A+` : `A`
                    var prestige30er = ppd>20000000000? prestige30gdr : `B`
                    var prestige30gr = ppd>15000000000? prestige30er : `C`
                    var prestige30ar = ppd>10000000000? prestige30gr : `D`
                    var prestige30br = ppd>7500000000? prestige30ar : `F`

                    var prestige20gdr = ppd>10000000000? `A+` : `A`
                    var prestige20er = ppd>7500000000? prestige20gdr : `B`
                    var prestige20gr = ppd>5000000000? prestige20er : `C`
                    var prestige20ar = ppd>4500000000? prestige20gr : `D`
                    var prestige20br = ppd>4000000000? prestige20ar : `F`

                    var prestige18gdr = ppd>5000000000? `A+` : `A`
                    var prestige18er = ppd>3500000000? prestige18gdr : `B`
                    var prestige18gr = ppd>3000000000? prestige18er : `C`
                    var prestige18ar = ppd>2000000000? prestige18gr : `D`
                    var prestige18br = ppd>1000000000? prestige18ar : `F`

                    var prestige16gdr = ppd>3500000000? `A+` : `A`
                    var prestige16er = ppd>3000000000? prestige16gdr : `B`
                    var prestige16gr = ppd>2500000000? prestige16er : `C`
                    var prestige16ar = ppd>2000000000? prestige16gr : `D`
                    var prestige16br = ppd>1500000000? prestige16ar : `F`

                    var prestige14gdr = ppd>1750000000? `A+` : `A`
                    var prestige14er = ppd>1500000000? prestige14gdr : `B`
                    var prestige14gr = ppd>1000000000? prestige14er : `C`
                    var prestige14ar = ppd>600000000? prestige14gr : `D`
                    var prestige14br = ppd>300000000? prestige14ar : `F`

                    var prestige12gdr = ppd>1500000000? `A+` : `A`
                    var prestige12er = ppd>1000000000? prestige12gdr : `B`
                    var prestige12gr = ppd>600000000? prestige12er : `C`
                    var prestige12ar = ppd>300000000? prestige12gr : `D`
                    var prestige12br = ppd>150000000? prestige12ar : `F`

                    var prestige10gdr = ppd>1500000000? `A+` : `A`
                    var prestige10er = ppd>1000000000? prestige10gdr : `B`
                    var prestige10gr = ppd>500000000? prestige10er : `C`
                    var prestige10ar = ppd>300000000? prestige10gr : `D`
                    var prestige10br = ppd>100000000? prestige10ar : `F`

                    var prestige8gdr = ppd>1000000000? `A+` : `A`
                    var prestige8er = ppd>500000000? prestige8gdr : `B`
                    var prestige8gr = ppd>250000000? prestige8er : `C`
                    var prestige8ar = ppd>100000000? prestige8gr : `D`
                    var prestige8br = ppd>50000000? prestige8ar : `F`
                   
                    var prestige5gdr =ppd>150000000? `A+` : `A`
                    var prestige5er = ppd>100000000? prestige5gdr : `B`
                    var prestige5gr =ppd>50000000? prestige5er : `C`
                    var prestige5ar = ppd>25000000? prestige5gr : `D`
                    var prestige5br = ppd>10000000? prestige5ar : `F`

                    var prestige4gdr = ppd>50000000? `A+` : `A`
                    var prestige4er = ppd>25000000? prestige4gdr : `B`
                    var prestige4gr = ppd>10000000? prestige4er : `C`
                    var prestige4ar = ppd>1000000? prestige4gr : `D`
                    var prestige4br = ppd>500000? prestige4ar : `F`

                    var prestige3gdr = ppd>10000000? `A+` : `A`
                    var prestige3er = ppd>5000000? prestige3gdr : goodmultistring
                    var prestige3gr = ppd>1000000? prestige3er : `C`
                    var prestige3ar = ppd>500000? prestige3gr : `D`
                    var prestige3br = ppd>50000? prestige3ar : `F`

                    var prestige2gdr = ppd>1000000? `A+` : `A`
                    var prestige2er = ppd>250000? prestige2gdr : `B`
                    var prestige2gr = ppd>100000? prestige2er : `C`
                    var prestige2ar = ppd>10000? prestige2gr : `D`
                    var prestige2br = ppd>1000? prestige2ar : `F`

                    var prestigecalcr11 = prestige>=30? prestige30br : prestige20br
                    var prestigecalcr10 = prestige>=20? prestigecalcr11 : prestige18br
                    var prestigecalcr9 = prestige>=18? prestigecalcr10 : prestige16br
                    var prestigecalcr8 = prestige>=16? prestigecalcr9 : prestige14br
                    var prestigecalcr7 = prestige>=14? prestigecalcr8 : prestige12br
                    var prestigecalcr6 = prestige>=12? prestigecalcr7 : prestige10br
                    var prestigecalcr5 = prestige>=10? prestigecalcr6 : prestige8br
                    var prestigecalcr4 = prestige>=8? prestigecalcr5 : prestige5br
                    var prestigecalcr3 = prestige>=5? prestigecalcr4 : prestige4br
                    var prestigecalcr2 = prestige>=4? prestigecalcr3 : prestige3br
                    var prestigecalcr1 = prestige>=3? prestigecalcr2 : prestige2br
                    var prestigecalcr = prestige>=2? prestigecalcr1 : `Too New`

                    var godplayerr13 = prestige>=35 && totalmulti>=9000 && mpm>500000000000000? `A+` : `A`
                    var excellentplayerr13 = prestige>=35 && totalmulti>=8500 && mpm>450000000000000?  godplayerr13 : `B` 
                    var goodplayerr13 =prestige>=35 && totalmulti>=8000 && mpm>400000000000000?  excellentplayerr13 : `C`
                    var averageplayerr13 = prestige>=35 && totalmulti>=7500 && mpm>350000000000000?  goodplayerr13 : `D`
                    var badplayerr13 = prestige>=35 && totalmulti>=7000 && mpm>300000000000000?  averageplayerr13 :`F`

                    var godplayerr12 = prestige>=30 && totalmulti>=8500 && mpm>450000000000000? `A+` : `A`
                    var excellentplayerr12 = prestige>=30 && totalmulti>=8000 && mpm>400000000000000?  godplayerr12 : `B` 
                    var goodplayerr12 =prestige>=30 && totalmulti>=7500 && mpm>350000000000000?  excellentplayerr12 : `C`
                    var averageplayerr12 = prestige>=30 && totalmulti>=7000 && mpm>300000000000000?  goodplayerr12 : `D`
                    var badplayerr12 = prestige>=30 && totalmulti>=6500 && mpm>25000000000000?  averageplayerr12 :`F`

                    var godplayerr11 = prestige>=25 && totalmulti>=8000 && mpm>25000000000000? `A+` : `A`
                    var excellentplayerr11 = prestige>=25 && totalmulti>=7500 && mpm>20000000000000?  godplayerr11 : `B` 
                    var goodplayerr11 =prestige>=25 && totalmulti>=7000 && mpm>15000000000000?  excellentplayerr11 : `C`
                    var averageplayerr11 = prestige>=25 && totalmulti>=6500 && mpm>10000000000000?  goodplayerr11 : `D`
                    var badplayerr11 = prestige>=25 && totalmulti>=5500 && mpm>7500000000000?  averageplayerr11 :`F`

                    var godplayerr10 = prestige>=20 && totalmulti>=7500 && mpm>10000000000000? `A+` : `A`
                    var excellentplayerr10 = prestige>=20 && totalmulti>=7000 && mpm>7500000000000?  godplayerr10 : `B` 
                    var goodplayerr10 =prestige>=20 && totalmulti>=6500 && mpm>5500000000000?  excellentplayerr10 : `C`
                    var averageplayerr10 = prestige>=20 && totalmulti>=6000 && mpm>3500000000000?  goodplayerr10 : `D`
                    var badplayerr10 = prestige>=20 && totalmulti>=5500 && mpm>3000000000000?  averageplayerr10 :`F`


                    var godplayerr9 = prestige>=18 && totalmulti>=7000 && mpm>20000000000000? `A+` : `A`
                    var excellentplayerr9 = prestige>=18 && totalmulti>=6500 && mpm>15000000000000?  godplayerr9 : `B` 
                    var goodplayerr9 =prestige>=18 && totalmulti>=6000 && mpm>10000000000000?  excellentplayerr9 : `C`
                    var averageplayerr9 = prestige>=18 && totalmulti>=5500 && mpm>7500000000000?  goodplayerr9 : `D`
                    var badplayerr9 = prestige>=18 && totalmulti>=5000 && mpm>5000000000000?  averageplayerr9 :`F`

                    var godplayerr8 = prestige>=16 && totalmulti>=6500 && mpm>7500000000000? `A+` : `A`
                    var excellentplayerr8 = prestige>=16 && totalmulti>=6000 && mpm>5000000000000?  godplayerr8 : `B` 
                    var goodplayerr8 =prestige>=16 && totalmulti>=5500 && mpm>2500000000000?  excellentplayerr8 : `C`
                    var averageplayerr8 = prestige>=16 && totalmulti>=5000 && mpm>2000000000000?  goodplayerr8 : `D`
                    var badplayerr8 = prestige>=16 && totalmulti>=4000 && mpm>1000000000000?  averageplayerr8 :`F`

                    var godplayerr7 = prestige>=14 && totalmulti>6000 && mpm>2000000000000? `A+` : `A`
                    var excellentplayerr7 = prestige>=14 && totalmulti>5500 && mpm>1500000000000?  godplayerr7 : `B` 
                    var goodplayerr7 =prestige>=14 && totalmulti>5000 && mpm>1000000000000?  excellentplayerr7 : `C`
                    var averageplayerr7 = prestige>=14 && totalmulti>4500 && mpm>750000000000?  goodplayerr7 : `D`
                    var badplayerr7 = prestige>=14 && totalmulti>3500 && mpm>650000000000?  averageplayerr7 :`F`

                    var godplayerr6 = prestige>=12 && totalmulti>=5500 && mpm>1000000000000? `A+` : `A`
                    var excellentplayerr6 = prestige>=12 && totalmulti>=5000 && mpm>800000000000?  godplayerr6 : `B` 
                    var goodplayerr6 = prestige>=12 && totalmulti>=4500 && mpm>500000000000?  excellentplayerr6 : `C`
                    var averageplayerr6 = prestige>=12 && totalmulti>=4000 && mpm>400000000000?  goodplayerr6 : `D`
                    var badplayerr6 = prestige>=12 && totalmulti>=3000 && mpm>250000000000?  averageplayerr6 :`F`

                    var godplayerr5 =  prestige>=10 && totalmulti>5000 && mpm>500000000000? `A+` : `A`
                    var excellentplayerr5 =  prestige>=10 && totalmulti>4500 && mpm>400000000000?  godplayerr5 : `B` 
                    var goodplayerr5 =  prestige>=10 && totalmulti>4000 && mpm>250000000000?  excellentplayerr5 : `C`
                    var averageplayerr5 =  prestige>=10 && totalmulti>3500 && mpm>150000000000?  goodplayerr5 : `D`
                    var badplayerr5 =   prestige>=10 && totalmulti>2500 && mpm>100000000000?  averageplayerr5 :`F`

                    var godplayerr4 = prestige>=8 && totalmulti>=4000 && mpm>150000000000? `A+` : `A`
                    var excellentplayerr4 = prestige>=8 && totalmulti>3000 && mpm>100000000000?  godplayerr4 : `B` 
                    var goodplayerr4 = prestige>=8 && totalmulti>2500 && mpm>85000000000?  excellentplayerr4 : `C`
                    var averageplayerr4 = prestige>=8 && totalmulti>2000 && mpm>55000000000?  goodplayerr4 : `D`
                    var badplayerr4 =  prestige>=8 && totalmulti>1500 && mpm>45000000000?  averageplayerr4 :`F`

                    var godplayerr3 = prestige>=5 && totalmulti>=2500? `A+` : `A`
                    var excellentplayerr3 = prestige>=5 && totalmulti>=2000?  godplayerr3 :`B` 
                    var goodplayerr3 = prestige>=5 && totalmulti>=1500? excellentplayerr3 : `C`
                    var averageplayerr3 = prestige>=5 && totalmulti>=1000? goodplayerr3 : `D`
                    var badplayerr3 = prestige>=5 && totalmulti>=750? averageplayerr3 : `F`

                    var godplayerr2 = prestige>=4 && totalmulti>=1500? `A+` : `A`
                    var excellentplayerr2 = prestige>=4 && totalmulti>=1000?  godplayerr2 : `B` 
                    var goodplayerr2 = prestige>=4 && totalmulti>=750? excellentplayerr2 : `C`
                    var averageplayerr2 = prestige>=4 && totalmulti>=500? goodplayerr2 : `D`
                    var badplayerr2 = prestige>=4 && totalmulti>=300? averageplayerr2 : `F`

                    var godplayerr1 = prestige>=3 && totalmulti>=500?`A+` : `A`
                    var excellentplayerr1 = prestige>=3 && totalmulti>=300? godplayerr1 : `B` 
                    var goodplayerr1 = prestige>=3 && totalmulti>=150? excellentplayerr1 : `C`
                    var averageplayerr1 = prestige>=3 && totalmulti>=100? goodplayerr1 : `D`
                    var badplayerr1 = prestige>=3 && totalmulti>=50? averageplayerr1 : `F`

                    var godplayerr = prestige>=2 && totalmulti>=150? `A+` : `A`
                    var excellentplayerr = prestige>=2 && totalmulti>=125? godplayerr : `B`
                    var goodplayerr = prestige>=2 && totalmulti>=100? excellentplayerr : `C`
                    var averageplayerr = prestige>=2 && totalmulti>=50? goodplayerr : `D`
                    var badplayerr = prestige>=2 && totalmulti>=25? averageplayerr : `F`
                    var determineprestiger13 = prestige>=35? badplayerr13 : badplayerr12
                    var determineprestiger12 = prestige>=30? determineprestiger13 : badplayerr11
                    var determineprestiger11 = prestige>=25? determineprestiger12 : badplayerr10
                    var determineprestiger10 = prestige>=20? determineprestiger11 : badplayerr9
                    var determineprestiger9 = prestige>=18? determineprestiger10 : badplayerr8
                    var determineprestiger8 = prestige>=16? determineprestiger9 : badplayerr7
                    var determineprestiger7 = prestige>=14? determineprestiger8 : badplayerr6
                    var determineprestiger6 = prestige>=12? determineprestiger7 : badplayerr5
                    var determineprestiger5 = prestige>=10? determineprestiger6 : badplayerr4
                    var determineprestiger4 = prestige>=8? determineprestiger5 : badplayerr3
                    var determineprestiger3 = prestige>=5? determineprestiger4 : badplayerr2
                    var determineprestiger2 = prestige>=4? determineprestiger3 : badplayerr1
                    var determineprestiger1 = prestige>=3? determineprestiger2 : badplayerr
                    var determineprestiger = prestige>=2? determineprestiger1 : `Too new`

                    var prestige16gdg = prestige>=16 && totalmulti>=8000? `A+` : `A`
                    var prestige16eg = prestige>=16 && totalmulti>=7000? prestige16gdg : `B`
                    var prestige16gg = prestige>=16 && totalmulti>=6000? prestige16eg : `C`
                    var prestige16ag = prestige>=16 && totalmulti>=5000? prestige16gg : `D`
                    var prestige16bg = prestige>=16 && totalmulti>=4000? prestige16ag : `F`

                    var prestige14gdg = prestige>=14 && totalmulti>=7500? `A+` : `A`
                    var prestige14eg = prestige>=14 && totalmulti>=6500? prestige14gdg : `B`
                    var prestige14gg = prestige>=14 && totalmulti>=5500? prestige14eg : `C`
                    var prestige14ag = prestige>=14 && totalmulti>=4500? prestige14gg : `D`
                    var prestige14bg = prestige>=14 && totalmulti>=3500? prestige14ag : `F`

                    var prestige12gdg = prestige>=12 && totalmulti>=7000? `A+` : `A`
                    var prestige12eg = prestige>=12 && totalmulti>=6000? prestige12gdg : `B`
                    var prestige12gg = prestige>=12 && totalmulti>=5000? prestige12eg : `C`
                    var prestige12ag = prestige>=12 && totalmulti>=4000? prestige12gg : `D`
                    var prestige12bg = prestige>=12 && totalmulti>=3000? prestige12ag : `F`

                    var prestige10gdg = prestige>=10 && totalmulti>=6500? `A+` : `A`
                    var prestige10eg = prestige>=10 && totalmulti>=5500? prestige10gdg : `B`
                    var prestige10gg = prestige>=10 && totalmulti>=4500? prestige10eg : `C`
                    var prestige10ag = prestige>=10 && totalmulti>=3500? prestige10gg : `D`
                    var prestige10bg = prestige>=10 && totalmulti>=2000? prestige10ag : `F`

                    var prestige8gdg = prestige>=8 && totalmulti>=5500? `A+` : `A`
                    var prestige8eg = prestige>=8 && totalmulti>=4500? prestige8gdg : `B`
                    var prestige8gg = prestige>=8 && totalmulti>=3500? prestige8eg : `C`
                    var prestige8ag = prestige>=8 && totalmulti>=2500? prestige8gg : `D`
                    var prestige8bg = prestige>=8 && totalmulti>=1500? prestige8ag : `F`
                   
                    var prestige5gdg = prestige>=5 && totalmulti>=4000? `A+` : `A`
                    var prestige5eg = prestige>=5 && totalmulti>=3000? prestige5gdg : `B`
                    var prestige5gg = prestige>=5 && totalmulti>=2000? prestige5eg : `C`
                    var prestige5ag = prestige>=5 && totalmulti>=1000? prestige5gg : `D`
                    var prestige5bg = prestige>=5 && totalmulti>=500? prestige5ag : `F`

                    var prestige4gdg = prestige>=4 && totalmulti>=3000? `A+` : `A`
                    var prestige4eg = prestige>=4 && totalmulti>=2000? prestige4gdg : `B`
                    var prestige4gg = prestige>=4 && totalmulti>=1000? prestige4eg : `C`
                    var prestige4ag = prestige>=4 && totalmulti>=500? prestige4gg : `D`
                    var prestige4bg = prestige>=4 && totalmulti>=300? prestige4ag : `F`

                    var prestige3gdg = prestige>=3 && totalmulti>=1000? `A+` : `A`
                    var prestige3eg = prestige>=3 && totalmulti>=750? prestige3gdg : `B`
                    var prestige3gg = prestige>=3 && totalmulti>=500? prestige3eg : `C`
                    var prestige3ag = prestige>=3 && totalmulti>=250? prestige3gg : `D`
                    var prestige3bg = prestige>=3 && totalmulti>=100? prestige3ag : `F`

                    var prestige2gdg = prestige>=2 && totalmulti>=500? `A+` : `A`
                    var prestige2eg = prestige>=2 && totalmulti>=250? prestige2gdg : `B`
                    var prestige2gg = prestige>=2 && totalmulti>=100? prestige2eg : `C`
                    var prestige2ag = prestige>=2 && totalmulti>=50? prestige2gg : `D`
                    var prestige2bg = prestige>=2 && totalmulti>=25? prestige2ag : `F`

                    var prestigecalcg8 = prestige>=16? prestige16bg : prestige14bg
                    var prestigecalcg7 = prestige>=14? prestigecalcg8 : prestige12bg
                    var prestigecalcg6 = prestige>=12? prestigecalcg7 : prestige10bg
                    var prestigecalcg5 = prestige>=10? prestigecalcg6 : prestige8bg
                    var prestigecalcg4 = prestige>=8? prestigecalcg5 : prestige5bg
                    var prestigecalcg3 = prestige>=5? prestigecalcg4 : prestige4bg
                    var prestigecalcg2 = prestige>=4? prestigecalcg3 : prestige3bg
                    var prestigecalcg1 = prestige>=3? prestigecalcg2 : prestige2bg
                    var prestigecalcg = prestige>=2? prestigecalcg1 : `Too new to understand`


                    let content = message.content.split(" ");
                    let args = content.slice(1)
                    
                    var permmultical3 = permmulti>=8? `This person is very experienced, a perm multi of ${permmulti}x could only mean they've been an active grinder or REALLY lucky`: `This person has a very respectable perm multi of ${permmulti}x, probably opened ALOT of briefcases` 
                    var permultical2 = permmulti>=6? permmultical3 : `Has a good permanent multiplier of ${permmulti}x, definitely opened a number of briefcases`
                    var permmultical1 = permmulti>=3.0? permultical2 : `probably opened a few briefcases which is why they got a perm multi of ${permmulti}x`
                    var permmultical = permmulti>=1.5? permmultical1 : `Permanent multi kinda low, probably new or just unlucky`
                    const embed1 = new Discord.MessageEmbed()
                    .setColor(args[0]===`348296915143884801`?`#74fae9`: `#FEFFA3`)
                    .setTitle(args[0]===`348296915143884801`? `👑 The GOAT Analysis 🐐`: `The Rock Analysis`)
                    .setThumbnail(args[0]===message.author.id?`${message.author.avatarURL()}`:``)
                    .addFields(
                        {name: "💠 Prestige", value: `
**Points per Day:** ${ppd.toLocaleString(`en`)}
**Accumulated:** ${app.toLocaleString(`en`)}
**Level:** ${prestige}
                        `},
                        {name: "💰 Money", value: `
**Per Day:** $${mpd.toLocaleString(`en`)}
**Per Week:** ${(mpd*7).toLocaleString(`en`)}
**Accumulated:** $${balanceacc.toLocaleString(`en`)}
                        `},
                        {name: `📈 Multiplier`, value: `
**Current**: ${totalmulti}x
**Potential**: ${multicalc}
**Potential Corp Multi**: ${corpname===`SKL`?`${(prestige/2)*26.5}`:``}`
                        }, {name: `🌐 Ratings`, value : 
`**Income:** ${determineprestiger}
**Multiplier:** ${prestigecalcg}
**Prestige Per Day:** ${prestigecalcr}
                    `},
                        { name:`📝 Notes`, value: `
**1.** ${determineprestige}
**2.** ${prestigecalc}
**3.** ${permmultical}
${(args[0]===`348296915143884801`? `**4.** Greatest of all time 🐐` : ``)}`})
        .setFooter(`Requested by ${message.author.username}`, `${message.author.avatarURL()}`)
                    message.channel.send(embed1)
                }})})})//} else return;
})
    }} else return;

})

client.login(config.token)