import React from 'react';

import DiscordLogin from './DiscordLogin';
import DiscordSession from './DiscordSession';

const Authorization = ({ session }) => {
    if (session) {
        return <DiscordSession session={session} />
    }
    return <DiscordLogin />;
}

export default Authorization;
