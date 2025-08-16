import axios from "axios";
import { data } from "react-router-dom";

export const getUserStatus = async (token) => {
    try {
        const response = await fetch(`${import.meta.env.VITE_BASE_URL}/api/v1/getUserStatus`, {
            headers: {
                Authorization: `Bearer ${token}`,
            },
            method: "GET"
        });
        return response
    } catch (error) {
        console.log(error)
    }
}