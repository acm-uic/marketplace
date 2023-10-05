import { useState } from "react";
import Image from "next/image";

export default function Product({ id, title, price, imgUrl }) {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      key={id}
      className="font-bold bg-white text-black p-5 rounded-lg max-w-40 relative"
    >
      <Image src={imgUrl} width={100} height={100} className="h-24" />
      <div
        className={`bg-white absolute w-24 rounded-lg transition-transform transition-height ${
          hovered ? "-translate-y-16" : "-translate-y-2"
        }`}
        style={{
          height: hovered ? "70px" : "20px",
          transitionTimingFunction: "ease-in",
        }}
      >
        <h1>{title}</h1>
        <h2 style={{ display: hovered ? "flex" : "none" }}>${price}</h2>
      </div>
    </div>
  );
}
