import React, { useState } from "react";
import HorizontalText from "./horizontalText";

import { MdArrowForwardIos } from "react-icons/md";
import { MdArrowBackIosNew } from "react-icons/md";

export const ThirdSlide = () => {
  const eyeglasses = [
    "https://static5.lenskart.com/media/catalog/product/pro/1/thumbnail/371x178/9df78eab33525d08d6e5fb8d27136e95//l/i/dark-night-full-rim-wayfarer_207671_1.jpg",
    "https://static5.lenskart.com/media/catalog/product/pro/1/thumbnail/371x178/9df78eab33525d08d6e5fb8d27136e95//l/i/transparent-gold-full-rim-rectangle-lenskart-air-essentials-la-e13517-c2-eyeglasses_csvfile-1695816767916-g_7546_27_09_2023.jpg",
    "https://static5.lenskart.com/media/catalog/product/pro/1/thumbnail/371x178/9df78eab33525d08d6e5fb8d27136e95//v/i/vincent-chase-vc-e13037-f-im-rect-way-ace-crl-ue-trt-c6-eyeg_g_0532.jpg",
    "https://static5.lenskart.com/media/catalog/product/pro/1/thumbnail/371x178/9df78eab33525d08d6e5fb8d27136e95//v/i/vincent-chase-vc-e14207-c1-eyeglasses_vincent-chase-vc-e14207-c1-eyeglasses_G_4498.jpg",
    "https://static5.lenskart.com/media/catalog/product/pro/1/thumbnail/371x178/9df78eab33525d08d6e5fb8d27136e95//l/i/transparent-full-rim-rectangle-lenskart-air-classic-la-e15019-c3-eyeglasses_g_8694_09_09_2022.jpg",
    "https://static5.lenskart.com/media/catalog/product/pro/1/thumbnail/371x178/9df78eab33525d08d6e5fb8d27136e95//l/i/lenskart-studio-lk-e17107-c1-eyeglasses__dsc5481_30_05_2024.jpg",
  ];

  const computerlenses = [
    "https://static5.lenskart.com/media/catalog/product/pro/1/thumbnail/371x178/9df78eab33525d08d6e5fb8d27136e95//l/i/blue-block-kids-computer-glasses:-transparent-black-full-rim-round-kid-(2-5-yrs)-lenskart-junior-lkj-e10063ce-c1_lenskart-junior-lkj-e10056ce-c6-eyeglasses_img2njh123_02_2022.jpg",
    "https://static5.lenskart.com/media/catalog/product/pro/1/thumbnail/371x178/9df78eab33525d08d6e5fb8d27136e95//l/i/blue-block-kids-computer-glasses:-transparent-blue-full-rim-rectangle-kid-(5-8-yrs)-lenskart-junior-lkj-e10064ce-c1_vbg14423_02_2022.jpg",
    "https://static5.lenskart.com/media/catalog/product/pro/1/thumbnail/371x178/9df78eab33525d08d6e5fb8d27136e95//l/i/blue-block-kids-computer-glasses:-blue-black-full-rim-rectangle-kids-(5-8-yrs)-lenskart-junior-lkj-e10066ce-c1_ccs_g_0093.jpg",
    "https://static5.lenskart.com/media/catalog/product/pro/1/thumbnail/371x178/9df78eab33525d08d6e5fb8d27136e95//l/i/blue-block-kids-computer-glasses:-transparent-green-full-rim-rectangle-kids-(8-12-yrs)-lenskart-junior-lkj-e10065ce-c3_mmmg_006623_02_2022.jpg",
    "https://static5.lenskart.com/media/catalog/product/pro/1/thumbnail/371x178/9df78eab33525d08d6e5fb8d27136e95//l/e/lenskart-lkj-e10067ce-c1-eyeglasses_g_0126.jpg",
    "https://static5.lenskart.com/media/catalog/product/pro/1/thumbnail/371x178/9df78eab33525d08d6e5fb8d27136e95//l/i/blue-block-kids-computer-glasses:-orange-transparent-full-rim-oval-kids-(8-12-yrs)-lenskart-junior-lkj-e10067ce-c4_bte_g_018225_02_2022.jpg",
  ];
  const contectlenses = [
    "https://static5.lenskart.com/media/catalog/product/pro/1/thumbnail/371x178/9df78eab33525d08d6e5fb8d27136e95//no-resize/a/i/aquacolor-dusk-blue-premium-zero-power-monthly_dusk_blue_kiara_01_09_2023.jpg",
    "https://static5.lenskart.com/media/catalog/product/pro/1/thumbnail/371x178/9df78eab33525d08d6e5fb8d27136e95//no-resize/a/i/aquacolor-dusk-blue-premium-zero-power-monthly_dusk_blue_kiara_01_09_2023.jpg",
    "https://static5.lenskart.com/media/catalog/product/pro/1/thumbnail/371x178/9df78eab33525d08d6e5fb8d27136e95//no-resize/a/i/aquacolor-emerald-premium-zero-power-monthly_emerald_kiara_01_09_2023.jpg",
    "https://static5.lenskart.com/media/catalog/product/pro/1/thumbnail/371x178/9df78eab33525d08d6e5fb8d27136e95//no-resize/a/i/aquacolor-tricky-turquoise-powered-monthly---1lp_tricky_turquoise_kiara_01_09_2023.jpg",
    "https://static5.lenskart.com/media/catalog/product/pro/1/thumbnail/371x178/9df78eab33525d08d6e5fb8d27136e95//no-resize/a/i/aquacolor-silver-gray-premium-zero-power-monthly_silver_grey_kiara_01_09_2023.jpg",
    "https://static5.lenskart.com/media/catalog/product/pro/1/thumbnail/371x178/9df78eab33525d08d6e5fb8d27136e95//no-resize/a/i/aquacolor-dusk-blue-premium-zero-power-monthly_dusk_blue_kiara_01_09_2023.jpg"
  ]

  return (
    <div>
      <HorizontalText text="FREE PROGRESSIVE LENSES" />

      <img
        src="https://static1.lenskart.com/media/desktop/img/Aug24/22-aug-24/Other%20assets/New%20Web%20Banner.png"
        alt="FREE PROGRESSIVE LENSES"
        className="mt-4"
      />

      <HorizontalText text="AS SEEN ON SHARK TANK" />
      <img
        src="https://static1.lenskart.com/media/desktop/img/Dec22/1-Dec/Homepage-Banner-web.gif"
        alt="AS SEEN ON SHARK TANK"
      />

      <HorizontalText text="TRENDING SUNGLASSES" />
      <img
        src="https://static1.lenskart.com/media/desktop/img/Jan23/sunglasses/Sun-Banner-web.gif"
        alt="TRENDING SUNGLASSES"
      />

      <HorizontalText text="AQUACOLOR - GLAM UP WITH COLOR LINES" />
      <img
        src="https://static1.lenskart.com/media/desktop/img/Oct22/kiara/Refresh-Banner-Web.gif"
        alt="AQUACOLOR - GLAM UP WITH COLOR LINES"
      />

      <HorizontalText text="BUY IT YOUR WAY" />
      <div className="grid grid-cols-2 gap-4 mr-16 ml-16 mt-5">
        <img
          src="https://static1.lenskart.com/media/desktop/img/republic/celb-new/call.png"
          alt=""
        />
        <img
          src="https://static1.lenskart.com/media/desktop/img/republic/celb-new/wts-up.png"
          alt=""
        />
        <img
          src="https://static1.lenskart.com/media/desktop/img/Aug21/Desktop/hto.jpg"
          alt=""
        />
        <img
          src="https://static1.lenskart.com/media/desktop/img/Aug21/Desktop/stores.jpg"
          alt=""
        />
      </div>

      <ThreeImages glasses="EYEGLASSES" eyeglasses={eyeglasses} />

      
      <img
        className="mt-16"
        src="https://static1.lenskart.com/media/desktop/img/Nov20/25-Nov/Banner05_Final2ndDec21.jpg"
        alt=""
      />

      <ThreeImages
        glasses="WITH POWER COMPUTER BLUE LENSES"
        eyeglasses={computerlenses}/>

        

      <img className="mt-24" src="https://static1.lenskart.com/media/desktop/img/June22/Our-Brands-Banner.jpg" alt="" />

      <ThreeImages
        glasses="COLOR CONTACT LENSES"
        eyeglasses={contectlenses}/>

      <img className="mt-24" src="https://static5.lenskart.com/media/uploads/whatsapp-1.png" alt="" />
        
    </div>
  );
};

