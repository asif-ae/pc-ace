import React from 'react';
import './HomeContent.css';
import bgImage from '../../images/bg.jpg';
import { Link } from 'react-router-dom';

const HomeContent = () => {
    return (
        <div className="home-section container-fluid">
            <div className="row">
                <div className="col-md-6 home-first-div">
                    <img className="img-fluid" src={bgImage} alt="" />
                </div>
                <div className="col-md-6 p-5 home-second-div text-white align-self-center">
                    <h1 className="text-center pt-2">Welcome to e-shop</h1>
                    <p className="my-3">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugiat asperiores, inventore ab voluptates itaque ut illo, tempora est eum doloribus consequatur, quaerat expedita architecto. Veritatis adipisci eum repudiandae magnam harum blanditiis eius tempore exercitationem dicta, accusantium laudantium cum delectus distinctio iste perspiciatis? Earum dolorem assumenda omnis corrupti necessitatibus itaque quaerat?</p>

                    <div className="text-center">
                        <Link to="/products">
                            <button className="btn btn-brand">Explore</button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HomeContent;