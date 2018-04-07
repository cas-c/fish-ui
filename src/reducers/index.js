import { combineReducers } from 'redux';

const defaultSession = localStorage.getItem('fishSession') || '';

const session = (state = defaultSession, action) => {
    if (action.type === 'SET_SESSION') {
        window.history.pushState('', '', '/');
        return action.session || defaultSession || '';
    }
    return state;
}

const discordInfo = (state = {}, action) => {
    if (action.type === 'SET_DISCORD_INFO') {
        return action.info;
    }
    return state;
}

export default combineReducers({
    session,
    discordInfo
});
