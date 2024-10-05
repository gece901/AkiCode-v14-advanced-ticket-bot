const { ActivityType } = require('discord.js');

module.exports = {
    name: 'GeceTicket',
    once: true,
    execute(client) {
        console.log(`${client.user.tag} olarak giriş yapıldı!`);
        client.user.setPresence({
            activities: [{ name: 'GECE', type: ActivityType.playing, url: 'GECE' }],
            status: 'online',
        });
    },
};
