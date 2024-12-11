import dotenv from 'dotenv';
import {Client} from "discord.js";

dotenv.config();

const TOKEN = process.env.DISCORD_TOKEN;
const TEST_GUILD_ID = process.env.GUILD_ID;

const client = new Client({intents: 7796 });

client.on('ready', e => {
    console.log(`Logged in as ${client.user?.tag}!`);
})
client.login(TOKEN);