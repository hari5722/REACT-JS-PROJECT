import React, { useContext, useState } from "react";
import { globalContext } from "../context/MyContext";
import { LuCirclePlus } from "react-icons/lu";
import { Link, useNavigate } from "react-router-dom";
import { HeartIcon as HeartSolid } from "@heroicons/react/24/solid";
import { HeartIcon as HeartOutline } from "@heroicons/react/24/outline";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function NewArrivals() {
  const { data, addToCart } = useContext(globalContext);
  const [likedItems, setLikedItems] = useState([]);
  const navigate = useNavigate();

  const toggleLike = (id) => {
    setLikedItems((prev) =>
      prev.includes(id) ? prev.filter((itemId) => itemId !== id) : [...prev, id]
    );
  };
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
  const filter = data.filter(
    (item) => item.category === "mobile" || item.category === "wireless"
  );
  return (
    <div className="text-center p-4">
      <h1 className="text-2xl font-bold m-5 p-5">New Arrivals</h1>
      <div className="container mx-auto">
        <div className="flex flex-wrap justify-center gap-5 mb-5">
          {filter.map((item) => (
            <div
              key={item.id}
              className="relative bg-white border rounded shadow p-4 transform transition duration-200 hover:-translate-y-2 w-full sm:w-1/2 md:w-1/3 lg:w-1/4"
            >
              <div
                className="absolute top-3 right-3 cursor-pointer"
                onClick={() => toggleLike(item.id)}>
                {likedItems.includes(item.id) ? (
                  <HeartSolid className="h-6 w-6 text-black-500" />
                ) : (
                  <HeartOutline className="h-6 w-6 text-gray-400 hover:text-black-500" />
                )}
              </div>
              <Link to={`/product/${item.id}`}>
                <img
                  src={item.imgUrl}
                  alt={item.productName}
                  className="w-full h-40 object-contain mb-3 rounded"
                />
              </Link>
              <h2 className="text-lg font-semibold text-left">
                {item.productName}
              </h2>
              <p className="text-yellow-500 text-left">⭐⭐⭐⭐⭐</p>
              <p className="text-black font-bold text-left">${item.price}</p>
              <div className="flex justify-end mt-2">
                <LuCirclePlus
                  onClick={() => handleAddToCart(item)}
                  className="text-5xl cursor-pointer rounded-full p-2 transition duration-200 hover:bg-blue-500 hover:text-white hover:shadow-lg"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}