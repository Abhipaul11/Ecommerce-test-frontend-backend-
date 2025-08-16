import { createContext, useEffect, useReducer } from "react";
import { setlocalStorage, getlocalStorage, deletelocalStorage } from "./utils/localStorage.util";

const initialState = {
    user: getlocalStorage() || {},
    favoriteProducts: [],
    cart: [],
    orderhistory: []
};

function reducer(state, action) {

    switch (action.type) {
        case "user":
            return { ...state, user: action.payload };
        case "logout":
            return deletelocalStorage()

        case "addToFavorites":
            return { ...state, favoriteProducts: action.payload };

        case "addToCart":
            return { ...state, cart: action.payload };
        case "getOrderhistory":
            return { ...state, orderhistory: action.payload };

    }
}
export const userContext = createContext();

const Store = ({ children }) => {
    const [data, dispatch] = useReducer(reducer, initialState);

    return (
        <userContext.Provider value={{ data, dispatch }}>
            {children}
        </userContext.Provider>
    );
};

export default Store;