import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import '../../assets/stylesheets/components/Header/PrimaryHeader.scss';
import headerBg from '../../assets/images/jobs-friend.png';
import logo from '../../assets/images/jobs-friend.png';
import { Button } from 'reactstrap';
import { Link } from 'react-router-dom';

const PrimaryHeader = props => {
    return (
        <div className="primary-header">
            <div className="header__logo">
                <img src={headerBg} width={1024} />
                <div className="logo" />
                <h2 className="text1">driven. adventurous.</h2>
            </div>
            <h3 className="text2">We're team of developers changing the way people code.</h3>
            <h3 className="text2">Join us on our request</h3>
            <Button color="primary" className="btn-apply"><a href="https://jobs.lever.co/kite">APPLY</a></Button>
        </div>
    );
}

export default PrimaryHeader;