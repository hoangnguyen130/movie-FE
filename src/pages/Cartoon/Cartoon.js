import Footer from "~/component/Layout/DefaultLayout/Footer";

import { useState, useEffect } from "react";
import axios from "axios";

import classNames from "classnames/bind";
import styles from './Cartoon.module.scss'
import { Review } from "~/component/Layout/DefaultLayout/Slider/Review";

const cx = classNames.bind(styles)

function Cartoon() {
    const [listMovie, setListMovie] = useState([]);
    // const [baseUrl, setBaseUrl] = useState('')
    useEffect(() => {
        axios
            .get(`http://localhost:3001/v1/types`)
            .then((res) => {
                setListMovie(res.data);
                // setBaseUrl(res.data.pathImage)
            })

    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])
    console.log(listMovie)
    return ( <div className={cx('wrapper')}>
        <h2 className={cx('page-title')}>Phim hoạt hình</h2>
        <div className={cx('content')}>
            {/* {listMovie.map((item, i) => ( */}
                {/* // <div key={i} className={cx('single-content')}> */}
                    <Review data={listMovie} />
                {/* </div> */}
            {/* ))} */}
        </div>
        <Footer/>
    </div> );
}

export default Cartoon;