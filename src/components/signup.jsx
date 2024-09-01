import React, { useState } from 'react';
import './signin.css';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
// import { Link,useNavigate } from 'react-router-dom';
function Signup() {

  const [username, setUsername] = useState('');
  const [emailid, setEmailid] = useState('');
  const [password, setPassword] = useState('');
  const [confirm_password, setConfirm_Password] = useState('');
  const [phonenumber, setPhonenumber] = useState('');
  
  const navigate = useNavigate();

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };
  const handleEmailidChange = (event) => {
    setEmailid(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };
  const handleConfirm_PasswordChange = (event) => {
    setConfirm_Password(event.target.value);
  };
  const handlePhonenumberChange = (event) => {
    setPhonenumber(event.target.value);
  };

// const navigate = useNavigate();

  const handleSubmit = async(event) => {
    event.preventDefault();
    const data = {
      username: username,
      emailid: emailid,
      password: password,
      confirm_password: confirm_password,
      phonenumber: phonenumber,
   
    };
      axios.post(`http://localhost:8080/postsignup`, data);
      navigate("/");

  };
  return (
    <div>
      <div id="container" className="form-container">
        <form onSubmit={handleSubmit} action="" className='form-login'>
        <h1 className="colour">SIGN UP</h1>
          <input className="username" onChange={handleUsernameChange} type="text" name="username" placeholder="Username" required/><br />
          <br>
          </br>
          <input className="emailid" onChange={handleEmailidChange} type="email" name="emailid" placeholder="Emailid" required /><br />
          <br>
          </br>
          <input className="password" onChange={handlePasswordChange} type="password" name="password" input="password" placeholder="**********" required /><br />
           <br>
           </br>          
          <input className="confirm_password" onChange={handleConfirm_PasswordChange} type="confirm_password" name="confirm_password" input="confirm_password" placeholder="**********" required/><br />
          <br>
          </br>
          <input className="phonenumber" onChange={handlePhonenumberChange} type="phonenumber" name="phonenumber" input="phonenumber" placeholder="Phonenumber" required/><br />
          <br>
          </br>
          <input className="sign-in animated bounceIn" type="submit" value="Sign up" />
        </form>
       
      </div>
    </div>
  );
}

export default Signup;
