import React from 'react'
import styles from "./componentscss/footer.module.css"
import { FaTelegramPlane } from "react-icons/fa";

function Footer() {
    return (
        <>
            <footer>
                <div className={styles.box}>
                    <h4>Company</h4>
                    <p>About us</p>
                    <p>Our Store</p>
                    <p>Contact us</p>
                </div>

                <div className={styles.box}>
                    <h4>Career opportunities</h4>
                    <p>Selling program</p>
                    <p>Advertise</p>
                    <p>Cooperation</p>
                </div>

                <div className={styles.box}>
                    <h4>How to buy</h4>
                    <p>Making payment </p>
                    <p>Delivery option</p>
                    <p>Buyer protection</p>
                    <p>New user guide</p>
                </div>

                <div className={styles.box}>
                    <h4>Help</h4>
                    <p>Contact us</p>
                    <p>FAQ</p>
                    <p>Privacy policy</p>
                </div>

                <div className={styles.subscribebox}>
                    <h2>Luminea <span>Store</span></h2>
                    <p>Register your email not to miss the last minitue off</p>
                    <div className={styles.inputbox}>
                        <input type="text" placeholder='Enter your email' />
                        <FaTelegramPlane size={19} className={styles.sent} />
                    </div>

                </div>

            </footer>
        </>
    )
}

export default Footer