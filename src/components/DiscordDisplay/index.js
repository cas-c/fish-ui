import React from 'react';
import { connect } from 'react-redux';


const DiscordDisplay = ({ userData }) => (
    <div>
        Some text here.
        { userData && <img alt='' src={userData.avatar} /> }
    </div>
);

const mapStateToProps = state => {
    return {
        userData: state.discordInfo
    };
};

export default connect(
    mapStateToProps,
    ({})
)(DiscordDisplay);