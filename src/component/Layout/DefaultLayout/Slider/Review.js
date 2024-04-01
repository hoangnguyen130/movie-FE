import classNames from "classnames/bind";
import styles from './Slider.module.scss'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlay } from "@fortawesome/free-solid-svg-icons";
import { baseImageUrl } from "~/apiConfiguration/api";


const cx = classNames.bind(styles)

function Review({data}) {
    const imgSrc = `${baseImageUrl}${data.poster_url}`
    return ( 
        <div className={cx('single-movie')}>
                <div className={cx('movie-img')}>
                    <img
                        src= {imgSrc}
                        alt= {data.name}
                    />
                </div>
                <div className={cx('overlay')}></div>
                <div className={cx('single-movie-content')}>
                    <button className={cx('play')}>
                        <FontAwesomeIcon className={cx('play-icon')} icon={faPlay}/>
                    </button>
                    <a href="/movie" className={cx('more-info')}>
                        More information
                    </a>
                    {/* <span className={cx('rate')}>Rate:{data.vote_average}</span> */}
                </div>
            </div>
    );
}

export default Review;