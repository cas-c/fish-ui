import React from 'react';
import { connect } from 'react-redux';
import TimezonePicker from 'react-timezone';

import { apiHost } from '../../utils';
import { updateUserTimezone } from '../../actions';


class UserTimezone extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            timezone: ''
        }
    }
    async componentDidMount() {
        const response = await fetch(`${apiHost}/api/user/timezone`, {
            method: 'GET',
            headers: {
                Authorization: `Bearer ${this.props.session}`
            }
        });
        const timezone = (await response.json()).timezone;
        if (!timezone || timezone === 'undefined') return;
        this.setState({ timezone });
        this.props.setUserTimezone(timezone, this.props.session, true);
    }
    setTimezoneWrapper = timezone => {
        this.setState({ timezone });
        this.props.setUserTimezone(timezone, this.props.session);
    }
    render() {
        return (
            <div>
                <h3>Your timezone</h3>
                <TimezonePicker
                    style={{ width: '25rem' }}
                    value={this.state.timezone}
                    onChange={this.setTimezoneWrapper}
                    inputProps={{
                        placeholder: 'Select / search your timezone...',
                        name: 'timezone',
                    }}
                />
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        session: state.session,
        timezone: state.userTimezone
    }
}

const mapDispatchToProps = dispatch => {
    return {
        setUserTimezone: (timezone, session, init) => {
            if (!timezone) return;
            if (!init) {
                fetch(`${apiHost}/api/user/timezone`, {
                    method: 'POST',
                    headers: {
                        Authorization: `Bearer ${session}`,
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({ timezone }),
                    mode: 'cors'
                });
            }
            dispatch(updateUserTimezone(timezone));
        }
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(UserTimezone);
