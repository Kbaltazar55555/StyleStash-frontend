import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom'

import *  as authService from '../../services/authService'


const LoginForm = props => {
  const navigate = useNavigate()
  const [formData, setFormData] = useState({ username: '', password: '' });

  const handleChange = e => {
    if (props.updateMessage) {
      props.updateMessage('')
    }
    setFormData({ ...formData, [e.target.name]: e.target.value })
  };
  

  const handleSubmit = async e => {
    e.preventDefault()
    try {
      await authService.login(formData)
      props.handleSignupOrLogin()
      navigate('/profile')
    } catch (err) {
      props.updateMessage(err.message)
    }
  }

  return (
    <form 
    autoComplete="off"
    onSubmit={handleSubmit}
    >
      <div>
        <label htmlFor="email">Email:</label>
        <input
          type="text"
          autoComplete='off'
          name="username"
          id="username"
          value={formData.username}
          onChange={handleChange}
          placeholder="Enter your email"
        />
      </div>
      <div>
        <label htmlFor="password">Password:</label>
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
        <Link to="profile">
          <button>Cancel</button>
        </Link>
      </div>
    </form>
  );
};

export default LoginForm;
