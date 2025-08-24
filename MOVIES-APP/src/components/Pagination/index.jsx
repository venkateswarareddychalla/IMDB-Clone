import React from 'react'

function Pagination({pageNo, handleNextPage, handlePreviousPage}) {
  return (
    <div className='bg-gray-400 p-2 mt-8 flex justify-center gap-8 items-center'>
      <button onClick={() => handlePreviousPage()} className='cursor-pointer bg-transparent'>
        <i className="fa-solid fa-arrow-left text-xl"></i>
      </button>
      <h1 className='font-bold text-xl'>{pageNo}</h1>
      <button onClick={() => handleNextPage()}  className='cursor-pointer bg-transparent'>
        <i className="fa-solid fa-arrow-right text-xl"></i>
      </button>
    </div>
  )
}

export default Pagination