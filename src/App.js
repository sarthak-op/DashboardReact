import React from 'react';
import Dashboard from './Dashboard';
// import './App.css';
import { Link, Routes, Route } from "react-router-dom";
import Register from './Register';
import Home from './Home';
import 'bootstrap/dist/css/bootstrap.min.css';
import LoginButton from './LoginButton';
import LogoutButton from './LogoutButton';
import {useAuth0} from '@auth0/auth0-react'
function App() {
  const {isLoading} =useAuth0();
  
  if(isLoading) return <div>Loading...</div>

  return (
    <div className="App">
    <>
      <LoginButton/>
      <LogoutButton/>
    </>


      <Routes>
        <Route path="/" element={<Home/> }/>
        <Route path="/Dashboard" element={<Dashboard/> }/>
      
        <Route path="/Register" element={<Register/> }/>
        {/* <Route path="/Login" element={<Login/> }/> */}
   
       
      </Routes>
        
       
     
  
    </div>
  );
}

export default App;
