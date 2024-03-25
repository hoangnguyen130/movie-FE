import classNames from "classnames/bind";
import styles from './Slider.module.scss';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleRight } from "@fortawesome/free-solid-svg-icons";

import { default as MovieReview } from './Review'

const cx = classNames.bind(styles)

function Slider() {
    return <section className={cx('wrapper-content')}>
        <div className={cx('list-title')}>
            <h2 className={cx('text-title')}>List title</h2>
            <p className={cx('see-all')}>See all
                <FontAwesomeIcon className={cx('title-icon')} icon={faAngleRight}/>
            </p>

        </div>
        <div className={cx('list-movie')}>
            <MovieReview/>
            <MovieReview/>
            <MovieReview/>
            <MovieReview/>
            <MovieReview/>
            <MovieReview/>
            <MovieReview/>
            <MovieReview/>
        </div>
    </section>
}

export default Slider;