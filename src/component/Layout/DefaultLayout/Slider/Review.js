import classNames from "classnames/bind";
import styles from './Slider.module.scss'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlay } from "@fortawesome/free-solid-svg-icons";


const cx = classNames.bind(styles)

function Review() {
    return ( 
        <div className={cx('single-movie')}>
                <div className={cx('movie-img')}>
                    <img
                        src="https://th.bing.com/th/id/R.c316d0c26208023aef3ffa0e9d233387?rik=2zXfqg8t6OduOg&pid=ImgRaw&r=0"
                        alt="movie-img"
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
                    <span className={cx('rate')}>Rate:</span>
                </div>
            </div>
    );
}

export default Review;