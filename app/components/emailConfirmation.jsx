import axios from "axios";
import { useState } from "react";
import { useCartProducts } from "../Domain/cartContext";
import emailImg from '../images/email.png'
import Image from "next/image";

export default function EmailSent({ id, setEmailSent, setError, setLoading, setErrorMessage, setSuccess }) {
  const { clearCart } = useCartProducts()
  const [values, setValues] = useState(["", "", "", "", "", ""]);


  async function handleClick() {
    const code = values.join('')

    setLoading(true)
    try {
      const res = await axios.post('/api/emailConfirmation', { id: id, code: code });
      setLoading(false)
      setSuccess(true)
      clearCart()
    } catch (e) {
      setLoading(false)
      setError(true)
      setErrorMessage(e.response?.data);
    }
  }

  async function handleCancel() {
    try {
      await axios.delete(`/api/deleteEmail/${id}`)
      setEmailSent(false)
    } catch (e) {
      setError(true)
    }

  }

  const KEYBOARDS = {
    backspace: 8,
    arrowLeft: 37,
    arrowRight: 39,
  };
  const handleChange = (index, value) => {
    const newValues = [...values];
    newValues[index] = value;

    setValues(newValues);

    if (value && index < 5) {
      document.querySelector(`#input-${index + 1}`).focus();
    }
  };

  const handleKeyDown = (index, e) => {
    switch (e.keyCode) {
      case KEYBOARDS.backspace:
        if (!values[index]) {
          if (index > 0) {
            document.querySelector(`#input-${index - 1}`).focus();
            handleChange(index - 1, "");
          }
        }
        break;
      case KEYBOARDS.arrowLeft:
        if (index > 0) {
          document.querySelector(`#input-${index - 1}`).focus();
        }
        break;
      case KEYBOARDS.arrowRight:
        if (index < 5) {
          document.querySelector(`#input-${index + 1}`).focus();
        }
        break;
      default:
    }
  };

  return (
    <div className="w-full h-full flex flex-col items-center justify-center">
      <div className="h-1/2 flex items-center justify-center flex-col ">
        <div className='w-28 h-28 rounded-full border-2 border-black flex items-center justify-center'>
          <Image src={emailImg} height={70} width={70} alt='Email Icon'/>
        </div>
        <h1 className="text-2xl font-bold mt-2">Verify your email</h1>
      </div>
      <p className="text-lg mb-2">Please Enter the 6 digits code sent to your email</p>
      <div className="flex flex-col mb-2 w-2/5 ">
        <div className="flex flex-row items-center justify-center mb-4">
          {values.map((value, index) => (
            <input
              key={index}
              id={`input-${index}`}
              pattern="[0-9]"
              maxLength="1"
              className=" border-2 border-ACMDARK w-16 h-16 rounded-lg bg-gray pl-7 mr-2 font-bold"
              value={value}
              onChange={(e) => handleChange(index, e.target.value)}
              onKeyDown={(e) => handleKeyDown(index, e)}
            />
          ))}
        </div>
        <div className="w-full flex items-center justify-evenly">
          <button
            onClick={handleCancel}
            className=" hover:scale-110 duration-200 transition-all ease-out border-2 w-2/6 border-black border-solid hover:bg-ACMPrimary px-4 py-1 rounded-lg text-md font-medium mb-4 cursor-pointer">
            Cancel
          </button>
          <button
            className=" hover:scale-110  duration-200 transition-all ease-out border-2 w-2/6 bg-ACMDARK text-white px-4 py-1 rounded-lg text-md font-medium mb-4 cursor-pointer "
            onClick={() => handleClick()}
          >
            Submit
          </button>
        </div>
      </div>
    </div>
  );
}
