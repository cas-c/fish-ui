
let host;
const hostname = window && window.location && window.location.hostname;

if (hostname === 'sleepy.cup.fish') {
    host = 'https://fish.witch.cafe';
} else {
    host = 'http://localhost:3001';
}

export const apiHost = host;

export const createAvatarUrl = (id, av) => `https://cdn.discordapp.com/avatars/${id}/${av}.png`;
