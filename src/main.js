const { Client, Events, GatewayIntentBits, ActivityType } = require("discord.js");
const { Token } = require("./data/secrets.json");

const botStatus = "this world shall one day shatter";
const client = new Client({ intents: [GatewayIntentBits.Guilds] });

client.once(Events.ClientReady, (readyClient) => {
     readyClient.user.setPresence({
          activities: [{ name: botStatus, type: ActivityType.Custom }],
          status: "dnd"
     });
});

client.login(Token);
