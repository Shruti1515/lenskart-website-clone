import React, { useEffect, useState } from "react";
import { MdArrowBackIosNew } from "react-icons/md";
import { MdArrowForwardIos } from "react-icons/md";

export const ImageSlidder = () => {
  const images = [
    "https://static1.lenskart.com/media/desktop/img/republic/hustlr-ace/Hustlr_Ace_Desktop_Banner.gif",
    "https://static1.lenskart.com/media/desktop/img/NewFolder23/Ultem_LKAir/UltemFlex-LKAir-WebBanner.gif",
    "https://static1.lenskart.com/media/desktop/img/Aug24/Switch-Grip-Story/Desktop%20Banner.gif",
    "https://static5.lenskart.com/media/uploads/webharry_potter.gif",
    "https://static1.lenskart.com/media/desktop/img/Aug24/VCIndoor/IndoorGlasses-WebBanner.jpg",
    "https://static1.lenskart.com/media/desktop/img/June24/Crystal_acetate/web-option-1CAcetate.gif",
    "https://static5.lenskart.com/media/uploads/WEBlkair_matte_essential.gif",
    "https://static1.lenskart.com/media/desktop/img/republic/hustlr-ace/Hustlr_Ace_Desktop_Banner.gif",
    "https://static1.lenskart.com/media/desktop/img/Aug24/22-aug-24/blu/Desktop%20banner.png",
    "https://static1.lenskart.com/media/desktop/img/NewFolder23/Ultem_LKAir/UltemFlex-LKAir-WebBanner.gif",
    "https://static5.lenskart.com/media/uploads/webFloat_POP2124.jpg",
    "https://static1.lenskart.com/media/desktop/img/Aug24/DrivingGlasses/DrivingGlasses-Desktop-banner.jpg",
    "https://static1.lenskart.com/media/desktop/img/Aug24/6-aug-24/cs/Desktop-2.gif",
  ];

  const [index, setindex] = useState(0);
  const [isAnimate, setIsAnimate] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      handleNext();
    }, 2000);

    return () => clearInterval(interval);
  }, [index]);




  const handleNext =
    () => {
      if (!isAnimate) {
        setIsAnimate(true);
        setTimeout(() => {
            setindex((pre) => (pre === images.length -1 ? 0 : pre+1))
            setIsAnimate(false);
        }, 100);
      };
    }


      const handlePre =
      () => {
        if (!isAnimate) {
          setIsAnimate(true);
          setTimeout(() => {
              setindex((pre) => (pre === 0 ? images.length-1  : pre-1))
              setIsAnimate(false);
          }, 100);
        }
    }


  return (
    <div className="relative w-full overflow-hidden mt-4">
      <div className="flex transform duration-500 "
      style={{ transform: `translateX(-${index * 100}%)` }}
      >
        {images.map((ele) => (
          <img src={ele} alt=""
          className="w-full object-cover flex-shrink-0"  />
        ))}
      </div>
            <button onClick={handlePre}
            className="absolute top-[50%] left-4 text-5xl text-white">
                <MdArrowBackIosNew />
            </button>
            
            <button onClick={handleNext}
            className="absolute top-[50%] right-4 text-5xl text-white">
                <MdArrowForwardIos />
            </button>
    </div>
  );
};
