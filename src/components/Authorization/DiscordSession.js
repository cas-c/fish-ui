import React from 'react';
import { connect } from 'react-redux';
import { setDiscordInfo } from '../../actions';
import { apiHost } from '../../utils';
import DiscordDisplay from '../DiscordDisplay';

class DiscordSession extends React.Component {
    async componentDidMount() {
        const response = await fetch(`${apiHost}/api/discord/user`, {
            method: 'GET',
            headers: {
                Authorization: `Bearer ${this.props.session}`
            }
        });
        this.props.setDiscordInfo(await response.json());
    }
    render() {
        return (
            <div className='discord-session-w'>
                <div className='discord-session'>
                    <DiscordDisplay />
                    <a className='discord-session-refresh' href={`${apiHost}/api/discord/login`}>refresh discord info</a>
                </div>
            </div>
        )
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        setDiscordInfo: info => dispatch(setDiscordInfo(info))
    }
}

export default connect(null, mapDispatchToProps)(DiscordSession);
