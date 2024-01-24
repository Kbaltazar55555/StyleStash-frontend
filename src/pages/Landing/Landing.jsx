import { useState } from 'react';
import SignupForm from '../../components/SignupForm/SignupForm';
import LoginForm from '../../components/LoginForm/LoginForm';

const Landing = () => {
  const [isLoggingIn, setIsLoggingIn] = useState(true);

  return (
    <div>
      {isLoggingIn ? <LoginForm /> : <SignupForm />}
      <button onClick={() => setIsLoggingIn(!isLoggingIn)}>
        {isLoggingIn ? 'Sign Up' : 'Log In'}
      </button>
    </div>
  );
};

export default Landing;