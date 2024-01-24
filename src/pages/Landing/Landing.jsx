import { useState, useEffect } from 'react';
import SignupForm from '../../components/SignupForm/SignupForm';
import LoginForm from '../../components/LoginForm/LoginForm';
import * as authService from '../../services/authService';

const Landing = () => {
    // State for toggling between login and signup forms
    const [isLoggingIn, setIsLoggingIn] = useState(true);
    // State to store the current user
    const [user, setUser] = useState(null);

    // Effect to check if user is already logged in when component mounts
    useEffect(() => {
        const user = authService.getUser();
        if (user) {
            setUser(user);
        }
    }, []);

    // Function to handle user signup or login
    const handleSignupOrLogin = async (credentials, isSignup = false) => {
        try {
            // If isSignup is true, call signup service, else call login service
            if (isSignup) {
                await authService.signup(credentials);
            } else {
                await authService.login(credentials);
            }
            // Update user state with newly logged in or signed up user
            setUser(authService.getUser());
        } catch (err) {
            // Log any errors for debugging
            console.error(err);
            // Implement additional error handling as needed
        }
    };

    return (
        <div>
            {/* Conditionally render LoginForm or SignupForm based on isLoggingIn state */}
            {isLoggingIn ?
                <LoginForm handleSignupOrLogin={(credentials) => handleSignupOrLogin(credentials, false)} /> 
                : 
                <SignupForm handleSignupOrLogin={(credentials) => handleSignupOrLogin(credentials, true)} />}
            {/* Button to toggle between Login and Signup forms */}
            <button onClick={() => setIsLoggingIn(!isLoggingIn)}>
                {isLoggingIn ? 'Sign Up' : 'Log In'}
            </button>
        </div>
    );
};

export default Landing;
