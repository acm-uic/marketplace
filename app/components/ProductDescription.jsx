import { useCartProducts } from "../Domain/cartContext";
import { useRouter } from "next/navigation";

export default function ProductDescription({product ,title, description, quantity, price,setShowNotification,setSelectedQuantity,selectedQuantity }) {
  const { addToCart } = useCartProducts();
  const router = useRouter();

  const quantityOptions = [];
  for (let i = 1; i <= quantity; i++) {
    {console.log(i)}
    quantityOptions.push(
      <option key={i} value={i}>
        Qty: {i}
      </option>
    );
  }

  function handleAddToCart() {
    addToCart(product,selectedQuantity)
    setShowNotification(true)
  }
  

  function handleBuy(){
    addToCart(product,selectedQuantity)
    router.push('/Cart')
  }

  return (
    <div className="flex w-[55%] h-[65%] flex-col items-center justify-evenly ">
      <div className="w-7/12 h-4/6 bg-white flex flex-col items-center justify-center rounded-lg ">
        <div className="w-11/12 h-10">
          <h1 className="text-2xl font-bold">{title}</h1>
        </div>
        <div className="w-11/12 h-0 border border-black"></div>
        <div className="w-11/12 h-8">
          <h2 className="text-xl font-bold">${price}</h2>
        </div>
        <p className="w-11/12 h-56 max-h-56 overflow-hidden py-2">{description}</p>
      </div>
      <div className="w-7/12 flex flex-row items-center justify-between text-lg font-semibold ">
        <button
          onClick={handleAddToCart}
          className="w-3/5 bg-white h-10 rounded-xl border-[1.5px] border-black hover:scale-110 transition-all duration-300 ease-out"
        >
          Add to Cart
        </button>
        <select
          name="Qty: "
          className="w-1/3 h-10 rounded-lg bg-ACMDARK text-white border-none px-2 cursor-pointer"
          onChange={(e) => setSelectedQuantity(parseInt(e.target.value))}
        >
          {console.log(quantityOptions)}
          {quantityOptions}
        </select>
      </div>
      <button onClick={()=>handleBuy()} className="w-7/12 h-10 text-xl font-semibold rounded-xl bg-ACMDARK text-white hover:scale-110 transition-all duration-300 ease-out ">
        Buy Now
      </button>
    </div>
  );
}
