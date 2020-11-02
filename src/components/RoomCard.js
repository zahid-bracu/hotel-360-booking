import React from 'react';
import { Button, Card, ListGroup, ListGroupItem } from 'react-bootstrap';
import { useState,useContext } from 'react';
import {RoomContext} from '../App';

const RoomCard = (props) => {
    function changeColor(e){
        console.log('worked');
        e.target.classList.remove("btn-warning");
        e.target.classList.add("btn-secondary");
        e.target.disabled=true;
    }
    console.log(props)
    const {
        key,
        bed,
        bedType,
        capacity,
        description,
        imgUrl,
        avatar,
        price,
        title,

    }=props.info;
    const imgURL="https://i.ibb.co/Btz7V1F/4a-keto-chocolate-ice-cream.jpg";
    const [bookedRoom,setBookedRoom]=useContext(RoomContext);
    return (
        
            <Card style={{ width: '20rem',transform:'scale(1)' }} className="m-2">
                <Card.Header className="d-flex justify-content-between aling-items-center">
                    <Card.Title>{title}</Card.Title>
                    <button className="btn btn-success" style={{borderRadius:"50%"}}>{avatar}</button>
                </Card.Header>
                
                <Card.Img variant="top" src={imgUrl} />
                    <Card.Body>
                        <Card.Text>
                        {description}
                        
                        </Card.Text>
                    </Card.Body>
                    
                    <Card.Body>
                    <h6>Type: {bedType}</h6>
                    </Card.Body>
                <Card.Footer className="d-flex justify-content-start align-items-center">
                    <h5>Price:</h5> <h4 className="ml-2"><span className="badge badge-pill badge-danger">{price}$</span></h4>
                    
                    <Button id="btn" className="btn btn-warning text-white font-weight-bold  px-4 ml-5"
                    onClick={(e)=>{
                        var info={
                            key:key
                        }

                        setBookedRoom(info);
                        // alert(bedType+" Room has been selected")
                         changeColor(e);
                    }}
                    >Select</Button>
                    
                </Card.Footer>
                </Card>
        
    );
};

export default RoomCard;