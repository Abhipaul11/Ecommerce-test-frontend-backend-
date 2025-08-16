import axios from "axios"


export const addToWishlistApi = async (data, token) => {

    console.log("addto wishlist api fubnction called", data)
    console.log(token)
    try {
        const response = await axios.post(`${import.meta.env.VITE_BASE_URL}/api/v1/addwishlist/${data.id}`, data, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        });

        // console.log("WishList data", response)
        return response

    } catch (error) {
        console.error(error);
        alert('failed to add favorite. Please try again.');
    }

}

export const getWishListApi = async (token) => {
    try {
        const response = await axios.get(`${import.meta.env.VITE_BASE_URL}/api/v1/getwishlist`, {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        });

        // console.log("getwishlist data", response);
        return response;
    } catch (error) {
        console.log('get wishlist err', error);
    }
};

export const deleteWishListApi = async (productId, token) => {
    console.log(productId)
    try {
        const response = await axios.delete(`${import.meta.env.VITE_BASE_URL}/api/v1/deletewishlist/${productId}`, {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        });

        return response;
    } catch (error) {
        console.log('delete wishlist err', error);
    }
};


