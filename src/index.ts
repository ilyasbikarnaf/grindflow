import "dotenv/config";
import { CronJob } from "cron";
import { ChannelType, Client, GatewayIntentBits } from "discord.js";
import data from "./data";

const client = new Client({
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.MessageContent,
    GatewayIntentBits.GuildMembers,
  ],
});

client.once("ready", () => {
  const channel = client.channels.cache.get(process.env.CHANNELID!);
  let days: number = Number(process.env.FIRSTINDEX!);

  if (channel && channel.type === ChannelType.GuildText) {
    const job = CronJob.from({
      cronTime: process.env.CRONTIME!,
      onTick: function () {
        let challenge = data[days];
        days++;

        channel.send(
          `
          Day ${days}:
            🧩 Challenge Name: ${challenge.name}
            💡 Difficulty: ${challenge.difficulty}
            🔗 Link: ${challenge.link}`
        );
        if (days === Number(process.env.LASTINDEX!)) {
          job.stop();
        }
      },
      start: true,
      timeZone: "Europe/London",
    });
  }
});

client.login(process.env.TOKEN);
