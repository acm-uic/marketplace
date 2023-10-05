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
      className="font-bold bg-white text-black p-5 rounded-lg relative w-44 h-52"
     
    >
      <Image src={imgUrl} width={180} height={200} className="h-36" />
      <div
        className={`bg-white absolute w-36 cursor-pointer rounded-lg transition-all duration-200 text-ACMDARK	ease-in	${
          hovered ? "-translate-y-16 mt-4" : "-translate-y-2"
        }`}
        style={{
          height: hovered ? "70px" : "20px",
        }}
      >
        <h1 className="text-lg bold">{title}</h1>
        <h2 className="text-2xl"  style={{ display: hovered ? "flex" : "none" }}>${price}</h2>
      </div>
    </div>
    </Link>
  );
}