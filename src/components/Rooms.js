import React, {useEffect} from 'react';
import Database from './Database';

import { Button, Card, ListGroup, ListGroupItem } from 'react-bootstrap';
import { useState } from 'react';
import RoomCard from './RoomCard';

import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
  import './style.css';

const Rooms = () => {

    // loading data from Database
    const [room,setRoom]=useState(Database);
    console.log(room);

    useEffect(() => {
        window.scrollTo(0,0);
    },[])


    
    return (
        <div className="container mx-auto d-block mt-5">
            <Link style={{textDecoration:"inherit"}} to="/booked"><button className="btn-select btn btn-info px-5 mb-2 mx-auto d-block">Booked Rooms</button></Link>



            <Link style={{textDecoration:"inherit"}} to="/home">
                <button className="btn btn-dark mx-auto d-block">
                    Go Back to Homepage
                </button>
            </Link>
            <div className="row ">


            
        
        {
            room.map(key=> <RoomCard  info={key}></RoomCard>)
        }
        </div>
        </div>
        
    );
};

export default Rooms;