import { useState, useEffect } from 'react';
import * as profileService from '../../services/profileService.js';

const Profile = () => {
  const [profile, setProfile] = useState(null); // Initialize as null or {}

  useEffect(() => {
    const getProfile = async () => {
      // const profileData = await profileService.getProfile();
      let profileData ={
        name: 'Test Name',
        location: 'Test Location',
        currentStyle: 'Test Style',
        influences: 'Test Influences'
      }
      setProfile(profileData);
    };
    getProfile();
  }, []);

  // useEffect(() => {
  //   const updateProfile = async () => {
  //     // const updatedProfileData = await profileService.updateProfile();
  //     let updateData ={
  //       name: 'Test Name',
  //       location: 'Test Location',
  //       currentStyle: 'Test Style',
  //       influences: 'Test Influences'
  //     }
  //   }
  //   setProfile(updatedProfileData);
  // }, [])



  // Temporary variable for testing
  let profileData = profile || {
    name: 'Test Name',
    location: 'Test Location',
    currentStyle: 'Test Style',
    influences: 'Test Influences'
  };

  
  return (
    <div>
      {profileData ? (
        console.log(profileData),
        <div className='profile'>
          <h1>{profileData.name}</h1>
          <h2>Location: {profileData.location}</h2>
          <h2>Current Style: {profileData.currentStyle}</h2>
          <h2>Influences: {profileData.influences}</h2>
        </div>
      ) : (
        <h1>Loading Profile...</h1>
      )}
    </div>
  );
};

export default Profile;
