import Link from "next/link";

//Content just to test position of the product List
export default function ProductFilter({isDarkMode}){
    return(
        <div className={`${isDarkMode? 'text-white': 'text-ACMDARK'} flex flex-row w-screen justify-center lg:text-[28px] font-[500] tracking-[7.83px]  lg:gap-[182px] sm:gap-[100px] sm:text-[20px] mr-[2.45rem] `}>
        <Link className="hover:text-ACMLIGHT" href="/">Stickers</Link>
        <Link className="hover:text-ACMLIGHT" href="/">Pen</Link>
        <Link className="hover:text-ACMLIGHT" href="/">Shirts</Link>
        </div>
    )
}