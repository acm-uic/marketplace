import React from "react";
import Image from 'next/image';
import ProductCard from "./ProductCard";
import acmLogo from "/app/images/acmLogo2.png";
import acmLogo2 from "/app/images/acmLogo2.png";


//sample products using images from /app/images
const dummyProducts = [
    {
        id: 1,
        title: "ACM T-Shirt",
        description: "The ACM T-Shirt is a great way to show your ACM pride!",
        image: acmLogo,
    },
    {
        id: 2,
        title: "ACM Sticker",
        description: "The ACM Sticker is a great way to show your ACM pride!",
        image: acmLogo2,
    },
];
 

export default function ProductList({ productListRef, isDarkMode }) {
    return (
        <div ref={productListRef} style={{ background: isDarkMode ? '#242526' : '#FFF' }} className="flex flex-col items-center justify-center min-h-screen bg-cover bg-center w-full">
            {dummyProducts.map((product) => (
                <ProductCard
                    key={product.id}
                    image={product.image}
                    title={product.title}
                    description={product.description}
                    id={product.id}
                />)
            )}
        </div>
    );
}
