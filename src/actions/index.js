export const setToken = session => {
    return { type: 'SET_SESSION', session };
};

export const setDiscordInfo = info => {
    return { type: 'SET_DISCORD_INFO', info };
}
