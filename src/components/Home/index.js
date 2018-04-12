import React from 'react';
import { connect } from 'react-redux';
import queryString from 'query-string';

import { setToken } from '../../actions';

import Authorization from '../Authorization';
import UserTimezone from '../UserTimezone';
import UsersDisplay from '../UsersDisplay';

class Home extends React.Component {
    componentDidMount() {
        const token = queryString.parse(this.props.location.search).token;
        if (token) this.props.setSession(token);
    }
    render() {
        return (
            <div>
                <Authorization session={this.props.session} />
                <br />
                { this.props.session && <UserTimezone /> }
                <br />
                { this.props.session && <UsersDisplay /> }
            </div>
        );
    }
}

const mapStateToProps = (state, ownProps) => {
    return {
        session: state.session
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
