const { Client, GatewayIntentBits } = require('discord.js');

const client = new Client({
    intents: [GatewayIntentBits.Guilds]
});

client.once('ready', () => {
    console.log(`Bot ligado como ${client.user.tag}`);
});

client.login('MTQ4NTI4NTIzODczMTk2NDQ4Ng.GJbCmg.FQpbodq_T1yu1scusRsmA0lMoeQlMNVzEIHwmQ');