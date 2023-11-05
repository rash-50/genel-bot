const { ActivityType, Events } = require("discord.js")
module.exports = {
    name: Events.ClientReady,
    once: true,
    execute(client) {
        let activities = [`discord.gg/paynet`, `${client.user.username}` , `discord.gg/paynet`], i = 0;
        setInterval(() => client.user.setActivity({ name: `${activities[i++ % activities.length]}`, type: ActivityType.Listening }), 22000);
    }
};