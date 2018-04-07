import React from 'react';
import { apiHost } from '../../utils';

const DiscordLogin = () => (
    <div className='discord-session-w'>
        <div className='discord-session'>
            <div className='discord-display-wrapper'>
                <div className='discord-display'>
                    <a className='discord-login-link' href={`${apiHost}/api/discord/login`}>Login with Discord</a>
                    <br />
                </div>
            </div>
        </div>
    </div>
);


export default DiscordLogin;
