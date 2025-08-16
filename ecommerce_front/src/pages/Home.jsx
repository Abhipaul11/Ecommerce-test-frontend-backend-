import React, { useEffect, useState, useContext } from 'react'
import styles from "./pagecss/home.module.css"
import axios from 'axios'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import Card from '../components/Card'
import Shopcard from '../components/Shopcard'
import Bigcard from '../components/Bigcard'
import Footer from '../components/Footer'
import Header from '../components/Header'

function Home() {
    const [shopcard, setShopCard] = useState()
    const [card, setCard] = useState()

    useEffect(() => {
        const getAllProducts = async () => {
            try {
                console.log('all products')
                const response = await axios.get(`${import.meta.env.VITE_BASE_URL}/api/v1/getallproduct`)
                const lastresponse = await axios.get(`${import.meta.env.VITE_BASE_URL}/api/v1/getallproduct?size=3`)
                console.log("this is products", response)
                setShopCard(response.data.allProducts)
                setCard(lastresponse.data.allProducts)
            } catch (error) {
                console.log(error)
            }
        }
        getAllProducts()
    }, [])


    return (
        <>
            <Navbar />
            <Header />
            <div className={styles.hero}>
                <Hero />
            </div>

            <div className={styles.main}>
                <Bigcard bgColor="rgba(191, 46, 59, 1)" img="./img1.jpeg" />
                <Bigcard bgColor="rgba(29, 81, 89, 1)" img="./img3.jpeg" />
            </div>

            <div className={styles.firstcontainer}>
                <h2>Top 100</h2>

                <div className={styles.container}>
                    {shopcard?.map((allProducts, index) => {
                        const { image, category, name, price, _id } = allProducts;
                        return (
                            <Shopcard key={index} image={image} category={category?.categoryname} name={name} price={price} id={_id} />
                        )
                    })}

                </div>

            </div>

            <div className={styles.firstcontainer}>
                <h2>Trending must have</h2>

                <div className={styles.cardcontainer}>
                    {card?.map((allProducts, index) => {
                        const { image, category, name, price } = allProducts;
                        return (
                            // <Card key={index} image={image} category="" name={name} price={price} />
                            <Card key={index} image={image} category={category?.categoryname} name={name} price={price} />
                        )
                    })}
                    {/* <Card />  */}


                </div>
            </div>

            <div className={styles.thirdcontainer}>
                <Bigcard bgColor="rgba(191, 46, 59, 1)" img="./img1.jpeg" />
                <Bigcard bgColor="rgba(29, 81, 89, 1)" img="./img3.jpeg" />
            </div>

            <div className={styles.img}>
                <div className={styles.text}>
                    <h2>Lorem  </h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum cupiditate autem unde voluptatem.</p>
                </div>
                <div className={styles.imgbox}>
                    <img src="./iphone.png" alt="" />
                </div>
            </div>

            <Footer />
        </>
    )
}

export default Home