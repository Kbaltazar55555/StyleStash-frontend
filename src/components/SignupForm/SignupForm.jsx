import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom'
import * as authService from '../../services/authService'

const SignupForm = props => {
  const navigate = useNavigate()
  const [formData, setFormData] = useState({   username: '',
  email: '',
  password: '',
  passwordConf: '',
});

  const handleChange = e => {
    if (props.updateMessage) {
      props.updateMessage('')
    }
    setFormData({ ...formData, [e.target.name]: e.target.value })
  };
  

  const handleSubmit = async e => {
    e.preventDefault()
    try {
      await authService.signup(formData)
      props.handleSignupOrLogin()
      navigate('profile')
    } catch (err) {
      props.updateMessage(err.message)
    }
  }
 
  const { username, email, password, passwordConf } = formData

  const isFormInvalid = () => {
    return !(username && email && password && password === passwordConf)
  }

  return (
    <form
    autoComplete="off"
    onSubmit={handleSubmit}
    className='SignupForm'
  >
    <div className='inputContainer'>
      <input
        type="text"
        name="username"
        autoComplete='off'
        value={formData.username || ''}
        onChange={handleChange}
        placeholder="username"
        id='username'
      />
    </div>
    <div className='inputContainer'>
      <input
        type="text"
        name="email"
        autoComplete='off'
        value={formData.email || ''}
        onChange={handleChange}
        placeholder="email"
        id='email'
      />
    </div>
    <div className='inputContainer'>
      <input
        type="password"
        name="password"
        autoComplete='off'
        value={formData.password}
        onChange={handleChange}
        placeholder="password"
        id='password'
      />
    </div>
    <div className='inputContainer'>
      <input
        type="passwordConf"
        name="passwordConf"
        autoComplete='off'
        value={formData.passwordConf}
        onChange={handleChange}
        placeholder="passwordConf"
        id='passwordConf'
      />
    </div>
    <div className='signup/cancel button'>
        <button disabled={isFormInvalid()}>
          Sign Up
        </button>
      </div>
    </form>
  );
};

export default SignupForm;
