import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

export default function Product({ id, title, price, imgUrl,isDarkMode}) {
  const [hovered, setHovered] = useState(false);

  return (
    <Link href={`products/${id}`}>
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      key={id}
      className={`box-content font-bold bg-white text-black p-5 rounded-lg relative w-52 h-60 shadow-[12px_13px_6px_0_rgba(36,37,38,0.25)] 
      ${hovered?"border-solid border-ACMLIGHT  border-2":"border-solid border-white  border-2"} `}
    >
      <Image alt={title} src={imgUrl} width={180} height={200} className="h-36" />
      <div
        className={`bg-white flex items-center flex-col justify-center absolute w-44 cursor-pointer rounded-lg transition-all duration-200 text-ACMDARK	ease-in	
        ${
          hovered ? "-translate-y-16  shadow-[0px_-26px_15px_0px_rgba(255,255,255)] h-16" : "translate-y-8 h-5"
        }`}
      >
        <h1 className="text-lg bold">{title}</h1>
        <h2 className={`text-2xl ${hovered? 'flex':'hidden'}`}  >${price}</h2>
      </div>
    </div>
    </Link>
  );
}