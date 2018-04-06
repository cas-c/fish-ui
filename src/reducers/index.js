import { combineReducers } from 'redux';

const user = (state = '', action) => {
    if (action.type === 'GET_USER_DATA') {
        return action.user ? action.user : '';
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
    user,
    discordInfo
});
