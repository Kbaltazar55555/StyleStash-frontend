import axios from 'axios'
import * as tokenService from './tokenService'

// This is the base path to the backend api
const BASE_URL = `${import.meta.env.VITE_BACK_END_SERVER_URL}/StyleStash/user`

// This is the function that will get the user from the token
function getUser() {
  return tokenService.getUserFromToken()
}

// This is the function that will signup the user
async function signup(user) {
    try {
      const response = await axios.post(`${BASE_URL}/signup`, user);
      
      const json = response.data;

      if (json.token) {
        tokenService.setToken(json.token);
        return json.token;
      }
      if (json.err) {
        throw new Error(json.err);
      }
    } catch (err) {
      console.log(err);
      throw err;
    }
  }
  

// This is the function that will login the user using the credentials
async function login(credentials) {
    try {
      const response = await axios.post(`${BASE_URL}/login`, credentials);
  
      const json = response.data;
  
      if (json.token) {
        tokenService.setToken(json.token);
      }
  
      if (json.err) {
        throw new Error(json.err);
      }
    } catch (err) {
      throw err;
    }
  }
  
// This is the function that will logout the user
function logout() {
  tokenService.removeToken()
}

export { signup, getUser, logout, login }