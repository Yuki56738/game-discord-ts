import dotenv from 'dotenv';
import {Client, Collection, SlashCommandBuilder} from "discord.js";

dotenv.config();

const TOKEN = process.env.DISCORD_TOKEN;
const TEST_GUILD_ID = process.env.GUILD_ID;

const client = new Client({intents: 7796 });

client.on('ready', e => {
    console.log(`Logged in as ${client.user?.tag}!`);
    let commands = [];
    const comandPing = new SlashCommandBuilder()
        .setName('ping')
        .setDescription('Replies with Pong!');
    commands.push(comandPing.toJSON());
    client.application?.commands.set(commands);
})



client.login(TOKEN);