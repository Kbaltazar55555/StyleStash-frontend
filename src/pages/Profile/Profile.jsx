import { useState, useEffect } from 'react';
import { getProfileFromToken }  from '../../services/tokenService.js';
import * as profileService from '../../services/profileService.js';

const Profile = () => {
  const [profile, setProfile] = useState(null); // Initialize as null or {}

  useEffect(() => {

    const getProfile = async () => {
      const profileId = getProfileFromToken();
      if (profileId) {
        try {
          const profileData = await profileService.getProfile(profileId);
          setProfile(profileData);
        } catch (error) {
          console.error('Error fetching profile', error)
        }
      } else {
        console.log('No profile id in token')
      }
    };
    getProfile();
  }, []);

  
  return (
    <div>
      {profile ? (
        console.log(profile),
        <div className='profile'>
          <h1>{profile.name}</h1>
          <h2>Location: {profile.location}</h2>
          <h2>Current Style: {profile.currentStyle}</h2>
          <h2>Influences: {profile.influences}</h2>
        </div>
      ) : (
        <h1>Loading Profile...</h1>
      )}
    </div>
  );
};

export default Profile;
