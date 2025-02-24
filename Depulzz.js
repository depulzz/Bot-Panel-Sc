module.exports = async (depulzz, m, store) => {
try {
const body = (m.mtype === 'conversation') ? m.message.conversation : (m.mtype == 'imageMessage') ? m.message.imageMessage.caption : (m.mtype == 'videoMessage') ? m.message.videoMessage.caption : (m.mtype == 'extendedTextMessage') ? m.message.extendedTextMessage.text : (m.mtype == 'buttonsResponseMessage') ? m.message.buttonsResponseMessage.selectedButtonId : (m.mtype == 'listResponseMessage') ? m.message.listResponseMessage.singleSelectReply.selectedRowId : (m.mtype === 'interactiveResponseMessage') ? JSON.parse(m.message.interactiveResponseMessage.nativeFlowResponseMessage.paramsJson).id : (m.mtype == 'templateButtonReplyMessage') ? m.message.templateButtonReplyMessage.selectedId : (m.mtype === 'messageContextInfo') ? (m.message.buttonsResponseMessage?.selectedButtonId || m.message.listResponseMessage?.singleSelectReply.selectedRowId || m.text) : ''
const budy = (typeof m.text == 'string' ? m.text : '')
const prefix = /^[°zZ#$@+,.?=''():√%!¢£¥€π¤ΠΦ&><™©®Δ^βα¦|/\\©^]/.test(body) ? body.match(/^[°zZ#$@+,.?=''():√%¢£¥€π¤ΠΦ&><!™©®Δ^βα¦|/\\©^]/gi) : '.'
//const prefix = ''
const isCmd = body.startsWith(prefix)
//const command = isCmd ? body.slice(prefix.length).trim().split(' ').shift().toLowerCase() : '' //kalau mau no prefix ganti jadi ini : const command = body.replace(prefix, '').trim().split(/ +/).shift().toLowerCase()
const command = body.replace(prefix, '').trim().split(/ +/).shift().toLowerCase()
const cmd = prefix + command
const args = body.trim().split(/ +/).slice(1)
const makeid = crypto.randomBytes(3).toString('hex')
const quoted = m.quoted ? m.quoted : m
const mime = (quoted.msg || quoted).mimetype || ''
const qmsg = (quoted.msg || quoted)
const sekarang = new Date();
const hari = sekarang.toLocaleDateString('id-ID', { weekday: 'long' });
const text = q = args.join(" ")
const botNumber = await depulzz.decodeJid(depulzz.user.id)
const fs = require('fs');
if(!fs.existsSync(dbowner)) fs.writeFileSync(dbowner, '[]') 
if(!fs.existsSync(dbprem)) fs.writeFileSync(dbprem, '[]') 
let zippokun = JSON.parse(fs.readFileSync(dbowner).toString())
let zippokuy = JSON.parse(fs.readFileSync(dbprem).toString())
const isOwner = [owner+"@s.whatsapp.net", ...zippokun, botNumber].includes(m.sender);
const isPremium = [owner+"@s.whatsapp.net", ...zippokun, botNumber, ...zippokuy].includes(m.sender);
const isGroup = m.chat.endsWith('@g.us')
const ytdl = require("ytdl-core")
const speed = require('performance-now')
const senderNumber = m.sender.split('@')[0]
const ctext = (text, style = 1) => {
  var abc = 'abcdefghijklmnopqrstuvwxyz1234567890'.split('');
  var xyz = {
    1: 'ᴀʙᴄᴅᴇꜰɢʜɪᴊᴋʟᴍɴᴏᴘqʀꜱᴛᴜᴠᴡxʏᴢ1234567890'
  };
  var replacer = [];
  abc.map((v, i) =>
    replacer.push({
      original: v,
      convert: xyz[style].split('')[i]
    })
  );
  var str = text.toLowerCase().split('');
  var output = [];
  str.map((v) => {
    const find = replacer.find((x) => x.original == v);
    find ? output.push(find.convert) : output.push(v);
  });
  return output.join('');
};
const from = m.key.remoteJid
const pushname = m.pushName || `${senderNumber}`
const isBot = botNumber.includes(senderNumber)
const groupMetadata = isGroup ? await depulzz.groupMetadata(m.key.remoteJid) : {}
const groupName = m.isGroup ? groupMetadata.subject : ''
let participant_bot = (isGroup ? groupMetadata.participants.find((v) => v.id == m.botNumber) : {}) || {}
let participant_sender = (isGroup ? groupMetadata.participants.find((v) => v.id == m.sender) : {}) || {}
const isBotAdmin = participant_bot?.admin !== null ? true : false
const isAdmin = participant_sender?.admin !== null ? true : false
const chatnano = JSON.parse(fs.readFileSync('./database/chatnano.json'))
const isnanochat = m.isGroup ? chatnano.includes(m.chat) : true
const { runtime, getRandom, getTime, tanggal, toRupiah, telegraPh, pinterest, ucapan, generateProfilePicture, getBuffer, fetchJson, formatp } = require('./all/function.js')
const { toAudio, toPTT, toVideo, ffmpeg } = require("./all/converter.js")
const antilink = JSON.parse(fs.readFileSync('./all/database/antilink.json'))
const antilink2 = JSON.parse(fs.readFileSync('./all/database/antilink2.json'))
const contacts = JSON.parse(fs.readFileSync("./all/database/contacts.json"))
const time = moment(Date.now()).tz('Asia/Jakarta').locale('id').format('HH:mm:ss z')
  // Days
        const hariini = moment.tz('Asia/Jakarta').format('dddd, DD MMMM YYYY')
        const wib = moment.tz('Asia/Jakarta').format('HH : mm : ss')
        const wit = moment.tz('Asia/Jayapura').format('HH : mm : ss')
        const wita = moment.tz('Asia/Makassar').format('HH : mm : ss')

        const time2 = moment().tz('Asia/Jakarta').format('HH:mm:ss')
        if (time2 < "23:59:00") {
            var ucapanWaktu = 'Selamat Malam 🌌'
        }
        if (time2 < "19:00:00") {
            var ucapanWaktu = 'Selamat Petang 🌅'
        }
        if (time2 < "18:00:00") {
            var ucapanWaktu = 'Selamat Sore 🌆'
        }
        if (time2 < "15:00:00") {
            var ucapanWaktu = 'Selamat Siang 🏙️'
        }
        if (time2 < "10:00:00") {
            var ucapanWaktu = 'Selamat Pagi 🌇'
        }
        if (time2 < "05:00:00") {
            var ucapanWaktu = 'Selamat Subuh 🌉'
        }
        if (time2 < "03:00:00") {
            var ucapanWaktu = 'Selamat Tengah Malam 🌃'
        }

if (global.autoTyping) {
if (command) {
depulzz.sendPresenceUpdate('composing', from)
}
}
depulzz.autoshalat = depulzz.autoshalat ? depulzz.autoshalat : {}
	let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? depulzz.user.id : m.sender
	let id = m.chat 
    if(id in depulzz.autoshalat) {
    return false
    }
    let jadwalSholat = {
    shubuh: '04:18',
    terbit: '05:42',
    dhuha: '06:02',
    dzuhur: '11:32',
    ashar: '14:53',
    magrib: '17:23',
    isya: '18:38',
    }
    const datek = new Date((new Date).toLocaleString("en-US", {
    timeZone: "Asia/Jakarta"  
    }));
    const hours = datek.getHours();
    const minutes = datek.getMinutes();
    const timeNow = `${hours.toString().padStart(2, "0")}:${minutes.toString().padStart(2, "0")}`
    for(let [sholat, waktu] of Object.entries(jadwalSholat)) {
    if(timeNow === waktu) {
    let caption = `Hai ${pushname},\nWaktu *${sholat}* telah tiba, ambilah air wudhu dan segeralah shalat\n\n*${waktu}*\n_untuk wilayah Surabaya dan sekitarnya ya._`
    depulzz.autoshalat[id] = [
    m.reply(caption),
    setTimeout(async () => {
    delete depulzz.autoshalat[m.chat]
    }, 57000)
    ]
    }
    }
    
if (isGroup) {
if (antilink.includes(m.chat) && isBotAdmin) {
if (!isAdmin && !isOwner && !m.fromMe) {
var link = /chat.whatsapp.com|buka tautaniniuntukbergabungkegrupwhatsapp/gi
if (link.test(m.text)) {
var gclink = (`https://chat.whatsapp.com/` + await depulzz.groupInviteCode(m.chat))
var isLinkThisGc = new RegExp(gclink, 'i')
var isgclink = isLinkThisGc.test(m.text)
if (isgclink) return
let delet = m.key.participant
let bang = m.key.id
await depulzz.sendMessage(m.chat, {text: `Gausah sharelink, mampus gw kick`, contextInfo: {mentionedJid: [m.sender], externalAdReply: {thumbnailUrl: "https://d.top4top.io/p_32528plkn1.jpg", title: "𝐀𝐧𝐭𝐢𝐥𝐢𝐧𝐤 𝐚𝐜𝐭𝐬 !", previewType: "PHOTO"}}}, {quoted: m})
await depulzz.sendMessage(m.chat, { delete: { remoteJid: m.chat, fromMe: false, id: bang, participant: delet }})
await depulzz.groupParticipantsUpdate(m.chat, [m.sender], "remove")
}
}}}

if (!m.key.fromMe && m.isGroup && isnanochat) {
  try {
    const data1 = await fetchJson(`https://skizoasia.xyz/api/openai?apikey=lynzzid&text=${budy}&system=kamu adalah Vonxzy Ai`)
    const msgai = data1.result;
m.reply(`${msgai}`)
  } catch (err) {
    // console.log(err);
    console.log("Upss error, silahkan hubungi owner agar di fix");
    // reply(JSON.stringify(err));
  }
}

if (isGroup) {
if (antilink2.includes(m.chat) && isBotAdmin) {
if (!isAdmin && !isOwner && !m.fromMe) {
var link = /chat.whatsapp.com|buka tautaniniuntukbergabungkegrupwhatsapp/gi
if (link.test(m.text)) {
var gclink = (`https://chat.whatsapp.com/` + await depulzz.groupInviteCode(m.chat))
var isLinkThisGc = new RegExp(gclink, 'i')
var isgclink = isLinkThisGc.test(m.text)
if (isgclink) return
let delet = m.key.participant
let bang = m.key.id
await depulzz.sendMessage(m.chat, {text: `🚫🔗`, contextInfo: {mentionedJid: [m.sender], externalAdReply: {thumbnailUrl: "https://d.top4top.io/p_32528plkn1.jpg", title: "𝐀𝐧𝐭𝐢𝐥𝐢𝐧𝐤 𝐚𝐜𝐭𝐬 !", previewType: "PHOTO"}}}, {quoted: m})
await depulzz.sendMessage(m.chat, { delete: { remoteJid: m.chat, fromMe: false, id: bang, participant: delet }})
}
}}}

const qchanel = {
key: {
remoteJid: 'status@broadcast',
fromMe: false,
participant: '0@s.whatsapp.net'
},
message: {
newsletterAdminInviteMessage: {
newsletterJid: `120363321876182793@newsletter`,
newsletterName: `Depulzz Kece`,
jpegThumbnail: "",
caption: `Depulzz`,
inviteExpiration: Date.now() + 1814400000
}
}}

function getRandomColor() {
  return Math.floor(Math.random() * 256); // Menghasilkan warna acak dari 0-255
}
const randomColor1 = getRandomColor(); // Warna acak untuk botname
const randomColor2 = getRandomColor(); // Warna acak untuk pushname
const randomColor3 = getRandomColor(); // Warna acak untuk groupName | Private Chat
const randomBgColor1 = getRandomColor(); // Warna acak untuk latar belakang ShunAi
const randomBgColor2 = getRandomColor(); // Warna acak untuk latar belakang Time
const randomBgColor3 = getRandomColor(); // Warna acak untuk latar belakang Cmd
const randomBgColor4 = getRandomColor(); // Warna acak untuk latar belakang From
const randomBgColor5 = getRandomColor(); // Warna acak untuk latar belakang In
let rn = ['composing']  
let jd = rn[Math.floor(Math.random() * rn.length)];
if (m.message) {
depulzz.sendPresenceUpdate(jd, from)
console.log(chalk.black(chalk.bgWhite('[ PESAN ]')), chalk.black(chalk.bgGreen(new Date)), chalk.black(chalk.bgBlue(budy || m.mtype)) + '\n' + chalk.magenta('=> Dari'), chalk.green(pushname), chalk.yellow(m.sender) + '\n' + chalk.blueBright('=> Di'), chalk.green(m.isGroup ? pushname : 'Private Chat', from))
}
const qtext = { key: {fromMe: false, participant: `0@s.whatsapp.net`, ...(m.chat ? { remoteJid: "0@s.whatsapp.net"} : {}) },'message': {extendedTextMessage: {text: body}}}

const qdoc = {key : {participant : '0@s.whatsapp.net', ...(m.chat ? { remoteJid: `status@broadcast` } : {}) },message: {documentMessage: {title: `𝐏𝐨𝐰𝐞𝐫𝐞𝐝 𝐛𝐲 𝐇𝐚𝐦𝐱𝐲𝐳𝐇𝐨𝐬𝐭`, jpegThumbnail: ""}}}

const qloc = {key: {participant: '0@s.whatsapp.net', ...(m.chat ? {remoteJid: `status@broadcast`} : {})}, message: {locationMessage: {name: `𝐏𝐨𝐰𝐞𝐫𝐞𝐝 𝐛𝐲 𝐇𝐚𝐦𝐱𝐲𝐳𝐇𝐨𝐬𝐭`,jpegThumbnail: ""}}}

const qloc2 = {key: {participant: '0@s.whatsapp.net', ...(m.chat ? {remoteJid: `status@broadcast`} : {})}, message: {locationMessage: {name: `𝐏𝐮𝐬𝐡𝐤𝐨𝐧 𝐛𝐲 𝐇𝐚𝐦𝐱𝐲𝐳𝐇𝐨𝐬𝐭`,jpegThumbnail: ""}}}

const qkontak = {
key: {
participant: `0@s.whatsapp.net`,
...(botNumber ? {
remoteJid: `status@broadcast`
} : {})
},
message: {
'contactMessage': {
'displayName': `𝐇𝐚𝐦𝐱𝐲𝐳𝐇𝐨𝐬𝐭`,
'vcard': `BEGIN:VCARD\nVERSION:3.0\nN:XL;ttname,;;;\nFN:ttname\nitem1.TEL;waid=6285852740616\nitem1.X-ABLabel:Ponsel\nEND:VCARD`,
sendEphemeral: true
}}
}

let example = (teks) => {
return `\n𝗕𝘂𝗸𝗮𝗻 𝗴𝗶𝘁𝘂 𝗴𝗼𝗯𝗹𝗼𝗸
kek gini ${cmd} ${teks}\n`
}

let timestamp = speed()
let latensi = speed() - timestamp
neww = performance.now()
oldd = performance.now()
ping = `ping : ${latensi.toFixed(4)} × ram : ${formatp(os.totalmem() - os.freemem())} / ${formatp(os.totalmem())}`

var resize = async (image, width, height) => {
let oyy = await Jimp.read(image)
let kiyomasa = await oyy.resize(width, height).getBufferAsync(Jimp.MIME_JPEG)
return kiyomasa
}

function capital(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

const createSerial = (size) => {
return crypto.randomBytes(size).toString('hex').slice(0, size)
}

switch (command) {
//=======================================//
//=======================================//
//============[ MENU / CASE ]============//
//=======================================//
//=======================================//
case "menu": {
let teksnya = `
${ucapanWaktu}, Hai @${m.sender.split('@')[0]}      

- *${sret}NameBot${sret}* : _${namabot}_
- *${sret}NameOwner${sret}* : _${namaowner}_
- *${sret}VersiBot${sret}* : _${versionbot}_
- *${sret}Tanggal${sret}* : _${hariini}_
- *${sret}Jam${sret}* : _${wib}_
͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏
*${sret}Menu Main${sret}*
* hd
* aichat on/off
* sticker
* pinterest
* qc
* ai
* syg

*${sret}Store${sret}*
* done barang,nominal

*${sret}Menu Download${sret}*
* tiktokaudio
* ytmp3
  
*${sret}Menu Tools${sret}*
* toaudio
* tomp3
* tovn
* toptv
* tts
* toimage

*${sret}PushKntl ANTI KENON${sret}*
* pushkontak
* pushkontak1
* pushkontak2
* savekontak
* savekontak2
* listgc
* idgc
* jpm
* jpm2
* jpmpolling
* jpmtesti
* jpmhidetag
* startjpm
* setteksjpm
* teksjpm

*${sret}Menu Group${sret}*
* addmember
* antilink
* antilinkV2
* hidetag
* tagall
* delete
* open
* close
* setnamagc
* setdeskgc
* setppgc
* kick
* promote
* leavegc
* leavegc2
* demote
* statusgc
* welcome on/off
  
*${sret}Menu Owner${sret}*
* clearsession
* anticall
* autotyping
* autoread
* welcome
* setpppanjang
* setnamabot
* setbiobot
* statusbot
* payment
* listpremium
* listowner
* addowner
* delowner
* addprem
* delprem

*${sret}Menu Panel${sret}*
* adp
* sadmin ( send akun admin panel )
* listpanel
* listadmin
* listmember
* deladmin
* delpanel
* delmember

*${sret}Menu PanelV2${sret}*
* adp2
* sadmin2 ( send akun admin panel )
* listpanel2
* listadmin2
* listmember2
* deladmin2
* delpanel2
* delmember2

*${sret}Menu Reseller Server 1${sret}*
- 1gb
- 2gb
- 3gb
- 4gb
- 5gb
- 6gb
- 7gb
- 8gb
- 9gb
- 10gb
- unli

*${sret}Menu Reseller Server 2${sret}*
- 1gb2
- 2gb2
- 3gb2
- 4gb2
- 5gb2
- 6gb2
- 7gb2
- 8gb2
- 9gb2
- 10gb2
- unli2
`
depulzz.sendMessage(m.chat, {image: {url: image}, caption : teksnya,
contextInfo: { 
 mentionedJid: [m.sender], 
 isForwarded: true, 
 forwardedNewsletterMessageInfo: {
 newsletterName: ping,
 newsletterJid: idsal,
 serverMessageId: 143
}}}, {quoted:qchanel})
}
break
//===================================================//
//===================================================//
//==================[ MENU OWNER ]==================//
//===================================================//
//===================================================//
case 'done': {
if (!isOwner) return m.reply(`Njirr Lu siapa Cuk`)
let s = text.split(',')
let barang = s[0]
let nominal = s[1]
if (s.length < 2) return m.reply(`*Format salah!*
Penggunaan:
${prefix + command} barang,nominal`)
if (!barang) return m.reply(`Ex : ${prefix+command} barang,nominal\n\nContoh :\n${prefix+command} vipies,60000`)
if (!nominal) return m.reply(`Ex : ${prefix+command} barang,nominal\n\nContoh :\n${prefix+command} panel,1000`)
text_done = `「 𝗧𝗥𝗔𝗡𝗦𝗔𝗞𝗦𝗜 𝗕𝗘𝗥𝗛𝗔𝗦𝗜𝗟 」

📦 Barang : _${barang}_
💸 Nominal : _${nominal}_
📆 Tanggal : _${hariini}_
🕰️ Waktu : _${wib}_
✨ Status : Berhasil ✅

All Testimoni VonxzyTamvan : https://whatsapp.com/channel/0029Vaqn3Cw60eBipZOUCL3j

Saluran Panel Free : https://whatsapp.com/channel/0029VatMwaPJZg4FcO7NbC0o

TERIMAKASIH TELAH ORDER ✅`
await depulzz.relayMessage(m.chat,  {
requestPaymentMessage: {
currencyCodeIso4217: 'IDR',
amount1000: `${nominal}000`,
requestFrom: m.sender,
noteMessage: {
extendedTextMessage: {
text: text_done,
contextInfo: {
externalAdReply: {
showAdAttribution: true,
}}}}}}, {quoted: qchanel })
}
break
case 'addown': case 'addowner': {
		if (!isOwner) return m.reply(msg.owner)
		let users = m.mentionedJid[0] ? m.mentionedJid : m.quoted ? [m.quoted.sender] : [text.replace(/[^0-9]/g, '')+'@s.whatsapp.net']
		if(!users.length || !text) return m.reply("𝗕𝘂𝗸𝗮𝗻 𝗴𝗶𝘁𝘂 𝗴𝗼𝗯𝗹𝗼𝗸\ngini .addown nomor") 
		if(users.filter(v => zippokun.includes(v)).length) return depulzz.sendMessage(m.chat, { text: `${users.map(v => `@${v.split('@')[0]}`).join(', ')} adalah owner.`, mentions: users }, { quoted: m }) 
		zippokun = [...zippokun, ...users]
		fs.writeFileSync(dbowner, JSON.stringify(zippokun))
        m.reply('_Successfully added owner By Depulzz') 
		}
		break;
		
		case 'delown': case 'delowner': {
			if (!isOwner) return m.reply(msg.owner)
			let users = m.mentionedJid[0] ? m.mentionedJid : m.quoted ? [m.quoted.sender] : [text.replace(/[^0-9]/g, '')+'@s.whatsapp.net']
		if(!users.length || !text) return m.reply('Tag seseorang!') 
		if(users.filter(v => !zippokun.includes(v)).length) return depulzz.sendMessage(m.chat, { text: `${users.map(v => `@${v.split('@')[0]}`).join(', ')} belum masuk ke list owner!`, mentions: users }, { quoted: m }) 
		zippokun = zippokun.filter(v => !users.includes(v)) 
		fs.writeFileSync(dbowner, JSON.stringify(zippokun)) 
            m.reply('_Successfully removed owner By Depulzz') 
			}
break;
        case 'listowner': case 'listown': {
 depulzz.sendMessage(m.chat, { text: `𝐋𝐈𝐒𝐓 𝐎𝐖𝐍𝐄𝐑\n\n${zippokun.map(v => `- @${v.split('@')[0]}`).join('\n')}\n\nTotal : ${zippokun.length}`, mentions: zippokun }, { quoted: m }) 
            }
        break;
			
case 'addprem': case 'addpremium': {
			if (!isOwner) return m.reply(msg.owner)
		let users = m.mentionedJid[0] ? m.mentionedJid : m.quoted ? [m.quoted.sender] : [text.replace(/[^0-9]/g, '')+'@s.whatsapp.net']
		if(!users.length || !text) return m.reply("𝗕𝘂𝗸𝗮𝗻 𝗴𝗶𝘁𝘂 𝗴𝗼𝗯𝗹𝗼𝗸\ngini .addprem nomor") 
		if(users.filter(v => zippokuy.includes(v)).length) return depulzz.sendMessage(m.chat, { text: `${users.map(v => `@${v.split('@')[0]}`).join(', ')} sudah masuk ke list premium!`, mentions: users }, { quoted: m }) 
		zippokuy = [...zippokuy, ...users]
		fs.writeFileSync(dbprem, JSON.stringify(zippokuy)) 
            m.reply('_Successfully added premium By Depulzz') 
			}
			break;
			
		case 'delprem': case 'delpremium': {
			if (!isOwner) return m.reply(msg.owner)
			let users = m.mentionedJid[0] ? m.mentionedJid : m.quoted ? [m.quoted.sender] : [text.replace(/[^0-9]/g, '')+'@s.whatsapp.net']
		if(!users.length || !text) return m.reply('Tag seseorang!') 
		if(users.filter(v => !zippokuy.includes(v)).length) return depulzz.sendMessage(m.chat, { text: `${users.map(v => `@${v.split('@')[0]}`).join(', ')} belum masuk ke list premium!`, mentions: users }, { quoted: m }) 
		zippokuy = zippokuy.filter(v => !users.includes(v)) 
		fs.writeFileSync(dbprem, JSON.stringify(zippokuy)) 
            m.reply('_Successfully removed owner By Depulzz') 
			}
			break;
        
        case 'listprem': case 'listpremium': {
            depulzz.sendMessage(m.chat, { text: `𝐋𝐈𝐒𝐓 𝐏𝐑𝐄𝐌𝐈𝐔𝐌\n\n${zippokuy.map(v => `- @${v.split('@')[0]}`).join('\n')}\n\nTotal : ${zippokuy.length}`, mentions: zippokuy }, { quoted: m }) 
            }
        break
        case "public": case "publik": {
if (!isOwner) return m.reply(msg.owner)
depulzz.public = true
m.reply("Successfully changed bot mode to public")
}
break
case "self": case "private": case "priv": case "prib": {
if (!isOwner) return m.reply(msg.owner)
depulzz.public = false
m.reply("Successfully changed bot mode to private")
}
break
case "setppbot": case "setpp": {
if (!isOwner) return m.reply(msg.owner)
if (/image/g.test(mime)) {
let media = await depulzz.downloadAndSaveMediaMessage(qmsg)
await depulzz.updateProfilePicture(botNumber, {url: media})
await fs.unlinkSync(media)
m.reply("_Profile photo changed By Depulzz")
} else return m.reply(example('dengan mengirim/reply foto'))}
break
case "setppbotpanjang": case "setpppanjang": {
if (!isOwner) return m.reply(msg.owner)
if (/image/g.test(mime)) {
var medis = await depulzz.downloadAndSaveMediaMessage(qmsg, 'ppbot.jpeg', false)
var { img } = await generateProfilePicture(medis)
await depulzz.query({
tag: 'iq',
attrs: {
to: botNumber,
type:'set',
xmlns: 'w:profile:picture'
},
content: [
{
tag: 'picture',
attrs: { type: 'image' },
content: img
}
]
})
await fs.unlinkSync(medis)
m.reply("_Profile photo changed By Depulzz")
} else return m.reply(example('dengan mengirim/reply foto'))
}
break
case "autoketik": case "autotyping": {
if (!isOwner) return m.reply(msg.owner)
if (!text) return m.reply(example("on/off\n\nKetik *.statusbot* Untuk Melihat Status Settingan Bot"))
if (text.toLowerCase() == "on") {
if (autoTyping) return m.reply("autoTyping is now active")
autoTyping = true
m.reply("_Successfully turned on autoTyping By Depulzz")
} else if (text.toLowerCase() == "off") {
if (!autoTyping) return m.reply("autoTyping is now inactive")
autoTyping = false
m.reply("_Successfully turned off autoTyping By Depulzz")
} else {
return m.reply(example("on/off\n\nKetik *.statusbot* Untuk Melihat Status Settingan Bot"))
}}
break
case "autoread": {
if (!isOwner) return m.reply(msg.owner)
if (!text) return m.reply(example("on/off\n\nKetik *.statusbot* Untuk Melihat Status Settingan Bot"))
if (text.toLowerCase() == "on") {
if (autoread) return m.reply("Autoread is now active")
autoread = true
m.reply("_Successfully turned on autoread By Depulzz")
} else if (text.toLowerCase() == "off") {
if (!autoread) return m.reply("Autoread is now inactive")
autoread = false
m.reply("_Successfully turned off autoread By Depulzz")
} else {
return m.reply(example("on/off\n\nKetik *.statusbot* Untuk Melihat Status Settingan Bot"))
}}
break
case "anticall": case "seleb": {
if (!isOwner) return m.reply(msg.owner)
if (!text) return m.reply(example("on/off\n\nKetik *.statusbot* Untuk Melihat Status Settingan Bot"))
if (text.toLowerCase() == "on") {
if (anticall) return m.reply("Anticall is now active")
anticall = true
m.reply("_Successfully turned on anticall By Depulzz")
} else if (text.toLowerCase() == "off") {
if (!anticall) return m.reply("Anticall is now inactive")
anticall = false
m.reply("_Successfully turned off anticall By Depulzz")
} else {
return m.reply(example("on/off\n\nKetik *.statusbot* Untuk Melihat Status Settingan Bot"))
}}
break
case "setting": case "settingbot": case "option": case "statusbot": {
if (!isOwner) return m.reply(msg.owner)
var teks = `
𝘼𝙐𝙏𝙊𝙍𝙀𝘼𝘿 : ${global.autoread ? "*✅*" : "*❌*"}
𝘼𝙉𝙏𝙄𝘾𝘼𝙇𝙇 : ${global.anticall ? "*✅*" : "*❌*"}
𝙒𝙀𝙇𝘾𝙊𝙈𝙀 : ${global.welcome ? "*✅*" : "*❌*"}
`
m.reply(teks)
}
break
case "savekontak": {
if (!isOwner) return m.reply(msg.owner)
if (!isGroup) return m.reply(msg.group)
const halls = await groupMetadata.participants.filter(v => v.id.endsWith('.net')).map(v => v.id)
for (let mem of halls) {
if (mem !== m.sender) {
contacts.push(mem)
fs.writeFileSync('./all/database/contacts.json', JSON.stringify(contacts))
}}
try {
const uniqueContacts = [...new Set(contacts)]
const vcardContent = uniqueContacts.map((contact, index) => {
const vcard = [
"BEGIN:VCARD",
"VERSION:3.0",
`FN:WA[${createSerial(2)}] ${contact.split("@")[0]}`,
`TEL;type=CELL;type=VOICE;waid=${contact.split("@")[0]}:+${contact.split("@")[0]}`,
"END:VCARD",
"", ].join("\n")
return vcard }).join("")
fs.writeFileSync("./all/database/contacts.vcf", vcardContent, "utf8")
} catch (err) {
m.reply(err.toString())
} finally {
if (m.chat !== m.sender) await m.reply(`_Contact file successfully sent to private chat By Depulzz`)
await depulzz.sendMessage(m.sender, { document: fs.readFileSync("./all/database/contacts.vcf"), fileName: "contacts.vcf", caption: "_Contact file successfully created By Depulzz", mimetype: "text/vcard", }, { quoted: m })
contacts.splice(0, contacts.length)
await fs.writeFileSync("./all/database/contacts.json", JSON.stringify(contacts))
await fs.writeFileSync("./all/database/contacts.vcf", "")
}}
break
case "idgc": {
if (!isOwner) return m.reply(msg.owner)
if (!isGroup) return m.reply(msg.group)
m.reply(`${m.chat}`)
}
break
case "listgc": case "cekid": case "listgrup": {
let gcall = Object.values(await depulzz.groupFetchAllParticipating().catch(_=> null))
let listgc = `*𝐋𝐈𝐒𝐓 𝐀𝐋𝐋 𝐂𝐇𝐀𝐓 𝐆𝐑𝐎𝐔𝐏*\n\n`
await gcall.forEach((u, i) => {
listgc += `Title : ${u.subject}\nID : ${u.id}\nMember : ${u.participants.length}\nStatus : ${u.announce == true ? "Tertutup" : "Terbuka"}\nCreator : ${u.owner ? u.owner.split('@')[0] : 'Sudah keluar'}\n\n`
})
m.reply(listgc)
}
break
case "leave": case "leavegc": {
if (!isOwner) return m.reply(msg.owner)
if (!isGroup) return m.reply(msg.group)
await m.reply("_Successfully left the group By Depulzz\nMessage : Adios..")
await sleep(3000)
await depulzz.groupLeave(m.chat)
}
break
case "leavegc2": case "leave2": {
if (!isOwner) return m.reply(msg.owner)
let gcall = await Object.values(await depulzz.groupFetchAllParticipating().catch(_=> null))
let num = []
let listgc = `*Bukan gitu*\ngini *${cmd}* nomor grupnya\n\n*List Semua Grup Chat :*\n\n`
await gcall.forEach((u, i) => {
num.push(i)
listgc += ` *Nomor Grup => ${i+1}*\n*• Nama :* ${u.subject}\n*• ID :* ${u.id}\n*• Total Member :* ${u.participants.length} Member\n*• Status Grup :* ${u.announce == true ? "Tertutup" : "Terbuka"}\n*• Pembuat :* ${u.owner ? u.owner.split('@')[0] : 'Sudah keluar'}\n\n`
})
if (!args[0]) {
m.reply(listgc)
} else if (args[0]) {
if (!num.includes(Number(args[0]) - 1)) return m.reply("Group not found")
let leav = Number(args[0]) - 1
await m.reply(`_Successfully left the group By Depulzz\nMessage : Adios..`)
await depulzz.groupLeave(`${gcall[leav].id}`)
}}
break
//=======================================//
//=======================================//
//==============[ MENU AI ]===============//
//=======================================//
//=======================================//
case 'syg':
case 'ai': {
                if (!text) return m.reply('What is your question?')
                const data1 = await fetchJson(`https://skizoasia.xyz/api/openai?apikey=lynzzid&text=${encodeURIComponent(text)}&system=kamu adalah Vonxzy AI`)
    const msgai = data1.result;
m.reply(`${msgai}`)
           }
            break
case 'tiktokaudio':{
if (!text) return m.reply( `Example : ${prefix + command} link`)
m.reply(msg.wait);
const data = await fetchJson(`https://skizoasia.xyz/api/tiktok?apikey=lynzzid&url=${encodeURIComponent(text)}`)
const audionya = data.data.music_info.play
depulzz.sendMessage(m.chat, { audio: { url: audionya }, mimetype: 'audio/mp4' }, { quoted: m })
}
break
case 'aichat':{
if (!m.isGroup) return m.reply('Fitur Khusus Group!')
if (!isAdmin && !isOwner) return m.reply('Fitur Khusus admin!')
if (args[0] === "on") {
//addCountCmd('#nanochat', m.sender, _cmd)
if (isnanochat) return m.reply(`Udah aktif`)
chatnano.push(m.chat)
fs.writeFileSync('./database/chatnano.json', JSON.stringify(chatnano, null, 2))
m.reply('_Successfully Activate Ai Chat_')
} else if (args[0] === "off") {
//addCountCmd('#nanochat', m.sender, _cmd)
if (!isnanochat) return m.reply(`Udah nonaktif`)
let anu = chatnano.indexOf(m.chat)
chatnano.splice(anu, 1)
fs.writeFileSync('./database/chatnano.json', JSON.stringify(chatnano, null, 2))
m.reply('_Successfully Disabling Ai Chat_')
} else {
m.reply(`on apa off lee?`)
}}
break        
//=======================================//
//=======================================//
//============[ MENU GROUB ]============//
//=======================================//
//=======================================//
case "antilink": {
if (!isGroup) return m.reply(msg.group)
if (!isOwner && !isAdmin) return m.reply(msg.owner)
if (!args[0]) return m.reply(example("on/off\n\nKetik *.statusgc* untuk melihat status setting grup ini"))
if (/on/.test(args[0].toLowerCase())) {
if (antilink.includes(m.chat)) return m.reply("_Antilink is now active in this group By Depulzz")
if (antilink2.includes(m.chat)) {
let posi = antilink2.indexOf(m.chat)
antilink2.splice(posi, 1)
await fs.writeFileSync("./all/database/antilink2.json", JSON.stringify(antilink2))
}
antilink.push(m.chat)
await fs.writeFileSync("./all/database/antilink.json", JSON.stringify(antilink))
m.reply("Antilink successfully activated in this group")
} else if (/off/.test(args[0].toLowerCase())) {
if (!antilink.includes(m.chat)) return m.reply("Antilink in this group is not yet active")
let posi = antilink.indexOf(m.chat)
antilink.splice(posi, 1)
await fs.writeFileSync("./all/database/antilink.json", JSON.stringify(antilink))
m.reply("_Successfully turned off Antilink in this group By Depulzz")
} else {
return m.reply(example("on/off"))
}}
break
case "antilinkV2": case "antilinkv2": {
if (!isGroup) return m.reply(msg.group)
if (!isOwner && !isAdmin) return m.reply(msg.owner)
if (!args[0]) return m.reply(example("on/off\n\nKetik *.statusgc* untuk melihat status setting grup ini"))
if (/on/.test(args[0].toLowerCase())) {
if (antilink2.includes(m.chat)) return m.reply("_Antilink-v2 is now active in this group By Depulzz")
if (antilink.includes(m.chat)) {
let posi = antilink.indexOf(m.chat)
antilink.splice(posi, 1)
await fs.writeFileSync("./all/database/antilink.json", JSON.stringify(antilink))
}
antilink2.push(m.chat)
await fs.writeFileSync("./all/database/antilink2.json", JSON.stringify(antilink2))
m.reply("_Antilink-v2 successfully activated in this group By Depulzz")
} else if (/off/.test(args[0].toLowerCase())) {
if (!antilink2.includes(m.chat)) return m.reply("Antilink-v2 in this group is not yet active")
let posi = antilink2.indexOf(m.chat)
antilink2.splice(posi, 1)
await fs.writeFileSync("./all/database/antilink2.json", JSON.stringify(antilink2))
m.reply("_Successfully turned off Antilink-v2 in this group By Depulzz")
} else {
return m.reply(example("on/off"))
}}
break
case "welcome": {
if (!isOwner) return m.reply(msg.owner)
if (!text) return m.reply(example("on/off\n\nKetik *.statusbot* Untuk Melihat Status Settingan Bot"))
if (text.toLowerCase() == "on") {
if (welcome) return m.reply("Welcome is now active")
welcome = true
m.reply("_Successfully turned on welcome By Depulzz")
} else if (text.toLowerCase() == "off") {
if (!welcome) return m.reply("Welcome is now inactive")
welcome = false
m.reply("_Successfully turned off welcome By Depulzz")
} else {
return m.reply(example("on/off\n\nKetik *.statusbot* Untuk Melihat Status Settingan Bot"))
}}
break
case "statusgc": {
if (!isGroup) return m.reply(msg.group)
if (!isOwner && !isAdmin) return m.reply(msg.admin)
var anti1 = "✅"
var anti2 = "✅"
if (!antilink2.includes(m.chat)) anti2 = "❌"
if (!antilink.includes(m.chat)) anti1 = "❌"
var teks = `
𝘼𝙉𝙏𝙄𝙇𝙄𝙉𝙆 𝙑1 : ${anti1}
𝘼𝙉𝙏𝙄𝙇𝙄𝙉𝙆 𝙑2 : ${anti2}
`
m.reply(teks)
}
break
case "setppgc": {
if (!isGroup) return m.reply(msg.group)
if (!isBotAdmin) return m.reply(msg.adminbot)
if (!isAdmin && !isOwner) return m.reply(msg.admin)
if (/image/g.test(mime)) {
let media = await depulzz.downloadAndSaveMediaMessage(qmsg)
await depulzz.updateProfilePicture(m.chat, {url: media})
await fs.unlinkSync(media)
m.reply("_Group profile photo changed successfully By Depulzz")
} else return m.reply(example('dengan mengirim/reply foto'))}
break
case "setnamegc": case "setnamagc": {
if (!isGroup) return m.reply(msg.group)
if (!isBotAdmin) return m.reply(msg.adminbot)
if (!isAdmin && !isOwner) return m.reply(msg.admin)
if (!text) return m.reply(example('teksnya'))
const gcname = metadata.subject
await depulzz.groupUpdateSubject(m.chat, text)
m.reply(`_Group name successfully changed By Depulzz`)
}
break
case "setdesc": case "setdesk": {
if (!isGroup) return m.reply(msg.group)
if (!isBotAdmin) return m.reply(msg.adminbot)
if (!isAdmin && !isOwner) return m.reply(msg.admin)
if (!text) return m.reply(example('teksnya'))
await depulzz.groupUpdateDescription(m.chat, text)
m.reply(`_Group description changed successfully By Depulzz`)
}
break
case "open": case "ngoceh": case "bacot": {
if (!isGroup) return m.reply(msg.group)
if (!isBotAdmin) return m.reply(msg.adminbot)
if (!isAdmin && !isOwner) return m.reply(msg.admin)
await depulzz.groupSettingUpdate(m.chat, 'not_announcement')
m.reply("_Successfully changed group settings to allow members to send messages By Depulzz")
}
break
case "close": case "bisu": case "tunarungu": {
if (!isGroup) return m.reply(msg.group)
if (!isBotAdmin) return m.reply(msg.adminbot)
if (!isAdmin && !isOwner) return m.reply(msg.admin)
await depulzz.groupSettingUpdate(m.chat, 'announcement')
m.reply("_Successfully changed group settings to allow only admins to send messages By Depulzz")
}
break
case "d": case "del": case "delete": {
if (isGroup) {
if (!isOwner && !isAdmin) return m.reply(msg.admin)
if (!m.quoted) return m.reply("Please reply with the message you want to delete.")
if (m.quoted.sender == botNumber) {
depulzz.sendMessage(m.chat, { delete: { remoteJid: m.chat, fromMe: true, id: m.quoted.id, participant: m.quoted.sender}})
} else {
if (!isBotAdmin) return m.reply(msg.adminbot)
depulzz.sendMessage(m.chat, { delete: { remoteJid: m.chat, fromMe: false, id: m.quoted.id, participant: m.quoted.sender}})
}} else {
if (!isOwner) return m.reply(msg.owner)
if (!m.quoted) return m.reply("Please reply with the message you want to delete.")
depulzz.sendMessage(m.chat, { delete: { remoteJid: m.chat, fromMe: false, id: m.quoted.id, participant: m.quoted.sender}})
}}
break
case "demote": case "demote": case "budak": {
if (!isGroup) return m.reply(msg.group)
if (!isAdmin && !isOwner) return m.reply(msg.admin)
if (!isBotAdmin) return m.reply(msg.adminbot)
if (m.quoted || text) {
let target = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
await depulzz.groupParticipantsUpdate(m.chat, [target], 'demote').then((res) => m.reply(`${target.split("@")[0]} now become a regular member`)).catch((err) => m.reply(err.toString()))
} else return m.reply(example('62882xxxxxxxx'))}
break
case "promote": case "promot": case "bos": {
if (!isGroup) return m.reply(msg.group)
if (!isAdmin && !isOwner) return m.reply(msg.admin)
if (!isBotAdmin) return m.reply(msg.adminbot)
if (m.quoted || text) {
let target = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
await depulzz.groupParticipantsUpdate(m.chat, [target], 'promote').then((res) => m.reply(`${target.split("@")[0]} now become an admin`)).catch((err) => m.reply(err.toString()))
} else return m.reply(example('62882xxxxxxxx'))}
break
case "add": case "addmember": case "culik": {
if (!isGroup) return m.reply(msg.group)
if (!args[0]) return m.reply(example("62882xxxxxxxx"))
var teks = text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
var cek = await depulzz.onWhatsApp(`${teks.split("@")[0]}`)
if (cek.length < 1) return m.reply("Number not registered in WhatsApp")
if (!isBotAdmin || !groupMetadata.memberAddMode) return m.reply("𝗚𝗔𝗚𝗔𝗟\nAdmin tidak mengizinkan peserta menambahkan member")
var a = await depulzz.groupParticipantsUpdate(m.chat, [teks], 'add')
if (a[0].status == 200) return m.reply(`𝐒𝐮𝐜𝐜𝐞𝐬 𝐭𝐨 𝐚𝐝𝐝`)
if (a[0].status == 408) return m.reply(`𝐅𝐚𝐢𝐥𝐞𝐝 𝐭𝐨 𝐚𝐝𝐝`)
if (a[0].status == 409) return m.reply(`𝐀𝐥𝐫𝐞𝐚𝐝𝐲 𝐣𝐨𝐢𝐧𝐞𝐝`)
if (a[0].status == 403) return m.reply(`𝐅𝐚𝐢𝐥𝐞𝐝 𝐭𝐨 𝐚𝐝𝐝`)
}
break
case "k": case "kik": case "kick": case "babi": {
if (!isGroup) return m.reply(msg.group)
if (!isBotAdmin) return m.reply(msg.adminbot)
if (!isAdmin && !isOwner) return m.reply(msg.admin)
if (text || m.quoted) {
let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
await depulzz.groupParticipantsUpdate(m.chat, [users], 'remove').then((res) => depulzz.sendMessage(m.chat, {text: `Beban ilang 1`, mentions: [`${users}`]}, {quoted: m})).catch((err) => m.reply(err.toString()))
} else return m.reply(example('nomornya/@tag'))}
break
case "hidetag": case "h": {
if (!isGroup) return m.reply(msg.group)
if (!isAdmin && !isOwner) return m.reply(msg.admin)
if (!m.quoted && !text) return m.reply(example("teksnya/replyteks"))
var teks = m.quoted ? m.quoted.text : text
var member = await groupMetadata.participants.map(e => e.id)
depulzz.sendMessage(m.chat, {text: teks, mentions: [...member]})
}
break
case "tagall": case "tag": {
if (!isGroup) return m.reply(msg.group)
if (!isOwner) return m.reply(msg.owner)
if (!isAdmin && !isOwner) return m.reply(msg.admin)
if (!text) return m.reply(example("jangan lupa berak"))
var member = await groupMetadata.participants.map(e => e.id)
var teks = ` ${text}\n\n`
member.forEach(e => e !== m.sender ? teks += `@${e.split("@")[0]}\n` : '')
depulzz.sendMessage(m.chat, {text: teks, mentions: [...member]})
}
break
//=======================================//
//=======================================//
//============[ MENU PAYMENT]===========//
//=======================================//
//=======================================//
case "listpayment": case "pay": case "payment": {
if (!isOwner) return m.reply (msg.owner)
var teks = `LIST PAYMENT 🛍

* danapay
* ovopay
* shopeepay
* gopaypay
* qrispay
* bripay
`
depulzz.sendMessage(m.chat, {image: {url: image}, caption : teks,
contextInfo: { 
 mentionedJid: [m.sender], 
 isForwarded: true, 
 forwardedNewsletterMessageInfo: {
 newsletterName: ping,
 newsletterJid: idsal,
 serverMessageId: 143
}}}, {quoted:qchanel})
}
break
case "danapay": {
if (global.dana == false) return m.reply('Not Available.')
let teks = `*NOPE :* ${global.dana}
*A/N :* ${global.atasnama}

${global.syarat1}
${global.syarat2}`
depulzz.sendText(m.chat, teks, qkontak)
}
break
case "ovopay": {
if (global.ovo == false) return m.reply('Not Available.')
let teks = `
*NOPE :* ${global.ovo}
*A/N :* ${global.atasnama}

${global.syarat1}
${global.syarat2}`

depulzz.sendText(m.chat, teks, qkontak)
}
break
case "gopaypay": {
if (global.gopay == false) return m.reply('Not Available.')
let teks = `
*NOPE :* ${global.gopay}
*A/N :* ${global.atasnama}

${global.syarat1}
${global.syarat2}`
depulzz.sendText(m.chat, teks, qkontak)
}
break
case "shopeepay": {
if (global.shopeepay == false) return m.reply('Not Available.')
let teks = `
*NOPE :* ${global.shopeepay}
*A/N :* ${global.atasnama}

${global.syarat1}
${global.syarat2}`
depulzz.sendText(m.chat, teks, qkontak)
}
break
case "qrispay": {
if (global.qris == false) return m.reply('Not Available.')
let teks = `
*KODE* : ${global.qris}
*A/N* : ${global.atasnama}

${global.syarat1}
${global.syarat2}`
depulzz.sendMessage(m.chat, {image: {url: global.qris}, caption: teks}, {quoted: qkontak})
}
break
case "bripay": {
if (global.bri == false) return m.reply('Not Available.')
let teks = `
*NOREK :* ${global.bri}
*A/N :* ${global.atasnama}

${global.syarat1}
${global.syarat2}`
depulzz.sendText(m.chat, teks, qkontak)
}
break
//=======================================//
//=======================================//
//============[ MENU PUSHKNTL ]============//
//=======================================//
//=======================================//
case "pushkontak": case "pushkon": {
if (!isOwner) return m.reply(msg.owner)
if (!isGroup) return m.reply(msg.group)
if (!text) return m.reply(example("pesannya"))
var teks = text
const halls = await groupMetadata.participants.filter(v => v.id.endsWith('.net')).map(v => v.id)
m.reply(`Being processed by _depulzz`)
for (let mem of halls) {
if (mem !== m.sender) {
contacts.push(mem)
await fs.writeFileSync('./all/database/contacts.json', JSON.stringify(contacts))
await depulzz.sendMessage(mem, {text: teks}, {quoted: qloc2})
await sleep(global.delaypushkontak)
}}
try {
const uniqueContacts = [...new Set(contacts)]
const vcardContent = uniqueContacts.map((contact, index) => {
const vcard = [
"BEGIN:VCARD",
"VERSION:3.0",
`FN:WA[${createSerial(2)}] ${contact.split("@")[0]}`,
`TEL;type=CELL;type=VOICE;waid=${contact.split("@")[0]}:+${contact.split("@")[0]}`,
"END:VCARD",
"", ].join("\n")
return vcard }).join("")
fs.writeFileSync("./all/database/contacts.vcf", vcardContent, "utf8")
} catch (err) {
m.reply(err.toString())
} finally {
if (m.chat !== m.sender) await m.reply(`_Successfully sent a message to ${halls.length} group members, contact file successfully sent to private chat By Depulzz`)
await depulzz.sendMessage(m.sender, { document: fs.readFileSync("./all/database/contacts.vcf"), fileName: "contacts.vcf", caption: "_Contact file successfully created By Depulzz", mimetype: "text/vcard", }, { quoted: m })
contacts.splice(0, contacts.length)
await fs.writeFileSync("./all/database/contacts.json", JSON.stringify(contacts))
await fs.writeFileSync("./all/database/contacts.vcf", "")
}}
break
case "pushkontak1": {
if (!isOwner) return m.reply(msg.owner)
if (!text) return m.reply(example("idgrup|pesan\n\nketik *.listgc* untuk melihat semua list id grup"))
if (!text.split("|")) return m.reply(example("idgrup|pesannya\n\nketik *.listgc* untuk melihat semua list id grup"))
var [idnya, teks] = text.split("|")
var groupMetadataa
try {
groupMetadataa = await depulzz.groupMetadata(`${idnya}`)
} catch (e) {
return m.reply("*Invalid ID Group")
}
const participants = await groupMetadataa.participants
const halls = await participants.filter(v => v.id.endsWith('.net')).map(v => v.id)
m.reply(`_Processing sending message to ${halls.length} group members By Depulzz`)
for (let mem of halls) {
if (mem !== m.sender) {
contacts.push(mem)
await fs.writeFileSync('./all/database/contacts.json', JSON.stringify(contacts))
await depulzz.sendMessage(mem, {text: teks}, {quoted: qloc2})
await sleep(global.delaypushkontak)
}}
try {
const uniqueContacts = [...new Set(contacts)]
const vcardContent = uniqueContacts.map((contact, index) => {
const vcard = [
"BEGIN:VCARD",
"VERSION:3.0",
`FN:WA[${createSerial(2)}] ${contact.split("@")[0]}`,
`TEL;type=CELL;type=VOICE;waid=${contact.split("@")[0]}:+${contact.split("@")[0]}`,
"END:VCARD",
"", ].join("\n")
return vcard }).join("")
fs.writeFileSync("./all/database/contacts.vcf", vcardContent, "utf8")
} catch (err) {
m.reply(err.toString())
} finally {
if (m.chat !== m.sender) await m.reply(`_Successfully sent a message to ${halls.length} group members, contact file successfully sent to private chat By Depulzz`)
await depulzz.sendMessage(m.sender, { document: fs.readFileSync("./all/database/contacts.vcf"), fileName: "contacts.vcf", caption: "_Contact file successfully created By Depulzz", mimetype: "text/vcard", }, { quoted: m })
contacts.splice(0, contacts.length)
await fs.writeFileSync("./all/database/contacts.json", JSON.stringify(contacts))
await fs.writeFileSync("./all/database/contacts.vcf", "")
}}
break
case "pushkontak2": {
if (!isOwner) return m.reply(msg.owner)
if (!text) return m.reply("*Contoh Command :*\n.pushkontak2 idgc|jeda|pesan\n\n*Note :* Jeda 1 detik = 1000\nketik *.listgc* untuk melihat semua list id grup")
if (!text.split("|")) return m.reply("*Contoh Command :*\n.pushkontak2 idgc|jeda|pesan\n\n*Note :* Jeda 1 detik = 1000\nketik *.listgc* untuk melihat semua list id grup")
var idnya = text.split("|")[0]
var delay = Number(text.split("|")[1])
var teks = text.split("|")[2]
if (!idnya.endsWith("@g.us")) return m.reply("Invalid group ID format")
if (isNaN(delay)) return m.reply("Invalid delay format")
if (!teks) return m.reply("*Contoh Command :*\n.pushkontak2 idgc|jeda|pesan\n\n*Note :* Jeda 1 detik = 1000\nketik *.listgc* untuk melihat semua list id grup")
var groupMetadataa
try {
groupMetadataa = await depulzz.groupMetadata(`${idnya}`)
} catch (e) {
return m.reply("Invalid group ID")
}
const participants = await groupMetadataa.participants
const halls = await participants.filter(v => v.id.endsWith('.net')).map(v => v.id)
m.reply(`_Processing sending message to ${halls.length} group members By Depulzz`)
for (let mem of halls) {
if (mem !== m.sender) {
contacts.push(mem)
await fs.writeFileSync('./all/database/contacts.json', JSON.stringify(contacts))
await depulzz.sendMessage(mem, {text: teks}, {quoted: qloc2})
await sleep(Number(delay))
}}
try {
const uniqueContacts = [...new Set(contacts)]
const vcardContent = uniqueContacts.map((contact, index) => {
const vcard = [
"BEGIN:VCARD",
"VERSION:3.0",
`FN:WA[${createSerial(2)}] ${contact.split("@")[0]}`,
`TEL;type=CELL;type=VOICE;waid=${contact.split("@")[0]}:+${contact.split("@")[0]}`,
"END:VCARD",
"", ].join("\n")
return vcard }).join("")
fs.writeFileSync("./all/database/contacts.vcf", vcardContent, "utf8")
} catch (err) {
m.reply(err.toString())
} finally {
if (m.chat !== m.sender) await m.reply(`_Successfully sent a message to ${halls.length} group members, contact file successfully sent to private chat By Depulzz`)
await depulzz.sendMessage(m.sender, { document: fs.readFileSync("./all/database/contacts.vcf"), fileName: "contacts.vcf", caption: "_Contact file successfully created By Depulzz", mimetype: "text/vcard", }, { quoted: m })
contacts.splice(0, contacts.length)
await fs.writeFileSync("./all/database/contacts.json", JSON.stringify(contacts))
await fs.writeFileSync("./all/database/contacts.vcf", "")
}}
break
case "startjpm": {
if (!isOwner) return m.reply(msg.owner)
var teksnya = await fs.readFileSync("./all/database/teksjpm.js").toString()
if (teksnya.length < 1) return m.reply("Text JPM not found")
var teks = `${teksnya}`
let total = 0
let getGroups = await depulzz.groupFetchAllParticipating()
let usergc = await Object.keys(getGroups)
m.reply(`_Processing sending to ${usergc.length} groups By Depulzz`)
for (let jid of usergc) {
try {
await depulzz.sendMessage(jid, {text: teks}, {quoted: qloc})
total += 1
} catch {}
await sleep(4000)
}
m.reply(`_Successfully sent message to ${total} groups By Depulzz`)
}
break
case "jpmhidetag": {
if (!isOwner) return m.reply(msg.owner)
if (!text && !m.quoted) return m.reply(example("teksnya atau reply teks"))
var teks = m.quoted ? m.quoted.text : text
let total = 0
let getGroups = await depulzz.groupFetchAllParticipating()
let groups = Object.entries(getGroups).slice(0).map((entry) => entry[1])
let usergc = groups.map((v) => v.id)
m.reply(`_Processing sending text message to ${usergc.length} groups By Depulzz`)
for (let jid of usergc) {
try {
await depulzz.sendMessage(jid, {text: teks, mentions: getGroups[jid].participants.map(e => e.id)}, {quoted: qchanel})
total += 1
} catch (e) {
console.log(e)
}
await sleep(global.delayjpm)
}
m.reply(`_Successfully sent message to ${total} groups By Depulzz`)
}
break
case "tespol": {
if (!isOwner) return m.reply(msg.owner)
if (!isGroup) return m.reply(msg.group)
if (!text) return m.reply(example("teks1|teks2|teks3"))
if (!text.split("|")) return m.reply(example("teks1|teks2|teks3"))
let anu = await text.split("|")
if (anu.length < 3) return m.reply(example("teks1|teks2|teks3"))
depulzz.sendPoll(m.chat, anu[0], anu.filter(e => e !== anu[0]))
}
break
case "jpmpol": case "jpmpoll": case "jpmpolling": {
if (!isOwner) return m.reply(msg.owner)
if (!text) return m.reply(example("teks1|teks2|teks3"))
if (!text.split("|")) return m.reply(example("teks1|teks2|teks3"))
let anu = text.split("|")
if (anu.length < 3) return m.reply(example("teks1|teks2|teks3"))
let total = 0
let getGroups = await depulzz.groupFetchAllParticipating()
let groups = Object.entries(getGroups).slice(0).map((entry) => entry[1])
let usergc = groups.map((v) => v.id)
m.reply(`_Processing sending polling message to ${usergc.length} groups By Depulzz`)
for (let jid of usergc) {
try {
depulzz.sendPoll(jid, anu[0], anu.filter(e => e !== anu[0]))
total += 1
} catch (e) {
console.log(e)
}
await sleep(4000)
}
m.reply(`_Successfully sent message to ${total} groups By Depulzz`)
}
break
case "jpm": {
if (!isOwner) return m.reply(msg.owner)
if (!text && !m.quoted) return m.reply(example("teksnya atau replyteks"))
var teks = m.quoted ? m.quoted.text : text
let total = 0
let getGroups = await depulzz.groupFetchAllParticipating()
let groups = Object.entries(getGroups).slice(0).map((entry) => entry[1])
let usergc = groups.map((v) => v.id)
m.reply(`_Processing sending text message to ${usergc.length} groups By Depulzz_`)
for (let jid of usergc) {
try {
await depulzz.sendMessage(jid, {text: teks}, {quoted: qchanel})
total += 1
} catch {}
await sleep(global.delayjpm)
}
m.reply(`_Successfully sent message to ${total} groups By Depulzz_`)
}
break
case "jpm2": {
if (!isOwner) return m.reply(msg.owner)
if (!text) return m.reply(example("teksnya dengan balas/kirim foto"))
if (!/image/.test(mime)) return m.reply(example("teksnya dengan balas/kirim foto"))
let image = await depulzz.downloadAndSaveMediaMessage(qmsg)
let total = 0
let getGroups = await depulzz.groupFetchAllParticipating()
let groups = Object.entries(getGroups).slice(0).map((entry) => entry[1])
let usergc = groups.map((v) => v.id)
m.reply(`_Processing sending text & photo message to ${usergc.length} groups By Depulzz_`)
for (let jid of usergc) {
try {
depulzz.sendMessage(jid, {image: await fs.readFileSync(image), caption: text, contextInfo: {forwardingScore: 1,
isForwarded: true}}, {quoted: qchanel})
total += 1
} catch {}
await sleep(global.delayjpm)
}
await fs.unlinkSync(image)
m.reply(`_Successfully sent message to ${total} groups By Depulzz_`)
}
break
case "jpmtesti": {
if (!isOwner) return m.reply(msg.owner)
if (!text) return m.reply(example("teksnya dengan balas/kirim foto"))
if (!/image/.test(mime)) return m.reply(example("teksnya dengan balas/kirim foto"))
let image = await depulzz.downloadAndSaveMediaMessage(qmsg)
if (global.idsal == "-") return m.reply('Mohon isi ID Saluran di file setting.js pada panelmu.')
let total = 0
let getGroups = await depulzz.groupFetchAllParticipating()
let groups = Object.entries(getGroups).slice(0).map((entry) => entry[1])
let usergc = groups.map((v) => v.id)
m.reply(`_Successfully sent message to ${total} groups By Depulzz_`)
for (let jid of usergc) {
try {
depulzz.sendMessage(jid, {image: await fs.readFileSync(image), caption: text, contextInfo: {forwardingScore: 1,
isForwarded: true, forwardedNewsletterMessageInfo: {newsletterJid: global.idsal, serverMessageId: 100, 
newsletterName: `Testimoni By Depulzz`
}}}, {quoted: qchanel})
total += 1
} catch {}
await sleep(global.delayjpm)
}
await fs.unlinkSync(image)
m.reply(`_Successfully sent message to ${total} groups By Depulzz_`)
}
break
case "startjpm": {
if (!isOwner) return m.reply(msg.owner)
var teksnya = await fs.readFileSync("./all/database/teksjpm.js").toString()
if (teksnya.length < 1) return m.reply("Text JPM not found")
var teks = `${teksnya}`
let total = 0
let getGroups = await depulzz.groupFetchAllParticipating()
let usergc = await Object.keys(getGroups)
m.reply(`_Processing sending to ${usergc.length} groups By Depulzz_`)
for (let jid of usergc) {
try {
await depulzz.sendMessage(jid, {text: teks}, {quoted: qloc})
total += 1
} catch {}
await sleep(4000)
}
m.reply(`_Successfully sent message to ${total} groups By Depulzz_`)
}
break
case "jpmhidetag": {
if (!isOwner) return m.reply(msg.owner)
if (!text && !m.quoted) return m.reply(example("teksnya atau reply teks"))
var teks = m.quoted ? m.quoted.text : text
let total = 0
let getGroups = await depulzz.groupFetchAllParticipating()
let groups = Object.entries(getGroups).slice(0).map((entry) => entry[1])
let usergc = groups.map((v) => v.id)
m.reply(`_Processing sending text message to ${usergc.length} groups By Depulzz_`)
for (let jid of usergc) {
try {
await depulzz.sendMessage(jid, {text: teks, mentions: getGroups[jid].participants.map(e => e.id)}, {quoted: qchanel})
total += 1
} catch (e) {
console.log(e)
}
await sleep(global.delayjpm)
}
m.reply(`_Successfully sent message to ${total} groups By Depulzz_`)
}
break
case "tespol": {
if (!isOwner) return m.reply(msg.owner)
if (!isGroup) return m.reply(msg.group)
if (!text) return m.reply(example("teks1|teks2|teks3"))
if (!text.split("|")) return m.reply(example("teks1|teks2|teks3"))
let anu = await text.split("|")
if (anu.length < 3) return m.reply(example("teks1|teks2|teks3"))
depulzz.sendPoll(m.chat, anu[0], anu.filter(e => e !== anu[0]))
}
break
case "jpmpol": case "jpmpoll": case "jpmpolling": {
if (!isOwner) return m.reply(msg.owner)
if (!text) return m.reply(example("teks1|teks2|teks3"))
if (!text.split("|")) return m.reply(example("teks1|teks2|teks3"))
let anu = text.split("|")
if (anu.length < 3) return m.reply(example("teks1|teks2|teks3"))
let total = 0
let getGroups = await depulzz.groupFetchAllParticipating()
let groups = Object.entries(getGroups).slice(0).map((entry) => entry[1])
let usergc = groups.map((v) => v.id)
m.reply(`_Processing sending polling message to ${usergc.length} groups By Depulzz_`)
for (let jid of usergc) {
try {
depulzz.sendPoll(jid, anu[0], anu.filter(e => e !== anu[0]))
total += 1
} catch (e) {
console.log(e)
}
await sleep(4000)
}
m.reply(`_Successfully sent message to ${total} groups By Depulzz_`)
}
break
case "jpm": {
if (!isOwner) return m.reply(msg.owner)
if (!text && !m.quoted) return m.reply(example("teksnya atau replyteks"))
var teks = m.quoted ? m.quoted.text : text
let total = 0
let getGroups = await depulzz.groupFetchAllParticipating()
let groups = Object.entries(getGroups).slice(0).map((entry) => entry[1])
let usergc = groups.map((v) => v.id)
m.reply(`_Processing sending text message to ${usergc.length} groups By Depulzz_`)
for (let jid of usergc) {
try {
await depulzz.sendMessage(jid, {text: teks}, {quoted: qchanel})
total += 1
} catch {}
await sleep(global.delayjpm)
}
m.reply(`_Successfully sent message to ${total} groups By Depulzz_`)
}
break
case "jpm2": {
if (!isOwner) return m.reply(msg.owner)
if (!text) return m.reply(example("teksnya dengan balas/kirim foto"))
if (!/image/.test(mime)) return m.reply(example("teksnya dengan balas/kirim foto"))
let image = await depulzz.downloadAndSaveMediaMessage(qmsg)
let total = 0
let getGroups = await depulzz.groupFetchAllParticipating()
let groups = Object.entries(getGroups).slice(0).map((entry) => entry[1])
let usergc = groups.map((v) => v.id)
m.reply(`_Processing sending text & photo message to ${usergc.length} groups By Depulzz_`)
for (let jid of usergc) {
try {
depulzz.sendMessage(jid, {image: await fs.readFileSync(image), caption: text, contextInfo: {forwardingScore: 1,
isForwarded: true}}, {quoted: qchanel})
total += 1
} catch {}
await sleep(global.delayjpm)
}
await fs.unlinkSync(image)
m.reply(`_Successfully sent message to ${total} groups By Depulzz_`)
}
break
case "jpmtesti": {
if (!isOwner) return m.reply(msg.owner)
if (!text) return m.reply(example("teksnya dengan balas/kirim foto"))
if (!/image/.test(mime)) return m.reply(example("teksnya dengan balas/kirim foto"))
let image = await depulzz.downloadAndSaveMediaMessage(qmsg)
if (global.idsal == "-") return m.reply('Mohon isi ID Saluran di file setting.js pada panelmu.')
let total = 0
let getGroups = await depulzz.groupFetchAllParticipating()
let groups = Object.entries(getGroups).slice(0).map((entry) => entry[1])
let usergc = groups.map((v) => v.id)
m.reply(`_Successfully sent message to ${total} groups By Depulzz_`)
for (let jid of usergc) {
try {
depulzz.sendMessage(jid, {image: await fs.readFileSync(image), caption: text, contextInfo: {forwardingScore: 1,
isForwarded: true, forwardedNewsletterMessageInfo: {newsletterJid: global.idsal, serverMessageId: 100, 
newsletterName: `Testimoni By Depulzz`
}}}, {quoted: qchanel})
total += 1
} catch {}
await sleep(global.delayjpm)
}
await fs.unlinkSync(image)
m.reply(`_Successfully sent message to ${total} groups By Depulzz_`)
}
break
//=======================================//
//=======================================//
//============[ MENU TOOLS ]============//
//=======================================//
//=======================================//
case 'runtime': case 'ping': {
let timestamp = speed()
let latensi = speed() - timestamp
neww = performance.now()
oldd = performance.now()
rin = `*Runtime :* _${runtime(process.uptime())}_\n*Response Speed :* _${latensi.toFixed(4)} Second_\n*Ram :* _${formatp(os.totalmem() - os.freemem())} / ${formatp(os.totalmem())}_`
await depulzz.relayMessage(m.chat,  {
requestPaymentMessage: {
currencyCodeIso4217: 'IDR',
amount1000: 1000000,
requestFrom: m.sender,
noteMessage: {
extendedTextMessage: {
text: ctext(rin),    
contextInfo: {
externalAdReply: {
showAdAttribution: true,
}}}}}}, {})
}
break
case "qc": {
if (!text) return m.reply(example('teksnya'))
let warna = ["#000000", "#ff2414", "#22b4f2", "#eb13f2"]
let ppuser
try {
ppuser = await depulzz.profilePictureUrl(m.sender, 'image')
} catch (err) {
ppuser = 'https://d.top4top.io/p_32528plkn1.jpg'
}
let reswarna = await warna[Math.floor(Math.random()*warna.length)]
m.reply(msg.wait)
const obj = {
      "type": "quote",
      "format": "png",
      "backgroundColor": "#ffffff",
      "width": 512,
      "height": 768,
      "scale": 2,
      "messages": [{
         "entities": [],
         "avatar": true,
         "from": {
            "id": 1,
            "name": m.pushName,
            "photo": {
               "url": ppuser
            }
         },
         "text": text,
         "replyMessage": {}
      }]
   }
   try {
   const json = await axios.post('https://bot.lyo.su/quote/generate', obj, {
      headers: {
         'Content-Type': 'application/json'
      }
   })
   const buffer = Buffer.from(json.data.result.image, 'base64')
depulzz.sendStimg(m.chat, buffer, m, { packname: global.packname })
   } catch (error) {
   m.reply(error.toString())
   }
}
break
case 'hdr': 
case 'hd':
case 'remini': {
			if (!quoted) return m.reply(`Where is the picture?`)
			if (!/image/.test(mime)) return m.reply(`Send/Reply Photos With Captions ${prefix + command}`)
			const { remini } = require('./all/remini')
			let media = await quoted.download()
			let proses = await remini(media, "enhance")
depulzz.sendMessage(m.chat, { image: proses, caption: msg.success}, {})
			}
			break
case "assalamu'alaikum": case "Assalamu'alaikum": case "assalamualaikum": case "Assalamualaikum": {
var teks = `Waalaikumsalam`
m.reply(teks)
}
break
case "halo": case "Halo": {
var teks = `Hai`
m.reply(teks)
}
break
case "toimage": case "toimg": {
if (!/webp/.test(mime) && !/audio/.test(mime)) return m.reply(example('sambil reply sticker'))
m.reply(msg.wait)
let media = await depulzz.downloadAndSaveMediaMessage(qmsg)
let ran = `${makeid}.png`
exec(`ffmpeg -i ${media} ${ran}`, (err) => {
fs.unlinkSync(media)
if (err) return err
let buffer = fs.readFileSync(ran)
depulzz.sendMessage(m.chat, {image: buffer}, {
quoted: qchanel})
fs.unlinkSync(ran)
})
}
break
case "tovn": case "toptt": {
if (!/video|audio/.test(mime) && !/audio/.test(mime)) return m.reply(example('dengan mengirim/reply audio/vidio'))
m.reply(msg.wait)
await depulzz.downloadMediaMessage(qmsg).then(async (res) => {
let anu = await toPTT(res, 'mp4')
depulzz.sendMessage(m.chat, {audio: anu, mimetype: 'audio/mpeg', ptt: true}, {quoted : m}) 
})
}
break
case "toaudio": case "tomp3": {
if (!/video/.test(mime) && !/audio/.test(mime)) return m.reply(example('dengan mengirim/reply vidio'))
if ((qmsg).seconds > 30) return m.reply("Durasi vidio maksimal 30 detik")
m.reply(msg.wait)
await depulzz.downloadMediaMessage(qmsg).then(async (res) => {
let anu = await toAudio(res, 'mp4')
depulzz.sendMessage(m.chat, {audio: anu, mimetype: 'audio/mpeg'}, {quoted : m}) 
})
}
break
case "sticker": case "stiker": case "sgif": case "s": {
if (!/image|video/.test(mime)) return m.reply(example("dengan mengirim/reply foto/vidio"))
if (/video/.test(mime)) {
if ((qmsg).seconds > 15) return m.reply("Durasi vidio maksimal 15 detik!")
}
m.reply(msg.wait)
var media = await depulzz.downloadAndSaveMediaMessage(qmsg)
await depulzz.sendStimg(m.chat, media, m, {packname: "𝐂𝐫𝐞𝐚𝐭𝐞𝐝 𝐛𝐲 𝐇𝐚𝐦𝐱𝐲𝐳𝐇𝐨𝐬𝐭 👑"})
await fs.unlinkSync(media)
}
break
case "tiktokaudio": case "tiktokmp3": {
if (!text) return m.reply(example("linknya"))
if (!text.includes("tiktok.com")) return m.reply("Link tautan tidak valid!")
m.reply(msg.wait)
await fetchJson(`https://aemt.me/download/tiktokdl?url=${text}`).then((res) => {
depulzz.sendMessage(m.chat, {audio: {url: res.result.music}, mimetype: "audio/mpeg"}, {quoted: m})
}).catch(e => m.reply(e.toString()))
}
break
case "mediafire": {
if(!isPremium) return m.reply('Lu ae bukan premium')
if (!text) return m.reply(example("linknya"))
if (!text.includes('mediafire.com')) return m.reply("Invalid link")
m.reply(msg.wait)
await api.mediafireDl(text).then((res) => {
if (res.filesize.includes("GB")) return m.reply("Ukuran file terlalu besar")
if (res.filesize.split("MB")[0] >= 100) return m.reply("Ukuran file terlalu besar")
if (res.url == "") return m.reply(mess.error)
depulzz.sendMessage(m.chat, {document: {url: res.url}, fileName: res.filename, mimetype: "application/"+res.ext.toLowerCase(), caption: "Download successful"}, {quoted: m})
}).catch((e) => m.reply(e.toString()))
}
break
case 'pinterest': case 'pin': {
  if (!text) return m.reply(`gini loh dongo
  .pin cewek cindo`);
  //try {
  await m.reply("bentar ya anjg");

  async function createImage(url) {
    const { imageMessage } = await generateWAMessageContent({
      image: {
        url
      }
    }, {
      upload: depulzz.waUploadToServer
    });
    return imageMessage;
  }

  function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
  }

  let push = [];
  let { data } = await axios.get(`https://www.pinterest.com/resource/BaseSearchResource/get/?source_url=%2Fsearch%2Fpins%2F%3Fq%3D${text}&data=%7B%22options%22%3A%7B%22isPrefetch%22%3Afalse%2C%22query%22%3A%22${text}%22%2C%22scope%22%3A%22pins%22%2C%22no_fetch_context_on_resource%22%3Afalse%7D%2C%22context%22%3A%7B%7D%7D&_=1619980301559`);
  let res = data.resource_response.data.results.map(v => v.images.orig.url);

  shuffleArray(res); // Mengacak array
  let ult = res.splice(0, 10); // Mengambil 10 gambar pertama dari array yang sudah diacak
  let i = 1;

  for (let pus of ult) {
    push.push({
      body: proto.Message.InteractiveMessage.Body.fromObject({
        text: `Image ke - ${i++}`
      }),
      footer: proto.Message.InteractiveMessage.Footer.fromObject({
        text: "depulzz"
      }),
      header: proto.Message.InteractiveMessage.Header.fromObject({
        title: 'Hasil.',
        hasMediaAttachment: true,
        imageMessage: await createImage(pus)
      }),
      nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.fromObject({
        buttons: [
          {
"name": "cta_url",
"buttonParamsJson": `{\"display_text\":\"Contact Owner\",\"url\":\"https://www.pinterest.com/${pus}\",\"merchant_url\":\"https://www.google.com\"}`
}
        ]
      })
    });
  }

  const msg = generateWAMessageFromContent(m.chat, {
    viewOnceMessage: {
      message: {
        messageContextInfo: {
          deviceListMetadata: {},
          deviceListMetadataVersion: 2
        },
        interactiveMessage: proto.Message.InteractiveMessage.fromObject({
          body: proto.Message.InteractiveMessage.Body.create({
            text: 'Kalo Ga muncul berarti Error ya cuki'
          }),
          footer: proto.Message.InteractiveMessage.Footer.create({
            text: "depulzz"
          }),
          header: proto.Message.InteractiveMessage.Header.create({
            hasMediaAttachment: false
          }),
          carouselMessage: proto.Message.InteractiveMessage.CarouselMessage.fromObject({
            cards: [
              ...push
            ]
          })
        })
      }
    }
  }, {});

  await depulzz.relayMessage(m.chat, msg.message, {
    messageId: msg.key.id
  });
  
}
break

//=======================================//
//=======================================//
//============[ MENU DOWNLOAD ]============//
//=======================================//
//=======================================//

case "tiktok": case "tt": {
if (!text) return m.reply(example('linknya mana kocak'))
if (!/tiktok.com/.test(text)) return m.reply("Invalid link")
m.reply(msg.wait)
await fetchJson(`https://skizoasia.xyz/api/tiktok?apikey=lynzzid&url=${text}`).then((res) => {
var num = 0
if (res.result.data.duration == 0) {
for (let i of res.result.data.images) {
depulzz.sendMedia(m.chat, `${i}`, m, {caption: `_Successfully downloaded video By Depulzz_`})
}
} else {
var cap = `_Successfully downloaded video By Depulzz_`
depulzz.sendMessage(m.chat, {video: {url: res.result.data.play}, mimetype: "video/mp4", caption: cap}, {quoted: m})
}
}).catch((err) => {
return m.reply(err.toString())
})
}
break
case "facebook": case "fb": case "fbdl": {
if (!text) return m.reply(example("linkvidionya mana pepek"))
if (!/facebook.com/.test(text)) return m.reply("Invalid link")
m.reply(msg.wait)
await fetchJson(`https://aemt.me/download/fbdown?url=${text}`).then((res) => {
if (!res.status) return m.reply(JSON.stringify(res, null, 2))
depulzz.sendMessage(m.chat, {video: {url: `${res.result.url.isHdAvailable == true ? res.result.url.urls[0].hd : res.result.url.urls[0].sd}`}, mimetype: 'video/mp4', caption: `_Successfully downloaded video By Depulzz_`}, {quoted: m})
}).catch(e => m.reply(e.toString()))
}
break
//=======================================//
//=======================================//
//============[ MENU MASSAGE ]============//
//=======================================//
//=======================================//
case "terkentod": {
var teks = `Hoekkkkkkk🤮🤮🤮. najis ada gay, mati aja lu kontol🤢`
m.reply (teks)}
break
case "owner": {
depulzz.sendContact(m.chat, [owner], "Do not call", m)
}
break
case "owner": case "creator": {
depulzz.sendContact(m.chat, [`${owner[0].split("@")[0]}`], "Developer Bot", m)
}
break

//=======================================//
//=======================================//
//============[ MENU PANEL==============//
//=======================================//
//=======================================//
case "adp": {
if (!text) return m.reply(example("username"))
if (!isOwner) return m.reply(msg.owner)
let username = text.toLowerCase()
let email = username + "@depulzz.com"
let name = username + "admin"
let randomChars = "abcdefghijklmnopqrstuvwxyz";
let ulycode = `cry-`;
for (let i = 0; i < 5; i++) {
    ulycode += randomChars.charAt(Math.floor(Math.random() * randomChars.length));}
let password = ulycode
let f = await fetch(domain + "/api/application/users", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
},
"body": JSON.stringify({
"email": email,
"username": username.toLowerCase(),
"first_name": "Admin",
"last_name": "Suki",
"root_admin": true,
"language": "en",
"password": password,
})
})
let data = await f.json();
if (data.errors) return m.reply(JSON.stringify(data.errors[0], null, 2))
let user = data.attributes
var orang
if (isGroup) {
orang = m.sender
await m.reply("𝐀𝐝𝐩 𝐝𝐨𝐧𝐞 𝐜𝐫𝐞𝐚𝐭𝐞 𝐛𝐲 𝐇𝐚𝐦𝐱𝐲𝐳𝐇𝐨𝐬𝐭 ✅")
} else {
orang = m.chat
}
var teks = `
𝐃𝐄𝐓𝐀𝐈𝐋 𝐀𝐃𝐌𝐈𝐍 𝐏𝐀𝐍𝐄𝐋 𝐀𝐍𝐃𝐀
👤 *USERNAME:* ${user.username}
🔐 *PASSWORD:* ${password.toString()}
🔗 *LINK LOGIN:* ${global.domain}

${rulvip}
`

depulzz.sendMessage(m.chat, {image: {url: makasi}, caption : teks,
contextInfo: { 
 mentionedJid: [m.sender], 
 isForwarded: true, 
 forwardedNewsletterMessageInfo: {
 newsletterName: ping,
 newsletterJid: idsal,
 serverMessageId: 143
}}}, {quoted:qchanel})
}
break 
case "sendadmin": case "sadmin": {
if (!isOwner) return m.reply(msg.owner)
let t = text.split(',');
if (t.length < 2) return m.reply(`*Format salah!*
Penggunaan:
${prefix + command} user,nomer`)
let username = t[0];
let u = m.quoted ? m.quoted.sender : t[1] ? t[1].replace(/[^0-9]/g, '') + '@s.whatsapp.net' : m.mentionedJid[0];
let email = username + "@depulzz.com"
if (!u) return
let d = (await depulzz.onWhatsApp(u.split`@`[0]))[0] || {}
let randomChars = "abcdefghijklmnopqrstuvwxyz";
let ulycode = `cry-`;
for (let i = 0; i < 5; i++) {
    ulycode += randomChars.charAt(Math.floor(Math.random() * randomChars.length));}
let password = ulycode
let f = await fetch(domain + "/api/application/users", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
},
"body": JSON.stringify({
"email": email,
"username": username,
"first_name": username,
"last_name": username,
"language": "en",
"root_admin": true,
"password": password
})
})
let data = await f.json();
if (data.errors) return m.reply(JSON.stringify(data.errors[0], null, 2));
let user = data.attributes
let f2 = await fetch(domain2 + "/api/application/nests/5/eggs/" + egg, {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
}
})
m.reply(`SUCCES CREATE USER`)
ctf = `Paket Telah Tiba 🛍 @${u.split`@`[0]}

👤 *USERNAME* : ${user.username}  
🔐 *PASSWORD* : ${password}  
🔗 *LINK LOGIN* : ${domain}

${rulvip}
`
depulzz.sendMessage(u, {image: {url: makasi}, caption : ctf,
contextInfo: { 
 mentionedJid: [m.sender], 
 isForwarded: true, 
 forwardedNewsletterMessageInfo: {
 newsletterName: ping,
 newsletterJid: idsal,
 serverMessageId: 143
}}}, {quoted:qchanel})
}
break
case "1gb": case "2gb": case "3gb": case "4gb": case "5gb": case "6gb": case "7gb": case "8gb": case "9gb": case "10gb": case "unli": {
var ram
var disk
var cpu
if (command == "1gb") {
ram = "1000"
disk = "1000"
cpu = "50"
} else if (command == "2gb") {
ram = "2000"
disk = "2000"
cpu = "55"
} else if (command == "3gb") {
ram = "3000"
disk = "3000"
cpu = "60"
} else if (command == "4gb") {
ram = "4000"
disk = "4000"
cpu = "65"
} else if (command == "5gb") {
ram = "5000"
disk = "5000"
cpu = "70"
} else if (command == "6gb") {
ram = "6000"
disk = "6000"
cpu = "80"
} else if (command == "7gb") {
ram = "7000"
disk = "7000"
cpu = "90"
} else if (command == "8gb") {
ram = "8000"
disk = "8000"
cpu = "100"
} else if (command == "9gb") {
ram = "9000"
disk = "9000"
cpu = "125"
} else if (command == "10gb") {
ram = "10000"
disk = "10000"
cpu = "150"
} else {
ram = "0"
disk = "0"
cpu = "0"
}
if (!isPremium && !isOwner) return m.reply(msg.owner)
let t = text.split(',');
if (t.length < 2) return m.reply(`*Format salah!*
Penggunaan:
${prefix + command} user,nomer`)
let username = t[0];
let u = m.quoted ? m.quoted.sender : t[1] ? t[1].replace(/[^0-9]/g, '') + '@s.whatsapp.net' : m.mentionedJid[0];
let name = username + "depulzz"
let egg = global.egg
let loc = global.loc
let email = username + "@depulzz.com"
if (!u) return
let d = (await depulzz.onWhatsApp(u.split`@`[0]))[0] || {}
let randomChars = "abcdefghijklmnopqrstuvwxyz";
let ulycode = `cry-`;
for (let i = 0; i < 5; i++) {
    ulycode += randomChars.charAt(Math.floor(Math.random() * randomChars.length));}
let password = ulycode
let f = await fetch(domain + "/api/application/users", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
},
"body": JSON.stringify({
"email": email,
"username": username,
"first_name": username,
"last_name": username,
"language": "en",
"password": password
})
})
let data = await f.json();
if (data.errors) return m.reply(JSON.stringify(data.errors[0], null, 2));
let user = data.attributes
let f2 = await fetch(domain + "/api/application/nests/5/eggs/" + egg, {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
}
})
m.reply(`SUCCES CREATE USER ID: ${user.id}`)
ctf = `Paket Telah Tiba 🛍

👤 *USERNAME* : ${user.username}  
🔐 *PASSWORD* : ${password}  
🔗 *LINK LOGIN* : ${domain}

${rulvip}
`
depulzz.sendMessage(u, {image: {url: makasi}, caption : ctf,
contextInfo: { 
 mentionedJid: [m.sender], 
 isForwarded: true, 
 forwardedNewsletterMessageInfo: {
 newsletterName: ping,
 newsletterJid: idsal,
 serverMessageId: 143
}}}, {quoted:qchanel})
let data2 = await f2.json();
let startup_cmd = data2.attributes.startup

