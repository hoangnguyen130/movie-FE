import classNames from "classnames/bind";
import styles from './Slider.module.scss';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleRight } from "@fortawesome/free-solid-svg-icons";

import { Review } from './Review'
import axios from "axios";
import { useEffect, useState } from "react";

const cx = classNames.bind(styles)

function Slider({data}) {
    const [trendingMovie, setTrendingMovie] = useState([]);
    console.log(data)
    useEffect(() => {
        axios
            .get(`https://ophim1.com/danh-sach/phim-moi-cap-nhat`,
            {
                params: {
                    page: data.page
                }
            })
            .then((res) => {
                setTrendingMovie(res.data.items);
            })

    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])
    return <section className={cx('wrapper-content')}>
        <div className={cx('list-title')}>
            <h2 className={cx('text-title')}>{data.title}</h2>
            <p className={cx('see-all')}>
                Xem tất cả
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