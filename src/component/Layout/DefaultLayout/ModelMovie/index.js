import { useState, useEffect } from "react";
import axios from "axios";

import Trailer from "../Trailer";
import Pagination from "./Pagination";

import classNames from "classnames/bind";
import styles from './ModelMovie.module.scss'
import Footer from "../Footer";

const cx = classNames.bind(styles)


function ModelMovie() {
    const [movie, setMovie] = useState([]);
    useEffect(() => {
        axios
            .get('https://ophim1.com/phim/nu-hoang-nuoc-mat',
            {
                params: {
                }
            })
            .then((res) => {
                setMovie(res.data.episodes)
            })
    }, [])
    return <section className={cx('model-wrapper')}>
            <Trailer/>
            <div className={cx('list-exp')}>
                <span className={cx('text-list-exp')}>Danh sách tập</span>
                {movie.map((item, index) => (
                    <Pagination key={index} data={item}/>
                ))}
            </div>
            <Footer/>
        </section>
        
}

export default ModelMovie;