'use client'
import { useTheme } from '../Domain/ThemeContext';
import React from 'react';
import Link from "next/link";
import Image from "next/image";
import logo from '../images/acmLogo.png'
import cart from '../images/cart.png'
import sun from "../images/sun.png"
import moon from "../images/moon.png"

export default function Header() {
    const { isDarkMode, setIsDarkMode, isHamOpen, setIsHamOpen } = useTheme();
    
    if (typeof window !== "undefined") {
        if (isHamOpen) {
            document.body.classList.add("overflow-hidden");
            document.body.classList.add("touch-none");
        }
        else{
            document.body.classList.remove("overflow-hidden");
            document.body.classList.remove("touch-none");
        }
    }
    
    return (
        <div>
            <div className={`${isHamOpen ? 'hidden' : 'flex'} items-center justify-between  w-full absolute`}>
                <div className="font-bold text-lg mt-4 lg:flex hidden">
                    <Link href="/"  className="text-2xl ml-6 mr-10 text-white hover:underline" >Shop</Link>
                    <Link className="text-2xl mr-10 text-white hover:underline" href="https://acm.uic.edu/about" target="_blank">About</Link>
                    <Link className="text-2xl text-white hover:underline w" href='https://acm.uic.edu/contact' target="_blank">Contact</Link>
                </div>
                <div className="mt-4 mg:ml-0 ml-[5%]">
                    <Link href="https://acm.uic.edu/" target="_blank">
                        <Image src={logo} alt="ACM Logo" width={100} height={64} />
                    </Link>
                </div>

                <div className="flex items-center flex-row mt-4 text-black">
                    <input placeholder="Search" className="rounded-lg  w-42 pl-2 mt-1 mr-4 h-10 lg:flex hidden " type="text" />
                    <div onClick={() => setIsHamOpen((prev) => !prev)} className=' w-8 h-8 flex justify-around flex-col flex-wrap z-10 cursor-pointer mr-4 lg:hidden'>
                        <div
                            className={`bg-white block w-8 h-[0.2rem] rounded transition-all origin-[1px]`}
                            />
                        <div
                            className={`bg-white w-8 h-[0.2rem] rounded transition-all origin-[1px]`}
                            />
                            <div
                            className={`bg-white block w-8 h-[0.2rem] rounded transition-all origin-[1px] `}
                            />
                    </div>
                    <Image onClick={() => setIsDarkMode(!isDarkMode)} src={isDarkMode ? sun : moon} width={28} height={28} className="lg:mr-2 mr-6 cursor-pointer" alt="thememode"/>
                    <Link href="/Cart">
                        <Image src={cart} width={60} height={50} alt="cart" className="mr-4 lg:flex hidden" />
                    </Link>
                </div>
            </div>
            <div className={`${isHamOpen ? 'block ' : 'hidden'} lg:hidden w-screen h-screen transition-all bg-white overflow-hidden`}>
                <div >
                    <div onClick={() => setIsHamOpen((prev) => !prev)} className=' w-8 h-8 flex justify-around flex-col flex-wrap z-10 cursor-pointer ml-[90%] lg:hidden mt-7'>
                        <div
                            className={`bg-black block w-8 h-[0.2rem] rounded transition-all origin-[1px] rotate-45`}
                            />
                        <div
                            className={`bg-black w-8 h-[0.2rem] rounded transition-all origin-[1px] hidden bg-transparent translate-x-0`}
                            />
                            <div
                            className={`bg-black block w-8 h-[0.2rem] rounded transition-all origin-[1px] rotate-[-45deg] mt-2`}
                            />
                    </div>
                </div>
                <div className="font-bold text-lg mt-[35%] lg:hidden grid justify-center text-center space-y-12">
                    <Link href="/"  className="text-2xl  text-black hover:underline" onClick={() => setIsHamOpen(!isHamOpen)}>Shop</Link>
                    <Link className="text-2xl  text-black hover:underline" href="https://acm.uic.edu/about" target="_blank" onClick={() => setIsHamOpen(!isHamOpen)}>About</Link>
                    <Link className="text-2xl text-black hover:underline w" href='https://acm.uic.edu/contact' target="_blank" onClick={() => setIsHamOpen(!isHamOpen)}>Contact</Link>
                    <Link className="text-2xl text-black hover:underline w" href='Cart' onClick={() => setIsHamOpen(!isHamOpen)}>Cart</Link>
                    <Link className="text-2xl text-black hover:underline w" href='Contributors' onClick={() => setIsHamOpen(!isHamOpen)}>Contributor</Link>
                    <input placeholder="Search" className=" text-center rounded-lg bg-black text-white w-42  h-10 lg:hidden " type="text" />
                </div>
                
            </div>
        </div>
    )
}
