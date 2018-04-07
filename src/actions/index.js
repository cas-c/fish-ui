export const setToken = user => {
    return { type: 'SET_SESSION', user };
};

export const setDiscordInfo = info => {
    return { type: 'SET_DISCORD_INFO', info };
}
