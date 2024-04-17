/* eslint-disable no-unused-vars */
import classNames from "classnames/bind";
import styles from './Trailer.module.scss';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlay } from "@fortawesome/free-solid-svg-icons";
import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { apiUrl } from "~/apiConfiguration/api";


const cx = classNames.bind(styles);

function Trailer() {
    const [trailerMovie, setTrailerMovie] = useState([]);
    const [slug, setSlug] = useState('nu-hoang-nuoc-mat')

    // all movie
    useEffect(() => {
        axios
            .get(apiUrl)
            .then((res) => {
                // setSlug(res.data.items.slug)
                return res.data.items
            })
    },[])
    //one movie
    useEffect(() => {
        axios
            .get(`https://ophim1.com/phim/${slug}`)
            // {
            //     params: {
            //         '': slug
            //     }
            // })
            .then((res) => {
                setTrailerMovie(res.data.movie)
            })
    }, [slug])

    return <section className={cx('trailer-wrapper')}>
        <img
            className={cx('background-img')}
            src= {trailerMovie.poster_url}
            alt= {trailerMovie.name}
        />
        {/* <iframe width="100%" height="740" 
            src={trailerMovie.trailer_url} 
            title="YouTube video player" 
            frameborder="0"
            controls = '0'
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
            referrerpolicy="strict-origin-when-cross-origin" 
            allowfullscreen>
        </iframe> */}
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
                {/* <button className={cx('more-info')}>
                    <FontAwesomeIcon className={cx('more-icon')} icon={faInfo}/>
                    <span className={cx('more-text')}>More information</span>
                </button> */}
            </div>
        </div>
    </section>
}

export default Trailer;