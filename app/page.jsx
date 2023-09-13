import Link from "next/link";

export default function Home() {
  
  return (
    <div className="w-full h-full">
      <h1 className="text-5xl">Hello World!</h1> <p>Welcome to the ACM merch store</p>
      see our contributors <Link className="inline-block text-[#0000EE]" href={"/Contributors"}>here</Link>
    </div>
  )
}
