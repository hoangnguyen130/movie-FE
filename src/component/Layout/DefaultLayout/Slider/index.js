import classNames from "classnames/bind";
import styles from './Slider.module.scss';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleRight } from "@fortawesome/free-solid-svg-icons";

import { Review } from './Review'
import axios from "axios";
import { useEffect, useState } from "react";

const cx = classNames.bind(styles)

function Slider() {
    const [trendingMovie, setTrendingMovie] = useState([]);

    useEffect(() => {
        axios
            .get(`https://ophim1.com/danh-sach/phim-moi-cap-nhat`,
            {
                params: {
                    page: 1
                }
            })
            .then((res) => {
                setTrendingMovie(res.data.items);
            })

    }, [])
    return <section className={cx('wrapper-content')}>
        <div className={cx('list-title')}>
            <h2 className={cx('text-title')}>Trending</h2>
            <p className={cx('see-all')}>See all
                <FontAwesomeIcon className={cx('title-icon')} icon={faAngleRight}/>
            </p>
        </div>
        <div className={cx('list-movie')}>
            {trendingMovie.map((item) => (
                <Review key={item._id} data={item}/>
            ))}
        </div>
    </section>
}

export default Slider;