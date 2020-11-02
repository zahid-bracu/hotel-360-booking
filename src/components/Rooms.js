import React from 'react';
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

const Rooms = () => {

    // loading data from Database
    const [room,setRoom]=useState(Database);
    console.log(room);


    
    return (
        <div className="container mx-auto d-block mt-5">
            <Link to="/booked"><button className="btn btn-info px-5 mb-4 mx-auto d-block">Click here to check your selected rooms</button></Link>
            <div className="row ">
        
        {
            room.map(key=> <RoomCard  info={key}></RoomCard>)
        }
        </div>
        </div>
        
    );
};

export default Rooms;