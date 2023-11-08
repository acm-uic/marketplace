"use client"
import React from 'react'
import CartProduct from '../components/cartProduct';
import { useTheme } from "../Domain/ThemeContext";
import { useState, useEffect } from 'react';
import ModalCheckOut from '../components/modalCheckout';
import { useCartProducts } from '../Domain/cartContext'
import Image from 'next/image';
import emptyCart from '../images/empty-cart.png'
import Link from 'next/link';

export default function CartPage() {
    const { isDarkMode } = useTheme();
    const [subTotal, setSubTotal] = useState(0)
    const [showModal, setShowModal] = useState(false)
    const { cartProducts } = useCartProducts();

    useEffect(() => {
        let newSubtotal = 0
        cartProducts.map((product) => {
            newSubtotal += product.price * product.cartQuantity
        })
        setSubTotal(newSubtotal.toFixed(2))

    }, [cartProducts])

    return (
        <div className={`${isDarkMode ? 'bg-ACMPrimary' : 'bg-ACMBLUE'} text-white min-h-screen bg-cover bg-center w-full`}>
            <div className='flex flex-col items-center justify-center'>
                <div className='h-24 w-[80vw] font-bold  mt-16 flex flex-col items-center justify-center '>
                    <h1 className='text-3xl'>Shopping Cart</h1>
                </div>
                {cartProducts.length === 0 ?
                    <div className='flex flex-col items-center justify-center mt-10'>
                        <div className='h-40 w-40 rounded-full border-2 border-black flex items-center justify-center mb-4'>
                            <Image src={emptyCart} width={100} height={100}  alt='Empty Cart Image'/>
                        </div>
                        <h1 className='text-3xl font-bold mb-2'>Your Cart is currently empty</h1>
                        <p className='text-lg'>Looks Like you haven't add anything to your cart yet</p>
                        <Link href='/' className=' hover:scale-110 mt-8 bg-ACMDARK w-44 h-10 flex items-center justify-center rounded-lg duration-200 transition-all ease-out'>Continue Shopping</Link>
                    </div>
                    : <>
                        <div>
                            {cartProducts && cartProducts.map((product) => {
                                return (
                                    <CartProduct key={product.id} product={product} />
                                )
                            })}
                        </div>
                        <div className='w-10/12 flex  flex-col items-end '>
                            <div className={`w-60 flex justify-between flex-row text-xl font-bold mb-4  text-ACMDARK`}>
                                <h1 className='' >SubTotal</h1>
                                <h1>${subTotal}</h1>
                            </div>
                            <button
                                onClick={() => setShowModal(true)}
                                className='hover:scale-110 text-lg duration-200 mb-10 transition-all ease-out bg-ACMDARK w-60 h-10 pt-1 pb-1 rounded-lg text-white' >
                                Checkout
                            </button>
                        </div>
                    </>}
                <ModalCheckOut products={cartProducts} subTotal={subTotal} showModal={showModal} setShowModal={setShowModal} />
            </div>
        </div>
    )
}