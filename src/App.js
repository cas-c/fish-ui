import React from 'react';
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import queryString from 'query-string';

import { apiHost } from './utils';
import { setUser, setDiscordInfo } from './actions';
import logo from './logo.svg';
import './App.css';
import DiscordDisplay from './components/DiscordDisplay';

const Home = ({ location, setDiscordUser, session, getDiscordInfo }) => {
    const token = queryString.parse(location.search).token;
    if (token) setDiscordUser(token);
    return (
        <div className='App'>
            { token ? <Redirect to={'/'} /> : null }
            <div style={{ 'position': 'absolute', 'left': '1rem' }}><DiscordDisplay /></div>
            <p className="App-intro">
                <a href={`${apiHost}/api/discord/login`}> { session ? 'Logged in! Click to refresh token.' : 'Login through discord' }</a>
            </p>
            <p className="App-intro2">
                <a onClick={() => getDiscordInfo(session)}> { 'Click to get discord data' }</a>
            </p>
        </div>
    );
}


const App = () => (
    <Router>
        <Route exact path='/' component={WrappedHome} />
    </Router>
);

const mapStateToProps = state => {
    const local = localStorage.getItem('fishSession');
    return {
        session: local || state.user
    }
}


const mapDispatchToProps = dispatch => {
    return {
        setDiscordUser: user => {
            localStorage.setItem('fishSession', user);
            dispatch(setUser(user));
        },
        getDiscordInfo: async token => {
            const response = await fetch(`${apiHost}/api/discord/user`, {
                method: 'GET',
                headers: {
                    Authorization: `Bearer ${token}`
                }
            });
            dispatch(setDiscordInfo(await response.json()));
        }
    }
}

const WrappedHome = connect(
    mapStateToProps,
    mapDispatchToProps
)(Home);

export default App;