import classNames from "classnames/bind";
import styles from './Trailer.module.scss';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInfo, faPlay } from "@fortawesome/free-solid-svg-icons";
import axios from "axios";
import { baseImageUrl } from "~/apiConfiguration/api";
import { useEffect, useState } from "react";


const cx = classNames.bind(styles);

function Trailer() {
    const [trailerMovie, setTrailerMovie] = useState([]);

    useEffect(() => {
        axios
            .get('https://ophim1.com/danh-sach/phim-moi-cap-nhat',
            {
                params: {
                    page: 1
                }
            })
            .then((res) => {
                setTrailerMovie(res.data.items[0])
            })
    }, [])
    const imgSrc = `${baseImageUrl}${trailerMovie.poster_url}`
    return <section className={cx('trailer-wrapper')}>
        <img
            className={cx('background-img')}
            src= {imgSrc}
            alt= {trailerMovie.name}
        />
        <div className={cx('movie-info')}>
            <div className={cx('movie-title')}>
                <p>{trailerMovie.name}</p>
            </div>
            <h4 className={cx('movie-describe')}>
                {trailerMovie.origin_name}
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