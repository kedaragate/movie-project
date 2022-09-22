import { useState, useEffect, Component } from "react";
import MoviesCards from "./components/MovieCards/MoviesCards";
import NavigationBar from "./components/NavigationBar/NavigationBar";
import popularMoviesData from "./assets/data/popularMoviesData";
import Pagination from "./components/Pagination/Pagination";
import "./App.css";
import { faJarWheat, faJoint } from "@fortawesome/free-solid-svg-icons";

function App() {
  let [popularMovies, setPopularMovies] = useState([]);
  const [fullMovieData, setFullMovieData] = useState([]);

  const [input, setInput] = useState("");
  const [darkMode, setDarkMode] = useState(false);
  const itemsPerPage = 3;
  const [page, setPage] = useState({
    prevFrom: 0,
    prevTo: 0,
    currentFrom: 0,
    currentTo: itemsPerPage,
    nextFrom: 0,
    nextTo: 0,
  });

  function switchMode() {
    setDarkMode(!darkMode);
  }
  let totalPages = Math.ceil(fullMovieData.length / itemsPerPage);
  function onNextButtonClick() {
    setPage((prev) => {
      return {
        ...prev,
        prevFrom: page.currentFrom + itemsPerPage,
        prevTo: page.currentFrom + 2 * itemsPerPage,
      };
    });

    setPage((prev) => {
      return {
        ...prev,
        currentFrom: page.currentFrom + itemsPerPage,
        currentTo: page.currentFrom + 2 * itemsPerPage,
      };
    });
    if (page.currentFrom >= fullMovieData.length) {
      return;
    } else {
      if (page.currentTo>fullMovieData.length) {
        setPage({currentFrom:0, currentTo:itemsPerPage})
      } else {
        setPopularMovies(fullMovieData.slice(page.currentFrom, page.currentTo));
      }
    }
  }
  function onPrevButtonClick() {
    setPage((prev) => {
      return {
        ...prev,
        prevFrom: page.currentFrom - itemsPerPage,
        prevTo: page.currentFrom - 2 * itemsPerPage,
      };
    });

    setPage((prev) => {
      return {
        ...prev,
        currentFrom: page.currentFrom - itemsPerPage,
        currentTo: page.currentFrom - 2 * itemsPerPage,
      };
    });
    // if (page.currentFrom <= fullMovieData.length) {

    setPopularMovies(fullMovieData.slice(page.currentFrom, page.currentTo));
  }
  console.log(page.currentFrom);
  console.log(page.currentTo);
  useEffect(() => {
    setTimeout(() => {
      setPopularMovies(popularMoviesData.items.slice(0, itemsPerPage)),
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
      <Pagination
        page={page}
        onNextButtonClick={onNextButtonClick}
        onPrevButtonClick={onPrevButtonClick}
      />
    </>
  );
}

export default App;
