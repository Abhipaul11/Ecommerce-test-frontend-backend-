import React, { useContext, useEffect, useState } from 'react';
import styles from './admincss/admindashboard.module.css';
import Admindashboard from './Admindashboard';
import { getTotalOrderApi } from '../utils/apiOrder';
import { userContext } from '../Store';

function AdminOrder() {
    const { data, dispatch } = useContext(userContext)
    const [orderStats, setOrderStats] = useState({
        totalorders: 0,
        pending: 0,
        processing: 0,
        shipped: 0,
        transit: 0,
        delivered: 0,
        cancelled: 0
    });

    useEffect(() => {
        const fetchOrders = async () => {
            const response = await getTotalOrderApi(data.user.token);
            if (response) {
                const data = await response.json();
                // console.log(data)
                setOrderStats(data);

            } else {
                console.log("Failed to fetch order data");
            }
        };
        fetchOrders();
    }, []);

    return (
        <div className={styles.main}>
            <div className={styles.left}>
                <Admindashboard />
            </div>

            <div className={styles.right}>
                <h2>Order Status</h2>
                <div className={styles.boxcontainer}>
                    <div className={styles.box}>
                        <p>Total Orders</p>
                        <p>{orderStats.totalorders}</p>
                    </div>
                    <div className={styles.box}>
                        <p>Pending</p>
                        <p>{orderStats.pending}</p>
                    </div>
                    <div className={styles.box}>
                        <p>Processing</p>
                        <p>{orderStats.processing}</p>
                    </div>
                    <div className={styles.box}>
                        <p>Shipped</p>
                        <p>{orderStats.shipped}</p>
                    </div>
                    <div className={styles.box}>
                        <p>Delivered</p>
                        <p>{orderStats.delivered}</p>
                    </div>
                    <div className={styles.box}>
                        <p>Cancelled</p>
                        <p>{orderStats.cancelled}</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default AdminOrder;
