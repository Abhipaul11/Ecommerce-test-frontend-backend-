import React from 'react'
import { useState } from "react"
import styles from "./componentscss/Navbar.module.css"
import { BsCartCheck } from 'react-icons/bs';
import { RxHamburgerMenu } from 'react-icons/rx';
import { FaFacebookF } from 'react-icons/fa';
import { RiInstagramFill } from 'react-icons/ri';
import { RiTelegram2Fill } from 'react-icons/ri';
import { CiSearch } from 'react-icons/ci';
import { Link } from 'react-router-dom';
import { NAV_MENU_ITEM, NAV_ICONS } from '../constants/constant';

function Navbar() {

    return (
        <>
            <nav>
                <RxHamburgerMenu size={28} className={styles.menubar} />
                <Link to="/" className={styles.link}>
                    <div className={styles.logo}>
                        <BsCartCheck className={styles.logoimg} size={26} />
                        <h2>Luminae</h2>
                    </div>
                </Link>
                <div className={styles.search}>
                    <input type="text" placeholder='Search Products' />
                    <CiSearch className={styles.searchbtn} size={19} />
                </div>

                <ul>
                    {NAV_MENU_ITEM.map((menu, index) => {
                        return <Link to={menu.link} className={styles.link} key={index}><li>{menu.label}</li> </Link>
                    })}
                </ul>

                <div className={styles.social} >
                    {NAV_ICONS.map((item, index) => {
                        return <Link to={item.link} className={styles.link} key={index}> <item.icon color='grey' size={17} /> </Link>
                    })}
                </div>
            </nav>
        </>
    )
}

export default Navbar