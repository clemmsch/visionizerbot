const Discord = require('discord.js')

const client = new Discord.Client()
const command = require('./commands.js')

const config = require('./config.json')


client.on('ready', () => {
    console.log("The bot is ready")

    command(client, ['ping', 'test'], (message) => {
        message.channel.send('Pong!')
    })
})

//Login the client
client.login(config.token)