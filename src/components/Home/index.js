import React from 'react';
import { connect } from 'react-redux';
import queryString from 'query-string';

import { setToken } from '../../actions';

import Authorization from '../Authorization';


const Home = ({ location, session, setSession }) => {
    const token = queryString.parse(location.search).token;
    if (token) {
        setSession(token);
    }
    return (
        <div>
            <Authorization session={session} />
        </div>
    )
}

const mapStateToProps = (state, ownProps) => {
    const token = queryString.parse(ownProps.location.search).token;
    let ls;
    if (token) {
        ls = token;
        window.history.pushState('', '', '/');
    } else {
        ls = localStorage.getItem('fishSession');
    }
    return {
        session: state.session || ls
    };
};

const mapDispatchToProps = dispatch => {
    return {
        setSession: session => {
            localStorage.setItem('fishSession', session);
            dispatch(setToken(session));
        }
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Home);
