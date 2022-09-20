import { useState, useEffect } from "react";
import MoviesCards from "./components/MovieCards/MoviesCards";
import NavigationBar from "./components/NavigationBar/NavigationBar";
import popularMoviesData from "./assets/data/popularMoviesData";
import "./App.css";

function App() {
  let [popularMovies, setPopularMovies] = useState([]);
  const [fullMovieData, setFullMovieData] = useState([]);

  const [input, setInput] = useState("");
  const [lightMode, setLightMode] = useState(true);

  function switchMode() {
    setLightMode(!lightMode);
  }

  useEffect(() => {
    setTimeout(() => {
      setPopularMovies(popularMoviesData.items),
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
        mode={lightMode}
      />

      <MoviesCards
        popularMovies={popularMovies}
        // fetchMoreData={fetchMoreData}
      />
    </>
  );
}

export default App;
