import { useState } from 'react';
import { useNavigate } from 'react-router-dom'

import *  as authService from '../../services/authService'


const LoginForm = props => {
  const navigate = useNavigate()
  const [formData, setFormData] = useState({ 
    email: '',
    password: '' 
  });

  const handleChange = e => {
    if (props.setMessage) {
      props.setMessage('')
    }
    setFormData({ ...formData, [e.target.name]: e.target.value })
  };
  

  const handleSubmit = async e => {
    e.preventDefault();
    console.log("Logging in with:", formData); // Add this line to log formData
    try {
      await authService.login(formData);
      props.handleSignupOrLogin();
      navigate('/profile');
    } catch (err) {
      props.updateMessage(err.message);
    }
  };

  return (
    <form 
    autoComplete="off"
    onSubmit={handleSubmit}
    >
      <div>
        <input
          type="text"
          autoComplete='off'
          name="email"
          id="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="Enter your email"
        />
      </div>
      <div>
        <input
          type="password"
          autoComplete='off'
          name="password"
          id="password"
          value={formData.password}
          onChange={handleChange}
          placeholder="Enter your password"
        />
    </div>
      <div>
        <button>Log In</button>
      </div>
    </form>
  );
};

export default LoginForm;
