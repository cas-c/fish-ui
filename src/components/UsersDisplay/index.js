import React from 'react';
import { connect } from 'react-redux';
import './index.css';

import { apiHost } from '../../utils';
import { updateUsers } from '../../actions';

import UserDisplay from './UserDisplay';


class UsersDisplay extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            users: []
        }
    }
    async componentDidMount() {
        const response = await fetch(`${apiHost}/api/user/all`, {
            method: 'GET',
            headers: {
                Authorization: `Bearer ${this.props.session}`
            }
        });
        const users = await response.json();
        if (!users || users === 'undefined') return;
        this.setState({ users });
        this.props.setUsers(users, this.props.session, true);
    }
    render() {
        return (
            <div>
                <h3>All users</h3>
                <div className='all-users'>
                    { this.state.users.map((u,i) => <UserDisplay user={u} key={`user${i}`}/>) }
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        session: state.session
    }
}

const mapDispatchToProps = dispatch => {
    return {
        setUsers: (users, session, init) => {
            dispatch(updateUsers(users));
        }
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(UsersDisplay);
