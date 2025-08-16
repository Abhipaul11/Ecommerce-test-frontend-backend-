import React from 'react'
import styles from './admincss/admindashboard.module.css'
import { TiShoppingCart } from "react-icons/ti";
import { Link } from 'react-router-dom';
import AdminOrder from './AdminOrder';

function Admindashboard() {
    return (
        <>
            <div className={styles.main}>
                <div className={styles.left}>
                    <h3><TiShoppingCart color='white' size={30} /> Ecommerce</h3>
                    <ul>
                        <Link className={styles.link} to='/admin/admindashboardorder'>- Orders</Link>
                        <Link className={styles.link} to='/admin/totaluser' >- Total Users</Link>
                        <Link className={styles.link}>- Products</Link>
                        <Link className={styles.link}>- Carts</Link>
                        <Link className={styles.link}>- Product details</Link>
                        <Link className={styles.link}>- Edit Products</Link>

                    </ul>
                </div>

            </div>
        </>
    )
}

export default Admindashboard