let f3 = await fetch(domain + "/api/application/servers", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey,
},
"body": JSON.stringify({
"name": name,
"description": " ",
"user": user.id,
"egg": parseInt(egg),
"docker_image": "ghcr.io/parkervcp/yolks:nodejs_18",
"startup": startup_cmd,
"environment": {
"INST": "npm",
"USER_UPLOAD": "0",
"AUTO_UPDATE": "0",
//"JS_FILE": "index.js",
"CMD_RUN": "npm start"
},
"limits": {
"memory": ram,
"swap": 0,
"disk": disk,
"io": 500,
"cpu": cpu
},
"feature_limits": {
"databases": 5,
"backups": 5,
"allocations": 1
},
deploy: {
locations: [parseInt(loc)],
dedicated_ip: false,
port_range: [],
},
})
})
let res = await f3.json()
if (res.errors) return m.reply(JSON.stringify(res.errors[0], null, 2))
let server = res.attributes
let p = await m.reply(`
*${sret}SUCCESSFULLY ADD USER + SERVER${sret}*
TYPE: user
ID: ${user.id}
NAME: ${user.first_name} ${user.last_name}
MEMORY: ${server.limits.memory === 0 ? 'Unlimited' : server.limits.memory} MB
DISK: ${server.limits.disk === 0 ? 'Unlimited' : server.limits.disk} MB
CPU: ${server.limits.cpu}%

`)

}
break
//=======================================//
//=======================================//
//============[ MENU PANEL V2 ]============//
//=======================================//
//=======================================//
case "1gb2": case "2gb2": case "3gb2": case "4gb2": case "5gb2": case "6gb2": case "7gb2": case "8gb2": case "9gb2": case "unli2": {
var ram
var disk
var cpu
if (command == "1gb2") {
ram = "1000"
disk = "1000"
cpu = "50"
} else if (command == "2gb2") {
ram = "2000"
disk = "2000"
cpu = "55"
} else if (command == "3gb2") {
ram = "3000"
disk = "3000"
cpu = "60"
} else if (command == "4gb2") {
ram = "4000"
disk = "4000"
cpu = "65"
} else if (command == "5gb2") {
ram = "5000"
disk = "5000"
cpu = "70"
} else if (command == "6gb2") {
ram = "6000"
disk = "6000"
cpu = "80"
} else if (command == "7gb2") {
ram = "7000"
disk = "7000"
cpu = "90"
} else if (command == "8gb2") {
ram = "8000"
disk = "8000"
cpu = "100"
} else if (command == "9gb2") {
ram = "9000"
disk = "9000"
cpu = "125"
} else if (command == "10gb2") {
ram = "10000"
disk = "10000"
cpu = "150"
} else {
ram = "0"
disk = "0"
cpu = "0"
}
if (!isPremium && !isOwner) return m.reply(msg.owner)
let t = text.split(',');
if (t.length < 2) return m.reply(`*Format salah!*
Penggunaan:
${prefix + command} user,nomer`)
let username = t[0];
let u = m.quoted ? m.quoted.sender : t[1] ? t[1].replace(/[^0-9]/g, '') + '@s.whatsapp.net' : m.mentionedJid[0];
let name = username + " depulzz"
let egg = global.egg
let loc = global.loc
let email = username + "@depulzz.com"
if (!u) return
let d = (await depulzz.onWhatsApp(u.split`@`[0]))[0] || {}
let randomChars = "abcdefghijklmnopqrstuvwxyz";
let ulycode = `cry-`;
for (let i = 0; i < 5; i++) {
    ulycode += randomChars.charAt(Math.floor(Math.random() * randomChars.length));}
let password = ulycode
let f = await fetch(domain + "/api/application/users", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey2
},
"body": JSON.stringify({
"email": email,
"username": username,
"first_name": username,
"last_name": username,
"language": "en",
"password": password
})
})
let data = await f.json();
if (data.errors) return m.reply(JSON.stringify(data.errors[0], null, 2));
let user = data.attributes
let f2 = await fetch(domain + "/api/application/nests/5/eggs/" + egg, {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey2
}
})
m.reply(`SUCCES CREATE USER ID: ${user.id}`)
ctf = `Paket Telah Tiba 🛍 @${u.split`@`[0]}

👤 *USERNAME* : ${user.username}  
🔐 *PASSWORD* : ${password}  
🔗 *LINK LOGIN* : ${domain}

${rulvip}
`
depulzz.sendMessage(u, {image: {url: makasi}, caption : ctf,
contextInfo: { 
 mentionedJid: [m.sender], 
 isForwarded: true, 
 forwardedNewsletterMessageInfo: {
 newsletterName: ping,
 newsletterJid: idsal,
 serverMessageId: 143
}}}, {quoted:qchanel})
let data2 = await f2.json();
let startup_cmd = data2.attributes.startup

