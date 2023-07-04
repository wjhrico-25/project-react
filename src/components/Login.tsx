import path from 'path';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import  '../components/CSS/login_styles.css'

const Login: React.FC = () => {
  // const [email, setEmail] = useState('');
  // const [password, setPassword] = useState('');
  //let history = useHistory();

  const handleLogin = () => {
    console.log('Login button clicked');    
  };

  const navigate = useNavigate();

  const navigateRegister = () => {
    navigate('/register');    
  }

  const navigateHome = () => {
    navigate('/');
  }

  return (
    <div className ="Login">      
      <div className ="LoginBox">
        <div className ="LoginHeader">Login</div>            
          <div className='inputs'>
            <input className="email" type="email" placeholder="Email"/>
            <input className="password" type="password" placeholder="Password"/>
            <div className='button_position'>
              <button className="Register_Page" onClick={navigateRegister}>Go to Register page</button> 
              <button className="LoginButton" onClick={handleLogin}>Login</button>             
              <button className="HomeButton" onClick={navigateHome}>Back to Home</button>
            </div>            
          </div>                          
      </div>
    </div>
  );
};

export default Login;

//onClick={() => {history.push(`/register`)}} history
/* 
value={email} onChange={(e) => setEmail(e.target.value)} 
value={password} onChange={(e) => setPassword(e.target.value)}
*/