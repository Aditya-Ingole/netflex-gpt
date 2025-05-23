import React from 'react'

const VideoTitle = ({title,overview}) => {
  return (
    <div className='w-screen aspect-video pt-[15%] px-24 absolute text-white bg-gradient-to-r from-black'>
        <h1 className='text-5xl font-bold'>{title}</h1>
        <p className='py-6 text-lg w-1/4'>{overview}</p>
        <div>
            <button className='bg-white text-black p-2 px-8 text-xl rounded-lg hover:bg-opacity-50'>Play</button>
            <button className='bg-gray-500  text-white p-2 px-8 text-xl ml-2 rounded-lg'>More Info</button>
            
        </div>
    </div>
  )
}

export default VideoTitle;