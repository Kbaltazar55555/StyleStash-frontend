import * as tokenService from './tokenService'

// This is the base path to the backend api
// const BASE_URL = `${process.env.REACT_APP_BACK_END_SERVER_URL}/api/auth`

// This is the function that will get the user from the token
function getUser() {
  return tokenService.getUserFromToken()
}

// This is the function that will signup the user
async function signup(user) {
  try {
    // Fetch the data from the backend
    const res = await fetch(`${BASE_URL}/signup`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      // This is the body of the request which will be the user object in JSON format stringified
      body: JSON.stringify(user),
    })
    // Parse the data as JSON
    const json = await res.json()
    // If there is a token in the response, set the token
    if (json.token) {
      tokenService.setToken(json.token)
      return json.token
    }
    // If there is an error, throw the error
    if (json.err) {
      throw new Error(json.err)
    }
  } catch (err) {
    // If there is an error, console log it and throw it
    console.log(err)
    throw err
  }
}

// This is the function that will login the user using the credentials
async function login(credentials) {
  try {
    // Fetch the data from the backend
    const res = await fetch(`${BASE_URL}/login`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(credentials),
    })
    // Parse the data as JSON
    const json = await res.json()
    // check if there is a token in the response, if so set the token
    if (json.token) {
      tokenService.setToken(json.token)
    }
    // If there is an error, throw the error
    if (json.err) {
      throw new Error(json.err)
    }
  } catch (err) {
    throw err
  }
}
// This is the function that will logout the user
function logout() {
  //calls the removeToken function from tokenService
  tokenService.removeToken()
}

export { signup, getUser, logout, login }