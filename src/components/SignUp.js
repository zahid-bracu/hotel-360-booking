import React, {useState} from 'react';
import * as firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
import './style.css';
import firebaseConfig from './firebaseConfig';
import { Button, Form } from 'react-bootstrap';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link, useHistory, useLocation
  } from "react-router-dom";

if (!firebase.apps.length) {
    firebase.initializeApp({});
}
const SignUp = () => {
    const [user,setUser]=useState({})

    // form functions
    function changeFunc(e){
        console.log(e.target.name +" : "+e.target.value);
        let isFormValid=true;
        

        if(e.target.name=='email'){
            isFormValid=/\S+@\S+\.\S+/.test(e.target.value);
        }

        if(e.target.name=="password"){
            const isPasswordValid=e.target.value.length>6;
            const passwordHasNumber=/\d{1}/.test(e.target.value);
            isFormValid=passwordHasNumber && isPasswordValid;
        }

        console.log(isFormValid);
        if(isFormValid){
            let newInfo={...user};
            newInfo[e.target.name]=e.target.value;
            setUser(newInfo);
        }
    
    }
    console.log(user);

    // from submitted function
    function submitFunc(e){
        firebase.auth().createUserWithEmailAndPassword(user.email, user.password).then(res=>{
             
            var newInfo={...user};
            newInfo.message="Submitted";
            setUser(newInfo);
    
             
    
          }).catch(function(error) {
            // Handle Errors here.
            var errorCode = error.code;
            var errorMessage = error.message;
            console.log(errorMessage);

            var newInfo={...user};
            newInfo.message=errorMessage;
            setUser(newInfo);
             
          });
        e.preventDefault();
        console.log("Submitted")
    }


    return (
        <div className="container p-5">
            <Form onSubmit={submitFunc} className="mx-auto d-block" style={{width:"400px"}}>
                <Form.Group controlId="formName">
                    <Form.Label>Enter Full Name</Form.Label>
                    <Form.Control onBlur={changeFunc} name="name" type="text" placeholder="Enter Full Name" />
                </Form.Group>

                <Form.Group controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control onBlur={changeFunc} name="email" type="email" placeholder="Enter email" />
                    <Form.Text className="text-muted">
                    We'll never share your email with anyone else.
                    </Form.Text>
                </Form.Group>

                <Form.Group controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control onBlur={changeFunc} name="password" type="password" placeholder="Password" />
                </Form.Group>
                <Form.Group controlId="formBasicCheckbox">
                    <Form.Check type="checkbox" label="Check me out" />
                </Form.Group>
                <Button variant="primary" type="submit">
                    Submit
                </Button>

                <p className="text-center mt-4">Already have an account?  <span> <Link to='/login'>Sign in here</Link> </span></p>


                <p className="message my-5 text-center text-success font-weight-bold">{user.message}</p>
            </Form>
        
        </div>
    );
};

export default SignUp;