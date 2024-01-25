import { useState } from 'react';
import { useNavigate } from 'react-router-dom'
import * as authService from '../../services/authService'

const SignupForm = props => {
  const navigate = useNavigate()
  const [formData, setFormData] = useState({   email: '',
  password: '',
});

  const handleChange = e => {
    if (props.setMessage) {
      props.setMessage('')
    }
    setFormData({ ...formData, [e.target.name]: e.target.value })
  };
  

  const handleSubmit = async e => {
    e.preventDefault()
    try {
      await authService.signup(formData)
      await props.handleSignupOrLogin()
      navigate('profile')
    } catch (err) {
      props.setMessage(err.message)
    }
  }
 
  const { name, email, password } = formData

  const isFormInvalid = () => {
    return !(name && email && password)
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
        name="name"
        autoComplete='off'
        value={formData.name || ''}
        onChange={handleChange}
        placeholder="name"
        id='name'
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
    <div className='signupbutton'>
        <button disabled={isFormInvalid()}>
          Sign Up
        </button>
      </div>
    </form>
  );
};

export default SignupForm;
