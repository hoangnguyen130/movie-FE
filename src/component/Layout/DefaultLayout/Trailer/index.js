/* eslint-disable no-unused-vars */
import classNames from "classnames/bind";
import styles from './Trailer.module.scss';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlay } from "@fortawesome/free-solid-svg-icons";
import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import img from '~/assets/img/queen-of-tears.jpg'

const cx = classNames.bind(styles);

function Trailer() {
    const [trailerMovie, setTrailerMovie] = useState([]);

    useEffect(() => {
        axios
            .get(`https://ophim1.com/phim/nu-hoang-nuoc-mat`)
            .then((res) => {
                setTrailerMovie(res.data.movie)
            })
    }, [])

    return <section className={cx('trailer-wrapper')}>
        <img
            className={cx('background-img')}
            src= {img}
            alt= {trailerMovie.name}
        />
        <div className={cx('movie-info')}>
            <div className={cx('movie-title')}>
                <p>{trailerMovie.name}</p>
            </div>
            <h4 className={cx('movie-describe')}>
                {trailerMovie.content}
            </h4>
            <div className={cx('button')}>
                <Link  to='/movie'>
                    <button className={cx('play')}>
                        <FontAwesomeIcon className={cx('play-icon')} icon={faPlay}/>
                        <span className={cx('play-text')}>Play</span>
                    </button>
                </Link>
            </div>
        </div>
    </section>
}

export default Trailer;