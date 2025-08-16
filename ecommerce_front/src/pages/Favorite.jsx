import React, { useContext, useEffect, useState } from 'react'
import Navbar from '../components/Navbar'
import Header from '../components/Header'
import Wishlist from '../components/Wishlist'
import styles from "./pagecss/cart.module.css";
import { userContext } from '../Store';
import { getWishListApi } from '../utils/apiWishList';

function Favorite() {
    const imagelink = "http://localhost:3000/uploads"
    const { data, dispatch } = useContext(userContext);

    const { favoriteProducts } = data;


    useEffect(() => {
        const getFavoriteProducts = async () => {
            try {
                const response = await getWishListApi(data.user.token);
                dispatch({ type: 'addToFavorites', payload: response.data.fullWishlist });
            } catch (error) {
                console.error("Error fetching wishlist:", error);
            }
        };
        getFavoriteProducts()
    }, []);

    return (
        <>
            <div className={styles.firstcontainer}>
                <div className={styles.container}>

                    {favoriteProducts?.length > 0 ? (
                        favoriteProducts?.map((item, index) => (
                            <Wishlist key={index} id={item.productId._id} itemname={item.productId.name} image={`${imagelink}/${item.productId.image}`} price={item.productId.price} category={item.productId.category.categoryname} />
                        ))
                    ) : (
                        <h2>Wishlist is empty</h2>
                    )}
                </div>


            </div>
        </>
    )
}

export default Favorite