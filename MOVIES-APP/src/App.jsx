import { BrowserRouter, Routes, Route } from "react-router-dom";
import {useEffect, useState} from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Movies from "./components/Movies";
import WatchList from "./components/WatchList";
import Banner from "./components/Banner";

function App() {
  let [watchList, setWatchList] = useState([]);

  useEffect(() => {
    let watchListFromLocalStorage = JSON.parse(localStorage.getItem("watchList"));
    if (watchListFromLocalStorage) {
      setWatchList(watchListFromLocalStorage);
    }
  }, [])

  let handleAddToWatchlist = (movieObj) => {
    let newWatchlist = [...watchList, movieObj];
    setWatchList(newWatchlist);
    localStorage.setItem("watchList", JSON.stringify(newWatchlist));
  }

  let handleRemoveFromWatchlist = (movieObj) => {
    const updatedWatchList = watchList.filter(movie => movie.id !== movieObj.id);
    localStorage.setItem("watchList", JSON.stringify(updatedWatchList));
    setWatchList(updatedWatchList); 

  }


  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<><Banner /> <Movies handleAddToWatchlist={handleAddToWatchlist} handleRemoveFromWatchlist={handleRemoveFromWatchlist} watchList={watchList} /></>} />
          <Route exact  path="/watch-list" element={<WatchList watchList={watchList} setWatchList={setWatchList} handleRemoveFromWatchlist={handleRemoveFromWatchlist} />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
