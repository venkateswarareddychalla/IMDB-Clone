import { useEffect, useState } from "react";
import genreIds from "../../Utility/Genre";

function WatchList({ watchList, setWatchList, handleRemoveFromWatchlist }) {
  const [search, setSearch] = useState("");
  const [genreList, setGenreList] = useState(["All Genres"]);
  const [currentGenre, setCurrentGenre] = useState("All Genres");

  useEffect(() => {
    let temp = watchList.map((movieObj) => {
      return genreIds[movieObj.genre_ids[0]];
    });
    setGenreList(["All Genres", ...new Set(temp)]);
  }, [watchList]);

  let handleFilter = (genre) => {
    setCurrentGenre(genre);
  };

  let handleSearch = (event) => {
    setSearch(event.target.value);
  };

  let sortAscending = () => {
    let ratingsAscendingOrder = [...watchList].sort(
      (a, b) => a.vote_average - b.vote_average
    );
    setWatchList(ratingsAscendingOrder);
  };

  let sortDescending = () => {
    let ratingsDescendingOrder = [...watchList].sort(
      (a, b) => b.vote_average - a.vote_average
    );
    setWatchList(ratingsDescendingOrder);
  };

  return (
    <>
      <div className="flex justify-center items-center my-4 gap-8 ">
        {genreList.map((genre) => {
          return (
            <button
              onClick={() => handleFilter(genre)}
              className={` ${
                currentGenre === genre ? "bg-blue-400" : "bg-gray-400"
              } h-[36px] w-[110px]  rounded-xl text-sm text-white font-semibold cursor-pointer `}
            >
              {genre}
            </button>
          );
        })}
      </div>
      <div className="flex justify-center my-4">
        <input
          type="text"
          placeholder="Search Movies"
          className="h-[2.5rem] w-[18rem] bg-gray-200 outline-none px-4 rounded-md "
          onChange={handleSearch}
          value={search}
        />
      </div>
      <div className="border border-gray-200 m-10">
        <table className="w-full text-gray-500 text-center">
          <thead className="border-b-2">
            <tr>
              <th className=" text-left p-6">Movie Name</th>
              <th className="p-6 flex justify-center items-center gap-3 ">
                <button
                  onClick={sortDescending}
                  className="bg-transparent border-none outline-none cursor-pointer"
                >
                  <i class="fa-solid fa-arrow-up"></i>
                </button>
                <h1>Ratings</h1>
                <button
                  onClick={sortAscending}
                  className="bg-transparent border-none outline-none cursor-pointer"
                >
                  <i class="fa-solid fa-arrow-down"></i>
                </button>
              </th>
              <th className="p-6">Popularity</th>
              <th className="p-6">Genre</th>
            </tr>
          </thead>
          <tbody className="">
            {watchList
              .filter((movieObj) => {
                if (currentGenre === "All Genres") {
                  return true;
                } else {
                  return genreIds[movieObj.genre_ids[0]] === currentGenre;
                }
              })
              .filter((movieObj) =>
                movieObj.original_title
                  .toLowerCase()
                  .includes(search.toLowerCase())
              )
              .map((movieObj) => {
                return (
                  <tr className="border-b-2 ">
                    <td className="flex justify-start items-center gap-3 px-6 py-4">
                      <img
                        className="h-[5rem] w-[6rem] rounded-sm border-2"
                        src={`https://image.tmdb.org/t/p/original${movieObj.poster_path}`}
                        alt={movieObj.original_title}
                      />
                      <span>{movieObj.original_title}</span>
                    </td>
                    <td className="px-6">{movieObj.vote_average.toFixed(2)}</td>
                    <td className="px-6">{movieObj.vote_count}</td>
                    <td className="px-6">{genreIds[movieObj.genre_ids[0]]}</td>
                    <td className="px-6">
                      <button className="bg-transparent outline-none cursor-pointer hover:text-red-500" onClick={ () => handleRemoveFromWatchlist(movieObj)}>
                        <i class="fa-solid fa-trash"></i>
                      </button>
                    </td>
                  </tr>
                );
              })}
          </tbody>
        </table>
      </div>
    </>
  );
}

export default WatchList;
