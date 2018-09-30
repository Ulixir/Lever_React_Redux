import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import '../../assets/stylesheets/components/Footer/PrimaryFooter.scss';
import footerBg from '../../assets/images/footer_bg.png';
import { Button } from 'reactstrap';

const PrimaryFooter = props => {
    return (
        <div className="primary-footer">
            <img src={footerBg} width={1024} />
        </div>
    );
}

export default PrimaryFooter;