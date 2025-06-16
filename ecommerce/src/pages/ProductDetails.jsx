import React, { useState, useContext } from "react";
import { useParams, Link } from "react-router-dom";
import { globalContext } from "../context/MyContext";
import bannerImage from "../images/table.jpg";
import { LuCirclePlus } from "react-icons/lu";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function ProductDetalis() {
  const { discountData, data, addToCart } = useContext(globalContext);
  const { id } = useParams();
  const [showReviews, setShowReviews] = useState(false);
  const [quantity, setQuantity] = useState(1);

  const allProducts = [...(discountData || []), ...(data || [])];
  const product = allProducts.find((item) => String(item.id) === String(id));

  if (!discountData?.length && !data?.length) {
    return (
      <p className="text-center mt-20 text-gray-500">Loading product data...</p>
    );
  }

  if (!product) {
    return <p className="text-center mt-20 text-red-500">Product not found.</p>;
  }

  const handleAddToCart = () => {
    const productWithQty = { ...product, quantity: parseInt(quantity) };
    addToCart(productWithQty);
    toast.success(`Added ${quantity} item(s) to cart!`, {
      position: "top-right",
      autoClose: 3000,
    });
  };

  return (
    <div className="px-4 md:px-20 py-8">
      <div className="relative w-full h-60">
        <img
          src={bannerImage}
          alt="Banner"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
          <h1 className="text-white text-3xl font-semibold">
            {product.productName}
          </h1>
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-8 items-center mt-5">
        <img
          src={product.imgUrl}
          alt={product.productName}
          className="w-full max-w-md mx-auto hover:scale-105 duration-300"
        />
        <div>
          <h2 className="text-2xl font-semibold">{product.productName}</h2>
          <div className="flex items-center gap-2 text-yellow-400 mt-1">
            <span>⭐⭐⭐⭐⭐</span>
            <span className="text-gray-700 ml-2">
              {product.avgRating} ratings
            </span>
          </div>

          <div className="flex flex-wrap mt-2 gap-4">
            <p className="text-2xl font-bold">${product.price}</p>
            <p className="text-lg text-gray-500">
              Category: {product.category}
            </p>
          </div>

          <p className="text-gray-600 mt-4">{product.shortDesc}</p>

          <div className="mt-4 flex items-center gap-4">
            <input
              type="number"
              min={1}
              value={quantity}
              onChange={(e) => setQuantity(e.target.value)}
              className="w-20 border rounded px-2 py-1"/>
            <div className="">
                <button
              onClick={handleAddToCart}
              className="bg-blue-900 text-white px-4 py-2 rounded hover:bg-blue-800">
              Add To Cart
            </button>
            </div>
          
          </div>
        </div>
      </div>

      <div className="mt-10">
        <div className="flex items-center mb-2">
          <h3 className="text-lg font-semibold">Description</h3>
          <button
            onClick={() => setShowReviews(!showReviews)}
            className="ml-4 text-black-600 p-3"
          >
            Reviews (2)
          </button>
        </div>
        <p className="text-black-500 font-bold">{product.description}</p>
        {showReviews && (
          <div className="text-black-600 mt-4">
            <p className="text-yellow-500 font-bold">Hari</p>
            <p>4.6</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing.</p>
            <p className="text-yellow-500 font-bold">Krishna</p>
            <p>4.9</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
          </div>
        )}
      </div>

      <div className="mt-16">
        <h2 className="text-xl font-bold mb-5 ml-25">You might also like</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 ml-40 gap-6 w-280 p-4">
          {allProducts
            .filter(
              (item) =>
                item.id !== product.id && item.category === product.category
            )
            .slice(0, 4)
            .map((item) => (
              <div
                key={item.id}
                className="border p-4 rounded shadow hover:shadow-lg transition">
                <Link to={`/product/${item.id}`}>
                  <img
                    src={item.imgUrl}
                    alt={item.productName}
                    className="w-full h-40 object-contain mb-3"
                  />
                </Link>
                <h4 className="font-medium">{item.productName}</h4>
                <div className="flex items-center text-yellow-400 my-1">
                  <span>⭐⭐⭐⭐⭐</span>
                </div>
                <p className="font-bold">${item.price}</p>

                <div className="flex justify-end">
                  <LuCirclePlus
                    onClick={() => {
                      addToCart({ ...item, quantity: 1 });
                      toast.success(" Product has been added to cart!", {
                        position: "top-right",
                        autoClose: 3000,
                      });
                    }}
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
