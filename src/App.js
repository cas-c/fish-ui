import React from 'react';
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import queryString from 'query-string';

import { setUser } from './actions';
import logo from './logo.svg';
import './App.css';

const Home = ({ location, setDiscordUser, session }) => {
    const token = queryString.parse(location.search).token;
    if (token) setDiscordUser(token);
    return (
        <div className='App'>
            { token ? <Redirect to={'/'} /> : null }
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <h1 className="App-title">Welcome to React</h1>
            </header>
            <p className="App-intro">
                <a href="/api/discord/login"> { session ? 'Logged in! Click to refresh token.' : 'Login through discord' }</a>
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
        }
    }
}

const WrappedHome = connect(
    mapStateToProps,
    mapDispatchToProps
)(Home);

export default App;