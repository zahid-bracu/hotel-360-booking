import React, {useContext} from 'react';
import * as firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
import './style.css';
import firebaseConfig from './firebaseConfig';
import {UserContext} from '../App';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link, useHistory, useLocation
  } from "react-router-dom";


firebase.initializeApp(firebaseConfig);

const Google = () => {
    const [user,setUser]=useContext(UserContext);

    const history = useHistory();
    const location = useLocation();
    const { from } = location.state || { from: { pathname: "/login" } };

    const provider = new firebase.auth.GoogleAuthProvider();
    function loginGoogle(){
        firebase.auth().signInWithPopup(provider).then(function(result) {
            // This gives you a Google Access Token. You can use it to access the Google API.
            var token = result.credential.accessToken;
            // The signed-in user info.
            var user = result.user;
            // ...
            console.log(user);
            var name=user.displayName;
            var email=user.email;
            var  info={
                name:name,
                email:email,
                state:true
            }
            setUser(info);
            history.replace(from);
          }).catch(function(error) {
            // Handle Errors here.
            var errorCode = error.code;
            var errorMessage = error.message;
            // The email of the user's account used.
            var email = error.email;
            // The firebase.auth.AuthCredential type that was used.
            var credential = error.credential;
            // ...
          });
    }
    function logout(){
        firebase.auth().signOut().then(function() {
            var info={
                name:"",
                email:"",
                state:false
            }
            setUser(info);
          }).catch(function(error) {
            // An error happened.
          });
    }
    return (
        <div>
             {
                 user.state && <button className="  px-5  btn btn-danger mx-auto d-block" onClick={()=>logout()}>Sign Out  </button>
             }

{
                 !user.state && <button className=" googleButton px-5 py-3 font-weight-bold text-white btn btn-warning mx-auto d-block" style={{textShadow:"2px 2px 5px black"}} onClick={()=>loginGoogle()}>Sign In With Google</button>
             }
            
        </div>
    );
};

export default Google;