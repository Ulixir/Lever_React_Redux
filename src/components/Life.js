import React from 'react';
import ReactDOM from 'react-dom';
import { NavLink } from 'react-router-dom';
import '../assets/stylesheets/components/Life.scss';
import carousel01 from '../assets/images/carousel_01.png';
import carousel02 from '../assets/images/carousel_02.png';
import carousel03 from '../assets/images/carousel_03.png';
import 'slick-carousel/slick/slick.min.js';
import 'slick-carousel/slick/slick-theme.css';
import 'slick-carousel/slick/slick.css';

class Life extends React.Component {
    constructor(props) {
        super(props);
        // this.slider = React.createRef();
    }

    componentDidMount() {
         $(this.slider).slick({
             centerMode: true,
             centerPadding: '60px',
             slidesToShow: 3,
             accessibility: true,
             autoplay: true,
             focusOnSelect: true,
             prevArrow: "<img class='slick-prev' src='/images/left_arrow.png'>",
             nextArrow: "<img class='slick-next' src='/images/right_arrow.png'>",
             responsive: [{
                breakpoint: 768,
                settings: {
                    arrows: false,
                    centerMode: true,
                    centerPadding: '40px',
                    slidesToShow: 3
                }
            },
            {
                breakpoint: 480,
                settings: {
                    arrows: false,
                    centerMode: true,
                    centerPadding: '40px',
                    slidesToShow: 1
                }
            }]
         });
    }

    render() {
        return (
            <div className="life-container">
                <h3>Life at Kite</h3>
                <div className="slider" ref={node => this.slider = node}>
                    <div>
                        <img src={carousel01} />
                    </div>
                    <div>
                        <img src={carousel02} />
                    </div>
                    <div>
                        <img src={carousel03} />
                    </div>
                    <div>
                        <img src={carousel01} />
                    </div>
                    <div>
                        <img src={carousel01} />
                    </div>
                </div>
            </div>
        );
    }
}

export default Life;
