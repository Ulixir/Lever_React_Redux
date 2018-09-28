import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import '../assets/stylesheets/components/PrimaryLayout.scss';
import HomePage from './HomePage';

const PrimaryLayout = props => {
    return (
        <div className="primary-layout">
            {/* <PrimaryHeader /> */}
            <main>
                <Switch>
                    <Route path="/" exact component={HomePage} />
                    <Redirect to="/" />
                </Switch>
            </main>
      </div>
    );
}

export default PrimaryLayout;