import React from 'react';

import './style.css';
import {
    BrowserRouter as Router,
    Link,
    Route,
    Switch,
  } from 'react-router-dom';
 

const Home = () => {
    const url="https://i.ibb.co/84CQx44/kisspng-hotel-manager-child-apps-hotel-illustration-hotels-5a7a4b87c57cd2-0897105415179641678089.png"
    return (
        <div className="container">
            <div className="row justify-content-center align-items-center ">
            <div className="col-lg-6  col-md-12 col-12">
                <h2>Hotel 360</h2>
                <h5 className="h5-banner">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint, ad.
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint, ad.
                </h5>
            </div>
            <div className="col-lg-6 col-md-12 col-12">
                <img src={url} className="text-center" style={{width:"90%"}} alt=""/>
            </div>
        </div>
        <button  className="btn btn-secondary d-block mx-auto"><Link to="/rooms">
            <span style={{textDecoration:"inherit",color:"white"}}>Check Our Room & Services</span>
            </Link></button>
        </div>
        
    );
};

export default Home;