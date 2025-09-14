import React, { useContext } from "react";
import { globalContext } from "../context/MyContext";
import { MdOutlineClear } from "react-icons/md";
import { FaPlus } from "react-icons/fa";
import { TiMinus } from "react-icons/ti";

export default function Cart() {
  const { cart, setCart } = useContext(globalContext);

  const removeItem = (indexToRemove) => {
    const updatedCart = cart.filter((_, index) => index !== indexToRemove);
    setCart(updatedCart);
  };

  const increaseQuantity = (index) => {
    const updatedCart = cart.map((item, i) =>
      i === index ? { ...item, quantity: (item.quantity || 1) + 1 } : item
    );
    setCart(updatedCart);
  };

  const decreaseQuantity = (index) => {
    const updatedCart = cart
      .map((item, i) =>
        i === index
          ? { ...item, quantity: (item.quantity || 1) - 1 }
          : item
      )
      .filter(item => item.quantity > 0);
    setCart(updatedCart);
  };

  const calculateTotal = () => {
    return cart.reduce((total, item) => {
      const quantity = item.quantity || 1;
      return total + item.price * quantity;
    }, 0);
  };

  return (
    <div className="p-4 sm:p-6 md:p-10 lg:p-20">
      <div className="flex flex-col-reverse md:flex-row justify-between items-start md:space-x-8">
        {cart.length === 0 ? (
          <div className="border w-full h-auto mt-8 md:mt-0 rounded-lg shadow-lg p-5 bg-white text-center">
            <p className="font-bold text-2xl">No Items are added in cart</p>
          </div>
        ) : (
          <div className="w-full md:w-2/3 space-y-4">
            {cart.map((item, index) => (
              <div
                key={index}
                className="relative border rounded-lg shadow-lg p-4 bg-white flex items-center space-x-4"
              >
                <button
                  onClick={() => removeItem(index)}
                  className="absolute top-2 right-2 text-gray-500 hover:text-gray-700"
                  aria-label={`Remove ${item.productName} from cart`}
                >
                  <MdOutlineClear size={20} />
                </button>
                <div className="flex-shrink-0">
                  <img
                    src={item.imgUrl}
                    alt={item.productName}
                    className="w-24 h-24 object-cover rounded"
                  />
                </div>
                <div className="flex-1">
                  <div className="flex justify-between items-center mb-2">
                    <span className="font-bold text-lg">{item.productName}</span>
                    <span className="font-bold text-blue-900">${(item.price * (item.quantity || 1)).toFixed(2)}</span>
                  </div>
                  <div className="text-gray-600 mb-2">
                    <span className="font-semibold">${item.price}.00 * {item.quantity || 1}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <button
                      className="border rounded-full p-1"
                      onClick={() => increaseQuantity(index)}
                      aria-label={`Increase quantity of ${item.productName}`}
                    >
                      <FaPlus size={16} />
                    </button>
                    <button
                      className="border rounded-full p-1 bg-gray-200"
                      onClick={() => decreaseQuantity(index)}
                      aria-label={`Decrease quantity of ${item.productName}`}
                    >
                      <TiMinus size={16} />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        <div className="w-full md:w-1/3 mt-8 md:mt-0 sticky top-20">
          <div className="border rounded-lg shadow-lg p-5 bg-white">
            <h2 className="text-2xl font-bold mb-2">Cart Summary</h2>
            <hr className="mb-4" />
            <div className="flex justify-between font-bold">
              <span>Total Price:</span>
              <span className="text-blue-900">${calculateTotal().toFixed(2)}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}