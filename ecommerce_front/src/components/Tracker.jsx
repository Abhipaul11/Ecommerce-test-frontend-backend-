import React, { useContext, useState } from 'react'
import styles from "./componentscss/tracker.module.css"
import { IoCartOutline, IoCarOutline, IoHomeOutline } from "react-icons/io5";
import { CiSettings } from "react-icons/ci";
import { CiMedal } from "react-icons/ci";
import { useLocation } from 'react-router-dom';
import { ORDER_TRACKER_DATA } from '../constants/constant';

function Tracker() {

    const location = useLocation();
    const { orderData } = location.state

    const status = {
        pending: 0,
        processing: 1,
        shipped: 2,
        transit: 3,
        delivered: 4,
    }
    // let currentStatus = orderData.items[0].status
    let currentStatus = 'transit'

    const [currentStep, setCurrentStep] = useState(status[currentStatus])
    const [isComplete, setIsComplete] = useState(false)


    const width = (currentStep * 25)

    console.log("width", width)

    // const calculateProgressbar = () => {

    // }
    return (
        <>
            <div className={styles.main}>
                <div className={styles.inside}>

                    <div className={styles.heading}>
                        <p style={{ textAlign: "center" }}>Tracking Order No - {orderData._id}</p>
                    </div>

                    <div className={styles.container}>
                        <div className={styles.trackerline} style={{
                            width: `${width}%`, transition: "width 0.9s ease-in-out, background-color 0.8s ease",
                        }}></div>

                        {ORDER_TRACKER_DATA.map((Item, index) => {
                            return (
                                <div key={index} className={`${styles.step} `} >
                                    <div className={styles.icon} style={{ backgroundColor: `${currentStep >= index ? "skyblue" : "white"}` }}>
                                        <Item.icon size={40} color='black' />
                                    </div>
                                    <p>{Item.label}</p>
                                </div>
                            )
                        })}
                    </div>

                    {orderData.items[0].status === "cancelled" ? <h3 style={{ textAlign: "center", color: "black" }}>This Order is already: <span style={{ color: "brown" }}>{orderData.items[0].status}</span></h3> : ""}
                </div>
            </div >

        </>
    )
}

export default Tracker