let f3 = await fetch(domain + "/api/application/servers", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey2,
},
"body": JSON.stringify({
"name": name,
"description": " ",
"user": user.id,
"egg": parseInt(egg),
"docker_image": "ghcr.io/parkervcp/yolks:nodejs_18",
"startup": startup_cmd,
"environment": {
"INST": "npm",
"USER_UPLOAD": "0",
"AUTO_UPDATE": "0",
//"JS_FILE": "index.js",
"CMD_RUN": "npm start"
},
"limits": {
"memory": ram,
"swap": 0,
"disk": disk,
"io": 500,
"cpu": cpu
},
"feature_limits": {
"databases": 5,
"backups": 5,
"allocations": 1
},
deploy: {
locations: [parseInt(loc)],
dedicated_ip: false,
port_range: [],
},
})
})
let res = await f3.json()
if (res.errors) return m.reply(JSON.stringify(res.errors[0], null, 2))
let server = res.attributes
let p = await m.reply(`
*${sret}SUCCESSFULLY ADD USER + SERVER${sret}*
TYPE: user
ID: ${user.id}
NAME: ${user.first_name} ${user.last_name}
MEMORY: ${server.limits.memory === 0 ? 'Unlimited' : server.limits.memory} MB
DISK: ${server.limits.disk === 0 ? 'Unlimited' : server.limits.disk} MB
CPU: ${server.limits.cpu}%

`)

}
break
case "adp2": {
if (!text) return m.reply(example("username"))
if (!isOwner) return m.reply(msg.owner)
let username = text.toLowerCase()
let email = username + "@depulzz.com"
let name = username + "admin"
let randomChars = "abcdefghijklmnopqrstuvwxyz";
let ulycode = `cry-`;
for (let i = 0; i < 5; i++) {
    ulycode += randomChars.charAt(Math.floor(Math.random() * randomChars.length));}
let password = ulycode
let f = await fetch(domain2 + "/api/application/users", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey2
},
"body": JSON.stringify({
"email": email,
"username": username.toLowerCase(),
"first_name": "Admin",
"last_name": "Suki",
"root_admin": true,
"language": "en",
"password": password,
})
})
let data = await f.json();
if (data.errors) return m.reply(JSON.stringify(data.errors[0], null, 2))
let user = data.attributes
var orang
if (isGroup) {
orang = m.sender
await m.reply("𝐀𝐝𝐩 𝐝𝐨𝐧𝐞 𝐜𝐫𝐞𝐚𝐭𝐞 𝐛𝐲 𝐇𝐚𝐦𝐱𝐲𝐳𝐇𝐨𝐬𝐭 ✅")
} else {
orang = m.chat
}
var teks = `
𝐃𝐄𝐓𝐀𝐈𝐋 𝐀𝐃𝐌𝐈𝐍 𝐏𝐀𝐍𝐄𝐋 𝐀𝐍𝐃𝐀
👤 *USERNAME:* ${user.username}
🔐 *PASSWORD:* ${password.toString()}
🔗 *LINK LOGIN:* ${global.domain2}

${rulvip}
`
depulzz.sendMessage(m.chat, {image: {url: makasi}, caption : teks,
contextInfo: { 
 mentionedJid: [m.sender], 
 isForwarded: true, 
 forwardedNewsletterMessageInfo: {
 newsletterName: ping,
 newsletterJid: idsal,
 serverMessageId: 143
}}}, {quoted:qchanel})
}
break        
case "sendadmin2": case "sadmin2": {
if (!isOwner) return m.reply(msg.owner)
let t = text.split(',');
if (t.length < 2) return m.reply(`*Format salah!*
Penggunaan:
${prefix + command} user,nomer`)
let username = t[0];
let u = m.quoted ? m.quoted.sender : t[1] ? t[1].replace(/[^0-9]/g, '') + '@s.whatsapp.net' : m.mentionedJid[0];
let email = username + "@depulzz.com"
if (!u) return
let d = (await depulzz.onWhatsApp(u.split`@`[0]))[0] || {}
let randomChars = "abcdefghijklmnopqrstuvwxyz";
let ulycode = `cry-`;
for (let i = 0; i < 5; i++) {
    ulycode += randomChars.charAt(Math.floor(Math.random() * randomChars.length));}
let password = ulycode
let f = await fetch(domain2 + "/api/application/users", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey2
},
"body": JSON.stringify({
"email": email,
"username": username,
"first_name": username,
"last_name": username,
"language": "en",
"root_admin": true,
"password": password
})
})
let data = await f.json();
if (data.errors) return m.reply(JSON.stringify(data.errors[0], null, 2));
let user = data.attributes
let f2 = await fetch(domain2 + "/api/application/nests/5/eggs/" + egg, {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey2
}
})
m.reply(`SUCCES CREATE USER`)
ctf = `Paket Telah Tiba 🛍 @${u.split`@`[0]}

👤 *USERNAME* : ${user.username}  
🔐 *PASSWORD* : ${password}  
🔗 *LINK LOGIN* : ${domain}

${rulvip}
`
depulzz.sendMessage(u, {image: {url: makasi}, caption : ctf,
contextInfo: { 
 mentionedJid: [m.sender], 
 isForwarded: true, 
 forwardedNewsletterMessageInfo: {
 newsletterName: ping,
 newsletterJid: idsal,
 serverMessageId: 143
}}}, {quoted:qchanel})
}
break
//=======================================//
//=======================================//
//============[ MENU PANEL V2 DLL ]============//
//=======================================//
//=======================================//
case "deladmin2": {
if (!args[0]) return m.reply(example("id\n\nuntuk melihat id admin ketik *.listadmin*"))
let cek = await fetch(domain2 + "/api/application/users?page=1", {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey2
}
})
let res2 = await cek.json();
let users = res2.data;
let getid = null
let idadmin = null
await users.forEach(async (e) => {
if (e.attributes.id == args[0] && e.attributes.root_admin == true) {
getid = e.attributes.username
idadmin = e.attributes.id
let delusr = await fetch(domain + `/api/application/users/${idadmin}`, {
"method": "DELETE",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey2
}
})
let res = delusr.ok ? {
errors: null
} : await delusr.json()
}
})
if (idadmin == null) return m.reply("ID not found")
m.reply(`_Successfully deleted admin panel By Depulzz_`)
}
break
case "deluser": case "delusr": case "dusr": {
if (!args[0]) return m.reply(example("id\n\nuntuk melihat id admin ketik *.listadmin*"))
let cek = await fetch(domain2 + "/api/application/users?page=1", {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey2
}
})
let res2 = await cek.json();
let users = res2.data;
let getid = null
let idadmin = null
await users.forEach(async (e) => {
if (e.attributes.id == args[0] && e.attributes.root_admin == false) {
getid = e.attributes.username
idadmin = e.attributes.id
let delusr = await fetch(domain2 + `/api/application/users/${idadmin}`, {
"method": "DELETE",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey2
}
})
let res = delusr.ok ? {
errors: null
} : await delusr.json()
}
})
if (idadmin == null) return m.reply("ID not found")
m.reply(`_Successfully deleted user By Depulzz_`)
}
break
case "listadmin2": {
let cek = await fetch(domain2 + "/api/application/users?page=1", {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey2
}
})
let res2 = await cek.json();
let users = res2.data;
if (users.length < 1 ) return m.reply("gada jir")
var teks = "𝐋𝐈𝐒𝐓 𝐀𝐃𝐏\n\n"
await users.forEach((i) => {
if (i.attributes.root_admin !== true) return
teks += `𝗡𝗮𝗺𝗲 : ${i.attributes.first_name}
𝗜𝗗 : ${i.attributes.id}\n\n`
})
m.reply(teks)
}
break
case "listmember2": {
let cek = await fetch(domain2 + "/api/application/users?page=1", {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey2
}
})
let res2 = await cek.json();
let users = res2.data;
if (users.length < 1 ) return m.reply("gada jir")
var teks = "𝐋𝐈𝐒𝐓 𝐌𝐄𝐌𝐁𝐄𝐑\n\n"
await users.forEach((i) => {
if (i.attributes.root_admin !== false) return
teks += `𝗡𝗮𝗺𝗲 : ${i.attributes.username}
𝗜𝗗 : ${i.attributes.id}\n\n`
})
m.reply(teks)
}
break
case "listserver2": {
if (global.apikey2.length < 1) return m.reply("Apikey not found")
if (!isOwner) return m.reply(msg.owner)
let f = await fetch(domain2 + "/api/application/servers?page=1", {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey2
}
});
let res = await f.json();
let servers = res.data;
if (servers.length < 1) return m.reply("No bot server available")
let messageText = "𝐋𝐈𝐒𝐓 𝐏𝐀𝐍𝐄𝐋 & 𝐇𝐎𝐒𝐓\n\n"
for (let server of servers) {
let s = server.attributes
let f3 = await fetch(domain2 + "/api/client/servers/" + s.uuid.split`-`[0] + "/resources", {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + capikey2
}
})
let data = await f3.json();
let status = data.attributes ? data.attributes.current_state : s.status;
messageText += `𝗡𝗮𝗺𝗲 : ${s.name}\n`
messageText += `𝗦𝗽𝗲𝗸 : ${s.limits.memory == 0 ? "∞" : s.limits.memory.length > 3 ? s.limits.memory.toString().charAt(1) + "GB" : s.limits.memory.toString().charAt(0) + "GB"}/${s.limits.cpu == 0 ? "∞" : s.limits.cpu.toString() + "%"}\n`
messageText += `𝗜𝗗 : ${s.id}\n\n`
}

