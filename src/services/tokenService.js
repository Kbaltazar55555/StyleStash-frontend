import { jwtDecode } from 'jwt-decode'

//this is a helper function that will allow us to get the user object from the token
function getUserFromToken() {
    // calls on the getToken function to get the token
    const token = getToken()
    // if there is a token, decode it and return the user object
    // if there is no token, return null
    return token ? jwtDecode(token).user : null
}

function getProfileFromToken() {
    const token = getToken();
    if (token) {
        const payload = jwtDecode(token);
        console.log("Decoded Token Payload:", payload);
        const profileId = payload.user.profile;
        console.log("Profile ID from Token:", profileId);
        return profileId;
    }
    return null;
}


function getClosetFromToken() {
    const token = getToken();
    if (token) {
        const payload = jwtDecode(token);
        console.log("Decoded Token Payload:", payload);
        const closetId = payload.user.closet;
        console.log("Closet ID from Token:", closetId);
        return closetId;
    }
}


function setToken(token) {
    // set the token to local storage
    localStorage.setItem('token', token)
}

//this is a helper function that will allow us to get the token
function getToken() {
    // get the token from local storage
    let token = localStorage.getItem('token')
    // if there is a token, get the payload from the token
    if (token) {
        //use jwtDecode to decode the token
        const payload = jwtDecode(token)
        console.log(payload)
        // check if the token is expired, if so remove the token
        if (payload.exp < Date.now() / 1000) {
        localStorage.removeItem('token')
        // set the token to null
        token = null
        }
    }
    return token
}

//this is a helper function that will allow us to remove the token
function removeToken() {
    // remove the token from local storage
    localStorage.removeItem('token')
}

export { setToken, getUserFromToken, getToken, removeToken, getProfileFromToken, getClosetFromToken}