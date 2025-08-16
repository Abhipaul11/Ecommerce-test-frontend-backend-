import axios from "axios";
import { data } from "react-router-dom";

export const getOrderlistApi = async (token) => {
    try {
        const response = await axios.get(`${import.meta.env.VITE_BASE_URL}/api/v1/orderhistory`, {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        });
        return response
    } catch (error) {
        console.log(error)
    }
}

export const cancelOrderApi = async (orderno, token) => {
    // console.log("incoming orderNO", orderno)
    try {
        const response = await fetch(`${import.meta.env.VITE_BASE_URL}/api/v1/cancelorder/${orderno}`, {
            headers: {
                Authorization: `Bearer ${token}`,
            },
            method: "PUT"
        })
        return response
    } catch (error) {
        console.log(error)
    }
}
export const getTotalOrderApi = async (token) => {
    try {
        const response = await fetch(`${import.meta.env.VITE_BASE_URL}/api/v1/getallorders`, {
            headers: {
                Authorization: `Bearer ${token}`,
                "Content-Type": "application/json",
            },
            method: "GET",
        });


        if (!response.ok) {
            console.error("Failed to fetch orders:", response.status);
            return null;
        }

        return response;
    } catch (error) {
        console.log("Error fetching orders:", error);
        return null;
    }
};
