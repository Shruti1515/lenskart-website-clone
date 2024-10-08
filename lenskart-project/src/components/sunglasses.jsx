

import { CiHeart } from "react-icons/ci";
import { IoMdStar } from "react-icons/io";
import React, { useState } from 'react';
import { ProductCard } from './productscard';
import { Footer } from './footer';
import { Navbar } from './navbar';
import Sidebar from './sidebar';

const products = [ {
    id: 1,
    name: "Lenskart Air",
    imageUrl: "https://static5.lenskart.com/media/catalog/product/pro/1/thumbnail/628x301/9df78eab33525d08d6e5fb8d27136e95//v/i/Silver-Maroon-Full-Rim-Geometric-Vincent-Chase-LIVEWIRE-VC-S14506-C5-Polarized-Sunglasses_G_7230.jpg",
    rating: 4.6,
    reviews: 615,
    size: "Medium",
    type: "Air Fusion",
    price: 1500,
    colors: ["#000", "#333", "#666"],
    moreColors: 3,
    offer: "Get it for ₹1500 with Free Lenses",
  },
  
  
  {
    "id": 3,
    "name": "Vincent Chase",
    "imageUrl": "https://static5.lenskart.com/media/catalog/product/pro/1/thumbnail/628x301/9df78eab33525d08d6e5fb8d27136e95//v/i/brown-gold-black-full-rim-geometric-vincent-chase-polarized-pilot-collection-vc-s15403-c2-sunglasses_g_0715_01_02_2023.jpg",
    "reviews": 24,
    "size": "Extra Narrow",
    "type": "Blend Edit",
    "price": 1800,
    "colors": ["#F0C3C7", "#555", "#666"],
    "moreColors": 2,
    "offer": "Get it for ₹1500 with Free Lenses"
  },
  {
      "id": 4,
      "name": "John Jacobs",
      "imageUrl": "https://static5.lenskart.com/media/catalog/product/pro/1/thumbnail/628x301/9df78eab33525d08d6e5fb8d27136e95//v/i/Black-Full-Rim-Square-Vincent-Chase--MIRAGE1VC-S11748-C8-Polorized-Sunglasses_vincent-chase-vc-s11748-c8-sunglasses_g_5577_218_02_2022.jpg",
      "reviews": 24,
      "size": "Extra Narrow",
      "type": "Blend Edit",
      "price": 3200,
      "colors": ["#F0C3C7", "#555", "#666"],
      "moreColors": 2,
      "offer": "Get it for ₹1500 with Free Lenses"
    },

    {
      "id": 5,
      "name": "Lenskart Air",
      "imageUrl": "https://static5.lenskart.com/media/catalog/product/pro/1/thumbnail/628x301/9df78eab33525d08d6e5fb8d27136e95//v/i/vincent-chase-vc-s15407-c1-sunglasses_g_2711_07_02_2023.jpg",
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
      "imageUrl": "https://static5.lenskart.com/media/catalog/product/pro/1/thumbnail/628x301/9df78eab33525d08d6e5fb8d27136e95//v/i/brown-full-rim-aviator-vincent-chase-the-metal-edit-vc-s13835-c3-polarized-sunglasses_vincent-chose-vc-s13835-frll-rum-c3-sunglasses_sunglasses_g_3407_1_28july23.jpg",
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
      "imageUrl":"https://static5.lenskart.com/media/catalog/product/pro/1/thumbnail/628x301/9df78eab33525d08d6e5fb8d27136e95//v/i/silver-blue-full-rim-round-vincent-chase-livewire-vc-s14505-c5-polarized-sunglasses_g_7703.jpg",
      "reviews": 24,
      "size": "Extra Narrow",
      "type": "Blend Edit",
      "price": 1999,
      "colors": ["#F0C3C7", "#555", "#666"],
      "moreColors": 2,
      "offer": "Get it for ₹1500 with Free Lenses"
    },

   
   
    
    ];

export function Sunglasses() {
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

export function SunglassesCard({ product }) {
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