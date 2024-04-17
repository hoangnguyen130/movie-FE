import classNames from "classnames/bind";
import styles from './Slider.module.scss'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlay } from "@fortawesome/free-solid-svg-icons";
import { baseImageUrl } from "~/apiConfiguration/api";
import { Link } from "react-router-dom";
import { useState } from "react";


const cx = classNames.bind(styles)

function Review({data}) {
    const [slug, setSlug] = useState('')
    const imgSrc = `${baseImageUrl}${data.poster_url}`
    // console.log(data.slug)
    const handlePlay = () => {
        setSlug(data.slug)
        // console.log(slug)
    }
    // console.log(data)
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
                        <Link to='/movie'>
                            <FontAwesomeIcon className={cx('play-icon')} icon={faPlay}/>
                        </Link>
                    </button>
                    <a href="/movie" className={cx('more-info')}>
                        More information
                    </a>
                    {/* <span className={cx('rate')}>Rate:{data.vote_average}</span> */}
                </div>
            </div>
    );
}

export { Review } ;