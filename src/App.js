import React, {useState,createContext,useEffect} from 'react';
import './App.css';
import Header from './components/Header';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './components/Home';
import Login from './components/Login';
import SignUp from './components/SignUp';
 
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Rooms from './components/Rooms';
import  { addToDatabaseCart, getDatabaseCart, removeFromDatabaseCart, processOrder } from './components/databaseManager';
import BookedRoom from './components/BookedRoom';
import Payment from './components/Payment';
import PrivateRoute from './components/PrivateRoute';
import PaymentPage from './components/PaymentPage';
import Confirmed from './components/Confirmed';


export const RoomContext = React.createContext();
export const UserContext = React.createContext();
function App() {
  const [bookedRoom,setBookedRoom]=useState([]);
  const [user,setUser]=useState({
    name:"",
    email:"",
    state:false
  });
  console.log(user);

  
  useEffect(() => {
    addToDatabaseCart(bookedRoom.key,1);
    console.log("Database Updated");
    var db=getDatabaseCart();
    console.log(db);
  });

  console.log(bookedRoom);
  return (
    <UserContext.Provider value={[user,setUser]}>
      <RoomContext.Provider value={[bookedRoom,setBookedRoom]}>
      <div className="main">
      <Router>
      <Header></Header>
          <Switch>
            <Route path="/login">
            <Login/>
            </Route>

            <Route path="/rooms">
              <Rooms/>
            </Route>

            <PrivateRoute path="/payment">
              <Payment/>
            </PrivateRoute>

            <Route  path="/booked">
              <BookedRoom/>
            </Route>

            <Route path="/confirm">
              <Confirmed/>
            </Route>

            <Route path="/paymentPage">
              <PaymentPage></PaymentPage>
            </Route>


            <Route path="/signup">
            <SignUp/>
            </Route>
            <Route path="/">
              <Home />
            </Route>
          </Switch>
      </Router>
      </div>
      </RoomContext.Provider>
    </UserContext.Provider>
  );
}

export default App;
