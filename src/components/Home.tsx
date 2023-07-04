import path from 'path';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import  '../components/CSS/home_styles.css'

const Home: React.FC = () => {

const navigate = useNavigate();

const navigateRegister = () => {
    navigate('/register');
  }

const navigateLogin = () => {
    navigate('/Login');
  }
  
  return (
    <div className ="Home">      
      <div className ="HomeBox">
        <div className ="HomeHeader">Home</div>            
          <div className='inputs'>            
            <button className="Register_Page_Button" onClick={navigateRegister}>Go to Register page</button> 
            <button className="Login_Page_Button" onClick={navigateLogin}>Go to Login Page</button>                         
          </div>                          
      </div>
    </div>
  )
}

export default Home