import React,{useEffect} from 'react';
import './App.css';
import Header from "./Header";
import Home from "./Home";
import { BrowserRouter as Router,Switch,Route} from "react-router-dom";
import Product from './Product';
import Checkout from "./Checkout";
import Login from "./Login";
import {auth} from "./firebase";
import {useStateValue} from "./StateProvider";


function App() {
  const[{user},dispatch]=useStateValue();

  useEffect(()=>{
    const unsubscribe=auth.onAuthStateChanged((authUser)=>{
      if (authUser) {

        dispatch({
          type:"SET_USER",
          user:authUser,
        })
      }else{

        dispatch({
            type:"SET_USER",
            user:null,
        });
        
      }
    });

    return () =>{
      unsubscribe(); 
    }

  },[])
  console.log("user_is>>>",user);
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/checkout">
            <Header/>
            <Checkout/>
          </Route>
          <Route path="/login">
            <Login/>
          </Route>
          <Route path="/">
            <Header/>
            <Home/>
          </Route>
        </Switch>  
      </div>        
    </Router>
    
  );
}

export default App;
