import React from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import queryString from 'query-string';

import { setToken } from '../../actions';

import Authorization from '../Authorization';


const Home = ({ location, session, setSession }) => {
    const token = queryString.parse(location.search).token;
    if (token) {
        setSession(token).then(() => { return <Redirect to={'/'} /> });
    }
    return (
        <div>
            <Authorization session={session} />
        </div>
    )
}

const mapStateToProps = state => {
    const ls = localStorage.getItem('fishSession');
    return {
        session: state.session || ls
    };
};

const mapDispatchToProps = dispatch => {
    return {
        setSession: async session => {
            localStorage.setItem('fishSession', session);
            await dispatch(setToken((session)));
        }
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Home);
