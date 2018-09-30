import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import '../assets/stylesheets/components/Benefit.scss';
import benefitSalary from '../assets/images/benefit_salary.png';
import benefitVacation from '../assets/images/benefit_vacation.png';
import benefitHealth from '../assets/images/benefit_health.png';
import benefitLunch from '../assets/images/benefit_lunch.png';
import benefitRetirement from '../assets/images/benefit_retirement.png';
import benefitOffice from '../assets/images/benefit_office.png';

const Benefit = props => {
    return (
        <div className="benefit-container">
            <h3>Benefits</h3>
            <div className="row" style={{ marginBottom: '30px' }}>
                <div className="col-md-6">
                    <div className="benefit-item" style={{ marginLeft: '130px' }}>
                        <img src={benefitSalary} />
                        <span>Competitive salary and equity package</span>
                    </div>
                </div>
                <div className="col-md-6">
                    <div className="benefit-item">
                        <img src={benefitVacation} />
                        <span>Flexible vacation time</span>
                    </div>
                </div>
            </div>

            <div className="row" style={{ marginBottom: '30px' }}>
                <div className="col-md-6">
                    <div className="benefit-item" style={{ marginLeft: '130px' }}>
                        <img src={benefitHealth} />
                        <span>Health, dental, and vision plans</span>
                    </div>
                </div>
                <div className="col-md-6">
                    <div className="benefit-item">
                        <img src={benefitLunch} />
                        <span>Daily lunches and snacks</span>
                    </div>
                </div>
            </div>

            <div className="row">
                <div className="col-md-6">
                    <div className="benefit-item" style={{ marginLeft: '130px' }}>
                        <img src={benefitRetirement} />
                        <span>401k retirement plan</span>
                    </div>
                </div>
                <div className="col-md-6">
                    <div className="benefit-item">
                        <img src={benefitOffice} />
                        <span>Convenient location and gorgeous office</span>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Benefit;