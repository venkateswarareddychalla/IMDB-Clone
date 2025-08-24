import React from 'react'

function Banner() {
  return (
    <div className='h-[20vh] md:h-[75vh] bg-cover bg-center flex justify-center items-end' style={{ backgroundImage: 'url(https://pbs.twimg.com/media/GSWZtqFXEAAVL1u?format=jpg&name=4096x4096)'}}>
        <div className='text-white text-xl text-center w-full bg-gray-900/40 font-roboto font-semibold p-1'><h1>Kalki 2898 - A.D</h1></div>
    </div>
  )
}

export default Banner