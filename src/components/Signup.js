 import React, { useState } from 'react';
import axios from 'axios';
import Header from './Header'
//import './Register.css';

const Signup = () => {
  const [formData, setFormData] = useState({  //formdata store set :update usestate:initial values empty
    name: '',
    email: '',
    password: ''
  });

  const { name, email, password } = formData;

  const onChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post('http://localhost:5000/register', formData);
      console.log('User registered successfully:', res.data);
    } catch (err) {
      console.error('Error registering user:', err.response.data);
    }
  };

  return (
   
   
    <div className="registration-form-container" >
      
      
      <h2 id="pp">Register</h2>
      <form onSubmit={onSubmit}>
        <div id="vy">
          <label>Name</label>
          <input type="text" name="name" value={name} onChange={onChange} required />
        </div>
        <div id="VV">
          <label>Email</label>
          <input type="email" name="email" value={email} onChange={onChange} required />
        </div>
        <div id="VW">
          <label>Password</label>
          <input type="password" name="password" value={password} onChange={onChange} required />
        </div>
        <button type="submit">Register</button>
      </form> 
      <br></br>
      <p>Already have an account <a href='/login'>LOGIN</a></p>
      
    </div>

    
  );
};

export default Signup;
   


