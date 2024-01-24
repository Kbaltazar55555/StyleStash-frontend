import axios from "axios";
import * as tokenService from "./tokenService";

// This is the base URL for our API
const BASE_URL = `${import.meta.env.VITE_BACK_END_SERVER_URL}/StyleStash/closet`;

//get closet
async function getCloset() {
    try {
        const res = await axios.get(`${BASE_URL}/${closetId}`, {
            headers : {'Authorization':`Bearer ${tokenService.getToken()}`}
        })
        return res.data
    } catch (error) {
        console.error(err)
        throw error
    }
}

async function addCloset() {
    try {
        const res = await axios.post(`${BASE_URL}/addCloset`, {
            headers : {'Authorization':`Bearer ${tokenService.getToken()}`}
        })
        return res.data
    } catch (error) {
        console.error(err)
        throw error
    }
}

export {getCloset, addCloset}