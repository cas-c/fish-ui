export const setToken = session => {
    return { type: 'SET_SESSION', session };
};

export const setDiscordInfo = info => {
    return { type: 'SET_DISCORD_INFO', info };
}

export const updateUserTimezone = timezone => {
    return { type: 'SET_USER_TIMEZONE', timezone };
}

export const updateUsers = users => {
    return { type: 'SET_USERS', users };
}
