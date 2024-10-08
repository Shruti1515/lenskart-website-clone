import React from 'react'

export const Glasses = () => {

  
    const glassesData = [
        {
          category: "Eyeglasses",
          icon: "https://static1.lenskart.com/media/desktop/img/Apr22/a2.png", 
        },
        {
          category: "Sunglasses",
          icon: "https://static1.lenskart.com/media/desktop/img/Apr22/b2.png",
        },
        {
          category: "Screen Glasses",
          icon: "https://static1.lenskart.com/media/desktop/img/Apr22/d2.png",
        },
        {
          category: "Contact Lenses",
          icon: "https://static1.lenskart.com/media/desktop/img/Apr22/d.png",
        },
        {
          category: "Power Sunglasses",
          icon: "https://static1.lenskart.com/media/desktop/img/Apr22/e2.png",
        },
        {
          category: "Progressive Lenses",
          icon: "https://static1.lenskart.com/media/desktop/img/June22/prog11.jpg",
        },
      ];
  return (
    <div className='bg-[#f5f5f5]  flex justify-around mr-4 p-3 mt-[170px]'>
        {glassesData.map((ele,index) =>(
            <div key={index} className='bg-white rounded-lg p-1 border border-white text-center hover:shadow-xl cursor-pointer' >
                <img className='w-44 h-24 rounded-lg ' src={ele.icon} alt="" />
                <h6 className='m-2 text-gray-500 cursor-pointer'>{ele.category}</h6>
              
            </div>

            
        ))
        }

        
    </div>
  )
}
    

