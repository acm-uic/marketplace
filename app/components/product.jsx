import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import cartNotFull from '../images/cartNotFull.png'
import cartFull from '../images/cartFull.png'
import { useCartProducts } from "../Domain/cartContext";
import { useProducts } from "../Domain/ProductContext";

export default function Product({ product, isDarkMode }) {
  const [hovered, setHovered] = useState(false);
  const { id, title, price } = product
  const { removeAll, addToCart, isInCart } = useCartProducts();
  const { getURL } = useProducts();
  let imgUrl = getURL(product, 0)

  function handleClick(e, product) {
    e.preventDefault();
    if (isInCart(id)) {
      removeAll(id);
    } else {
      addToCart(product, 1);
    }
  }

  return (
    <Link href={`products/${id}`}>
      <div
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        key={id}
        className={` box-content font-bold bg-white text-black  rounded-lg relative w-56 py-5 h-60 shadow-[12px_13px_6px_0_rgba(36,37,38,0.25)] 
      ${hovered ? "border-solid border-ACMLIGHT  border-2" : "border-solid border-white  border-2"} `}
      >
        <div className="w-full flex items-center justify-center">
          <Image alt={title} src={imgUrl} width={180} height={200} className="object-scale-down h-36" />
        </div>
        <div
          className={`bg-white flex flex-col items-center justify-center absolute w-[100%] cursor-pointer rounded-lg transition-all duration-200 text-ACMDARK ease-in	
        ${hovered ? "-translate-y-16  shadow-[0px_-26px_9px_0px_rgba(255,255,255)] h-[35%]" : "translate-y-8 h-5"
            }`}
        >
          <h1 className="text-lg bold">{title}</h1>
          <h2 className={`text-2xl ${hovered ? 'flex' : 'hidden'}`}  >${price}</h2>
          <Image
            alt="Add to Cart Icon"
            onClick={(e) => handleClick(e, product)}
            src={isInCart(id) ? cartFull : cartNotFull}
            width={30}
            height={30}
            className={`${hovered ? 'flex' : 'hidden'}`}
          />
        </div>
      </div>
    </Link>
  );
}