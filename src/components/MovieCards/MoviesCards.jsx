import { useState, useEffect } from "react";
import TrailerWindow from "../TrailerWindow/TrailerWindow";
import "./MoviesCards.css";
import InfiniteScroll from "react-infinite-scroll-component";

function MoviesCards(props) {
  const [trailer, setTrailer] = useState("");
  const [isTrailerActive, setIsTrailerActive] = useState(false);

  function handleClick(id) {
    fetch(`https://imdb-api.com/en/API/Trailer/k_45o9338i/${id}`)
      .then((resposne) => resposne.json())
      .then((resposne) => setTrailer(resposne))
      .catch((err) => console.log(err));
    setIsTrailerActive(true);
  }

  function handleClickOnBlur(e) {
    e.target.className === "blur-background" ? setIsTrailerActive(false) : null;
    console.log(e.target);
  }

  const movieItems = props.popularMovies.map((movie) => {
    return (
      //     <>
      <div className={"card"+ props.mode?"darkMode":""} key={movie.id}>
        <div className="movie-poster-container">
          <img src={movie.image} className="movie-poster" />
        </div>
        <div className="movie-info-container">
          <span className="imdbRatingNumber">{movie.imDbRating}</span>

          <i className="fa-solid fa-star fa-spin star" />

          <h2 className="movie-title">{movie.title}</h2>

          <button
            className="watch-trailer-button"
            onClick={() => handleClick(movie.id)}
          >
            Watch Trailer
          </button>
        </div>
      </div>
    );
  });

  return (
    <>
      {isTrailerActive ? (
        <TrailerWindow
          trailer={trailer}
          handleClickOnBlur={handleClickOnBlur}
        />
      ) : null}
      {/* <InfiniteScroll */}
      {/* dataLength={props.popularMovies.length}
        next={props.fetchMoreData}
        hasMore={true}
        loader={<h4>Loading...</h4>}
        endMessage={
          <p style={{ textAlign: "center" }}>
            <b>Yay! You have seen it all</b>
          </p>
        } */}
      {/* > */}
      <ul className="container">{movieItems}</ul>
      {/* </InfiniteScroll> */}
    </>
  );
}

export default MoviesCards;
