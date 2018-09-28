import React from 'react';
import { IndexLink } from 'react-router';
import '../assets/stylesheets/components/HomePage.scss';

class HomePage extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="main-container">
                <h1>Home Page</h1>
            </div>
        );
    }
}

export default HomePage;
