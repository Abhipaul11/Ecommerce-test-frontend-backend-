import React from 'react'
import styles from "./componentscss/card.module.css"

function Card({ image, name, price }) {
    return (
        <>
            <div className={styles.card}>
                <img src={image} alt="" />

                <div className={styles.details}>
                    <p>{name}  </p>
                    <button>₹{price} shop now </button>
                </div>
            </div>
        </>
    )
}

export default Card