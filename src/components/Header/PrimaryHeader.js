import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import '../../assets/stylesheets/components/Header/PrimaryHeader.scss';
import headerBg from '../../assets/images/jobs-friend.png';

const PrimaryHeader = props => {
    return (
        <div className="primary-header">
            <img src={headerBg} width={1024} />
        </div>
    );
}

export default PrimaryHeader;