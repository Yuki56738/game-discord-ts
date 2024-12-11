import dotenv from 'dotenv';
import {Client, Collection, Guild, SlashCommandBuilder} from "discord.js";

dotenv.config();

const TOKEN = process.env.DISCORD_TOKEN;
const TEST_GUILD_ID = process.env.GUILD_ID;

const client = new Client({intents: 7796 });

client.on('ready', async () => {
    console.log(`Logged in as ${client.user?.tag}!`);
    if (!client.application) {
        console.error("Client application is not available.");
        return;
    }

    const commands = [];
    const commandPing = new SlashCommandBuilder()
        .setName('ping')
        .setDescription('Replies with Pong!');
    commands.push(commandPing.toJSON());

    const guild = client.guilds.cache.get(TEST_GUILD_ID!); // 特定のギルドIDを指定
    if (guild) {
        await guild.commands.set(commands);
        console.log("Slash commands have been set.");
    } else {
        console.error("Guild not found.");
    }
});





client.login(TOKEN);