import React from 'react'

function MovieCard({backgroundImgUrl, title, handleAddToWatchlist, handleRemoveFromWatchlist, movieObj, watchList}) {
  const doesContain = (movieObj) => {
    return watchList.some(movie => movie.id === movieObj.id);
  }
  return (
    <div className='h-[40vh] w-[160px] bg-center bg-cover rounded-xl hover:cursor-pointer hover:scale-110 duration-300  flex flex-col  justify-between  ' style={{backgroundImage: `url(https://image.tmdb.org/t/p/original${backgroundImgUrl})`}}>
      {doesContain(movieObj) ? <button onClick={() => (handleRemoveFromWatchlist(movieObj))} className='self-end m-3 bg-gray-900/60 h-8 w-8 rounded-2xl outline-none cursor-pointer hover:bg-green-100'>
        &#10060;
      </button> : <button onClick={() => (handleAddToWatchlist(movieObj))} className='self-end m-3 bg-gray-900/60 h-8 w-8 rounded-2xl outline-none cursor-pointer hover:bg-green-100'>
        &#128525;
      </button>}
      
      <div className='bg-gray-900/60 w-full text-center text-white font-semibold text-sm p-1'>
        <h1>{title}</h1>
      </div>
    </div>
  )
}

export default MovieCard