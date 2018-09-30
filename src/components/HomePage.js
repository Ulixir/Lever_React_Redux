import React from 'react';
import { IndexLink } from 'react-router';
import '../assets/stylesheets/components/HomePage.scss';
import About from './About';
import Benefit from './Benefit';

class HomePage extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="home-container">
                <div className="mission-block">
                    <h3>Our Mission</h3>
                    <p>Kite is using machine learning to automate away the tedious parts of</p>
                    <p>programming so software developers can revolutionize the world faster.</p>
                </div>
                <About />
                <Benefit />
            </div>
        );
    }
}

export default HomePage;
