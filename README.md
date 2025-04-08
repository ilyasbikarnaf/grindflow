# 🤖 Discord Daily Scheduler Bot

This is a customizable **Discord bot** that sends a scheduled daily message to a channel of your choice. You can use it to:

- 📌 Post daily coding challenges (like LeetCode)
- 🧠 Share daily quotes, reminders, or affirmations
- 🗓️ Push team standup questions
- 📚 Share tips, tasks, or motivational messages

---

## 💡 Example Use Case: LeetCode Daily Challenge

In this repo, I used the bot to send a **daily LeetCode challenge**. Each message contains:

- ✅ Day number
- 🧩 Challenge name
- 💡 Difficulty
- 🔗 Problem link

Example output:

```
Day 5:
🧩 Challenge Name: Merge Sorted Array
💡 Difficulty: Easy
🔗 Link: https://leetcode.com/problems/merge-sorted-array
```

---

## ⚙️ Setup

### 1. Clone this repo

```bash
git clone https://github.com/your-username/discord-daily-scheduler.git
cd discord-daily-scheduler
```

### 2. Install dependencies

```bash
npm install
```

### 3. Configure your environment variables

Create a `.env` file in the root based on `.env.example`:

```env
TOKEN=your_discord_bot_token
CHANNELID=your_channel_id
CRONTIME=0 9 * * *      # Cron schedule: every day at 9:00 AM
FIRSTDAY=0              # Start index of your messages
LASTDAY=42              # End index (inclusive)
```

> 💡 You can generate a bot token by creating a bot on the [Discord Developer Portal](https://discord.com/developers/applications).

---

## 🧾 File Structure

````
.
├── node_modules
├── src
│   ├── data.ts         # Array of daily messages (customizable)
│   └── index.ts        # Main bot logic
├── .env                # Environment configuration (not committed)
├── .env.example        # Example environment configuration
├── .gitignore
├── package.json
├── package-lock.json
├── tsconfig.json
└── README.md

---

## 🚀 Running the Bot

Make sure your `.env` is set up, then run:

```bash
npm run build && npm run start
````

The bot will post messages daily at the time you set in `CRONTIME`.

---

## 🧠 Customizing Messages

Open `src/data.ts` and replace the message objects with your own or Connect with your database of choice:

```ts
const data = [
  {
    day: 1,
    name: "Contains Duplicate",
    difficulty: "Easy",
    link: "https://leetcode.com/problems/contains-duplicate",
  },
  // ... (additional challenges up to day 49)
];

export default data;
```

You can customize the format in `src/index.ts`.

---

## 🛠 Built With

- [TypeScript](https://www.typescriptlang.org/)
- [Discord.js](https://discord.js.org/)
- [node-cron](https://www.npmjs.com/package/node-cron)

---

## 📜 License

MIT License — use it, customize it, and share it!  
Drop a ⭐ if this helped you build something cool.

---

## 🔥 Pro Tip

This project is super flexible. You can automate:

- Journaling prompts
- Language word-of-the-day
- Daily workouts
- Trivia facts
- And more!

Feel free to fork and make it your own!
