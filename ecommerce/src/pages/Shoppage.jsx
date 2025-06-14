import React, { useState, useContext } from "react";
import { globalContext } from "../context/MyContext";
import { LuCirclePlus } from "react-icons/lu";
import { HeartIcon as HeartSolid } from "@heroicons/react/24/solid";
import { HeartIcon as HeartOutline } from "@heroicons/react/24/outline";

export default function Shoppage() {
  const { data } = useContext(globalContext);
  const [filter, setFilter] = useState("all");
  const [search, setSearch] = useState("");
  const [likedItems, setLikedItems] = useState([]);

  const toggleLike = (id) => {
    setLikedItems((prev) =>
      prev.includes(id) ? prev.filter((itemId) => itemId !== id) : [...prev, id]
    );
  };

  const filteredProducts = (data || []).filter((product) => {
    const matchCategory = filter === "all" || product.category === filter;
    const matchSearch = (product.productName?.toLowerCase() || "").includes(
      search.toLowerCase()
    );
    return matchCategory && matchSearch;
  });

  return (
    <div className="p-6 sm:p-10 md:p-20 lg:p-10">
      <div
        className="relative bg-cover bg-center h-60 w-full"
        style={{
          backgroundImage: "url('https://wallpaperaccess.com/full/2890525.jpg')",
        }}
      >
        <h1 className="absolute inset-0 flex items-center justify-center text-white text-3xl font-bold">
          Product
        </h1>
      </div>
      <div className="flex flex-wrap justify-between items-center mt-30 mb-20 gap-4 px-5 ">
        <select
          onChange={(e) => setFilter(e.target.value)}
          className="p-2 border rounded-md hover:bg-blue-800 hover:text-white bg-blue-600 text-white">
          <option value="all">Filter By Category</option>
          <option value="sofa">Sofa</option>
          <option value="chair">Chair</option>
          <option value="wireless">HeadPhones</option>
          <option value="mobile">Mobile</option>
          <option value="watch">Watch</option>
        </select>

        <div className="relative w-50">
          <input
            type="text"
            placeholder="Search..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="p-2 border rounded-md w-full"
          />
          {search === "" && (
            <div className="absolute right-3 top-2.5 text-black">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M21 21l-4.35-4.35m0 0A7.5 7.5 0 103 10.5a7.5 7.5 0 0013.15 6.15z"
                />
              </svg>
            </div>
          )}
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 px-40">
        {filteredProducts.map((product) => (
          <div
            key={product.id}
            className="relative border rounded-lg p-5 shadow transform transition duration-200 hover:-translate-y-2"
          >
            <div
              className="absolute top-3 right-3 cursor-pointer"
              onClick={() => toggleLike(product.id)}
            >
              {likedItems.includes(product.id) ? (
                <HeartSolid className="h-6 w-6 text-black-500" />
              ) : (
                <HeartOutline className="h-6 w-6 text-gray-400 hover:text-black-500" />
              )}
            </div>

            <img
              src={product.imgUrl}
              alt={product.productName}
              className="mb-3 w-60 h-50 object-contain mx-auto"
            />
            <h2 className="font-bold mb-2">{product.productName}</h2>
            <h3 className="text-yellow-500 mb-2">⭐⭐⭐⭐⭐</h3>
            <p className="font-bold mb-3">${product.price}</p>
            <div className="flex justify-end">
              <LuCirclePlus className="text-5xl cursor-pointer rounded-full p-2 transition duration-200 hover:bg-blue-500 hover:text-white hover:shadow-lg" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
