import path from 'path';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import  '../components/CSS/register_styles.css'

const Register: React.FC = () => {
  // const [name, setName] = useState('');
  // const [email, setEmail] = useState('');
  // const [password, setPassword] = useState('');

  const handleRegister = () => {
    console.log('You have been registered');    
  };

  const navigate = useNavigate();

  const navigatelogin = () => {
    navigate('/login');
  }

  const navigateHome = () => {
    navigate('/');
  }


  return (
    <div className ="Register">      
      <div className ="RegisterBox">
        <div className ="RegisterHeader">Register</div>
         <div className='inputs'>
            <input className="name" type="name" placeholder="Name"/>
            <input className="email" type="email" placeholder="Email"/>
            <input className="password" type="password" placeholder="Password"/>
              <div className='button_position'>
                <button className="Login_Page" onClick={navigatelogin}>Back to login</button>
                <button className="RegisterButton" onClick={handleRegister}>Register</button>
                <button className="HomeButton" onClick={navigateHome}>Back to Home</button>
              </div>              
          </div>                              
      </div>
    </div>
  );
};

export default Register;

/* 
value={name} onChange={(e) => setName(e.target.value)}
value={email} onChange={(e) => setEmail(e.target.value)}
value={password} onChange={(e) => setPassword(e.target.value)}
*/