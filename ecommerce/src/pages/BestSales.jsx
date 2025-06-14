import React, { useContext } from "react";
import { globalContext } from "../context/MyContext";
import { LuCirclePlus } from "react-icons/lu";

export default function NewArrivals() {
  const { data } = useContext(globalContext);
  
  const filter = data.filter(
    (item) => item.category === "sofa" || item.category === "watch"
  );

  return (
    <div className="px-50 ">
      <h2 className="text-2xl font-bold text-center m-6 p-5 ">Best Sales</h2>
      <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 gap-5 mb-5">
        {filter.map((item) => (
          <div
            key={item.id}
            className="bg-white p-4 rounded-xl shadow hover:shadow-lg transform transition duration-200 hover:-translate-y-2">
            <img
              src={item.imgUrl}
              alt={item.productName}
              className="w-full h-70 object-fit mb-4"
            />
            <h3 className="text-sm font-semibold">{item.productName}</h3>
            <div className="flex items-center text-yellow-500 my-2">
              <p>⭐⭐⭐⭐⭐</p>
            </div>
            <div className="flex justify-between items-center">
              <p className="font-bold">${item.price}</p>
              <LuCirclePlus className="text-2xl cursor-pointer hover:text-gray-700" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
