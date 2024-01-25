import axios from "axios";
import * as tokenService from "./tokenService";


const BASE_URL = `${import.meta.env.VITE_BACK_END_SERVER_URL}/StyleStash/item`;

async function getItems() {
    try {
        const res = await axios.get(`${BASE_URL}/`, {
            headers : {'Authorization':`Bearer ${tokenService.getToken()}`}
        })
        return res.data
    } catch (error) {
        console.error(err)
        throw error
    }
}

async function getOneItem(itemId) {
    try {
        const res = await axios.get(`${BASE_URL}/${itemId}`, {
            headers : {'Authorization':`Bearer ${tokenService.getToken()}`}
        })
        return res.data
    } catch (error) {
        console.error(err)
        throw error
    }
}

async function addItem(itemData) {
    try {
        const res = await axios.post(`${BASE_URL}/item`, itemData, {
            headers : {'Authorization':`Bearer ${tokenService.getToken()}`}
        })
        return res.data
    } catch (error) {
        console.error(err)
        throw error
    }
}

async function updateItem(itemId, updatedItemData){
    try {
       const res = await axios.put(`${BASE_URL}/updateItem/${itemId}`, updatedItemData, {
           headers: {'Authorization': `Bearer ${tokenService.getToken()}`}
       }) 
    } catch (error) {
        console.error(error)
        throw error
    }
}

async function deleteItem(itemId){
    try {
        const res = await axios.delete(`${BASE_URL}/deleteItem/${itemId}`, {
            headers: {'Authorization': `Bearer ${tokenService.getToken()}`}
        })
    } catch (error) {
        console.error(error)
        throw error
    }
}