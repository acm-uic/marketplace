import Overlay from "./overlay"
import { handleEnter, handleLeave } from "./animationFunction"
import { useState, useRef } from "react";
import axios from "axios";
import EmailSuccess from "./emailSuccess";
import EmailError from "./emailError";
import Loading from "./loading";
import EmailSent from "./emailConfirmation";

export default function ModalCheckOut({ products, showModal, setShowModal, subTotal }) {
    const [message, setMessage] = useState('')
    const [nameMessage, setNameMessage] = useState('')
    const [emailSent, setEmailSent] = useState(false)
    const [error, setError] = useState(false)
    const [errorMessage, setErrorMessage] = useState('')
    const [loading, setLoading] = useState(false)
    const [purchaseId, setPurchaseId] = useState(null);
    const [success, setSuccess] = useState(false)


    const nameRef = useRef(null);
    const emailRef = useRef(null);


    function handleModalClose() {
        setShowModal(false)
        setMessage('')
        setNameMessage('')
        setError(false)
    }

    async function handleClick() {
        const emailPattern = /^[a-z0-9.]+@[a-z0-9]+\.[a-z]+(\.[a-z]+)?$/i;

        const email = emailRef.current.value
        const name = nameRef.current.value

        if (name == '') {
            setNameMessage('Obligatory Field')
            return
        }

        if (!emailPattern.test(email)) {
            setMessage('Insert Valid Email')
            return
        }

        const data = {
            email: email,
            name: name,
            cart: products,
            total: subTotal
        }
        setLoading(true)
        try {
            const res = await axios.post('/api/sendEmail', data)
            setLoading(false)
            setEmailSent(true)
            setPurchaseId(res.data.purchaseId)
        } catch (e) {
            setLoading(false);
            setError(true);
            setErrorMessage(e.response?.data);
        }
    }

    return (
        <>
            {showModal &&
                <Overlay handleModalClose={handleModalClose}>
                    <div onClick={(e) => e.stopPropagation()}
                        className="rounded-xl w-2/4 h-3/6 flex flex-col justify-center bg-white text-black border-[1.5px] border-black border-solid animate-dropTop">
                        {success ? <EmailSuccess /> : <>
                            {loading ? (<Loading />) : (
                                <>
                                    {error ? (<EmailError handleModalClose={handleModalClose} handleEnter={handleEnter} handleLeave={handleLeave} setError={setError} errorMessage={errorMessage} />) : (
                                        <>
                                            {emailSent ? (
                                                <EmailSent setEmailSent={setEmailSent} setSuccess={setSuccess} setErrorMessage={setErrorMessage}  id={purchaseId} setError={setError} setLoading={setLoading} />
                                            ) : (<>
                                                <div className="w-[95%] text-ACMDARK flex justify-end ">
                                                    <h1 onMouseEnter={handleEnter} onMouseLeave={handleLeave} onClick={handleModalClose} className="font-bold cursor-pointer text-2xl duration-200 transition-all ease-in ">X</h1>
                                                </div>
                                                <div className="text-xl	font-semibold ml-10 flex flex-row ">
                                                    <h1>Reserve your items for in office purchase</h1>
                                                </div>
                                                <div className="flex flex-row h-3/4 w-full mb-4">
                                                    <form className="flex flex-col font-medium items-center justify-center w-1/2">
                                                        <div className="w-3/4 mb-4 ">
                                                            <div className="flex flex-row justify-between">
                                                                <h2 className=" mb-1">Name</h2>
                                                                <p className=" text-ACMPrimary ml-2">{nameMessage}</p>
                                                            </div>
                                                            <input ref={nameRef} className="w-full h-9 border-[1.5px] rounded-3xl pl-4 py-5 border-black border-solid " placeholder="Name: " />
                                                        </div>
                                                        <div className="w-3/4">
                                                            <div className="flex flex-row justify-between">
                                                                <h2 className="ml-1">Email</h2>
                                                                <p className=" text-ACMPrimary ml-2" >{message}</p>
                                                            </div>
                                                            <input ref={emailRef} className="w-full h-9 rounded-3xl pl-4 py-5 border-[1.5px] border-black border-solid" placeholder="Email: " />
                                                        </div>
                                                    </form>
                                                    <div className="flex flex-col w-1/2 justify-end">
                                                        <div className='w-10/12 flex  flex-col items-end '>
                                                            {products && products.map((product,index) => {
                                                                return (
                                                                    <h1 key={index} className="w-60 text-md flex flex-row justify-end mr-1 mb-1">{product.cartQuantity}x {product.title}-${product.price}</h1>
                                                                )
                                                            })}
                                                            <div className={`w-60 flex justify-between flex-row text-xl font-bold mb-4  text-ACMDARK`}>
                                                                <h1 className='' >SubTotal</h1>
                                                                <h1>${subTotal}</h1>
                                                            </div>
                                                            <button
                                                                onClick={handleClick}
                                                                onMouseLeave={(e) => handleLeave(e)}
                                                                onMouseEnter={(e) => handleEnter(e)}
                                                                className='text-lg duration-200 mb-10 transition-all ease-out bg-ACMDARK w-60 h-10 pt-1 pb-1 rounded-lg text-white' >
                                                                Submit
                                                            </button>
                                                        </div>
                                                    </div>
                                                </div>
                                            </>
                                            )}
                                        </>)}
                                </>)}
                        </>}
                    </div>
                </Overlay>
            }
        </>
    )
}