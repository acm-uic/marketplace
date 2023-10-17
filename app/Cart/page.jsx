"use client"
import React from 'react'
import CartProduct from '../components/cartProduct';
import {cartProducts} from '../testData/produts';
import { useTheme } from "../components/ThemeContext";
import { useState,useEffect } from 'react';

export default function CartPage() {
    const { isDarkMode } = useTheme();
    const [subTotal, setSubTotal] = useState(0)

    function handleEnter(e) {
        e.target.style.transform = 'scale(1.1)';

    }

    function handleLeave(e) {
        e.target.style.transform = 'scale(1.0)';
    }

    useEffect(()=>{
        let newSubtotal = 0
        cartProducts.map((product)=>{
            newSubtotal += product.price
        })
        setSubTotal(newSubtotal)

    },[cartProducts])

    return (
        <div className={`${isDarkMode?'bg-ACMPrimary':'bg-ACMBLUE'} text-white flex flex-col items-center  justify-center min-h-screen bg-cover bg-center w-full`}>
            <div className='w-10/12 font-bold text-xl mt-8 mb-8'>
                <h1>Shopping Cart</h1>
            </div>
            <div>
            {cartProducts && cartProducts.map((porduct)=>{
                return(
                    <CartProduct id={porduct.id} tags={porduct.tags} title={porduct.title} price={porduct.price} quantity={porduct.quantity} imgUrl={porduct.imgUrl} properties={porduct.properties}/>
                )
            })}
            </div>

            <div className='w-10/12 flex  flex-col items-end '>
                <div className={`${isDarkMode?'text-ACMDARK':'text-white'} w-60 flex justify-between flex-row text-xl font-bold mb-4 `}>
                    <h1 className='' >SubTotal</h1>
                    <h1>{subTotal}</h1>
                </div>
                <button onMouseLeave={(e) => handleLeave(e)} onMouseEnter={(e) => handleEnter(e)} className='text-lg duration-200	transition-all ease-out bg-ACMDARK w-60 h-10 pt-1 pb-1 rounded-lg' >Checkout</button>
            </div>
        </div>
    )
}