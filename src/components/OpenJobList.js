import React from 'react';
import { IndexLink } from 'react-router';
import '../assets/stylesheets/components/OpenJobList.scss';
import { Button } from 'reactstrap';

class OpenJobList extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="open-job-list-container">
                <h3>Current Openings</h3>
                <div className="job-item">
                    <h4>ENGINEERING CORE ENGINEERING</h4>
                    <div className="separator" />
                    <div className="row" style={{ margin: '0 auto', width: '80%' }}>
                        <div className="col-md-9">
                            <p className="job-title">Senior Software Engineer</p>
                            <p className="job-availability">SANFRANCISCO FULL-TIME</p>
                        </div>
                        <div className="col-md-3">
                            <Button color="primary" className="btn-apply">APPLY</Button>
                        </div>
                    </div>
                    <div className="row" style={{ margin: '0 auto', width: '80%' }}>
                        <div className="col-md-9">
                            <p className="job-title">Software Engineer, Full Stack</p>
                            <p className="job-availability">SANFRANCISCO FULL-TIME</p>
                        </div>
                        <div className="col-md-3">
                            <Button color="primary" className="btn-apply">APPLY</Button>
                        </div>
                    </div>
                </div>

                <div className="job-item">
                    <h4>ENGINEERING MACHINE LEARNING</h4>
                    <div className="separator" />
                    <div className="row" style={{ margin: '0 auto', width: '80%' }}>
                        <div className="col-md-9">
                            <p className="job-title">Senior Machine Learning</p>
                            <p className="job-availability">SANFRANCISCO FULL-TIME</p>
                        </div>
                        <div className="col-md-3">
                            <Button color="primary" className="btn-apply">APPLY</Button>
                        </div>
                    </div>
                    <div className="row" style={{ margin: '0 auto', width: '80%' }}>
                        <div className="col-md-9">
                            <p className="job-title">Software Engineer, Program</p>
                            <p className="job-availability">SANFRANCISCO FULL-TIME</p>
                        </div>
                        <div className="col-md-3">
                            <Button color="primary" className="btn-apply">APPLY</Button>
                        </div>
                    </div>
                </div>

                <div className="job-item">
                    <h4>PRODUCT</h4>
                    <div className="separator" />
                    <div className="row" style={{ margin: '0 auto', width: '80%' }}>
                        <div className="col-md-9">
                            <p className="job-title">Lead Product Designer</p>
                            <p className="job-availability">SANFRANCISCO CONTRACT</p>
                        </div>
                        <div className="col-md-3">
                            <Button color="primary" className="btn-apply">APPLY</Button>
                        </div>
                    </div>
                </div>

                <div className="job-item">
                    <h4>RECRUITING</h4>
                    <div className="separator" />
                    <div className="row" style={{ margin: '0 auto', width: '80%' }}>
                        <div className="col-md-9">
                            <p className="job-title">Technical Sourcer</p>
                            <p className="job-availability">SANFRANCISCO FULL-TIME</p>
                        </div>
                        <div className="col-md-3">
                            <Button color="primary" className="btn-apply">APPLY</Button>
                        </div>
                    </div>
                </div>

                <div className="contact">
                    <h4>Don't see the right role, but still interested in working</h4>
                    <h5>Drop us a line at <span style={{ color: '#0084bf' }}>flywithus@kite.com</span></h5>
                </div>
            </div>
        );
    }
}

export default OpenJobList;
