import React from "react";
import { CiHeart } from "react-icons/ci";
import { IoMdStar } from "react-icons/io";

export function ProductCard({ product }) {
  return (
    <div className="border border-gray-300 rounded-lg p-5 relative transition-shadow duration-300 hover:shadow-2xl w-full max-w-xs cursor-pointer">
      <div className="relative">

      <button className="absolute  -top-5 right-0 text-2xl cursor-pointer">
          <CiHeart />
        </button>


        <img
          src={product.imageUrl}
          alt={product.name}
          className="w-full h-auto rounded-md mt-3"
        />
        
      </div>

      <div className="mt-8">


        <div className="flex items-center gap-2 bg-[#f2f7f6] rounded-full py-1 px-2 w-max">
          <span className="text-black">{product.rating}</span>
          <span className="text-blue-500 text-lg"><IoMdStar /></span>
          <span className="text-gray-500">{product.reviews}</span>
        </div>

        <h2 className="font-sans text-amber-950 font-medium mt-5">{product.name}</h2>

    <div className="flex ">
        <p className="text-gray-500 font-light font-xs font-times">
         Size: {product.size} • {product.type}
        </p>
        

        <div className="flex ml-2">
          {product.colors.map((color, index) => (
            <span
              key={index}
              className="w-5 h-5 rounded-full border-2 border-grey-600 "
              style={{ backgroundColor: color }}
            ></span>
          ))}
           <span className="text-gray-500 ml-2">+{product.moreColors}</span>

        </div>
    </div>

        <p className="  font-medium font-sans text-gray-800">₹{product.price}</p>
        
        <p className="-ml-5 -mr-5 -mb-5 text-sm font-medium bg-gradient-to-r from-[#ecdcbd] to-white text-yellow-700 p-2 mt-2 ">
          {product.offer}
        </p>
      </div>
    </div>
  );
}
