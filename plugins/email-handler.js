
const {PROXY_ADDR , PROXY_USERNAME ,PROXY_PASSWORD , captchakey,vaksmsapikey,koopechkapikey} = require("../config.json")
const Kopeechka = require('@sadzurami/kopeechka-store')
const colors = require('colors');
const kop = new Kopeechka(koopechkapikey)
async function emailGenerator() {
    if(!koopechkapikey) {
console.log("Config Dosyasında Kopeechka Api Key Bulunamadı! Bu Zorunlu Bir İhtiyaçtır. Almak İçin: https://kopeechka.store/".red)
console.log("İşlem Otomatik Olarak İptal Ediliyor!".red)
process.exit(1)
    } else{
    const address = await kop.getAddress({ website: 'discord.com',   domains: ['outlook.com','hotmail.com'],})
   return address;
}
}


module.exports = { emailGenerator }
