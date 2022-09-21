import { useState, useEffect, Component } from "react";
import MoviesCards from "./components/MovieCards/MoviesCards";
import NavigationBar from "./components/NavigationBar/NavigationBar";
import popularMoviesData from "./assets/data/popularMoviesData";
import Pagination from "./components/Pagination/Pagination";
import "./App.css";

function App() {
  let [popularMovies, setPopularMovies] = useState([]);
  const [fullMovieData, setFullMovieData] = useState([]);

  const [input, setInput] = useState("");
  const [darkMode, setDarkMode] = useState(false);
  const [page, setPage] = useState({
    from: 0,
    to: 20,
  });

  function switchMode() {
    setDarkMode(!darkMode);
  }

  useEffect(() => {
    setTimeout(() => {
      setPopularMovies(popularMoviesData.items.slice(page.from, page.to)),
        setFullMovieData(popularMoviesData.items);
    }, 1000);
  }, []);
  // console.log(popularMoviesData);
  // function fetchMoreData() {
  //   // a fake async api call like which sends
  //   // 20 more records in 1.5 secs
  //   setTimeout(() => {
  //     setPopularMovies(popularMovies.concat(popularMoviesData.items));
  //   }, 1500);
  // }

  function searchFieldOnChange(e) {
    const enteredValue = e.target.value;
    setInput(enteredValue);
    setPopularMovies(() =>
      fullMovieData.filter((movie) =>
        movie.title.toLowerCase().startsWith(enteredValue.toLowerCase())
      )
    );
  }

  return (
    <>
      <NavigationBar
        value={input}
        onChange={searchFieldOnChange}
        switchMode={switchMode}
        darkMode={darkMode}
      />

      <MoviesCards
        popularMovies={popularMovies}
        darkMode={darkMode}
        // fetchMoreData={fetchMoreData}
      />
      <Pagination page={page} />
    </>
  );
}

export default App;
