import { useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import NavBar from './components/NavBar/NavBar'
import Closet from './pages/Closet/Closet'
import ItemDetails from './pages/ItemDetails/ItemDetails'
import Landing from './pages/Landing/Landing'
import Profile from './pages/Profile/Profile'
import ProtectedRoute from './components/ProtectedRoute/ProtectedRoute'
import { useNavigate } from 'react-router-dom'

import * as authService from './services/authService'

import './App.css'
import VideoBackground from './VideoBackground'

function App() {
  const navigate = useNavigate();
  const [user, setUser] = useState(authService.getUser());

  function handleLogout() {
    authService.logout();
    setUser(null);
    navigate('/');
  }
  
  function handleSignupOrLogin() {
    setUser(authService.getUser());
    navigate('/profile');
  }
  
  return (
    <>
      <NavBar user={user} handleLogout={handleLogout} />
      <Routes>
        <Route 
          path="/" 
          element={
            <>
              <VideoBackground /> 
              <Landing handleSignupOrLogin={handleSignupOrLogin}/>
            </>
          }
        />
        <Route path="/profile" element={
          <ProtectedRoute user={user}>
            <Profile />
          </ProtectedRoute>
        } />
        <Route path="/closet" element={
          <ProtectedRoute user={user}>
            <Closet />
          </ProtectedRoute>
        } />
        <Route path="/itemdetails/:id" element={
          <ProtectedRoute user={user}>
            <ItemDetails />
          </ProtectedRoute>
        } />
      </Routes>
    </>
  );
}

export default App;
