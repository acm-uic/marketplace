import Image from "next/image";
import approve from '../images/approve.png'
import Link from "next/link";
import { handleEnter,handleLeave } from "./animationFunction";

export default function EmailSuccess({ handleModalClose}) {
    return (
        <div className=" w-full h-full flex flex-col items-center ">
            <div className="bg-[#90EE90] w-full h-1/2 flex flex-col items-center justify-center rounded-t-lg">
                <div className="w-[95%] text-ACMDARK flex justify-end ">
                    <h1 onMouseEnter={handleEnter} onMouseLeave={handleLeave} onClick={handleModalClose} className="font-bold cursor-pointer text-2xl duration-200 transition-all ease-in ">X</h1>
                </div>
                <Image src={approve} width={100} height={100} className="animate-slideIn" />
            </div>
            <h1 className=" animate-slideIn text-lg font-semibold mb-2 mt-4 by-4">An Email Has Been Sent to Your Inbox</h1>
            <p className=" animate-slideIn w-4/5 h-32 text  text-lg">You have successfully completed your Pushared reservation. Now, all that remains is to visit the ACM Office to finalize your payment and pick up your items.</p>
            <Link href={'/'}
                onMouseLeave={(e) => handleLeave(e)}
                onMouseEnter={(e) => handleEnter(e)}
                className=" animate-slideIn duration-200 transition-all ease-out border-2 border-black border-solid hover:bg-ACMPrimary px-4 py-1 rounded-lg text-md font-medium mb-4">Continue Shopping</Link>
        </div>
    )
}