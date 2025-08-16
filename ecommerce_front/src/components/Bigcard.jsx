import React from 'react'
import styles from "./componentscss/bigcard.module.css"

function Bigcard({ bgColor, img }) {
    return (
        <>
            <div className={styles.card}>
                <div className={styles.left} style={{ backgroundColor: bgColor }} >
                    <h2>Lorem, ipsum dolor.</h2>
                    <p>Lorem ipsum dolor sit amet consectetur.z</p>
                    <span>Lorem ipsum dolor sit amet.</span>
                </div>
                <div className={styles.right}>
                    <img src={img} alt="" />
                </div>
            </div>
        </>
    )
}

export default Bigcard