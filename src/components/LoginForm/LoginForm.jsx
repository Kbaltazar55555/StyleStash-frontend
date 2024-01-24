import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom'
import styles from './LoginForm.css'


const LoginForm = props => {
  const navigate = useNavigate()
  const [formData, setFormData] = useState({ username: '', password: '' });

  const handleChange = (e) => {
    props.updateMessage('')
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Login Form Data:', formData);
  };

  return (
    <form 
    autoComplete="off"
    onSubmit={handleSubmit}
    className={styles.container}
    >
      <div className={styles.inputContainer}>
        <label htmlFor="email" className={styles.label}>Email:</label>
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
      <div className={styles.inputContainer}>
        <label htmlFor="password" className={styles.label}>Password:</label>
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
        <button className={styles.button}></button>
      </div>
      <button type="submit">Log In</button>
    </form>
  );
};

export default LoginForm;
