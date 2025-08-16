import React, { useContext, useEffect, useState } from 'react';
import styles from './pagecss/orderdetails.module.css';
import { userContext } from '../Store';
import { useLocation } from 'react-router-dom'; // Import useLocation
import { getOrderlistApi } from '../utils/apiOrder';
import Tracker from '../components/Tracker';

function Orderdetails() {
    const { data, dispatch } = useContext(userContext);
    const location = useLocation(); // Get location data 
    const { orderData } = location.state
    console.log("===== single order data =====\n", orderData)



    return (
        <>

            <Tracker />


            <div className={styles.maincontainer}>
                <h2 style={{ textAlign: 'center' }}>Order Details for Order No: {orderData._id}</h2>

                <div>
                    {orderData.items.map((item, index) => {
                        console.log("single item inside map", item)
                        return (
                            <div key={index} className={styles.insidecontainer}>
                                <img src={`http://localhost:3000/uploads/${item.product.image}`} alt={item.product.name} />
                                <p>Name: {item.product.name}</p>
                                <p>Price: ₹{item.product.price}</p>
                            </div>
                        )

                    })}


                </div>
            </div>
        </>
    );
}

export default Orderdetails;

