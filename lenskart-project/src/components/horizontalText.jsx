import React from 'react'

const HorizontalText = (props) => {
  return (
    <div className='flex mt-20 mr-16 ml-16'>
        <hr className='flex-grow border-t-2 border-grey-400 my-8'/>
        <h2 className='mt-3  mr-4 ml-4 text-3xl font-sans'>{props.text}</h2>
        <hr className='flex-grow border-t-2 border-grey-400 my-8' />
    </div>
  )
}

export default HorizontalText;