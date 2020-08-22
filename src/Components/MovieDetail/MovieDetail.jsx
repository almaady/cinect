import React, {useState, useEffect} from "react";
import {number, string, func} from "prop-types";
import styles from "./MovieDetail.module.css"
import {classes} from "../../utils/format";


const MovieDetail = ({movie}) => {

  return (
      <div className={styles.mainContainer}>
        <span className={styles.status}>{movie.status}</span>
        <img className={classes(styles.posterImage)} src={`http://image.tmdb.org/t/p/original/${movie.poster_path}` } />

        <div className={styles.contentContainer}>
          <div className={styles.titleContainer}>
          <div className={styles.title}><h1>{movie.title}</h1>
          <span className={styles.rate}>
           ❤️
            <p>{movie.vote_average}</p>
             </span>
          </div>
          <p>{movie.tagline}</p>
          </div>
          <div className={styles.summary}>
          <p>{movie.overview}</p>
          </div>
          <div className={styles.specs}>
            <p>{movie.runtime} min </p>
            {""}
            |{""}
            <p> {movie.release_date}</p>
          </div>


          <button
          className={styles.addButton}
          >
            Add to Watch List
          </button>
        </div>


      </div>
  );
};
MovieDetail.propTypes = {
  movie: string
};
MovieDetail.defaultProps = {};
export default MovieDetail;
