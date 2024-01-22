import { useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import NavBar from './components/NavBar/NavBar'
import Closet from './pages/Closet/Closet'
import ItemDetails from './pages/ItemDetails/ItemDetails'
import Landing from './pages/Landing/Landing'
import Profile from './pages/Profile/Profile'

import './App.css'

function App() {


  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<Landing/>} />
        {/* <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} /> */}
        <Route path="/profile" element={
          // <ProtectedRoute user={user}>
            <Profile />
          // </ProtectedRoute>
        } />
        <Route path="/closet" element={
          // <ProtectedRoute user={user}>
            <Closet />
          // </ProtectedRoute>
        } />
        <Route path="/itemdetails/:id" element={
          // <ProtectedRoute user={user}>
            <ItemDetails />
          // </ProtectedRoute>
        } />
      </Routes>
    </>
  )
}

export default App
