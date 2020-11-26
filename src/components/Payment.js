import React,{useContext, useEffect} from 'react';
import {UserContext} from '../App';
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import { useForm } from "react-hook-form";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useHistory
} from "react-router-dom";

const Payment = () => {

  useEffect(() => {
    window.scrollTo(0,0);
},[])
  let history = useHistory();
  const [user,setUser]=useContext(UserContext);
  console.log(user);
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => {
    console.log(data);
    console.log("Done");
    history.push("/paymentPage");
  };

  function message(){
    console.log("Submitted");
  }
    return (
        <div className="container">


              <form style={{maxWidth:"600px"}} className="mx-auto d-block" onSubmit={handleSubmit(onSubmit)}>

                <h5 className="text-center my-4">Complete Your Shipping Information</h5>

              <div class="form-group">
              <label for="name"><h5>Name</h5></label>
                <input class="form-control" value={user.name} id="name" name="name" ref={register} required />
              </div>

              

              <div class="form-group">
              <label for="email"><h5>Email</h5></label>
                <input class="form-control" id="email" value={user.email} name="email" ref={register} required />
              </div>

              <div class="form-group">
              <label for="address"><h5>Address</h5></label>
                <textarea class="form-control" type="text-area" id="address" name="address" ref={register} required/>
              </div>

              <div class="form-group">
              <label for="phone"><h5>Phone</h5></label>
                <input class="form-control" id="phone" name="phone" ref={register} required/>
              </div>
              
              <button className="btn btn-info mt-3">
                Proceed
              </button>
            </form>

             
        </div>
    );
};

export default Payment;