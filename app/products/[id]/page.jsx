"use client"
import { useEffect, useState } from "react";
import { useTheme } from "../../Domain/ThemeContext";
import { useProducts } from "@/app/Domain/ProductContext";
import Image from "next/image";
import ProductDescription from "@/app/components/ProductDescription";

export default function product({ params }) {
    const { isDarkMode } = useTheme();
    const { products, getURL } = useProducts();
    const [product, setProduct] = useState({})


    useEffect(() => {
        const newProduct = products.filter((p) =>
            p.id == params.id
        );
        setProduct(newProduct[0]);
    });


    return (
        <>
            <div className={`${isDarkMode ? 'bg-ACMPrimary' : 'bg-ACMBLUE'} flex flex-row items-center justify-center text-ACMDARK h-screen bg-cover bg-center w-full`}>
                <div className="w-full h-full flex flex-row items-center justify-center mt-28">
                <Image src={getURL(product)} width={400} height={400} />
                <ProductDescription product={product} title={product?.title} price={product?.price} quantity={product?.quantity} description={product?.description} />
                </div>
            </div>
          
        </>
    );
}
