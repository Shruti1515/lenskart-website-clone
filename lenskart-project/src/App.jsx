

import { Route, Routes } from 'react-router-dom'
import AddToCart from './components/addToCart'
import { Glasses } from './components/glasses'
import HappyCustomer from './components/happyCustomer'
import { ImageSlidder } from './components/imageSlidder'
import { Navbar } from './components/navbar'
import { SecondSlide } from './components/scondSlide'
import { ThirdSlide } from './components/thirdSlide'
import { Footer } from './components/footer'
import { ProductPage } from './components/productPage'
import { AiFillMessage } from "react-icons/ai";
import { Sunglasses } from './components/sunglasses'
import { Eyeglasses } from './components/eyeglasses'
import { Screenglasses } from './components/screenglasses'
import { SignIn } from './components/signIn'




function App() {
  

  return (
    <>
    
  <Routes>
  <Route path='/' element={<Home/>}/>
  <Route path='/cart' element={<AddToCart/>}/>
  <Route path='/products' element={<ProductPage/>}/>
  <Route path='/sunglasses' element={<Sunglasses/>}/>
  <Route path='/eyeglasses' element={<Eyeglasses/>}/>
  <Route path='/screenglasses' element={<Screenglasses/>}/>
  <Route path='/' element={<SignIn/>}/>






  </Routes>

    </>
  )
}

export default App


function Home (){
  return(
    <>
    <Navbar/>
    <div className="fixed right-5 bottom-5 flex flex-col gap-2">
        <button className="bg-[#010042] text-white rounded-full w-15 h-15 flex justify-center items-center text-3xl shadow-md p-4"><AiFillMessage /></button>
      </div>
    <Glasses/>
     <img src="https://static1.lenskart.com/media/desktop/img/1-oct-24/bc%20banner.png" alt="" />
    <ImageSlidder/>
    <SecondSlide/>
    <ThirdSlide/>
    <HappyCustomer/>
    <Footer/>
    <SignIn/>
    </>
  )
}
