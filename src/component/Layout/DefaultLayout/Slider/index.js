import classNames from "classnames/bind";
import styles from './Slider.module.scss';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleRight } from "@fortawesome/free-solid-svg-icons";

import { default as MovieReview } from './Review'
import axios from "axios";
import { useState } from "react";
import { api_key } from "~/apiConfiguration/api";

const cx = classNames.bind(styles)

function Slider() {
    const [trendingMovie, setTrendingMovie] = useState([]);
    axios
        .get(`https://api.themoviedb.org/3/trending/movie/week`,
        {
            params: {
                api_key: api_key,
            }
        })
        .then((res) => {
            setTrendingMovie(res.data.results);
        })
    return <section className={cx('wrapper-content')}>
        <div className={cx('list-title')}>
            <h2 className={cx('text-title')}>Trending</h2>
            <p className={cx('see-all')}>See all
                <FontAwesomeIcon className={cx('title-icon')} icon={faAngleRight}/>
            </p>
        </div>
        <div className={cx('list-movie')}>
            {trendingMovie.map((result) => (
                <MovieReview key={result.id} data={result}/>
            ))}
        </div>
    </section>
}

export default Slider;