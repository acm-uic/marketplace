import Image from "next/image"
import error from '../images/error.png'
export default function EmailError({ handleModalClose, setError,errorMessage }) {
    return (
        <div className=" flex h-full flex-col items-center ">
            <div className="bg-[#E6676B] w-full flex-col h-2/5 flex items-center justify-center rounded-t-lg">
                <div className="w-[95%] text-ACMDARK flex justify-end ">
                    <h1 onClick={handleModalClose} className=" hover:scale-110 font-bold cursor-pointer text-2xl duration-200 transition-all ease-in ">X</h1>
                </div>
                <Image src={error} width={100} height={100} className="animate-slideIn" alt="Error icon"/>
            </div>
            <div className="flex flex-col items-ceter justify-evenly h-1/2 animate-slideIn">
                <h1 className="flex justify-center text-lg font-semibold">ERROR: {errorMessage}</h1>
                <p className="text-lg	">It appears that there was an issue with your reservation process.</p>
                <div className="w-full flex items-center justify-center">
                    <button
                        onClick={() => setError(false)}
                        className=" hover:scale-110  duration-200 transition-all ease-out border-2 w-2/5 border-black border-solid hover:bg-ACMPrimary px-4 py-1 rounded-lg text-md font-medium mb-4 cursor-pointer">
                        Try Again
                    </button>
                </div>
            </div>
        </div>
    )
}