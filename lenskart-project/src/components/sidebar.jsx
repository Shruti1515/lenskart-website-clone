import React from 'react';

const Sidebar = () => {
  const frameTypes = [
    {
      name: 'Full Rim',
      image: 'https://static.lenskart.com/images/cust_mailer/Eyeglass/FullRim.png',
    },
    {
      name: 'Half Rim',
      image: 'https://static.lenskart.com/images/cust_mailer/Eyeglass/HalfRim.png',
    },
    {
      name: 'Rimless',
      image: 'https://static.lenskart.com/images/cust_mailer/Eyeglass/Rimless.png',
    },
  ];

  const frameShapes = [
    {
      name: 'Rectangle',
      image: 'https://static.lenskart.com/images/cust_mailer/Eyeglass/Rectangle.png',
    },
    {
      name: 'Round',
      image: 'https://static.lenskart.com/images/cust_mailer/Eyeglass/Wayfarer.png',
    },
    {
      name: 'Cat Eye',
      image: 'https://static.lenskart.com/images/cust_mailer/Eyeglass/Aviator.png',
    },
    {
      name: 'Square',
      image: 'https://static.lenskart.com/images/cust_mailer/Eyeglass/Square.png',
    },
    {
      name: 'Wayfarer',
      image: 'https://static.lenskart.com/images/cust_mailer/Eyeglass/Wayfarer.png',
    },
    {
      name: 'Aviator',
      image: 'https://static.lenskart.com/images/cust_mailer/Eyeglass/Aviator.png',
    },
    {
      name: 'Geometric',
      image: 'https://static.lenskart.com/images/cust_mailer/Eyeglass/Geometric.png',
    },
    {
      name: 'Hexagonal',
      image: 'https://static.lenskart.com/images/cust_mailer/Eyeglass/Hexagonal.png',
    },
    {
      name: 'Clubmaster',
      image: 'https://static.lenskart.com/images/cust_mailer/Eyeglass/Clubmaster.png',
    },
    {
      name: 'Oval',
      image: 'https://static.lenskart.com/images/cust_mailer/Eyeglass/Oval.png',
    },
    {
      name: 'Sports',
      image: 'https://static.lenskart.com/images/cust_mailer/Eyeglass/Sports.png',
    },
    {
      name: 'Octagon',
      image: 'https://static.lenskart.com/images/cust_mailer/Eyeglass/Octagon.png',
    },
  ];

  return (
    <div className="p-4 bg-white">
      <div className="mb-6 bg-white ">
        <h5 className=" mb-2">FRAME TYPE</h5>
        <div className="flex gap-2 bg-white">
          {frameTypes.map((frame) => (
            <div key={frame.name} className="frame border-2 border-gray-200 w-1/3 h-15 flex flex-col items-center justify-center hover:border-black cursor-pointer ">
              <a href="#">
                <img src={frame.image} alt={frame.name} className="w-full h-full object-cover" />
              </a>
              <p className="mt-2 text-gray-400 text-xs mb-1">{frame.name}</p>
            </div>
          ))}
        </div>
      </div>

      <div className=''>
        <h5 className=" mb-2">FRAME SHAPE</h5>
        <div className="grid grid-cols-3 gap-4 mr-2 -ml-2">
          {frameShapes.map((frame) => (
            <div key={frame.name} className="frame border-2 border-gray-200 w-16 h-15 flex flex-col items-center justify-center hover:border-black cursor-pointer ">
              <a href="#">
                <img src={frame.image} alt={frame.name} className="w-full h-full object-cover" />
              </a>
              <p className="mt-2 text-gray-400 text-xs mb-2 ">{frame.name}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
