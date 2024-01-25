import axios from 'axios'
import * as tokenService from './tokenService'

// This is the base URL for our API
const BASE_URL = `${import.meta.env.VITE_BACK_END_SERVER_URL}/StyleStash/profile`

//get profile
async function getProfile(profileId) {
    try {
        const res = await axios.get(`${BASE_URL}/${profileId}`, {
            headers : {'Authorization':`Bearer ${tokenService.getToken()}`}
        })
        return res.data
    } catch (error) {
        console.error(error)
        throw error
    }
}

async function updateProfile(profileId, updatedProfileData){
    try {
       const res = await axios.put(`${BASE_URL}/updateProfile/${profileId}`, updatedProfileData, {
           headers: {'Authorization': `Bearer ${tokenService.getToken()}`}
       }) 
    } catch (error) {
        console.error(error)
        throw error
    }
}

export { getProfile, updateProfile }