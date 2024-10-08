

import { CiHeart } from "react-icons/ci";
import { IoMdStar } from "react-icons/io";
import React, { useState } from 'react';


import { ProductCard } from './productscard';
import { Footer } from './footer';
import { Navbar } from './navbar';
import Sidebar from './sidebar';

const products = [ {
    "id": 5,
    "name": "Lenskart Air",
    "imageUrl": "https://static5.lenskart.com/media/catalog/product/pro/1/thumbnail/628x301/9df78eab33525d08d6e5fb8d27136e95//l/i/Lenskart-Air-LA-E14362-C1-Eyeglasses_J_1893.jpg",
    "reviews": 24,
    "size": "Extra Narrow",
    "type": "Blend Edit",
    "price": 1990,
    "colors": ["#F0C3C7", "#555", "#666"],
    "moreColors": 2,
    "offer": "Get it for ₹1500 with Free Lenses"
  },

  {
    "id": 6,
    "name": "Lenskart Air",
    "imageUrl": "https://static5.lenskart.com/media/catalog/product/pro/1/thumbnail/628x301/9df78eab33525d08d6e5fb8d27136e95//l/i/Lenskart-Air-LA-E14362-C1-Eyeglasses_J_1893.jpg",
    "reviews": 24,
    "size": "Extra Narrow",
    "type": "Blend Edit",
    "price": 2999,
    "colors": ["#F0C3C7", "#555", "#666"],
    "moreColors": 2,
    "offer": "Get it for ₹1500 with Free Lenses"
  },

  {
    "id": 7,
    "name": "John Jacobs",
    "imageUrl":"https://static5.lenskart.com/media/catalog/product/pro/1/thumbnail/628x301/9df78eab33525d08d6e5fb8d27136e95//j/o/john-jacobs-jj-e13346-c2-eyeglasses_g_5793.jpg",
    "reviews": 24,
    "size": "Extra Narrow",
    "type": "Blend Edit",
    "price": 1999,
    "colors": ["#F0C3C7", "#555", "#666"],
    "moreColors": 2,
    "offer": "Get it for ₹1500 with Free Lenses"
  },

  {
    "id": 9,
    "name": "Vincent Chase",
    "imageUrl":"https://static5.lenskart.com/media/catalog/product/pro/1/thumbnail/628x301/9df78eab33525d08d6e5fb8d27136e95//j/o/john-jacobs-jj-e13346-c2-eyeglasses_g_5793.jpg",
    "reviews": 24,
    "size": "Extra Narrow",
    "type": "Blend Edit",
    "price": 1799,
    "colors": ["#F0C3C7", "#555", "#666"],
    "moreColors": 2,
    "offer": "Get it for ₹1500 with Free Lenses"
  },

  {
    "id": 8,
    "name": "Lenskart Air",
    "imageUrl":"https://static5.lenskart.com/media/catalog/product/pro/1/thumbnail/628x301/9df78eab33525d08d6e5fb8d27136e95//l/i/transparent-gold-full-rim-rectangle-lenskart-air-essentials-la-e13517-c2-eyeglasses_csvfile-1695816767916-g_7546_27_09_2023.jpg",
    "reviews": 24,
    "size": "Extra Narrow",
    "type": "Blend Edit",
    "price": 2500,
    "colors": ["#F0C3C7", "#555", "#666"],
    "moreColors": 2,
    "offer": "Get it for ₹1500 with Free Lenses"
  },


  {
    "id": 10,
    "name": "Vincent Chase",
    "imageUrl":"https://static5.lenskart.com/media/catalog/product/pro/1/thumbnail/628x301/9df78eab33525d08d6e5fb8d27136e95//v/i/copper-brown-full-rim-round-vincent-chase-sleek-steel-vc-e15069-c2-eyeglasses_g_3676_10_14_22.jpg",
    "reviews": 24,
    "size": "Extra Narrow",
    "type": "Blend Edit",
    "price": 1199,
    "colors": ["#F0C3C7", "#555", "#666"],
    "moreColors": 2,
    "offer": "Get it for ₹1500 with Free Lenses"
  },
    
    ];

export function Eyeglasses() {
  const [sortOption, setSortOption] = useState('best-sellers');

  const handleSortChange = (newSortOption) => {
    setSortOption(newSortOption);
    console.log('Sort option selected: ', newSortOption);
  };

  // Sorting logic
  const sortedProducts = [...products].sort((a, b) => {
    if (sortOption === 'price-low-high') {
      return a.price - b.price;
    } else if (sortOption === 'price-high-low') {
      return b.price - a.price;
    } else if (sortOption === 'best-sellers') {
      return b.rating - a.rating;
    } else if (sortOption === 'new-arrivals') {
      return b.id - a.id;
    }
    return 0;
  });

  return (
    <>
      <Navbar />
      <div className="flex flex-col min-h-screen mt-[169px] mr-8 ml-8">
        <img src="https://static1.lenskart.com/media/desktop/img/7-oct-24/vc-sun-plp-7oct.jpg" alt="" />

{/* PRODUCTS AND SIDEBAR DIV  */}

  <div className="flex flex-grow ">
      <div className="">
            <Sidebar />
      </div>


      <div className='border-l border-gray-300'>

        <div className="bg-gray-300 text-end h-9 flex justify-between">
          <p className='text-gray-500 p-2 text-[13px]'>VINCENT CHASE GLASESS</p>

          <div className=''>

            <label htmlFor="sort-options" className="mr-2 pt-2 text-[13px]">SORT BY</label>
            <select
              id="sort-options"
              onChange={(event) => handleSortChange(event.target.value)}
              className=" border rounded-md mt-2 text-[13px] mr-2"
            >
              <option value="best-sellers">Best Sellers</option>
              <option value="new-arrivals">New Arrivals</option>
              <option value="price-low-high">Price: Low to High</option>
              <option value="price-high-low">Price: High to Low</option>
            </select>
            </div>

          </div>
              <div className="grid grid-cols-3 gap-5 p-5 ">
                
                  {sortedProducts.map((product) => (
                    <ProductCard key={product.id} product={product} />
                  ))}
        </div>

          </div>
        </div>


        <div >
          <Footer />
        </div>
      </div>
    </>
  );
}

export function EyeglassesCard({ product }) {
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