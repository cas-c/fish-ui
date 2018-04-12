import React from 'react';
import { createAvatarUrl } from '../../utils';

const DiscordDisplay = ({ children, userData }) => (
    <div className='discord-display-wrapper'>
        <div className='discord-display' title={userData.username + '#' + userData.discriminator}>
            <img alt='' src={createAvatarUrl(userData.id, userData.avatar)} />
            <br />
            <span>{userData.username}</span>
            <br />
            {children}
        </div>
    </div>
);

export default DiscordDisplay;
