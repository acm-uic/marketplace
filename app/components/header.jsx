import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import logo from '../images/acmLogo.png'
import cart from '../images/cart.png'
import sun from "../images/sun.png"
import moon from "../images/moon.png"

export default function Header({isDarkMode,setIsDarkMode}) {

    return (
        <div className="flex items-center justify-between " >
            <div className="font-bold text-lg mt-4">
                <Link className="text-xl ml-6 mr-10 text-white hover:underline" href="/">Shop</Link>
                <Link className="text-xl mr-10 text-white hover:underline" href="https://acm.uic.edu/about">About</Link>
                <Link className="text-xl text-white  hover:underline" href='https://acm.uic.edu/about'>Contact</Link>
            </div>
            <div className="mt-4">
                <Link href="https://acm.uic.edu/">
                    <Image src={logo} alt="ACM Logo" width={100} height={64} />
                </Link>
            </div>

            <div className="flex flex-row mt-4 text-black"  style={{maxWidth:"283px"}}>
                <input placeholder="Search" className="rounded-lg w-56 pl-2 mt-1 mr-4" style={{ height: '29px' }}  type="text"/>
                <Image onClick={()=>setIsDarkMode(!isDarkMode)} src={isDarkMode? sun: moon} width={16} height={16} className="mr-2"/>
                <Link href="/cart" >
                    <Image  src={cart} width={60} height={50} alt="cart" className="mr-4" />
                </Link>
            </div>
        </div>
    )
}