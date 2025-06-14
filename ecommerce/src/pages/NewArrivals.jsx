import React, { useContext } from "react";
import { globalContext } from "../context/MyContext";
import { LuCirclePlus } from "react-icons/lu";

export default function NewArrivals() {
  const { data } = useContext(globalContext);
  const filter = data.filter(
    (item) => item.category === "mobile" || item.category === "wireless"
  );

  return (
    <div className="text-center">
      <h1 className="text-2xl font-bold m-5 p-5">New Arrivals</h1>

      <div className="container ">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 gap-4 px-25 py-10">
          {filter.map((item) => (
            <div
              key={item.id} 
              className="relative bg-white border rounded shadow p-2 transform transition duration-200 hover:-translate-y-2">
              <img
                src={item.imgUrl}
                alt={item.productName}
                className="w-full h-70 object-fit mb-5 rounded"/>
              <h2 className="text-lg font-semibold text-left">
                {item.productName}
              </h2>
              <p className="text-yellow-500 text-lg text-left">⭐⭐⭐⭐⭐</p>
              <p className="text-black font-bold text-left">${item.price}</p>
              <div className="flex justify-end mt-2">
                <LuCirclePlus className="text-3xl cursor-pointer text-black-600 hover:text-grey-800" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
