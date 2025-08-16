import axios from "axios"


export const addToCartApi = async (data, token) => {

    try {
        const response = await axios.post(`${import.meta.env.VITE_BASE_URL}/api/v1/addcart/${data.id}`, data, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        });
        return response
    } catch (error) {
        console.error(error);
        alert('failed to add this on cart. Please try again.');
    }
}

export const getCartlistApi = async (token) => {
    try {
        const response = await axios.get(`${import.meta.env.VITE_BASE_URL}/api/v1/getcartlist`, {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        });
        return response
    } catch (error) {
        console.log(error)
    }
}

export const deleteCartApi = async (productId, token) => {
    try {
        const response = await axios.delete(`${import.meta.env.VITE_BASE_URL}/api/v1/deletecart/${productId}`, {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        });
        return response;
    } catch (error) {
        console.log(error)
    }
}


export const quantityIncreaseApi = async (productId, token) => {
    console.log("data user token", token)
    console.log(productId)
    try {
        const response = await fetch(`${import.meta.env.VITE_BASE_URL}/api/v1/quantityincrease/${productId}`, {
            headers: {
                Authorization: `Bearer ${token}`,
            },
            method: "PUT"
        });
        return response.json();
    } catch (error) {
        console.log(error)
    }
}

export const quantityDecreaseApi = async (productId, token) => {
    try {
        const response = await fetch(`${import.meta.env.VITE_BASE_URL}/api/v1/quantitydecrease/${productId}`, {
            headers: {
                Authorization: `Bearer ${token}`,
            },
            method: "PUT"
        });
        return response.json();
    } catch (error) {
        console.log(error)
    }
}

export const addOrderApi = async (products, token) => {
    try {
        // console.log("===== sending this data to server ====\n", products)
        const response = await axios.post(`${import.meta.env.VITE_BASE_URL}/api/v1/addorder`, products, {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        });
        return response;
    } catch (error) {
        console.log(error)
    }
}
