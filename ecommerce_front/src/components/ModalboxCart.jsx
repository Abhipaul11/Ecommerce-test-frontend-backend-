import React, { useState } from 'react'

function ModalboxCart({ setShowModal, handleRemovefromCart, id }) {
    const main = {
        width: '100%',
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: "rgba(181, 148, 148, 0.47)",
        position: "fixed",
        top: "0%",
        zIndex: '1'
    }
    const modalbox = {
        maxWidth: '25rem',
        width: "90%",
        padding: "20px",
        backgroundColor: "white",
        display: 'flex',
        flexDirection: "column",
        gap: "20px",

    }


    return (
        <>
            <div style={main}>
                <div style={modalbox}>
                    <p style={{ color: "black" }}>You want to delete this item?</p>
                    <div style={{ display: 'flex', alignContent: "center", gap: "10px" }}>
                        <button onClick={() => setShowModal(false)} >Cancel</button>
                        <button onClick={() => {
                            setShowModal(false)
                            handleRemovefromCart(id)
                        }} style={{ color: "white", backgroundColor: "red" }}>Delete</button>
                    </div>

                </div>
            </div>
        </>
    )
}

export default ModalboxCart;