import React from 'react'

const HappyCustomer = () => {
  return (
    <div className='mt-10 bg-[#fff091]  p-10'>
        <h1 className='text-3xl text-gray-900 font-medium text-center'>MEET OUR HAPPY CUSTOMERS</h1>
        
        <div className='flex h-[45vh] gap-7 mt-10 w-[100%] -mr-10'>
        <iframe width="500px"   src="https://www.youtube.com/embed/HYPqf_eVvvM?si=nfzRo21O09u5f6XE" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
        <iframe width="500px"  src="https://www.youtube.com/embed/SQm3RxXRunw?si=WV26ZwA6nj4zVsdP" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
        <iframe width="500px"  src="https://www.youtube.com/embed/IZpUQ-S_LcM?si=9mNqMZWnKJ6v62we" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
        </div>
    </div>
  )
}

export default HappyCustomer;