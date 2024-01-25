import { useState } from 'react';
import SignupForm from '../../components/SignupForm/SignupForm';
import LoginForm from '../../components/LoginForm/LoginForm';

const Landing = () => {
  const [message, setMessage] = useState('');
  const [currentForm, setcurrentForm] = useState('login'); // Tracks the current form

  const toggleForm = () => {
    setcurrentForm(currentForm === 'login' ? 'signup' : 'login');
  }

  return (
    <div>
      {currentForm ==='login' ? (
        <LoginForm message={message} setMessage={setMessage} />
      ) : (
        <SignupForm message={message} setMessage={setMessage} />
      )}
      <button onClick={toggleForm}>
      {currentForm === 'login' ? 'Sign Up' : 'Log In'}
      </button>
    </div>
  );
};

export default Landing;
