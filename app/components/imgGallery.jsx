import Image from "next/image"
import { useProducts } from "../Domain/ProductContext";
import { useState, useEffect } from "react";

export default function ImageGallery({ product }) {
    const [indexHigh, setIndexHigh] = useState(0)
    const [progress, setProgress] = useState(100);
    const { getURL } = useProducts();

    useEffect(() => {
        const progressBarInterval = setInterval(() => {
            setProgress((prevProgress) => Math.max(prevProgress - 1 / 2, 0));
        }, 30);

        console.log(progress)
        if (progress === 0) {
            setIndexHigh((prevIndex) => (prevIndex + 1) % product.img.length);
            setProgress(100);
        }

        return () => {
            clearInterval(progressBarInterval);
        };

    }, [progress, product?.img?.length]);


    function handleClick(index) {
        setIndexHigh(index)
        setProgress(100)
    }

    return (
        <div className="w-[55%]  h-[80%] flex flex-col items-center">

            <div className="flex flex-col items-center justify-center w-11/12 lg:w-[60%] h-[78%]">
                <Image alt="product image" src={getURL(product, indexHigh)} width={100} height={100} className="w-full h-[85%] rounded-lg" />
                <div className="w-full h-2 bg-gray-300 rounded mt-2">
                    <div
                        className="h-full bg-ACMDARK rounded"
                        style={{ width: `${progress}%` }}
                    ></div>
                </div>
            </div>

            <div className="flex flex-row items-center justify-evenly w-11/12 h-[22%] ">
                {product && product?.img?.map((_, index) => {
                    return (
                        <Image onClick={() => handleClick(index)} key={index} alt="product image" src={getURL(product, index)} width={50} height={50} className={`w-[20%] h-[70%] hover:scale-110 transition-all duration-200 ease-out rounded-lg cursor-pointer ${index === indexHigh && "border-solid border-ACMLIGHT  border-2"}`} />
                    )
                })}
            </div>
        </div>
    )
}


