import classNames from "classnames/bind";
import styles from './Content.module.scss';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleRight } from "@fortawesome/free-solid-svg-icons";



const cx = classNames.bind(styles)

function Content() {
    return <body className={cx('wrapper-content')}>
        <div className={cx('list-title')}>
            <h2 className={cx('text-title')}>List title</h2>
            <p className={cx('see-all')}>See all
                <FontAwesomeIcon className={cx('title-icon')} icon={faAngleRight}/>
            </p>

        </div>
        <div className={cx('list-movie')}>
            <img
                className={cx('movie-img')}
                src="https://th.bing.com/th/id/R.c316d0c26208023aef3ffa0e9d233387?rik=2zXfqg8t6OduOg&pid=ImgRaw&r=0"
                alt="movie-img"
            />
        </div>
    </body>
}

export default Content;