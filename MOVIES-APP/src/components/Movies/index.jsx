// https://api.themoviedb.org/3/movie/popular?language=en-US&page=1&api_key=cbdeee593bc6de9daa5abf4d3f080577

import { useEffect, useState } from "react";
import axios from 'axios';
import MovieCard from "../MovieCard";
import Pagination from "../Pagination";

function Movies({handleAddToWatchlist, handleRemoveFromWatchlist, watchList}) {
  
//  option 1
//   useEffect(() => {
//   const url = "https://api.themoviedb.org/3/movie/popular?language=en-US&page=1&api_key=cbdeee593bc6de9daa5abf4d3f080577";
//   const fetchMovies = async () => {
//     try {
//       const response = await fetch(url);
//       const data = await response.json();
//       console.log(data);
//     } catch (error) {
//       console.error("Fetching movies failed:", error);
//     }
//   };
//   fetchMovies();
// }, []);

// option 2
// useEffect(() => {
//   const url = "https://api.themoviedb.org/3/movie/popular?language=en-US&page=1";
//   const options = {
//     method: 'GET',
//     headers: {
//       accept: 'application/json',
//       Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjYmRlZWU1OTNiYzZkZTlkYWE1YWJmNGQzZjA4MDU3NyIsIm5iZiI6MTc0ODc0NjQzOS43MzksInN1YiI6IjY4M2JjMGM3OTk0ZTgxMjZiZTdiYTNlZSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.qj1pUnxwlJ8cdw8EeOg24Tx4V3q1lRGhjS5TMh1OcgI'
//     }
//   }
//   const fetchMovies = async () => {
//     try {
//       const response = await fetch(url, options);
//       if(response.ok){
//         const data = await response.json();
//         console.log(data);
//       }
      
//     } catch (error) {
//       console.error("Fetching movies failed:", error);
//     }
//   };
//   fetchMovies();
// }, []);

  const [movies, setMovies] = useState([])
  const [pageNo, setPageNo] = useState(1);

  useEffect(() => {
    axios.get(`https://api.themoviedb.org/3/movie/popular?language=en-US&page=${pageNo}&api_key=cbdeee593bc6de9daa5abf4d3f080577`).then(function (response) {
      console.log(response.data);
      setMovies(response.data.results);
    })
  }, [pageNo])

  const handlePreviousPage = () => {
    if(pageNo >= 2){
      setPageNo(pageNo => pageNo-1)
    }
    
  }

  const handleNextPage = () => {
    setPageNo(pageNo+1)
  }

  return (
    <div className="p-5">
      <div className="text-2xl m-5 font-bold text-center">
        <h1>Trending Movies</h1>
      </div>
      <div className="flex justify-center flex-wrap space-x-5 space-y-5">
        {movies.map(movieObj => (
          <MovieCard key={movieObj.id} backgroundImgUrl={movieObj.backdrop_path} title={movieObj.original_title} movieObj={movieObj} handleAddToWatchlist={handleAddToWatchlist} handleRemoveFromWatchlist={handleRemoveFromWatchlist} watchList={watchList} />
        ))}
      </div>
      <Pagination pageNo={pageNo} handlePreviousPage={handlePreviousPage} handleNextPage={handleNextPage} />
    </div>
  );
}

export default Movies;
