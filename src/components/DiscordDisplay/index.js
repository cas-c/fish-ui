import React from 'react';
import { connect } from 'react-redux';
import './index.css';


const DiscordDisplay = ({ userData }) => (
    <div className='discord-display-wrapper'>
        <div className='discord-display' title={userData.username + '#' + userData.discriminator}>
            <img alt='' src={userData.avatar} />
            <br />
            <span>{userData.username}</span>
            <br />
        </div>
    </div>
);

const DiscordDisplayWrapper = ({ userData }) => (userData.avatar && <DiscordDisplay userData={userData} />) || null;

const mapStateToProps = state => {
    return {
        userData: state.discordInfo
    };
};

export default connect(
    mapStateToProps,
    ({})
)(DiscordDisplayWrapper);