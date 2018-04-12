import React from 'react';

const UserDisplay = ({ user }) => (
    <div>
        {user.discord.username}
    </div>
);

export default UserDisplay;