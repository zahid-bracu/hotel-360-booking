import React from 'react';
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import { useForm } from "react-hook-form";


const PaymentPage = () => {

  const imgUrl="https://i.ibb.co/rsQDJbh/sdf.jpg";
 
    return (
        <div className="container">
          
          <img src={imgUrl} className="d-block mx-auto my-4"  />
        </div>
    );
};

export default PaymentPage;