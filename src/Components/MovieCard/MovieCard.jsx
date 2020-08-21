import React, {useState, useEffect} from "react";
import {number, string, func, arrayOf, bool} from "prop-types";
import styles from "./MovieCard.module.css"
import copies from "./copies";
import {genresIDs} from "../../utils/constants";
import Star from  "./Assets/Star"
import useObserver from "../../utils/useObserver";
import {classes} from "../../utils/format";
import placeholder from "./Assets/placeholder.png"


const MovieCard = (
    {
      movieId,
       imageURL,
       title,
       date,
       genres,
       rate,
       home,
       addToWatchList,
       watchList,
       removeFromWatchList,
        id,
        ref
    }

       ) => {

  const [status,setStatus] =  useState(false);
  const [image, setImage] = useState(imageURL)


  useEffect(()=>{
    setStatus(getStatus())
  },[watchList])

  const [observer, setElements, entries] = useObserver({
    threshold: 0.25,
    root: null
  });


  useEffect(() => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const lazyImage = entry.target;
        lazyImage.src = lazyImage.dataset.src;
        lazyImage.classList.remove("lazy");
        observer.unobserve(lazyImage);
      }
    });
  }, [entries, observer]);

  useEffect(() => {
    const images = document.querySelectorAll(".lazy");
    setElements(images);
  }, [setElements]);

  const getGenres = () =>{
    return genresIDs.filter(genre =>
       genres.indexOf(genre.id) !== -1
    )
  };

  const getStatus = ()=>{
    return watchList.some((m)=> m.id === movieId)
  }

  const getYear = () =>{
    const dateSplitted = date.split("-");
    return dateSplitted[0];
  }


  return (
      <div className={styles.mainContainer} id={id}  ref={ref}>
       <div
           className={styles.poster}
       >
         <img className={classes(styles.posterImage, "lazy")} data-src={`http://image.tmdb.org/t/p/original/${image}` } src={placeholder} />
         <div className={styles.rateContainer}>
           <div>
           <Star/>
           <p>{rate}</p>
           </div>
         </div>
       </div>
        <div className={styles.content}>
          <h3>{title}</h3>
          <div className={styles.yearContainer}>

            <p>{getYear()}</p>
            <div className={styles.buttonContainer}>
              {!home ?
                  <button
                      className={styles.removeButton}
                      onClick={() => {
                        removeFromWatchList()
                      }}
                  >
                    {copies.remove}
                  </button>:
                     status ?
                        <p>{copies.in_watch_list }</p>:
                        <button
                            className={styles.addButton}
                            onClick={()=>{
                              addToWatchList()
                            }}
                        >
                          { copies.add_watch_list}
                        </button>
                  }


            </div>
          </div>
            <div className={styles.genresContainer}>
              {getGenres().map(genre =>
                <span key={genre.id}>{genre.name} </span>
            )}</div>

        </div>
      </div>
  );
};
MovieCard.propTypes = {
  image: string,
  title: string,
  year: number,
  genres: arrayOf(number),
  rate: number,
  status: bool,
  addToWatchList: func
};
MovieCard.defaultProps = {
  removeFromWatchList: ()=>{},
  addToWatchList: () =>{},

};
export default MovieCard;
