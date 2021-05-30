import React from 'react';
import './HomeContent.css';
import bgImage from '../../images/bg.jpg';
import { Link } from 'react-router-dom';
import customStyles from '../Products/Product/Product.module.css';

const { textCrimson } = customStyles;

const HomeContent = () => {
    return (
        <div className="home-section container-fluid">
            <div className="row m-0 p-0">
                <div className="col-md-6 home-first-div m-0 p-0">
                    <img className="img-fluid" src={bgImage} alt="" />
                </div>
                <div className="col-md-6 home-second-div text-white align-self-center">
                    <div className="p-5">
                        <h1 className="text-center pt-2">Welcome to <span className={`${textCrimson}`}>PC ACE</span></h1>
                        <p className="my-3">Featuring premium build materials and absolutely feature packed to the brim, our Vapor  series notebooks now come equipped with next generation RTX 3060/3070 graphics cards for pure unfiltered performance.</p>
                        <p>Best in class thermal performance and 10th gen 8 core processors as standard are some of the hallmarks of our flagship range, along with beautiful new QHD (1440P) 165hz ultrasharp buttery smooth displays.</p>

                        <div className="text-center">
                            <Link to="/products">
                                <button className="btn btn-brand text-uppercase">Explore Now!</button>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HomeContent;