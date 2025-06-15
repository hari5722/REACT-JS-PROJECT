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
    const updatedCart = cart.map((item, i) =>
      i === index
        ? { ...item, quantity: item.quantity > 1 ? item.quantity - 1 : 1 }
        : item
    );
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
        <div className="w-1/3 ms-250 pl-5">
          <div className="border rounded-lg shadow-lg p-6 bg-white">
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
        <p className="font-bold text-5xl text-center text-red-500">
          Your cart is empty.
        </p>
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
                    className="w-50 h-25 object-cover rounded"
                  />
                  <span className="font-bold text-xl mb-20">
                    {item.productName}
                  </span>
                </div>
                <div className="text-center px-20">
                  <span className="font-semibold ms-45">
                    <span className="text-grey-200">${item.price}.00 </span>
                    <span className="mx-1"> * </span>
                    <span className="text-grey-100">{item.quantity || 1}</span>
                    <span className="text-blue-900 font-bold ms-3 ">
                      ${(item.price * (item.quantity || 0))}
                    </span>
                  </span>

                  <div className="flex pl-155 gap-3">
                    <button
                      className="border rounded h-10"
                      onClick={() => increaseQuantity(index)}>
                      <FaPlus size={30} />
                    </button>
                    <button
                      className="border rounded h-10 bg-gray-200"
                      onClick={() => decreaseQuantity(index)}
                    >
                      <TiMinus size={30} />
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
