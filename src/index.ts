import "dotenv/config";

import {
  Client,
  Events,
  GatewayIntentBits,
  Message,
  TextChannel,
} from "discord.js";

const client = new Client({
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.MessageContent,
  ],
});

client.once(Events.ClientReady, (readyClient: any) => {
  console.log(`Ready! Logged in as ${readyClient.user.tag}`);
});

client.on(Events.MessageCreate, (message: Message) => {
  if (message.author.bot) return;

  console.log(message.content);
  message.reply("Hello World");
});

client.on(Events.MessageReactionAdd, (reaction: any, user: any) => {
  console.log(reaction, user);
});

// Listen for a webhook
setTimeout(() => {
  console.log("time at");
  // Get a challel from the given id
  const channel = client.channels.cache.get(
    "1026162696040755211"
  ) as TextChannel;
  channel.send("Hello World");
}, 5 * 1000);

client.login(process.env.DISCORD_TOKEN);

console.clear();
