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
      .filter(item => item.quantity > 0); // Remove items with quantity 0
    setCart(updatedCart);
  };

  const calculateTotal = () => {
    return cart.reduce((total, item) => {
      const quantity = item.quantity || 1;
      return total + item.price * quantity;
    }, 0);
  };

  return (
    <div className="p-10">
      <div className="flex justify-between items-start">
        <div className="w-1/3 ms-250 pl-4">
          <div className="border rounded-lg shadow-lg p-5 bg-white">
            <h2 className="text-2xl font-bold mb-2">Cart Summary</h2>
            <hr className="mb-4" />
            <div className="justify-between">
              <span>Total Price:</span>
              <br />
              <span className="font-bold text-blue-900">
                ${calculateTotal().toFixed(2)}
              </span>
            </div>
          </div>
        </div>
      </div>

      {cart.length === 0 ? (
        <div className="border -mt-50 w-220 h-55 me-5 rounded-lg shadow-lg p-5 bg-white">
          <p className="font-bold text-2xl">No Items are add in cart</p>
        </div>
      ) : (
        <div className="space-y-55 col-1">
          {cart.map((item, index) => (
            <div
              key={index}
              className="border -mt-50 w-220 me-5 rounded-lg shadow-lg p-2 bg-white"
            >
              <div className="items-center w-2/3">
                <div className="ps-210">
                  <button
                    onClick={() => removeItem(index)}
                    className="text-black-500 hover:text-white-700 font-semibold"
                  >
                    <h3>
                      <MdOutlineClear />
                    </h3>
                  </button>
                </div>

                <div className="flex items-center gap-8">
                  <img
                    src={item.imgUrl}
                    alt={item.productName}
                    className="w-35 h-25 object-cover rounded"
                  />
                  <span className="font-bold text-xl mb-20">
                    {item.productName}
                  </span>
                </div>

                <div className="text-center px-20 mt-4">
                  <span className="font-semibold ms-45">
                    <span className="text-grey-100">{item.quantity || 1}</span>
                    {" x "}
                    <span className="text-grey-200">${item.price}</span>
                    {" "}
                    <span className="text-blue-900 font-bold ms-2">
                      ${(item.price * (item.quantity || 1)).toFixed(2)}
                    </span>
                  </span>

                  <div className="flex pl-175 -py-50 gap-2 mt-2">
                    <button
                      className="border rounded h-6"
                      onClick={() => increaseQuantity(index)}
                    >
                      <FaPlus size={20} />
                    </button>
                    <button
                      className="border rounded h-6 bg-gray-200"
                      onClick={() => decreaseQuantity(index)}
                    >
                      <TiMinus size={20} />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
