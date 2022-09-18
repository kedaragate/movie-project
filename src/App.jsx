import { useState, useEffect } from "react";
import MoviesCards from "./components/MovieCards/MoviesCards";
import NavigationBar from "./components/NavigationBar/NavigationBar";
import popularMoviesData from "./assets/data/popularMoviesData";
import "./App.css";

function App() {
  let [popularMovies, setPopularMovies] = useState([]);
  const [fullMovieData, setFullMovieData] = useState([]);

  const [input, setInput] = useState("");

  useEffect(() => {
    setTimeout(() => {
      setPopularMovies(popularMoviesData.items),
        setFullMovieData(popularMoviesData.items);
    }, 1000);
  }, []);

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
      <NavigationBar value={input} onChange={searchFieldOnChange} />

      <MoviesCards popularMovies={popularMovies} />
    </>
  );
}

export default App;
