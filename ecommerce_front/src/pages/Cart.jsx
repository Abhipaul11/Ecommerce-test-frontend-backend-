import React, { useCallback, useContext, useEffect, useState } from 'react'
import styles from "./pagecss/cart.module.css";
import { FaRegTrashAlt } from "react-icons/fa";
import { userContext } from '../Store'
import { addOrderApi, deleteCartApi, getCartlistApi, quantityDecreaseApi, quantityIncreaseApi } from '../utils/apiCart'
import { toast } from 'react-toastify'
import { Link } from 'react-router-dom'
import ModalboxCart from '../components/ModalboxCart'

function Cart({ image, price, id }) {
    const imagelink = "http://localhost:3000/uploads"

    const { data, dispatch } = useContext(userContext);

    const { cart } = data;

    useEffect(() => {
        const getCartlistitems = async () => {
            try {
                const response = await getCartlistApi(data.user.token);

                dispatch({ type: 'addToCart', payload: response.data.getcartitems });
            } catch (error) {
                console.error("Error fetching cartlist:", error);
            }
        };
        getCartlistitems()
    }, [])

    return (
        <>
            <div className={styles.firstcontainer}>
                <div className={styles.container}>
                    {cart?.length > 0 ? (
                        cart.map((item, index) => (
                            <Cartdetails key={index} id={item.productId._id} itemname={item.productId.name} image={`${imagelink}/${item.productId.image}`} price={item.productId.price} quantity={item.quantity} />
                        ))
                    ) : (
                        <h2>Cart is empty</h2>
                    )}
                </div>

                <Checkout />
            </div>

        </>
    )
}

export default Cart;


// cart detailes component here
function Cartdetails({ image, itemname, price, id, quantity }) {

    const [showModal, setShowModal] = useState(false)

    const { data, dispatch } = useContext(userContext)
    const [pricecount, setPriceCount] = useState(price)
    const [quantitycount, setQuantitycount] = useState(quantity)

    useEffect(() => {
        const getCartlistitems = async () => {
            try {
                const response = await getCartlistApi(data.user.token);
                setPriceCount(quantitycount * pricecount)

                dispatch({ type: 'addToCart', payload: response.data.getcartitems });
            } catch (error) {
                console.error("Error fetching cartlist:", error);
            }
        };
        getCartlistitems()
    }, [])

    const handleincreasecount = async () => {

        const response = await quantityIncreaseApi(id, data.user.token);
        if (pricecount > 0 && quantitycount > 0) {
            setQuantitycount(pre => pre + 1)
            setPriceCount(pricecount + price)
        }
        setPriceCount(setPriceCount)
        console.log(response)
        const fullCartlist = await getCartlistApi(data.user.token)

        dispatch({ type: 'addToCart', payload: fullCartlist.data.getcartitems })


    }
    const handledecreasecount = async () => {

        const response = await quantityDecreaseApi(id, data.user.token);
        if (pricecount > 0 && quantitycount > 0) {
            setQuantitycount(pre => pre - 1)
            setPriceCount(pricecount - price)
        }
        setPriceCount(setPriceCount)

        console.log(response)
        const fullCartlist = await getCartlistApi(data.user.token)

        dispatch({ type: 'addToCart', payload: fullCartlist.data.getcartitems })
    }

    const handleRemovefromCart = async () => {
        try {
            try {
                const response = await deleteCartApi(id, data.user.token);
                console.log("Deleting from cart respone =========\n", response)
                if (response.data.success) {
                    toast.success("Removed from cart")
                } else {
                    toast.error("failed to remove from cart")
                }

                dispatch({ type: "addToCart", payload: response.data.fullCartlist });

            } catch (error) {
                console.log("failed to delete from cart", error)
            }
        } catch (error) {
            console.log("RemovefromCart err===", error)
        }
    }


    return (
        <>
            <div className={styles.cartbox}>
                <div className={styles.item}>

                    <div className={styles.imageSection}>
                        <img src={image} alt="" />
                        <div className={styles.details}>
                            <h4>{itemname}</h4>
                            <p className={styles.price}>Price:{price}</p>
                        </div>
                    </div>

                    <div className={styles.totalprice}>
                        <p>Total price: {pricecount}</p>
                    </div>

                    <div className={styles.count}>
                        <button onClick={handleincreasecount}>+</button>
                        <span>{quantity}</span>
                        <button onClick={handledecreasecount} disabled={quantity == 1 ? true : false}>-</button>
                    </div>

                    <FaRegTrashAlt onClick={() => setShowModal(true)} color="rgba(123, 123, 123, 1)" size={19} className={styles.deletebtn} />
                </div>
            </div >
            {showModal &&
                <ModalboxCart setShowModal={setShowModal} handleRemovefromCart={handleRemovefromCart} id={id} />
            }
        </>
    )
}


// checkout component is here
function Checkout() {

    const { data, dispatch } = useContext(userContext)
    const [totalPrice, setTotalPrice] = useState();
    console.log(data.cart)

    const calculateTotalPrice = useCallback(() => {
        const total = data.cart.reduce((acc, curr) => {
            return acc += curr.productId.price * curr.quantity;
        }, 0);
        setTotalPrice(total);
    }, [data])

    useEffect(() => {
        calculateTotalPrice();
    }, [data]);

    const handleCheckout = async () => {
        console.log('handlecheckout in cart page called:====', data.cart)
        try {
            const response = await addOrderApi(data.cart, data.user.token);
            if (response) {
                toast.success("Order placed successfully!");
                const response = await getCartlistApi(data.user.token);
                dispatch({ type: 'addToCart', payload: response.data.getcartitems });
                setTotalPrice(0);

            } else {
                toast.error("Failed to place order");
            }

        } catch (error) {
            console.log("Error during checkout:", error);
            alert("An error occurred while placing the order");
        }
    };


    return (
        <>
            <div className={styles.main}>
                <h3>Order Summary</h3>
                <div className={styles.orderprice}>
                    <p>Price</p>
                    <p>{totalPrice} </p>
                </div>
                <div className={styles.orderprice}>
                    <p>Shipping</p>
                    <p>0</p>
                </div>
                <div className={styles.orderprice}>
                    <p>Tax</p>
                    <p>0</p>
                </div>

                <div className={styles.totalprice}>
                    <h4>Total Price:</h4>
                    <h4>{totalPrice}</h4>
                </div>

                <button onClick={handleCheckout}>Check Out</button>

            </div>
        </>
    )
}
