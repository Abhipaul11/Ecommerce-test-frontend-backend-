import React, { useContext, useEffect } from 'react'
import styles from "./pagecss/orderhistory.module.css"
import Order from '../components/Order'
import { getOrderlistApi } from '../utils/apiOrder';
import { userContext } from '../Store';

function Orderhistory() {
    const { data, dispatch } = useContext(userContext);
    const { orderhistory } = data;


    useEffect(() => {
        const getOrders = async () => {
            try {
                // console.log('orderhistory page useffect called All orderhistory======\n', data.orderhistory)
                const response = await getOrderlistApi(data.user.token);
                // console.log("============ history pipeline data ==========\n", response.data.userOrders)
                dispatch({ type: 'getOrderhistory', payload: response.data.userOrders });

            } catch (error) {
                console.error("Error fetching wishlist:", error);
            }
        };
        getOrders()
    }, []);

    return (
        <>
            <div className={styles.main}>
                {orderhistory?.length > 0 ? (
                    orderhistory.map((item, index) => {
                        return (
                            <Order orderData={item} key={index} name={data.user.name} />
                        );
                    })
                ) : (
                    <h2>Order history is empty</h2>
                )}
            </div>

        </>
    )
}

export default Orderhistory