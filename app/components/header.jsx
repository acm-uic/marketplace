import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import logo from '../images/acmLogo.png'
import cart from '../images/cart.png'


export default function Header() {
    const [searchValue, setSearchValue] = useState("SALVE")
    return (
        <div className="flex items-center justify-between " >
            <div className="font-bold mt-4">
                <Link className="ml-6 mr-10" st href="/">Shop</Link>
                <Link className="mr-10" href="https://acm.uic.edu/about">About</Link>
                <Link className="" href='https://acm.uic.edu/about'>Contact</Link>
            </div>

            <div className="mt-4">
                <Link href="https://acm.uic.edu/">
                    <Image src={logo} alt="ACM Logo" width={100} height={64} />
                </Link>
            </div>

            <div className="flex flex-row mt-4 text-black" >
                
                <input placeholder="Search" className="rounded-md w-56 pl-2 mt-1" style={{ height: '29px' }}  type="text"/>
                <Link href="/cart" >
                    <Image src={cart} width={60} height={50} alt="cart" />
                </Link>
            </div>
        </div>
    )
}