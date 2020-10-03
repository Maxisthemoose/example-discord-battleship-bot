const config = require("./config.json");
const client = new (require("discord.js").Client);
const { DiscordBattleShip } = require("discord-battleship");

const BattleShip = new DiscordBattleShip({ 
    embedColor: "RED",
    prefix: "?",
});

client.on("ready", () => console.log("Ready!"));

client.on("message", async (message) => {
    if (message.content.toLowerCase().startsWith("?battleship"))
        await BattleShip.createGame(message);
});

client.login(config.token);