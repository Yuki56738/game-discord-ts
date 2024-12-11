import dotenv from 'dotenv';
import {Client, Collection, Guild, IntentsBitField, SlashCommandBuilder} from "discord.js";

dotenv.config();

const TOKEN = process.env.DISCORD_TOKEN;
const TEST_GUILD_ID = process.env.GUILD_ID;
const client = new Client({intents: IntentsBitField.Flags.Guilds | IntentsBitField.Flags.GuildMembers | IntentsBitField.Flags.GuildMessages });

client.on('ready', async e => {
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

    if (!TEST_GUILD_ID) {
        console.error('TEST_GUILD_ID is not defined.');
        return;
    }
    // const guild = await client.guilds.fetch(TEST_GUILD_ID);
    const guild = await e.guilds.fetch(TEST_GUILD_ID);
    await guild.commands.set(commands);
    // console.log(guild);
    console.log(guild.name);
});





client.login(TOKEN);