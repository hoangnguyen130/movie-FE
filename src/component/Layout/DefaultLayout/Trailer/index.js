import classNames from "classnames/bind";
import styles from './Trailer.module.scss';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInfo, faPlay } from "@fortawesome/free-solid-svg-icons";
import axios from "axios";
import { api_key, baseImageBackdrop } from "~/apiConfiguration/api";
import { useState } from "react";


const cx = classNames.bind(styles);

function Trailer() {
    const [trailerMovie, setTrailerMovie] = useState([])
    axios
        .get('https://api.themoviedb.org/3/discover/movie',
        {
            params: {
                api_key: api_key
            }
        })
        .then((res) => {
            setTrailerMovie(res.data.results[0])
        })
    const imgSrc = `${baseImageBackdrop}${trailerMovie.backdrop_path}`
    return <section className={cx('trailer-wrapper')}>
        <img
            className={cx('background-img')}
            src= {imgSrc}
            alt= {trailerMovie.title}
        />
        <div className={cx('movie-info')}>
            <div className={cx('movie-title')}>
                <p>{trailerMovie.title}</p>
            </div>
            <h4 className={cx('movie-describe')}>
                {trailerMovie.overview}
            </h4>
            <div className={cx('button')}>
                <button className={cx('play')}>
                    <FontAwesomeIcon className={cx('play-icon')} icon={faPlay}/>
                    <span className={cx('play-text')}>Play</span>
                </button>
                <button className={cx('more-info')}>
                    <FontAwesomeIcon className={cx('more-icon')} icon={faInfo}/>
                    <span className={cx('more-text')}>More information</span>
                </button>
            </div>
        </div>
    </section>
}

export default Trailer;