import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import '../assets/stylesheets/components/About.scss';
import Team from './Team';
import Life from './Life';

const About = props => {
    return (
        <div className="about-container">
            <h3>Our Values</h3>
            <div className="row">
                <div className="col-md-6">
                    <div className="about-item">
                        <h4>Positive</h4>
                        <p>We see a world where everyone will be able to program, Kite will make a huge difference to
                            all future</p>
                    </div>
                </div>
                <div className="col-md-6">
                    <div className="about-item">
                        <h4>Courage</h4>
                        <p>Our team is fearless and we are not afraid of taking risks!</p>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-md-6">
                    <div className="about-item">
                        <h4>Innovation</h4>
                        <p>"What can we do better?" We love new ideas and coming up with features our users
                            find valuable.</p>
                    </div>
                </div>
                <div className="col-md-6">
                    <div className="about-item">
                        <h4>Collaboration</h4>
                        <p>We  have the autonomy to put our skills to work to best support our team efforts
                            and get things done quickly.</p>
                    </div>
                </div>
            </div>
            <div className="why-we-here">
                <h3>Why we're here?</h3>
                <p>We love doing deeply rechnical work. In contrast to the typical application or website,
                    Kite's work is technically challenging in both depth and breadth. It's our craft and
                    our love. Kite's technical members have trained hard to become skilled engineers. We
                    aren't ready to stop or slow down, and we know that challenging work is the best way
                    to advance our skills. We are playing to our strengths in technology, so we chose to
                    work in a space where there are few others who can do what we do.
                </p>
                <p>Kit doesn't fit the mold of "It's X, but for Y", or "Yet another startup doing Z".
                    Internet-connected programming is a game-changing idea! Everyone is excitetd for this
                    to happen, and Kite is the only company working on it.
                </p>
            </div>
            <div className="poster">
                <h3>"It's great to be building a product where</h3>
                <h3>I'm the target demographic"</h3>
                <p>~ Daniel H.</p>
            </div>
            <div className="who-we-are">
                <h3>Who we are?</h3>
                <p>As a member of Kite, you will be working alongside world-class engineers and team
                    members. We intend to continue investing resources in building a high caliber team.
                    We have created a fantastic work environment that we love working in and we think
                    you will too. Come along for the adventure and grow with us!
                </p>
            </div>
            <Team />
            <Life />
        </div>
    );
}

export default About;