import React, { useContext, useState } from "react";
import styles from "./componentscss/wishlist.module.css";
import { FaRegTrashAlt } from "react-icons/fa";
import { userContext } from "../Store";
import { deleteWishListApi } from "../utils/apiWishList";
import { addToCartApi } from "../utils/apiCart";
import { toast } from "react-toastify";

function Wishlist({ itemname, category, image, price, id, name }) {

    const { data, dispatch } = useContext(userContext)

    const handleRemovefavorite = async () => {
        try {
            const response = await deleteWishListApi(id, data.user.token);
            dispatch({ type: "addToFavorites", payload: response.data.fullWishlist });
        } catch (error) {
            console.log("delete favorite product", error)
        }

    }

    const handleAddtoCart = async () => {
        try {
            const response = await addToCartApi({ id, image, category, name, price }, data.user.token)
            if (response.data.success) {
                toast.success("item added to cart")
            } else {
                toast.error(response.data.msg)
            }
        } catch (error) {
            console.log("failed to add to cart", error)
        }
    }

    return (
        <>
            <div className={styles.wishlistContainer}>
                <div className={styles.item}>
                    <div className={styles.imageSection}>
                        <img src={image} alt="" />
                        <div className={styles.details}>
                            <h4>{itemname}</h4>
                            <p>{category} </p>
                        </div>
                    </div>
                    <p className={styles.price}>{price}</p>

                    <FaRegTrashAlt color="rgba(123, 123, 123, 1)" size={19} className={styles.deletebtn} onClick={handleRemovefavorite} />

                    <button onClick={handleAddtoCart}>Add to Cart</button>
                </div>
            </div>

        </>
    );
}

export default Wishlist;


