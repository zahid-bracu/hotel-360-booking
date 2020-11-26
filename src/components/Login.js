import React, {useContext, useState, useEffect} from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link, useHistory, useLocation
  } from "react-router-dom";
import { Button, Form } from 'react-bootstrap';
import Google from './Google';
import {UserContext} from '../App';
import * as firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
import firebaseConfig from './firebaseConfig';

if (!firebase.apps.length) {
    firebase.initializeApp({});
}

const Login = () => {
    const [user,setUser]=useContext(UserContext);
    const [users,setUsers]=useState({});
    const [msg,setMsg]=useState();

    const history = useHistory();
    const location = useLocation();
    const { from } = location.state || { from: { pathname: "/login" } };

    useEffect(() => {
        window.scrollTo(0,0);
    },[])
    


    function onChange(e){
        console.log(e.target.name +" : "+e.target.value);
        let newInfo={...users};
        newInfo[e.target.name]=e.target.value;
        setUsers(newInfo)
    }


    function submitFunc(e){
        e.preventDefault();

        firebase.auth().signInWithEmailAndPassword(users.email, users.password)
        .then(res=>{
            var newInfo={
                state:true
            }

            setUser(newInfo);
            history.replace(from);
        })
        .catch(function(error) {
            // Handle Errors here.
            var errorCode = error.code;
            var errorMessage = error.message;
            // ...
            console.log(errorMessage);
            setMsg(errorMessage);
          });
    }
    return (
        <>
        {
            !user.state && <div className="container">

            <h6 className="text-danger text-center mb-3">*You must login to your personal account or gmail to complete your booking process</h6>
            <h5 className="text-center mt-2">Login</h5>
            <Form onSubmit={submitFunc} className="mx-auto mt-2" style={{maxWidth:"400px"}}>
            <Form.Group controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control onBlur={onChange} name="email" type="email" placeholder="Enter email" />
                <Form.Text className="text-muted">
                We'll never share your email with anyone else.
                </Form.Text>
            </Form.Group>

            <Form.Group controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control onBlur={onChange} name="password" type="password" placeholder="Password" />
            </Form.Group>
            <Form.Group controlId="formBasicCheckbox">
                <Form.Check type="checkbox" label="Check me out" />
            </Form.Group>
            <Button variant="primary" type="submit">
                Submit
            </Button>

            <p className="my-2 text-center text-danger">{msg}</p>

            </Form>

            <p className="text-center mb-5">New user? <span> <Link to='/signup'>Sign up here</Link> </span></p>

            <h5 className="text-center my-2">Or</h5>
            <Google></Google>
        </div>
        }
        {
            user.state && <div className="container">
                <h3 className="text-center mt-5">Logged In Successfully</h3>
                <Google></Google>

                <Link style={{textDecoration:"inherit"}} to="/rooms">
                <button  className=" my-2 mb-3 btn btn-info px-4 d-block mx-auto">
                <span style={{textDecoration:"inherit",color:"white"}}>Check Our Rooms</span>
                </button></Link>


                <Link style={{textDecoration:"inherit"}} to="/booked">
                <button className="btn btn-success text-white px-4 my-2 mb-3 mx-auto d-block">
                    Current Bookings
                </button>
                </Link>

                <Link style={{textDecoration:"inherit"}} to="/home">
                <button className="btn btn-dark text-white px-2 my-2 mb-3 mx-auto d-block">
                    Go Back to Homepage
                </button>
                </Link>
            </div>
        }
        </>
    );
};

export default Login;