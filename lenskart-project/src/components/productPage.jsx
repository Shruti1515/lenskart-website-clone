






import React, { useState } from 'react';

import { Banner } from './banner';
import { ProductCard } from './productscard';
import { Footer } from './footer';
import { Navbar } from './navbar';
import Sidebar from './sidebar';

const products = [ {
    id: 1,
    name: "Lenskart Air",
    imageUrl: "https://static5.lenskart.com/media/catalog/product/pro/1/thumbnail/628x301/9df78eab33525d08d6e5fb8d27136e95//l/i/black-full-rim-square-lenskart-air-fusion-la-e13069-c1-eyeglasses_lenskart-air-la-e13033-c1-eyeglasses_eyeglasses_g_7875_1b_28july23.jpg",
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
    "imageUrl": "https://static5.lenskart.com/media/catalog/product/pro/1/thumbnail/628x301/9df78eab33525d08d6e5fb8d27136e95//v/i/gold-pink-transparent-full-rim-rectangle-vincent-chase-blend-edit-vc-e14974-c2-eyeglasses_g_3524_10_14_22.jpg",
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
      "imageUrl": "https://static5.lenskart.com/media/catalog/product/pro/1/thumbnail/628x301/9df78eab33525d08d6e5fb8d27136e95//j/i/pink-gold-pink-full-rim-cat-eye-john-jacobs-tr-flex-jj-e-14409-c6-eyeglasses__dsc5656.jpg",
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
    {
      "id": 11,
      "name": "Lenskart Air",
      "imageUrl": "https://static5.lenskart.com/media/catalog/product/pro/1/thumbnail/628x301/9df78eab33525d08d6e5fb8d27136e95//l/i/pink-transparent-full-rim-cat-eye-lenskart-air-fusion-la-e14101-c2-eyeglasses_lenskart-air-la-e14101-c2-c2-eyeglasses_g_7523_28july23.jpg",
      "rating": 4.6,
      "reviews": 615,
      "size": "Medium",
      "type": "Air Fusion",
      "price": 1500,
      "colors": ["#000", "#333", "#666"],
      "moreColors": 3,
      "offer": "Get it for ₹1500 with Free Lenses",
    },

    {
      "id": 12,
      "name": "Vincent Chase",
      "imageUrl": "https://static5.lenskart.com/media/catalog/product/pro/1/thumbnail/628x301/9df78eab33525d08d6e5fb8d27136e95//j/i/gold-black-tortoise-full-rim-rectangle-john-jacobs-supreme-steel-jj-e11540-c7-eyeglasses_g_2731_11_10_2022.jpg",
      "reviews": 24,
      "size": "Extra Narrow",
      "type": "Blend Edit",
      "price": 3499,
      "colors": ["#F0C3C7", "#555", "#666"],
      "moreColors": 2,
      "offer": "Get it for ₹1500 with Free Lenses"
    },

    {
      "id": 13,
      "name": "Lenskart Air",
      "imageUrl": "https://static5.lenskart.com/media/catalog/product/pro/1/thumbnail/628x301/9df78eab33525d08d6e5fb8d27136e95//v/i/vincent-chase-vc-e11891-c3-eyeglasses_eyeglasses_g_2735_1.jpg",
      "reviews": 24,
      "size": "Extra Narrow",
      "type": "Blend Edit",
      "price": 1200,
      "colors": ["#F0C3C7", "#555", "#666"],
      "moreColors": 2,
      "offer": "Get it for ₹1500 with Free Lenses"
    },
    {
      "id": 14,
      "name": "Lenskart Air",
      "imageUrl": "https://static5.lenskart.com/media/catalog/product/pro/1/thumbnail/628x301/9df78eab33525d08d6e5fb8d27136e95//v/i/silver-transparent-full-rim-round-vincent-chase-sleek-steel-vc-e15069-c1-eyeglasses_g_3598_10_14_22.jpg",
      "reviews": 24,
      "size": "Extra Narrow",
      "type": "Blend Edit",
      "price": 1900,
      "colors": ["#F0C3C7", "#555", "#666"],
      "moreColors": 2,
      "offer": "Get it for ₹1500 with Free Lenses"
    },
    {
      "id": 2,
      "name": "John Jacobs",
      "imageUrl": "https://static5.lenskart.com/media/catalog/product/pro/1/thumbnail/628x301/9df78eab33525d08d6e5fb8d27136e95//j/i/pink-gold-pink-full-rim-cat-eye-john-jacobs-tr-flex-jj-e-14409-c6-eyeglasses__dsc5656.jpg",
      "reviews": 24,
      "size": "Extra Narrow",
      "type": "Blend Edit",
      "price": 3200,
      "colors": ["#F0C3C7", "#555", "#666"],
      "moreColors": 2,
      "offer": "Get it for ₹1500 with Free Lenses"
    },

    {
      "id": 15,
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
    
    ];

export function ProductPage() {
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
      <div className="flex flex-col min-h-screen mt-[169px] mr-8 ml-8 relative">
        <Banner />

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