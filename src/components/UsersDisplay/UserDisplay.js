import React from 'react';
import DiscordDisplay from '../DiscordDisplay/IndividualDiscordDisplay';
import TimeDisplay from './TimeDisplay';

const UserDisplay = ({ user }) => (
    <div className='user-display'>
        <DiscordDisplay userData={user.discord}>
            { (user.timezone && <TimeDisplay timezone={user.timezone} />) || <div className='time-display'>No timezone recorded!</div> }
        </DiscordDisplay>
    </div>
);

export default UserDisplay;