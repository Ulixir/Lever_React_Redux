import React from 'react';
import { NavLink } from 'react-router-dom';
import '../assets/stylesheets/components/Team.scss';
import face01 from '../assets/images/face_01.png';
import face02 from '../assets/images/face_02.png';
import face03 from '../assets/images/face_03.png';
import face04 from '../assets/images/face_04.png';
import face05 from '../assets/images/face_05.png';
import face06 from '../assets/images/face_06.png';
import face07 from '../assets/images/face_07.png';
import face08 from '../assets/images/face_08.png';
import face09 from '../assets/images/face_09.png';
import face10 from '../assets/images/face_10.png';
import face11 from '../assets/images/face_11.png';
import face12 from '../assets/images/face_12.png';
import face13 from '../assets/images/face_13.png';
import face14 from '../assets/images/face_14.png';

class Team extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="team-container">
                <h3>Meet Our Team</h3>
                <div className="row" style={{ marginBottom: '50px' }}>
                    <div className="col-md-4">
                        <div className="person">
                            <img src={face01} />
                            <h4>Adam Smith</h4>
                            <h5>Founder</h5>
                            <p>MIT, Xobnni (Y Combinator '06),
                                Sold shareware online at age 13,
                                and long-time Burner.
                            </p>
                            <NavLink to="#" exact activeClassName="active" style={{ marginRight: '10px' }}>homepage</NavLink>
                            <NavLink to="#" exact activeClassName="active">linkedin</NavLink>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="person">
                            <img src={face02} />
                            <h4>Damian Ancukiewicz</h4>
                            <h5>Engineering</h5>
                            <p>Columbia, UCLA, cofounder of
                                ttynow and Ember, Google,
                                enjoys being outdoors and
                            </p>
                            <NavLink to="#" exact activeClassName="active">linkedin</NavLink>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="person">
                            <img src={face03} />
                            <h4>Brendan McDonnell</h4>
                            <h5>Operations</h5>
                            <p>Northeastern, airbnb superhost,
                                a native Floridian, dog dad to
                                #teddybeaglebark
                            </p>
                            <NavLink to="#" exact activeClassName="active">linkedin</NavLink>
                        </div>
                    </div>
                </div>

                <div className="row" style={{ marginBottom: '50px' }}>
                    <div className="col-md-4">
                        <div className="person">
                            <img src={face04} />
                            <h4>Dianna Chen</h4>
                            <h5>Recruiting</h5>
                            <p>UC San Diego, Wish, Workday,
                                non-profit healthcare, omakase
                                fiend, enjoys traveling, and
                                exploring the great outdoors!
                            </p>
                            <NavLink to="#" exact activeClassName="active">linkedin</NavLink>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="person">
                            <img src={face05} />
                            <h4>Dane Bratz</h4>
                            <h5>Engineering</h5>
                            <p>Standford, Bering Sea Fishing,
                                cofounder of Skillit Cooking,
                                snowboard bum, likes outside
                                activities.
                            </p>
                            <NavLink to="#" exact activeClassName="active">linkedin</NavLink>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="person">
                            <img src={face06} />
                            <h4>Wathid</h4>
                            <h5>Engineering</h5>
                            <p>MIT and Ph.D. from UIUC, Apple,
                                Thailand native, enjoys martial
                                arts (jujutsu and Muay Thai ),
                                cooking, and gardening.
                            </p>
                            <NavLink to="#" exact activeClassName="active">linkedin</NavLink>
                        </div>
                    </div>
                </div>

                <div className="row" style={{ marginBottom: '50px' }}>
                    <div className="col-md-4">
                        <div className="person">
                            <img src={face07} />
                            <h4>Benoite Yver</h4>
                            <h5>Marketing</h5>
                            <p>Georgia Tech and Harvard,
                                previously a systems and
                                software engineer, strategy
                                consulting, and in marketing for
                                tech start ups on their hockey
                                stick journey
                            </p>
                            <NavLink to="#" exact activeClassName="active">linkedin</NavLink>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="person">
                            <img src={face08} />
                            <h4>Ianto Xi</h4>
                            <h5>Engineering</h5>
                            <p>UC Berkeley, bioinformatics
                                research at CHOR! and UCSF,
                                you can find him rock climbing
                                or volunteering at a free clinic in
                            </p>
                            <NavLink to="#" exact activeClassName="active">linkedin</NavLink>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="person">
                            <img src={face09} />
                            <h4>Cédric Néhémie</h4>
                            <h5>Engineering</h5>
                            <p>ISABA Besancoh, cofounder, web
                                developer, game and visual
                                designer, in his spare time he
                                plays guitar, and enjoys reading
                            </p>
                            <NavLink to="#" exact activeClassName="active">linkedin</NavLink>
                        </div>
                    </div>
                </div>

                <div className="row" style={{ marginBottom: '50px' }}>
                    <div className="col-md-4">
                        <div className="person">
                            <img src={face10} />
                            <h4>Tarak Upadhyaya</h4>
                            <h5>Engineering</h5>
                            <p>MIT, Dropbox (previously
                                interned when team was only 3
                                people!), Counsy!, and
                                motorcycles.
                            </p>
                            <NavLink to="#" exact activeClassName="active">linkedin</NavLink>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="person">
                            <img src={face11} />
                            <h4>Juan Lozano</h4>
                            <h5>Engineering</h5>
                            <p>Stanford, cofounder of Blusofa,
                                InsideMaps, basketball, tennis,
                                music, and mathematics of all
                                sorts
                            </p>
                            <NavLink to="#" exact activeClassName="active">linkedin</NavLink>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="person">
                            <img src={face12} />
                            <h4>Hrysoula Papadakis</h4>
                            <h5>Engineering</h5>
                            <p>Stanford, startups, Counsyl, likes
                                to read in her spare time, and all
                                things brunch!
                            </p>
                            <NavLink to="#" exact activeClassName="active">linkedin</NavLink>
                        </div>
                    </div>
                </div>

                <div className="row">
                    <div className="col-md-6">
                        <div className="person" style={{ 'width': '65%', 'margin': '0 auto' }}>
                            <img src={face13} />
                            <h4>Daniel Hung</h4>
                            <h5>Product</h5>
                            <p>MIT, Deutsche Bank, Homejoy,
                                sports, music, and
                            </p>
                            <NavLink to="#" exact activeClassName="active">linkedin</NavLink>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="person" style={{ 'width': '65%', 'margin': '0 auto' }}>
                            <img src={face14} />
                            <h4>NAman Bharadwaj</h4>
                            <h5>Engineering</h5>
                            <p>CMU, FB, Google, Affirm,
                                program analysis enthusiast,
                                building keyboards and learning
                            </p>
                            <NavLink to="#" exact activeClassName="active">linkedin</NavLink>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Team;
