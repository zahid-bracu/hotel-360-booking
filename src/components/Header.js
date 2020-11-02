import React from 'react';
import { useEffect,useContext } from 'react';
import { useState } from 'react';
import { Navbar, Nav, Button ,NavDropdown, Form, FormControl } from 'react-bootstrap';
import  { addToDatabaseCart, getDatabaseCart, removeFromDatabaseCart, processOrder } from './databaseManager';
import {RoomContext} from '../App';
import {UserContext} from '../App';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
import './style.css';


const Header = () => {
    const [total,setTotal]=useState(0)
    const [flag,setFlag]=useState(false);
    const [bookedRoom,setBookedRoom]=useContext(RoomContext);

    const [user,setUser]=useContext(UserContext);

    if(user.state){
        console.log(user.state);
         
    }

    const logo="https://i.ibb.co/djHMH3K/pngegg.png";
     
    

    return (
        <Navbar  bg="light" expand="lg">
            <div className="container">
                <Navbar.Brand href="#home">Hotel 360</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="mr-auto" style={{color:"black"}}>
                            <Nav.Link> <Link className="remove" to="/home">Home</Link></Nav.Link>
                            
                            
                            <Nav.Link><Link className="remove" to="/rooms">Rooms</Link>  </Nav.Link>
                            <Nav.Link><Link className="remove" to="/booked">Current Bookings</Link></Nav.Link>
                            {
                                !user.state && <Nav.Link > <Link className="remove" to="/login">Sign In</Link> </Nav.Link>
                            }
                            {
                                !user.state && <Nav.Link ><Link className="remove" to="/signup">Sign Up</Link></Nav.Link>
                            }
                            
                            {
                                user.state && <Nav.Link className="remove" onClick={()=>{
                                    var info={
                                        name:"",
                                        email:"",
                                        state:false
                                    }
                                    setUser(info);
                                }}>Sign Out</Nav.Link>
                            }
                        
                        </Nav>
                        <Nav className="ml-auto">
                        <Nav.Link href="https://portfolio-zahid-bracu.netlify.app/" target="_blank">Portfolio</Nav.Link>
                            <Nav.Link href="https://github.com/zahid-bracu" target="_blank">Github</Nav.Link>
                        </Nav>
                     
                </Navbar.Collapse>
            </div>
        </Navbar>
    );
};

export default Header;