import React from "react";
import { Link } from "react-router-dom";

const AddToCart = () => {
  return (
    <div>
      <div className="flex justify-between items-center w-4/5 mx-auto">
        <img
          src="https://static.lenskart.com/media/desktop/img/site-images/main_logo.svg"
          alt="lenskart-logo"
        />

        <div className="flex items-center gap-3 text-gray-500">
          <img
            src="https://static.lenskart.com/media/desktop/img/DesignStudioIcons/Shield.svg"
            alt="shield"
          />
          <p>100% safe and secure</p>
        </div>
      </div>

      <div className="flex flex-col justify-center items-center bg-[#faf9f7] p-5 min-h-[calc(100vh-100px)]">
        <p className="text-3xl text-[#001a35]">Your shopping cart is empty!</p>
        <Link to="/">
          <button className="mt-3 text-3xl py-2 px-10 bg-[#20d7aa] text-[#001a35] rounded-full cursor-pointer">
            Continue Shopping
          </button>
        </Link>
      </div>
    </div>
  );
};

export default AddToCart;
