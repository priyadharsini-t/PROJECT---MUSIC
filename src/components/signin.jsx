import React, { useState } from 'react';
import './signin.css';
import axios from 'axios';
import { Link,useNavigate } from 'react-router-dom';
function Signin() {

  const navigate =useNavigate();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

// const navigate = useNavigate();

  const handleSubmit = async(event) => {
    event.preventDefault();
    const data = {
      username,
      password,
   
    };
      const response = await axios.post(`http://localhost:8080/login/${username}/${password}`, data)
      .then((response)=>
      {if(response.data===true)
        {
          navigate("/fetchteams")
        }
        else{
          alert(" Please Enter Correctly")
        }
        
      }
       )

  }
  return (
    <div>
      <div id="container" className="form-container">
        <form action="#" autoComplete="off" onSubmit={handleSubmit}>
          <h1 className="colour">Log in</h1>

          <input className="username" type="text" name="username" placeholder="Username" required value={username} onChange={handleUsernameChange}/><br />
          <br>
          </br>
          <input className="password" type="password" name="password" input="password" placeholder="**********" value={password} onChange={handlePasswordChange} required/><br />
          <br>
          </br>
          <input className="sign-in animated bounceIn" type="submit" value="Sign in" />
        </form>
        <div id="login-problem" className="log-problem">
          <p>Click if you are a New User</p>
          <Link to={"/signup"}>SIGN UP</Link>
        </div>
      </div>
    </div>
  );
}
export default Signin;