export function ThreeImages({ glasses, eyeglasses }) {
  const [index, setindex] = useState(0);

  const getVisibleItems = () => {
    return eyeglasses.slice(index, index + 3);
  };

  const preButton = () => {
    if (index > 0) {
      setindex(index - 3);
    }
  };

  const nextButton = () => {
    if (index + 3 < eyeglasses.length) {
      setindex(index + 3);
    }
  };

  return (
    <div className="mt-20 mr-24 ml-24 mb-8">
      <div className="flex justify-between">
        <h3 className="text-2xl">{glasses}</h3>
        <p className="text-l text-[#49c2a4] font-medium font-serif cursor-pointer hover:underline">
          View Range
        </p>
      </div>
      <hr className="border-gray-400" />

      <div className="flex mt-8 gap-5 justify-center">

        {/* PREVIOUS BUTTON  */}

        {index > 0 &&(
          <button onClick={preButton} className="text-5xl text-neutral-300">
          <MdArrowBackIosNew />
        </button>
        )}
        
        {/* THREE IMAGES  */}

        <div className="flex gap-16">
          {getVisibleItems().map((image, index) => (
            <img
              className="w-[257px] cursor-pointer "
              key={index}
              src={image}
              alt={`Gallery image ${index + 1}`}
              
            />
          ))}
        </div>

        {/* NEXT BUTTON  */}

        {index + 3 < eyeglasses.length &&(
          <button
          onClick={nextButton}
          className="text-5xl text-neutral-300 ml-10"
        >
          {" "}
          <MdArrowForwardIos />
        </button>
        )}
        
      </div>
    </div>
  );
}
