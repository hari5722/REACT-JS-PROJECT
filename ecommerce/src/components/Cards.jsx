import React from "react";
import { FaHeadphones } from "react-icons/fa";
import { IoCarSharp } from "react-icons/io5";
import { IoCard } from "react-icons/io5";
import { FaShieldAlt } from "react-icons/fa";

const features = [
 {
  icon: (
    <div className="bg-white rounded-full p-2 ">
      <IoCarSharp size={30}/>
    </div>
  ),
  title: "Free Shipping",
  description: "Lorem ipsum dolor sit amet.",
  bgColor: "bg-orange-100",
},

  {
    icon:(
    <div className="bg-white rounded-full p-2">
     <IoCard size={30} />
     </div>
    ),
    title: "Safe Payment",
    description: "Lorem ipsum dolor sit amet.",
    bgColor: "bg-cyan-100",
  },
  {
    icon: 
    <div className="bg-white rounded-full p-2">
     <FaShieldAlt size={30} />
   </div>,
    title: "Secure Payment",
    description: "Lorem ipsum dolor sit amet.",
    bgColor: "bg-lime-100",
  },
  {
    icon: 
      <div className="bg-white rounded-full p-2">
    <FaHeadphones size={30} />
    </div>,
    title: "Back Guarantee",
    description: "Lorem ipsum dolor sit amet.",
    bgColor: "bg-blue-100",
  },
];
export default function InfoCards() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-3 p-15">
      {features.map((feature, index) => (
        <div
          key={index}
            className={`text-center p-3 rounded shadow ${feature.bgColor} transform transition duration-200 hover:-translate-y-2 hover:-translate-x-2`}>
          <div className="flex justify-center mb-2">{feature.icon}</div>
          <h3 className="font-semibold">{feature.title}</h3>
          <p className="text-lg text-gray-700">{feature.description}</p>
        </div>
      ))}
    </div>
  );
}
