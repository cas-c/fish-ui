import React from 'react';
import { connect } from 'react-redux';
import TimezonePicker from 'react-timezone';

import { apiHost } from '../../utils';
import { updateUserTimezone } from '../../actions';

class UserTimezone extends React.Component {
    async componentDidMount() {
        const response = await fetch(`${apiHost}/api/user/timezone`, {
            method: 'GET',
            headers: {
                Authorization: `Bearer ${this.props.session}`
            }
        });
        this.props.setUserTimezone((await response.json()).timezone);
    }
    render() {
        return (
            <div>
                <TimezonePicker 
                    style={{ width: '25rem' }}
                    value={this.props.timezone}
                    onChange={this.props.setUserTimezone}
                    inputProps={{
                        placeholder: 'Select Timezone...',
                        name: 'timezone',
                    }}
                />
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        session: state.session,
        timezone: state.userTimezone
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        setUserTimezone: timezone => {
            if (!timezone) return;
            fetch(`${apiHost}/api/user/timezone`, {
                method: 'POST',
                headers: {
                    Authorization: `Bearer ${ownProps.session}`
                },
                body: {
                    timezone: JSON.stringify(timezone)
                }
            });
            dispatch(updateUserTimezone(timezone));
        }
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(UserTimezone);
