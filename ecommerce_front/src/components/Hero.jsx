import React from 'react'
import styles from "./componentscss/hero.module.css"

function Hero() {
    return (
        <>
            <div className={styles.banner}>
                <div className={styles.left}>
                    <img src="./pic1.jpeg" alt="" />
                </div>

                <div className={styles.right}>
                    <div className={styles.content}>
                        <h1>Lorem ipsum dolor sit amet consectetur  </h1>
                        <h3>Lorem ipsum dolor sit amet consectetur adipisicing .</h3>
                        <button>Shop now</button>
                    </div>

                    <div className={styles.box}>
                        <p>Lorem, ipsum dolor.</p>
                        <p>20% off</p>
                        <p className={styles.bottom}>19july-31july</p>
                    </div>
                </div>

            </div>
        </>
    )
}

export default Hero