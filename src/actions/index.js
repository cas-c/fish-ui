export const setUser = user => {
    return { type: 'GET_USER_DATA', user };
};

export const setDiscordInfo = info => {
    return { type: 'SET_DISCORD_INFO', info };
}
