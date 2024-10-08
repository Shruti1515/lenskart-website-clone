// import React from "react";
// import { MdOutlineClose } from "react-icons/md";
// import { FaWhatsapp } from "react-icons/fa";

// export const SignIn = () => {
//   return (
//     <div className="w-[472px] h-[495Px] flex flex-col bg-white rounded-xl m-auto justify-center relative">
//       <img
//         src="https://static1.lenskart.com/media/desktop/img/DesignStudioIcons/DesktopLoginImage.svg"
//         alt=""
//         className="w-[472px] h-[216px] rounded-xl -mt-2"
//       />
//       <button className="absolute top-3 right-3  rounded-full text-xl font-thin text-gray-700 p-2 bg-white ">
//         <MdOutlineClose />{" "}
//       </button>
//       <h6 className="p-3 text-xl text-blue-950 ml-5 font-serif">Sign In</h6>

//       <div className="ml-8 mr-5 mt-5">
//         <input
//           type="text"
//           placeholder="Mobile / Email"
//           className="border border-gray-300 rounded-xl p-2 w-[390px] pl-5 text-md"
//         />
//         <p className="text-xs text-red-500 flex font-medium ">
//           Please Enter a valid email and Mobile Number
//         </p>

//         <div className="flex gap-2 mt-7">
//           <input
//             type="checkbox"
//             className="h-4 w-4 text-[#333368] focus:ring-2 focus:ring-[#333368] rounded"
//           />
//           <p className="text-xs text-[#333368] flex  ">
//             Get update on Whatsapp
//           </p>
//           <span className="text-lg">
//             <FaWhatsapp color="green" />
//           </span>
//         </div>

//         <button className="p-2.5 text-sm text-blue-950 mt-5 font-serif rounded-3xl bg-[#c5d2d8] w-[390px]">
//           Sign In{" "}
//         </button>
//         <p className="mt-2 text-sm  text-blue-950">
//           New Member?
//           <span className="text-[#42415d] font-medium underline mb-2 cursor-pointer">
//             Create an account
//           </span>
//         </p>
//       </div>
//     </div>
//   );
// };
import React from "react";
import { MdOutlineClose } from "react-icons/md";
import { FaWhatsapp } from "react-icons/fa";

export const SignIn = ({ toggleSignIn }) => {
  return (
    <div className="w-[472px] h-[495px] flex flex-col bg-white rounded-xl m-auto justify-center relative animate-slide-in-down">
      <img
        src="https://static1.lenskart.com/media/desktop/img/DesignStudioIcons/DesktopLoginImage.svg"
        alt="Sign In"
        className="w-[472px] h-[216px] rounded-xl -mt-2"
      />
      <button
        onClick={toggleSignIn}
        className="absolute top-3 right-3 rounded-full text-xl font-thin text-gray-700 p-2 bg-white"
      >
        <MdOutlineClose />
      </button>

      <h6 className="p-3 text-xl text-blue-950 ml-5 font-serif">Sign In</h6>

      <div className="ml-8 mr-5 mt-5">
        <input
          type="text"
          placeholder="Mobile / Email"
          className="border border-gray-300 rounded-xl p-2 w-[390px] pl-5 text-md"
        />
        <p className="text-xs text-red-500 flex font-medium ">
          Please Enter a valid email and Mobile Number
        </p>

        <div className="flex gap-2 mt-7">
          <input
            type="checkbox"
            className="h-4 w-4 text-[#333368] focus:ring-2 focus:ring-[#333368] rounded"
          />
          <p className="text-xs text-[#333368] flex">Get update on Whatsapp</p>
          <span className="text-lg">
            <FaWhatsapp color="green" />
          </span>
        </div>

        <button className="p-2.5 text-sm text-blue-950 mt-5 font-serif rounded-3xl bg-[#c5d2d8] w-[390px]">
          Sign In
        </button>

        <p className="mt-2 text-sm text-blue-950">
          New Member?
          <span className="text-[#42415d] font-medium underline mb-2 cursor-pointer">
            Create an account
          </span>
        </p>
      </div>
    </div>
  );
};
