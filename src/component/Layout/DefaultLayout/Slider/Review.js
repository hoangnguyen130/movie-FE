import classNames from "classnames/bind";
import styles from './Slider.module.scss'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlay } from "@fortawesome/free-solid-svg-icons";
import { baseImageUrl } from "~/apiConfiguration/api";
import { Link } from "react-router-dom";


const cx = classNames.bind(styles)

let slug = ''

function Review({data}) {
    const imgSrc = `${baseImageUrl}${data.poster_url}`
    const handlePlay = () => {
        slug = data.slug
        console.log(slug)
    }
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
                    <button onClick={handlePlay} className={cx('play')}>
                        <Link to={'/movie'}>
                            <FontAwesomeIcon className={cx('play-icon')} icon={faPlay}/>
                        </Link>
                    </button>
                    <Link to="/movie" className={cx('more-info')}>
                        More information
                    </Link>
                    {/* <span className={cx('rate')}>Rate:{data.vote_average}</span> */}
                </div>
            </div>
    );
}

export { Review, slug };