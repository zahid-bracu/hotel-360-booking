import React from 'react';
import {
    Card, CardImg, CardText, CardBody, CardLink,
    CardTitle, CardSubtitle
  } from 'reactstrap';
  import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";

const AmountCard = (props) => {
    const {data}=props;
    console.log(data);
    
    var sum=0;
    for(var i=0;i<data.length;i++){
        console.log(data[i].price);
        sum+=data[i].price;
    }
    console.log(data.length);
    console.log("Total : "+sum);

    return (
        <div>
            <Card style={{width:"18rem"}} className="my-4 mx-auto">
                <h5 className="text-center mt-3 text-info">Summary</h5>
                <CardBody>
                <h6>Total Room : {data.length}</h6>
                <h6>Total Price: {sum}$</h6>
                </CardBody>
                <Link style={{textDecoration:"inherit"}} to="/payment"><button  className="btn btn-danger mx-auto d-block px-5 my-2">Book Now !</button></Link>

                <Link style={{textDecoration:"inherit"}} to="/rooms">
                <button  className=" my-2 btn btn-info px-4 d-block mx-auto">
                <span style={{textDecoration:"inherit",color:"white"}}>Check Our Rooms</span>
                </button></Link>


                <Link style={{textDecoration:"inherit"}} to="/home">
                <button className="btn btn-dark text-white px-2 my-2 mb-3 mx-auto d-block">
                    Go Back to Homepage
                </button>
                </Link>
            </Card>
        </div>
    );
};

export default AmountCard;