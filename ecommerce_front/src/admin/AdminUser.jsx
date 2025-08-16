import React, { useContext, useEffect, useState } from 'react'
import styles from './admincss/admindashboard.module.css'
import Admindashboard from './Admindashboard'
import { getUserStatus } from '../utils/apiUser';
import { userContext } from '../Store';

function AdminUser() {
    const { data, dispatch } = useContext(userContext)
    const [userStatus, setUserStatus] = useState({
        totaluser: 0,
        activeuser: 0,
        inActiveUser: 0,
    });
    useEffect(() => {
        const fetchUserStatus = async () => {
            const response = await getUserStatus(data.user.token);
            if (response) {
                const data = await response.json();
                // console.log(data)
                setUserStatus(data);
            } else {
                console.log("Failed to fetch user data");
            }
        }
        fetchUserStatus()
    }, [])

    return (
        <>
            <div className={styles.main}>
                <div className={styles.left}>
                    <Admindashboard />
                </div>

                <div className={styles.right}>
                    <h2>User Status</h2>
                    <div className={styles.boxcontainer}>

                        <div className={styles.box}>
                            <p>Total Users</p>
                            <p>{userStatus.totaluser}</p>
                        </div>
                        <div className={styles.box}>
                            <p>Active</p>
                            <p>{userStatus.activeuser}</p>
                        </div>
                        <div className={styles.box}>
                            <p>InActive</p>
                            <p>{userStatus.inActiveUser}</p>
                        </div>

                    </div>
                </div>
            </div>
        </>
    )
}

export default AdminUser