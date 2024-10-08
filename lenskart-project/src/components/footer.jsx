
import React from "react";
import { FaFacebookSquare } from "react-icons/fa";
import { LuInstagram } from "react-icons/lu";
import { FaTwitter } from "react-icons/fa";

export const Footer = () => {
  return (
    <footer className="bg-[#020047] text-white p-10 text-start font-sans mb-0">
      {/* Header Section */}
      <div>
        <h1 className="mb-4 text-[32px] font-sans ">
          Buy The Best Eyewear From Lenskart
        </h1>
        <p className="font-[10px] font-lksans leading-5">
          Lenskart Is The Leading E-Commerce Portal For Eyewear In India. It Has
          Revolutionised The Eyewear Industry In The Country With Its
          Omni-Channel Approach. From An Ever-Growing Number Of Offline Stores
          Across Major Cities In The Country To Innovative Integration Of
          Technology While Purchasing Online, Lenskart Caters To Every Customer
          With Several Deals And Offers.
        </p>
        <p className="mt-5 font-[10px] font-lksans leading-5">
          A One-Stop Online Solution For Purchasing Eyewear And Its Accessories,
          Lenskart Delivers Them Right At Your Doorstep With Convenient Methods
          Of Payment. <span className="text-[#49c2a4]">Eyeglasses</span> as well as <span className="text-[#49c2a4]">Eyeglasses</span> Are Available For Men And
          Women In A Diverse Array Of Styles And Trendy Colours. If You Want To
          Try Out <span className="text-[#49c2a4]">Contact Lenses</span>, Pick The Ones Of Your Choice From The
          Extensive Variety Of Coloured Contact Lenses From Our Online Store.
        </p>
      </div>

      {/* Footer Sections */}
      <div className="flex justify-between mb-10">
        <div className="flex justify-between mt-10 gap-20">
          <FooterSection 
            title="Services"
            links={["Store Locator", "Buying Guide", "Frame Size"]}
          />
          <FooterSection
            title="About Us"
            links={["We Are Hiring", "Refer And Earn", "About Us", "Lenskart Coupons"]}
          />
          <FooterSection title="Help" links={["FAQ's"]} />
        </div>

        {/* Download App Section */}
        <div className="mt-24 text-center w-[28%]">
          <div className="flex justify-center mt-3 space-x-4">
            <a href="#">
              <img
                src="https://static.lenskart.com/media/desktop/img/play-store.svg"
                alt="Google Play"
                className="w-[116px]"
              />
            </a>
            <a href="#">
              <img
                src="https://static.lenskart.com/media/desktop/img/app-store.svg"
                alt="App Store"
                className="w-[116px]"
              />
            </a>
          </div>

          <h3 className="text-base mt-6">
            Download Lenskart App to buy <br />
            Eyeglasses, Sunglasses and Contact
            Lenses
          </h3>
        </div>
      </div>

      <hr className="border-b-white"/>

      {/* Social Media & Version */}
      <div className="  flex mt-4  justify-between">

          <div className="mt-6 text-white text-[16px] flex gap-8">
            <a href="#" className="cursor-pointer">
              T & C
            </a>
            <a href="#" className="hover:underline">
              Privacy
            </a>
            <a href="#" className="hover:underline">
              Disclaimer
            </a>
          </div>

      <div className="flex justify-between mt-6 font-sans text-sm">
        
        <p className="mr-5">Version 1.0.0 || Follow Us</p>

        <div className="flex mr-8  gap-5">
          
          <span className="cursor-pointer">< FaFacebookSquare size={22}/></span>
          <span className="cursor-pointer">< LuInstagram size={23}/></span>
          <span className="cursor-pointer">< FaTwitter size={23}/></span>

          
          {/* <a href="#">
            <img
              src="https://tse1.mm.bing.net/th?id=OIP.QH3rKRYQPcM3xxmjubYmaAHaHW&pid=Api&P=0&h=180"
              alt="Instagram"
              className="w-6"
            />
          </a>
          <a href="#">
            <img
              src="https://tse1.mm.bing.net/th?id=OIP.eZEdp__KVcYwYx4YBQzVsAHaHb&pid=Api&P=0&h=180"
              alt="Twitter"
              className="w-6"
            />
          </a> */}
        </div>
      </div>

      </div>

    </footer>
  );
};

const FooterSection = ({ title, links }) => {
  return (
    <div className="mt-8">
      <h3 className="mb-3 text-2xl ">{title}</h3>
      <ul>
        {links.map((link, index) => (
          <li key={index} className="mb-2">
            <a href="#" className="text-white hover:underline text-sm">
              {link}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};
