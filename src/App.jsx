import { useState, useEffect } from "react";
import Header from "./components/Header";
import Banner from "./components/ Banner";
import MovieList from "./components/MovieList";
import MovieSearch from "./components/MovieSearch";
import { MovieProvider } from "./context/MovieProvider";

function App() {
  const [movie, setMovie] = useState([]);
  const [movieRate, setMovieRate] = useState([]);
  const [movieDetail, setMovieDetail] = useState([]);
  const [movieSearch, setMovieSearch] = useState([]);

  const handleSearch = async (searchVal) => {
    setMovieSearch([]);
    try {
      const url = `https://api.themoviedb.org/3/search/movie?query=${searchVal}&include_adult=false&language=vi&page=1`;
      const options = {
        method: "GET",
        headers: {
          accept: "application/json",
          Authorization: `Bearer ${import.meta.env.VITE_API_KEY}`,
        },
      };

      const searchMovie = await fetch(url, options);
      const data = await searchMovie.json();
      setMovieSearch(data.results);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    const fetchMovie = async () => {
      const options = {
        method: "GET",
        headers: {
          accept: "application/json",
          Authorization: `Bearer ${import.meta.env.VITE_API_KEY}`,
        },
      };
      const urlPopular =
        "https://api.themoviedb.org/3/movie/popular?language=vi&page=1";
      const urlTopRate =
        "https://api.themoviedb.org/3/movie/top_rated?language=vi&page=1";
      const urlDetail = "https://api.themoviedb.org/3/movie/939243?language=vi";

      const [resPopular, resTopRate, resDetail] = await Promise.all([
        fetch(urlPopular, options),
        fetch(urlTopRate, options),
        fetch(urlDetail, options),
      ]);

      const dataPopular = await resPopular.json();
      const dataTopRate = await resTopRate.json();
      const dataDetail = await resDetail.json();

      setMovie(dataPopular.results);
      setMovieDetail(dataDetail);
      setMovieRate(dataTopRate.results);
    };

    fetchMovie();
  }, []);

  return (
    <>
      <MovieProvider>
        <div className="bg-black pb-10">
          <Header onSearch={handleSearch} />
          {movieSearch.length > 0 ? (
            <MovieSearch title="Kết quả tìm kiếm" data={movieSearch} />
          ) : (
            <>
              <Banner data={movieDetail} />
              <MovieList title="Phim hot" data={movie} />
              <MovieList title="Phim đề cử" data={movieRate} />
            </>
          )}
        </div>
      </MovieProvider>
    </>
  );
}

export default App;
