import React, { useState } from "react";
import { MdArrowBackIosNew } from "react-icons/md";
import { MdArrowForwardIos } from "react-icons/md";

export const SecondSlide = () => {
  const glassesOptions = [
    {
      name: "Round",
      exploreLink: "https://static1.lenskart.com/media/desktop/img/Sep21/image179.png",
    },
    {
      name: "Cat-Eye",
      exploreLink: "https://static1.lenskart.com/media/desktop/img/Sep21/cateeye.jpg",
    },
    {
      name: "Clubmaster",
      exploreLink: "https://static1.lenskart.com/media/desktop/img/Sep21/clubmaster.jpg",
    },
    {
      name: "Transparent",
      exploreLink: "https://static1.lenskart.com/media/desktop/img/Sep21/trans.jpg",
    },
    {
      name: "Blend Edit",
      exploreLink: "https://static1.lenskart.com/media/desktop/img/Sep21/blend.jpg",
    },
    {
      name: "Air Clip On",
      exploreLink: "https://static1.lenskart.com/media/desktop/img/Sep21/clipon.jpg",
    },
    {
      name: "Air Flex",
      exploreLink: "https://static1.lenskart.com/media/desktop/img/Sep21/airflex.jpg",
    },
    {
      name: "Retro Aviator",
      exploreLink: "https://static1.lenskart.com/media/desktop/img/Sep21/aviator.jpg",
    },
  ];

const [index, setindex] = useState(0)

const getVisibleItems = ()=> {
    return (
        glassesOptions.slice(index, index+4)
    )
};

const nextButton = (()=> {
    if(index + 4 < glassesOptions.length){
        setindex(index+4)
    }
})

const preButton = (()=> {
    if(index - 4 >=  0){
        setindex(index-4)
    }
})


  
  return (
    <div className="mt-4">
      <img className="cursor-pointer"
        src="https://static1.lenskart.com/media/desktop/img/Apr22/Bannerforexport.jpg"
        alt=""
      />

      <div className=" flex mr-24 ml-24 mt-12">
        <div className=" ">
          <p className="text-[50px] font-sans font-light" >WEAR</p>
          <p className="text-[50px] font-sans font-light">THE</p>
          <p className="text-[50px] font-times font-bold -mt-5">TREND</p>
          <p className="text-[14px] font-lkfutura font-medium">Our hottest collections</p>
        </div>

        <button onClick={preButton} className="text-4xl font-bold text-neutral-300 w-[12%]"><MdArrowBackIosNew /></button>

        <div className="flex gap-5 ]">
          {getVisibleItems().map((ele,index) => (
            <div key={index} className="text-center mr-5 ml-5 w-[20%] " >
              <img src={ele.exploreLink} alt="" className=""/>
              <h6 className="mt-5">{ele.name}</h6>
              <button className="p-2 w-36 text-white bg-[#56b6c2] mt-5 rounded-md ">Explore</button>
            </div>
))}
        </div>
        <button onClick={nextButton} className="text-4xl font-bold text-neutral-300 w-[12%]"> <MdArrowForwardIos /></button>
      </div>


    </div>
  );
};
