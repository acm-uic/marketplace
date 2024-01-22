"use client"
import { useEffect, useState } from "react";
import { useTheme } from "../../Domain/ThemeContext";
import { useProducts } from "@/app/Domain/ProductContext";
import Image from "next/image";
import ProductDescription from "@/app/components/ProductDescription";
import Notification from "@/app/components/notification";

export default function Product({ params }) {
    const { isDarkMode } = useTheme();
    const { products, getURL } = useProducts();
    const [product, setProduct] = useState({})
    const [showNotification,setShowNotification] = useState(false)
    const [selectedQuantity, setSelectedQuantity] = useState(1);


    useEffect(() => {
        const newProduct = products.filter((p) => p.id == params.id);
        setProduct(newProduct[0]);
    }, [products, params.id]);


    return (
        <>
            <div className={`${isDarkMode ? 'bg-ACMPrimary' : 'bg-ACMBLUE'} flex flex-row items-center justify-center text-ACMDARK h-screen bg-cover bg-center w-full`}>
                {showNotification && <Notification title={product?.title} selectedQuantity={selectedQuantity} setShowNotification={setShowNotification}/>}
                <div className="w-full h-full flex flex-row items-center justify-center mt-28">
                <Image src={getURL(product)} width={400} height={400} alt={`${product?.title} Image`} />
                <ProductDescription selectedQuantity={selectedQuantity} setSelectedQuantity={setSelectedQuantity}  setShowNotification={setShowNotification} product={product} title={product?.title} price={product?.price} quantity={product?.quantity} description={product?.description} />
                </div>
            </div>
          
        </>
    );
}
