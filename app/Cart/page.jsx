"use client"
import React from 'react'
import CartProduct from '../components/cartProduct';
import { cartProducts } from '../testData/produts';
import { useTheme } from "../Domain/ThemeContext";
import { useState, useEffect } from 'react';
import ModalCheckOut from '../components/modalCheckout';
import { handleEnter, handleLeave } from '../components/animationFunction';

export default function CartPage() {
    const { isDarkMode } = useTheme();
    const [subTotal, setSubTotal] = useState(0)
    const [showModal, setShowModal] = useState(false)


    useEffect(() => {
        let newSubtotal = 0
        cartProducts.map((product) => {
            newSubtotal += product.price*product.quantity
        })
        setSubTotal(newSubtotal.toFixed(2))

    }, [])

    return (
        <div className={`${isDarkMode ? 'bg-ACMPrimary' : 'bg-ACMBLUE'} text-white flex flex-col items-center justify-center min-h-screen bg-cover bg-center w-full`}>
            <div className='mt-28'>
                {cartProducts && cartProducts.map((product) => {
                    return (
                        <CartProduct key={product.id} id={product.id} tags={product.tags} title={product.title} price={product.price} quantity={product.quantity} imgUrl={product.imgUrl} properties={product.properties} />
                    )
                })}
            </div>
            <div className='w-10/12 flex  flex-col items-end '>
            <div className={`w-60 flex justify-between flex-row text-xl font-bold mb-4  text-ACMDARK`}>
                <h1 className='' >SubTotal</h1>
                <h1>${subTotal}</h1>
            </div>
            <button
                onClick={()=> setShowModal(true)}
                onMouseLeave={(e) => handleLeave(e)}
                onMouseEnter={(e) => handleEnter(e)}
                className='text-lg duration-200 mb-10 transition-all ease-out bg-ACMDARK w-60 h-10 pt-1 pb-1 rounded-lg text-white' >
                Checkout
            </button>
        </div>
            <ModalCheckOut products={cartProducts} subTotal={subTotal} showModal={showModal} setShowModal={setShowModal} />
        </div>
    )
}