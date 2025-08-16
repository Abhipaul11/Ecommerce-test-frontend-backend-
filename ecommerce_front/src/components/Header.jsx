import React, { useState } from 'react'
import styles from "./componentscss/header.module.css"
import { Link } from 'react-router-dom'
import { BiCategoryAlt } from "react-icons/bi";
import { IoPerson } from "react-icons/io5";
import { CiMoneyBill } from "react-icons/ci";
import { IoMdHeartEmpty } from "react-icons/io";
import { userContext } from '../Store';
import { deletelocalStorage, getlocalStorage, setlocalStorage } from '../utils/localStorage.util';

function Header() {
    const { data, dispatch } = React.useContext(userContext);
    const [isLogin, setIsLogin] = useState(getlocalStorage() || false)

    function handleLogout() {
        dispatch({ type: "logout" })
        setIsLogin(false)
    }

    console.log("show data", data)
    return (
        <>
            <header>
                <h3 className={`${styles.heading}`}><BiCategoryAlt />Categories</h3>

                <div className={styles.categorybox}>
                    <div className={styles.closecategory}>
                        <span>✖</span>
                        <h3>Categories</h3>
                    </div>

                    <div className={styles.menus} >
                        <ul className={styles.categorymenu}>
                            <h3>Mobile and shoes</h3>
                            <Link className={styles.clink}> Shoes </Link>
                            <Link className={styles.clink}> Shirts </Link>
                            <Link className={styles.clink}> Mobiles </Link><Link className={styles.clink}> Watches </Link>
                        </ul>

                        <ul className={styles.categorymenu}>
                            <h3>Mobile and shoes</h3>
                            <Link className={styles.clink}> Shoes </Link>
                            <Link className={styles.clink}> Shirts </Link>
                            <Link className={styles.clink}> Mobiles </Link><Link className={styles.clink}> Watches </Link>
                        </ul>

                        <ul className={styles.categorymenu}>
                            <h3>Mobile and shoes</h3>
                            <Link className={styles.clink}> Shoes </Link>
                            <Link className={styles.clink}> Shirts </Link>
                            <Link className={styles.clink}> Mobiles </Link><Link className={styles.clink}> Watches </Link>
                        </ul>

                        <ul className={styles.categorymenu}>
                            <h3>Mobile and shoes</h3>
                            <Link className={styles.clink}> Shoes </Link>
                            <Link className={styles.clink}> Shirts </Link>
                            <Link className={styles.clink}> Mobiles </Link><Link className={styles.clink}> Watches </Link>
                        </ul>


                        <ul className={styles.categorymenu}>
                            <h3>Mobile and shoes</h3>
                            <Link className={styles.clink}> Shoes </Link>
                            <Link className={styles.clink}> Shirts </Link>
                            <Link className={styles.clink}> Mobiles </Link><Link className={styles.clink}> Watches </Link>
                        </ul>

                        <ul className={styles.categorymenu}>
                            <h3>Mobile and shoes</h3>
                            <Link className={styles.clink}> Shoes </Link>
                            <Link className={styles.clink}> Shirts </Link>
                            <Link className={styles.clink}> Mobiles </Link><Link className={styles.clink}> Watches </Link>
                        </ul>
                    </div>

                    <div className={styles.pic}>
                        <img src="./img3.jpeg" alt="" />
                    </div>
                </div>

                <ul>
                    {isLogin ? (
                        <div style={{ display: 'flex', alignItems: 'center' }}>
                            <p>Hi {data?.user?.name}</p>
                            <button onClick={handleLogout}  >Logout</button>
                        </div>
                    ) : (
                        <Link to="/login" className={styles.link}> <IoPerson /> Sign In</Link>
                    )}

                    <Link to='/user/favorite' className={styles.link}><IoMdHeartEmpty />Favorite</Link>
                    <Link to='/user/cart' className={styles.link}> <CiMoneyBill />Cart</Link>
                    <Link to='/user/orderhistory' className={styles.link}> Orderhistory</Link>
                    <Link to='/admin/admindashboardorder' className={styles.link}> Admindashboard</Link>
                </ul>

            </header>
        </>
    )
}

export default Header