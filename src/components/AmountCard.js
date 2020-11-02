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
                <Link to="/payment"><button className="btn btn-info mx-auto d-block px-5 mb-4">Book Now !</button></Link> 
            </Card>
        </div>
    );
};

export default AmountCard;