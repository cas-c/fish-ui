import React from 'react';
import { connect } from 'react-redux';
import './index.css';
import DiscordDisplay from './IndividualDiscordDisplay';

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