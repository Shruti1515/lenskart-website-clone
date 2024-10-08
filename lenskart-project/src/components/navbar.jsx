
import React, { useState } from "react";
import { CiHeart } from "react-icons/ci";
import { BsHandbag } from "react-icons/bs";
import { Link } from "react-router-dom";
import { SignIn } from "./signIn";

export const Navbar = () => {
  
  const [showSignIn, setShowSignIn] = useState(false);

  const toggleSignIn = () => {
    setShowSignIn(!showSignIn);
  };

  
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredPages, setFilteredPages] = useState([]);

 
  const pages = [
    { name: "Sunglasses", path: "/sunglasses" },
    { name: "Eyeglasses", path: "/eyeglasses" },
    { name: "Screen Glasses", path: "/screenglasses" },
    { name: "Woman's Glasses", path: "/screenglasses" },
    { name: "Kids's Glasses", path: "/screenglasses" },
    { name: "contact lenses", path: "/screenglasses" },
    { name: "Vincent chase", path: "/screenglasses" },
    { name: "John jacobs", path: "/screenglasses" },

  ];

 
  const handleSearchChange = (e) => {
    const term = e.target.value;
    setSearchTerm(term);

    
    if (term) {
      const results = pages.filter((page) =>
        page.name.toLowerCase().includes(term.toLowerCase())
      );
      setFilteredPages(results);
    } else {
      setFilteredPages([]); // Clear suggestions 
    }
  };

  return (
    <>
      <div  
      className="fixed top-0 left-0 w-full z-50 bg-white shadow-md">
        <div className="mr-8 ml-8 mt-4">
          <div className="flex text-xs justify-between">
            <ul className="flex">
              <li className="pr-2 cursor-pointer">Do More Be More </li>
              <li className="border-l border-black pl-2 pr-2 cursor-pointer h-4">
                Trying 3D
              </li>
              <li className="border-l border-black pl-2 pr-2 cursor-pointer h-4">
                Store Locator
              </li>
              <li className="border-l border-black pl-2 pr-2 cursor-pointer h-4">
                Singapore
              </li>
              <li className="border-l border-black pl-2 pr-2 cursor-pointer h-4">
                UAE
              </li>
              <li className="border-l border-black pl-2 pr-2 cursor-pointer h-4">
                John Jacobs
              </li>
              <li className="border-l border-black pl-2 pr-2 cursor-pointer h-4">
                Aqualens
              </li>
              <li className="border-l border-black pl-2 pr-2 cursor-pointer h-4">
                Cobrowsing
              </li>
              <li className="border-l border-black pl-2 pr-2 cursor-pointer h-4">
                Engineering Blog
              </li>
              <li className="border-l border-black pl-2 pr-2 cursor-pointer h-4">
                Partner with us
              </li>
            </ul>
            <div>Contact us</div>
          </div>

          <div className="flex h-20 justify-between items-center">
            <div className="flex items-center">
              <Link to='/'>
              <img
                className="-ml-4 mr-4"
                src="https://static.lenskart.com/media/desktop/img/site-images/main_logo.svg"
                alt="lenskart_logo"
              /></Link>
              <img
                className="h-8 cursor-pointer"
                src="https://static1.lenskart.com/media/desktop/img/republic/eye/new-toll-number.png"
                alt="toll number"
              />
              {/* Search Input */}
              <input
                type="text"
                value={searchTerm}
                onChange={handleSearchChange}
                placeholder="What are you looking for?"
                className="h-8 border border-black ml-12 w-[430px] rounded-md p-2"
              />
              {/* Display filtered suggestions */}
              {filteredPages.length > 0 && (
                <div className=" bg-white shadow-lg z-50 mt-36 w-[430px]">
                  {filteredPages.map((page) => (
                    <Link
                      key={page.name}
                      to={page.path}
                      className="block px-4 py-2 hover:bg-gray-200"
                      onClick={() => setSearchTerm("")} // Reset search input on click
                    >
                      {page.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            <div className="flex space-x-4 items-center text-[15px] ml-5">
              
                <p className="cursor-pointer">Track Order</p>
          

              <p
                onClick={toggleSignIn}
                className="mr-2 cursor-pointer"
              >
                Sign in & Sign up
              </p>
              <p className="flex space-x-2 cursor-pointer">
                <CiHeart size={20} /> <span>Wishlist</span>
              </p>
              <p className="flex space-x-2 cursor-pointer">
                <Link to="/cart">
                  <BsHandbag size={20} />
                </Link>{" "}
                <span>Cart</span>
              </p>
            </div>
          </div>
        </div>

        <div className="bg-[#faf9f7] h-14 w-full flex justify-between items-center">
          <div className="flex font-medium space-x-4 ml-8 text-[#06063d] font-sans">
            {[
              "EYEGLASSES",
              "COMPUTER GLASSES",
              "KIDS GLASSES",
              "CONTACT LENSES",
              "SUNGLASSES",
              "HOME EYE-TEST",
              "STORE LOCATOR",
            ].map((item) => (
              <h5
                key={item}
                className="cursor-pointer relative after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-full after:h-0.5 after:bg-[#06063d] after:scale-x-0 after:origin-bottom-right after:transition-transform hover:after:scale-x-100 hover:after:origin-bottom-left"
              >
                <Link to="/products">{item}</Link>
              </h5>
            ))}
          </div>

          <div className="flex mr-5">
            {[
              "https://static1.lenskart.com/media/desktop/img/May22/3dtryon1.png",
              "https://static1.lenskart.com/media/desktop/img/Mar22/13-Mar/blulogo.png",
              "https://static5.lenskart.com/media/uploads/gold_max_logo_dc.png",
            ].map((src, index) => (
              <img key={index} className="h-7 mr-2 rounded" src={src} alt="" />
            ))}
          </div>
        </div>
      </div>

      {showSignIn && (
        <div>
          {/* Overlay for fading the background */}
          <div
            className="fixed inset-0 bg-black opacity-50 z-40"
            onClick={toggleSignIn}
          ></div>

          {/* SignIn Component */}
          <div className="fixed inset-x-0 top-40 z-50 flex justify-center">
            <SignIn toggleSignIn={toggleSignIn} />
          </div>
        </div>
      )}
    </>
  );
};
