import { combineReducers } from 'redux';

const user = (state = '', action) => {
    if (action.type === 'GET_USER_DATA') {
        return action.user ? action.user : '';
    }
    return state;
}

export default combineReducers({
    user
});
