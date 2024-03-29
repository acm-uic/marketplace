'use client'
import Link from "next/link";
import Image from "next/image"
import { useCartProducts } from '../Domain/cartContext'
import pb from "../Domain/pocketbase";
import { useProducts } from "../Domain/ProductContext";

export default function CartProduct({ product }) {
    const { addToCart, removeOne, removeAll } = useCartProducts()
    const { id, tags, title, price, properties, cartQuantity } = product
    const { getURL } = useProducts();
    const imgUrl = getURL(product, 0)

    function handleEnter(e) {
        e.target.style.transform = 'scale(1.1)';

    }

    function handleLeave(e) {
        e.target.style.transform = 'scale(1.0)';
    }


    return (
        <div className={`shadow-2xl w-shadow-lg bg-white text-ACMDARK mb-7 h-44 flex flex-row items-center rounded-2xl w-[88vw]`}>
            <Image alt={title} src={imgUrl} width={150} height={150} className="h-32 ml-2 rounded-lg" />
            <div className="ml-10 w-9/12">
                <Link href={`products/${id}`} className="font-extrabold text-3xl h-full">{title}</Link>
                {properties && properties.map((prop) => (
                    <div className='text-lg' key={prop}>
                        <h2>{prop}</h2>
                    </div>
                ))}
            </div>

            <div className="h-5/6 flex flex-col 2xl:mr-0 mr-10">
                <div className="flex flex-row font-bold mb-10">
                    <h2 className="text-2xl mr-14">${price}</h2>
                    <h2 onClick={() => removeAll(id)} onMouseLeave={(e) => handleLeave(e)} onMouseEnter={(e) => handleEnter(e)} className="text-2xl duration-200 transition-all ease-in cursor-pointer">X</h2>
                </div>

                <div className="grid grid-cols-3 divide-x text-align text-lg " >
                    <div onClick={() => removeOne(id)} onMouseLeave={(e) => handleLeave(e)} onMouseEnter={(e) => handleEnter(e)} style={{ border: '1px solid black' }} className=" duration-200	transition-all ease-in flex items-center justify-center rounded-tl-lg rounded-bl-lg cursor-pointer font-bold">-</div>
                    <div style={{ border: '1px solid black' }} className=" flex items-center justify-center font-bold">{cartQuantity}</div>
                    <div onClick={() => addToCart(product, 1)} onMouseLeave={(e) => handleLeave(e)} onMouseEnter={(e) => handleEnter(e)} style={{ border: '1px solid black' }} className=" duration-200	transition-all ease-in flex items-center justify-center rounded-tr-lg rounded-br-lg font-bold cursor-pointer">+</div>
                </div>
            </div>
        </div >
    )

}
