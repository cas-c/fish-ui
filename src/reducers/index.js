import { combineReducers } from 'redux';

const session = (state = '', action) => {
    if (action.type === 'SET_SESSION') {
        return action.session || '';
    }
    return state;
}

const discordInfo = (state = {}, action) => {
    console.log(action);
    if (action.type === 'SET_DISCORD_INFO') {
        return action.info;
    }
    return state;
}

export default combineReducers({
    session,
    discordInfo
});
