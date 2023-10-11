'use client'
import { useTheme } from './ThemeContext';
import React from 'react';
import Link from "next/link";
import Image from "next/image";
import logo from '../images/acmLogo.png'
import cart from '../images/cart.png'
import sun from "../images/sun.png"
import moon from "../images/moon.png"

export default function Header() {
    const { isDarkMode, setIsDarkMode, invertColors } = useTheme();
    const colorHeader = invertColors ? "invert" : "invert-0";
    return (
        <div className={`flex items-center justify-between  w-full absolute ${colorHeader}`}>
            <div className="font-bold text-lg mt-4">
                <Link href="/"  className="text-2xl ml-6 mr-10 text-white hover:underline">Shop</Link>
                <Link className="text-2xl mr-10 text-white hover:underline" href="https://acm.uic.edu/about" target="_blank">About</Link>
                <Link className="text-2xl text-white hover:underline w" href='https://acm.uic.edu/contact' target="_blank">Contact</Link>
            </div>
            <div className="mt-4">
                <Link href="https://acm.uic.edu/" target="_blank">
                    <Image src={logo} alt="ACM Logo" width={100} height={64} />
                </Link>
            </div>

            <div className="flex items-center flex-row mt-4 text-black">
                <input placeholder="Search" className="rounded-lg  w-42 pl-2 mt-1 mr-4 h-10" type="text" />
                <Image onClick={() => setIsDarkMode(!isDarkMode)} src={isDarkMode ? sun : moon} width={28} height={28} className="mr-2 " alt="thememode"/>
                <Link href="/Cart">
                    <Image src={cart} width={60} height={50} alt="cart" className="mr-4" />
                </Link>
            </div>
        </div>
    )
}
