import { useState } from 'react';
import SignupForm from '../../components/SignupForm/SignupForm';
import LoginForm from '../../components/LoginForm/LoginForm';

import './Landing.css'

const Landing = ({ handleSignupOrLogin }) => {
  const [message, setMessage] = useState('');
  const [currentForm, setcurrentForm] = useState('login'); // Tracks the current form

  const toggleForm = () => {
    setcurrentForm(currentForm === 'login' ? 'signup' : 'login');
  }

  return (
    <div className="landing-container">
      {currentForm === 'login' ? (
        <LoginForm 
          message={message} 
          setMessage={setMessage}
          handleSignupOrLogin={handleSignupOrLogin}
        />
      ) : (
        <SignupForm 
          message={message} 
          setMessage={setMessage} 
          handleSignupOrLogin={handleSignupOrLogin}
        />
      )}
      <button onClick={toggleForm} className="toggle-button">
        {currentForm === 'login' ? 'Sign Up' : 'Log In'}
      </button>
    </div>
  );
};

export default Landing;
