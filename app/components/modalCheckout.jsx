import Overlay from "./overlay"
import { handleEnter, handleLeave } from "./animationFunction"
import { useState } from "react";

export default function ModalCheckOut({ showModal, setShowModal, subTotal }) {
    const [message, setMessage] = useState('')

    function handleChange(e) {
        const emailPattern = /^[a-z0-9.]+@[a-z0-9]+\.[a-z]+(\.[a-z]+)?$/i;
        const email = e.target.value
        if (email != '' && !emailPattern.test(email)) {
            setMessage('Insert Valid Email')
        } else {
            setMessage('')
        }
    }

    // async function handleClick(){

    //     const purchase = await pb.collection('purchase').create({
    //         userName:'andre',
    //         email:'andre.2004.rimes@gmail.com',
    //         confirmed: false,
    //         listOfProducts:  
    //     });

    // }

    return (
        <>
            {showModal &&
                <Overlay setShowModal={setShowModal}>
                    <div onClick={(e) => e.stopPropagation()}
                        className="rounded-xl w-2/4 h-3/6 flex flex-col justify-center bg-white text-black border-[1.5px] border-black border-solid animate-dropTop">
                        <div className="w-[95%] text-ACMDARK flex justify-end ">
                            <h1 onMouseEnter={handleEnter} onMouseLeave={handleLeave} onClick={() => setShowModal(false)} className="font-bold cursor-pointer text-2xl duration-200 transition-all ease-in ">X</h1>
                        </div>
                        <div className="text-xl	font-semibold ml-10 flex flex-row">
                            <h1>Reserve your items for in office purchase</h1>
                        </div>
                        <div className="flex flex-row h-3/4 w-full mb-4">
                            <form className="flex flex-col font-medium items-center justify-center w-1/2">
                                <div className="w-3/4 mb-4 ">
                                    <h2 className=" mb-1">Name</h2>
                                    <input className="w-full h-9 border-[1.5px] rounded-3xl pl-4 border-black border-solid " placeholder="Name: " />
                                </div>
                                <div className="w-3/4">
                                    <div className="flex flex-row justify-between">
                                        <h2 className="ml-1">Email</h2>
                                        <p className=" text-ACMPrimary ml-2" >{message}</p>
                                    </div>
                                    <input onChange={(e) => handleChange(e)} className="w-full h-9 rounded-3xl  pl-4 border-[1.5px] border-black border-solid" placeholder="Email: " />
                                </div>
                            </form>
                            <div className="flex flex-col w-1/2 justify-end">
                                <div className='w-10/12 flex  flex-col items-end '>
                                    <div className={`w-60 flex justify-between flex-row text-xl font-bold mb-4  text-ACMDARK`}>
                                        <h1 className='' >SubTotal</h1>
                                        <h1>${subTotal}</h1>
                                    </div>
                                    <button
                                        // onClick={handleClick}
                                        onMouseLeave={(e) => handleLeave(e)}
                                        onMouseEnter={(e) => handleEnter(e)}
                                        className='text-lg duration-200 mb-10 transition-all ease-out bg-ACMDARK w-60 h-10 pt-1 pb-1 rounded-lg text-white' >
                                        Submit
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </Overlay>
            }
        </>
    )
}