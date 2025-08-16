import React, { useContext, useState } from 'react'
import styles from "./componentscss/shopcard.module.css"
import { FaHeart } from "react-icons/fa";
import { userContext } from '../Store';
import { addToWishlistApi } from '../utils/apiWishList';
import { toast } from 'react-toastify';
import { addToCartApi } from '../utils/apiCart';

function Shopcard({ id, image, category, name, price }) {
    const { data, dispatch } = useContext(userContext);
    const [color, setColor] = useState("grey")

    const handleFavoriteClick = async () => {
        try {
            const response = await addToWishlistApi({ id, image, category, name, price }, data.user.token);
            if (response.data.success) {
                toast.success("item added to wishlist")
                setColor("red")
            } else {
                toast.error(response.data.msg)
            }
        } catch (error) {
            console.log(error)
        }
    };



    const handleAddtoCart = async () => {
        try {
            const response = await addToCartApi({ id, image, category, name, price }, data.user.token)
            if (response.data.success) {
                toast.success("item added to cart")
            } else {
                toast.error(response.data.msg)
            }
        } catch (error) {
            console.log("failed to cart from home", error)
        }
    }


    return (
        <>
            <div className={styles.shopcard}>
                <img src={`${import.meta.env.VITE_IMAGE_URL}/uploads/${image}`} alt="" />
                <div className={styles.productdetails}>
                    <p className={styles.item}>{name}</p>
                    <p className={styles.category}>category: {category}</p>
                    <p className={styles.price}>₹{price}</p>
                </div>
                <FaHeart onClick={handleFavoriteClick} size={18} color={color} className={styles.heart} />
                <button onClick={handleAddtoCart}>Add to cart</button>
            </div>
        </>
    )
}

export default Shopcard