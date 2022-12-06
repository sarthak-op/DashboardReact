import React from 'react'
import Dashboard from './Dashboard';
import './App.css';
import { Link, Routes, Route } from "react-router-dom";
import Register from './Register';
import 'bootstrap/dist/css/bootstrap.min.css';
import {useAuth0} from '@auth0/auth0-react'
// import { JWTBuilder } from './path/to/jwt-connector';

export default function Home() {

  const {isAuthenticated} =useAuth0();
  return (
    isAuthenticated && (
  <div className='App'>
    
        <div className="center">
         

      
      <ul>

          
        <button>
          <Link to="/Register">Register</Link>
        </button>
        <button>
          <Link to="/Dashboard">Dashboard</Link>
        </button>
      </ul>
      {/* <a href="https://login.xecurify.com/moas/broker/login/jwt/299490?client_id=ffneT4WAFhumZQ6o&redirect_uri=http://localhost:3000/login" target="_blank" rel="noopener noreferrer">
          SSO
        </a> */}
        </div>
    


   
  </div>
    )
  )
}
