import * as tokenService from './tokenService'

// This is the base URL for our API
const BASE_URL = `${process.env.REACT_APP_BACK_END_SERVER_URL}/api/profiles`

// This is the function that will get all the profiles
async function getAllProfiles() {
  // Fetch the data from the backend
  const res = await fetch(BASE_URL, {
    // This is the token that will be used to authenticate the user
    headers: {'Authorization': `Bearer ${tokenService.getToken()}`}
  })
  return await res.json()
}

export { getAllProfiles }