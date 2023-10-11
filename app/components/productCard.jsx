import React from "react";
import Image from 'next/image';
import Link from "next/link";

const ProductCard = (props) => {
    return (
        <div className="card">
            <Image src={props.image} alt={props.title} width={300} height={300} />
            <div className="card-body max-w-sm rounded overflow-hidden shadow-lg">
                <div className="product-name font-bold text-xl mb-2 px-6 py-4">{props.title}</div>
                <p className="product-description text-gray-700 text-base">
                    {props.description}
                </p>
                <Link href={`/product/${props.id}`}>
                    <div className="btn btn-primary">View Product</div>
                </Link>
            </div>
        </div>
    );
};

export default ProductCard;
