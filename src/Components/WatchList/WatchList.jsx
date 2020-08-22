import React, {useState, useEffect} from "react";
import {arrayOf} from "prop-types";
import styles from "./WatchList.module.css"
import MovieCard from "../MovieCard/MovieCard";
import copies from "./copies";


const WatchList = ({}) => {
  const [moviesList, setMoviesList] = useState([]);
  const [test, setTest] = useState(0)
  const [empty, setEmpty] = useState(false)
  const getPrevWatchList = async () =>{
    const  prevWatchList = await JSON.parse(localStorage.getItem("watchList"));
    try{
        if(prevWatchList.length < 1){
          setEmpty(true)
        }else{
          setMoviesList(prevWatchList)
        }
    }catch(e){
      console.warn(e)
    }

  }

  useEffect(()=>{
      getPrevWatchList();
  }, []);


  return (
      <div className={styles.mainContainer}>
        <h2>{copies.watchlist} 👀</h2>
        <div className={styles.watchListContainer}>
          {!empty ?
                moviesList.map((movie, index) => {
                  return (
                      <MovieCard
                          id={index}
                          title={movie.title}
                          key={`${movie.id}-${index}x`}
                          imageURL={movie.poster_path}
                          genres={movie.genre_ids}
                          date={movie.release_date}
                          rate={movie.vote_average}
                          movieId={movie.id}
                          watchList={moviesList}
                          removeFromWatchList={() => {
                            const movieIndex = moviesList.findIndex(m => m.id === movie.id)
                            const newList = moviesList;
                            newList.splice(movieIndex, 1);
                            setMoviesList(newList);
                            if(newList.length < 1){
                              setEmpty(true)
                            }
                            setTest(movieIndex);
                            localStorage.setItem("watchList", JSON.stringify(newList))
                            return newList

                          }}
                      />
                  )
                }) :

              <div className={styles.emptyContainer}>
                <h3>{copies.no_movies}</h3>
                <h1>😢️</h1>
                <p>{copies.back_movies}</p>
                <a  href="/" className={styles.button}>
                  {copies.go_movies}
                </a>
              </div>
          }
        </div>
      </div>
  );
};
WatchList.propTypes = {
  watchlist:arrayOf()
};
WatchList.defaultProps = {};
export default WatchList;
