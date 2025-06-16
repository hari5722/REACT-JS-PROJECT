import React, { useContext } from "react";
import { discountProducts } from "../js files/discountData";
import { LuCirclePlus } from "react-icons/lu";
import { Link, useNavigate } from "react-router-dom";
import { globalContext } from "../context/MyContext";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";


export default function Products() {
  const navigate = useNavigate(); 
  const { addToCart } = useContext(globalContext);
 const handleAddToCart = (item) => {
  addToCart(item);
  toast.success("Product has been added to cart!", {
    position: "top-right",
    autoClose: 3000,
    hideProgressBar: false,
    pauseOnHover: true,
    draggable: true,
    closeOnClick: true,
  });
};
  return (
    <div className="text-center">
      <h1 className="text-2xl font-bold mb-5">Big Discount</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 px-60">
        {discountProducts.map((item) => (
          <div
            key={item.id}
            className="relative bg-white shadow rounded-xl p-4 transform transition duration-200 hover:-translate-y-2 group">
            <span className="absolute top-2 left-2  bg-primary text-white text-xs px-2 py-1 rounded-full">
              {item.discount}% OFF
            </span>
            <Link to={`/product/${item.id}`}>
              <img
                src={item.imgUrl}
                alt={item.productName}
                className="w-full h-55 object-contain mb-3"
              />
            </Link>
            <h2 className="text-lg font-semibold text-left">{item.productName}</h2>
            <p className="text-yellow-500 text-lg text-left">⭐⭐⭐⭐⭐</p>
            <p className="text-black font-bold text-left">${item.price}</p>
            <div className="flex justify-end">
              <LuCirclePlus
                onClick={() =>handleAddToCart(item)}
                className="text-5xl cursor-pointer rounded-full p-2 transition duration-200 hover:bg-blue-500 hover:text-white hover:shadow-lg"
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
