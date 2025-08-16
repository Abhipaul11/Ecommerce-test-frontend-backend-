import React, { useContext } from 'react';
import styles from "./componentscss/order.module.css";
import { Link, useNavigate } from 'react-router-dom';
import { cancelOrderApi, getOrderlistApi } from '../utils/apiOrder';
import { userContext } from '../Store';
import { toast } from 'react-toastify';


function Order({ orderData, name }) {
    // console.log("========== data inside order= ======\n", data)
    //date, name, price, status, image, orderno


    const { data, dispatch } = useContext(userContext);
    const navigate = useNavigate();

    const handleCancelOrder = async () => {
        try {
            const response = await cancelOrderApi(orderData._id, data.user.token);
            if (response.ok) {
                const response = await getOrderlistApi(data.user.token);
                dispatch({ type: 'getOrderhistory', payload: response.data.userOrders });
            } else {
                toast.error("Failed to cancel");
            }
        } catch (error) {
            console.log("handleCancelOrder error", error);
        }
    };

    const handleViewDetails = () => {
        navigate("/user/orderdetails", { state: { orderData } });
    };

    return (
        <div className={styles.container}>
            <div className={styles.container}>
                <div className={styles.top}>
                    <p>Order made on: {new Date(orderData.items[0].createdAt).toLocaleDateString()} by {name} </p>
                </div>

                <div className={styles.middle}>
                    <p>Total:{orderData.totalAmount}</p>
                    <button>{orderData.items[0].status}</button>
                </div>

                <div className={styles.btngroup}>
                    <button className={styles.cancel} onClick={handleCancelOrder}>Cancel</button>
                    <button className={styles.view} onClick={handleViewDetails}>View Details</button>
                    <button className={styles.track}>Track</button>
                </div>
            </div>
        </div>
    );
}

export default Order;