messageText += `Total servers is : ${res.meta.pagination.count} server`;
  
  await depulzz.sendMessage(m.chat, { text: messageText }, { quoted: m })
}
break
case "delpanel2": {
if (!isOwner) return m.reply(msg.owner)
if (global.apikey2.length < 1) return m.reply("Apikey not found")
if (!args[0]) return m.reply(example("idservernya\n\nuntuk melihat id server ketik *.listserver*"))
let f = await fetch(domain + "/api/application/servers?page=1", {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey2
}
})
let result = await f.json()
let servers = result.data
let sections = []
for (let server of servers) {
let s = server.attributes
if (args[0] == s.id.toString()) {
sections.push(s.name.toLowerCase())
let f = await fetch(domain2 + `/api/application/servers/${s.id}`, {
"method": "DELETE",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey2,
}
})
let res = f.ok ? {
errors: null
} : await f.json()
}}
let cek = await fetch(domain2 + "/api/application/users?page=1", {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey2
}
})
let res2 = await cek.json();
let users = res2.data;
for (let user of users) {
let u = user.attributes
if (sections.includes(u.username)) {
let delusr = await fetch(domain2 + `/api/application/users/${u.id}`, {
"method": "DELETE",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey2
}
})
let res = delusr.ok ? {
errors: null
} : await delusr.json()
}}
if (sections.length == 0) return m.reply("User not found")
m.reply(`_Successfully deleted panel account By Depulzz`)
}
break
default:
if (budy.startsWith('$')) {
if (!isOwner) return
exec(budy.slice(2), (err, stdout) => {
if(err) return depulzz.sendMessage(m.chat, {text: err.toString()}, {quoted: m})
if (stdout) return depulzz.sendMessage(m.chat, {text: util.format(stdout)}, {quoted: m})
})}

if (budy.startsWith(">")) {
if (!isOwner) return
try {
let evaled = await eval(text)
if (typeof evaled !== 'string') evaled = util.inspect(evaled)
depulzz.sendMessage(m.chat, {text: util.format(evaled)}, {quoted: m})
} catch (e) {
depulzz.sendMessage(m.chat, {text: util.format(e)}, {quoted: m})
}}

if (budy.startsWith('=>')) {
if (!isOwner) return false
function Return(sul) {
sat = JSON.stringify(sul, null, 2)
bang = util.format(sat)
if (sat == undefined) {
bang = util.format(sul)}
return m.reply(bang)}
try {
m.reply(util.format(eval(`(async () => { return ${budy.slice(3)} })()`)))
} catch (e) {
m.reply(String(e))}}

}} catch (e) {
console.log(e)
}}

let file = require.resolve(__filename) 
fs.watchFile(file, () => {
fs.unwatchFile(file)
console.log(chalk.redBright(`Update ${__filename}`))
delete require.cache[file]
require(file)
})