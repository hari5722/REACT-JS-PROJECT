import React from 'react';
import { IoBag } from "react-icons/io5";
export default function Footer() {
  return (
    <footer className="bg-blue-900 text-white py-20 px-6 md:px-20 text-direction-noun">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
        <div>
          <h2 className="text-xl font-bold mb-3 flex items-center">
            <span className="mr-2"><IoBag className="text-3xl " /></span> Mart
          </h2>
          <p className="text-sm text-gray-200">
            Lorem ipsum dolor sit amet, <br/>consectetur adipiscing elit.<br/> Auctor libero id et, in<br/> gravida. Sit diam duis<br/> mauris nulla cursus. Erat et<br/> lectus vel ut sollicitudin elit<br/> at amet.
          </p>
        </div>

        <div>
          <h3 className="text-lg font-semibold mb-3">About Us</h3>
          <ul className="space-y-2 text-sm text-gray">
            <li>Careers</li>
            <li>Our Stores</li>
            <li>Our Cares</li>
            <li>Terms & Conditions</li>
            <li>Privacy Policy</li>
          </ul>
        </div>

        <div>
          <h3 className="text-lg font-semibold mb-3">Customer Care</h3>
          <ul className="space-y-2 text-sm text-gray">
            <li>Help Center</li>
            <li>How to Buy</li>
            <li>Track Your Order</li>
            <li>Corporate & Bulk <br/> Purchasing</li>
            <li>Returns & Refunds</li>
          </ul>
        </div>
        <div>
          <h3 className="text-lg font-semibold mb-3">Contact Us</h3>
          <p className="text-sm text-gray">
            4-5 Mite thanda(V) <br/> Kurnool(D), Andhra Pradesh-518390, india 
          </p>
          <p className="text-sm text-gray-200 mt-2">
            Email: rharikrishnanaik160@gmail.com
          </p>
          <p className="text-sm text-gray">
            Phone: +91 8309362569
          </p>
        </div>
      </div>
    </footer>
    );
}
