import React from 'react';
import { apiHost } from '../../utils';

const DiscordLogin = () => (
    <div>
        <a href={`${apiHost}/api/discord/login`}>Login with Discord</a>
    </div>
);


export default DiscordLogin;
