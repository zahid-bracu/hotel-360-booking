import React from 'react';
import { Button } from 'react-bootstrap';
import  { addToDatabaseCart, getDatabaseCart, removeFromDatabaseCart, processOrder } from './databaseManager';
const BookedRoomCard = (props) => {
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

    }=props.data;
    
    return (
        <div className="card m-1" style={{width:"15rem"}} >
            <img className="card-img-top" src={imgUrl} />
            <div className="card-body">
                <h5 className="card-title">{title}</h5>
                <p className="card-text">{description}</p>
                <div>
                    <button onClick={()=>props.remove(key)} className="btn btn-danger">Remove</button>
                </div>
            </div>
        </div>
    );
};

export default BookedRoomCard;