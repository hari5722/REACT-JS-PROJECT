import React, { useContext } from "react";
import { globalContext } from "../context/MyContext";
import { LuCirclePlus } from "react-icons/lu";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function BestSales() {
  const { data, addToCart } = useContext(globalContext);
  const navigate = useNavigate();

  const filtered = data.filter(
    (item) => item.category === "sofa" || item.category === "watch"
  );

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
    <div className="px-50">
      <h2 className="text-2xl font-bold text-center m-6 p-5">Best Sales</h2>
      <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 gap-5 mb-5">
        {filtered.map((item) => (
          <div
            key={item.id}
            className="bg-white p-4 rounded-xl shadow hover:shadow-lg transform transition duration-200 hover:-translate-y-2"
          >
            <Link to={`/product/${item.id}`}>
              <img
                src={item.imgUrl}
                alt={item.productName}
                className="w-full h-70 object-fit mb-4"
              />
            </Link>
            <h3 className="text-sm font-semibold">{item.productName}</h3>
            <div className="flex items-center text-yellow-500 my-2">
              <p>⭐⭐⭐⭐⭐</p>
            </div>
            <div className="flex justify-between items-center">
              <p className="font-bold">${item.price}</p>
              <div className="flex justify-end">
                <LuCirclePlus
                  onClick={() => handleAddToCart(item)}
                  className="text-5xl cursor-pointer rounded-full p-2 transition duration-200 hover:bg-blue-500 hover:text-white hover:shadow-lg"
                />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
