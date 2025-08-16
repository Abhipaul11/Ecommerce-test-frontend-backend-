import React from 'react'
import styles from "./pagecss/invoice.module.css";

function Invoice() {
    return (
        <>
            <div className={styles.main}>
                <div className={styles.container}>
                    <div className={styles.top}>
                        <div className={styles.left}>
                            <p>Name  :  Abhi</p>
                            <p>Address  :  pb8687cvuik</p>
                        </div>
                        <div className={styles.right}>
                            <h2>INVOICE # 3689</h2>
                        </div>
                    </div>

                    <div className={styles.tablecontainer}>
                        <table className={styles.invoiceTable}>
                            <thead>
                                <tr>
                                    <th>Description</th>
                                    <th>Amount</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>Payment for August 2016</td>
                                    <td>15,000/-</td>
                                </tr>
                                <tr>
                                    <td>Payment for June 2016</td>
                                    <td>6,00/-</td>
                                </tr>
                                <tr>
                                    <td>Payment for May 2016</td>
                                    <td>35,00/-</td>
                                </tr>

                                <tr >
                                    <td className={styles.td2}><b>Total Amount:</b></td>
                                    <td className={styles.td2} style={{ textAlign: "left" }}>65,500/-</td>
                                </tr>
                                <tr >
                                    <td className={styles.td2}><b>Late Fees:</b></td>
                                    <td className={styles.td2} style={{ textAlign: "left" }}>500/-</td>
                                </tr>
                                <tr >
                                    <td className={styles.td2}><b>Payable Amount:</b></td>
                                    <td className={styles.td2} style={{ textAlign: "left" }}>1300/-</td>
                                </tr>
                                <tr  >
                                    <td className={styles.td2}><b>Balance Due:</b></td>
                                    <td className={styles.td2} style={{ textAlign: "left" }}>9500/-</td>
                                </tr>
                            </tbody>
                            <tfoot>
                                <tr>
                                    <td className={styles.td2} style={{ border: "1px solid #ddd" }}><b>TOTAL:</b></td>
                                    <td className={styles.totalAmount}>31,566/-</td>
                                </tr>
                            </tfoot>
                        </table>
                    </div>

                    <div className={styles.bottom}>
                        <div className={styles.left}>
                            <p>Date : 1247618746</p>
                            <p style={{ color: "rgb(140, 140, 140)" }}>Thanks for Shopping</p>
                        </div>
                        <div className={styles.right}>
                            <button>Print</button>
                        </div>
                    </div>
                </div>



            </div>

        </>
    )
}

export default Invoice