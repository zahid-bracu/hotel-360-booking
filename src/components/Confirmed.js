import React, {useEffect} from 'react';
import  { addToDatabaseCart, getDatabaseCart, removeFromDatabaseCart, processOrder } from './databaseManager';
const Confirmed = () => {
    const img="https://i.ibb.co/5kmc9Xp/pngegg-1.png";
    useEffect(() => {
        window.scrollTo(0,0);

        processOrder();
    },[])
    return (
        <div>
            <h4 className="text-center mt-5 mb-2 text-info">Your order has been placed</h4>
            <img src={img} className="d-block mx-auto" style={{width:"30%"}}/>
        </div>
    );
};

export default Confirmed;