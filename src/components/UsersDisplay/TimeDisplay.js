import React from 'react';
import moment from 'moment';
import Moment from 'react-moment';
import 'moment-timezone';

const TimeDisplay = ({ timezone }) => (
    <div className='time-display'>
        <Moment format='h:mmA (z)'>{moment().tz(timezone)}</Moment>
    </div>
);

export default TimeDisplay;