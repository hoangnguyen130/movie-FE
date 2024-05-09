import classNames from "classnames/bind";
import styles from './Slider.module.scss'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlay } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";


const cx = classNames.bind(styles)

let slug = ''

function Review({data , baseUrl}) {
    const imgSrc = `${baseUrl}${data.thumb_url}`
    const handlePlay = () => {
        slug = data.slug
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
                    <div className={cx('name')}>
                        <div className={cx('vn-name')}>
                            <span>{data.name}</span>
                        </div>
                        <div className={cx('origin-name')}>
                            <span>{data.origin_name}</span>
                        </div>
                    </div>
                </div>
            </div>
    );
}

export { Review, slug };