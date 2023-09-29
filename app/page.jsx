"use client"
import Link from "next/link";
import Header from "./components/header";

export default function Home() {
  return (
    <div className="w-full h-full text-white	" style={{   backgroundImage: 'linear-gradient(180deg, #D90000 0%, #242526 100%)'  }}    >
      <Header/>
      <h1 className="text-5xl">Hello World!</h1> 
      <p>Welcome to the ACM merch store</p>
      see our contributors
       <Link className="inline-block text-[#0000EE]" href={"/Contributors"}>here</Link>
    </div>
  )
}
