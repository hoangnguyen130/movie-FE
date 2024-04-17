import { useState, useEffect } from "react";
import axios from "axios";

// import Trailer from "../Trailer";
import Ep from "./MovieEp";

import classNames from "classnames/bind";
import styles from './ModelMovie.module.scss'
import Footer from "../Footer";
import Header from "../Header";
import PlayMovie from "../PlayMovie";

const cx = classNames.bind(styles)


function ModelMovie() {
    const [movie, setMovie] = useState([]);
    const [ep, setEP] = useState(0)
    const slug = 'nu-hoang-nuoc-mat'
    useEffect(() => {
        axios
            .get(`https://ophim1.com/phim/${slug}`)
            .then((res) => {
                setMovie(res.data.episodes)
            })
    }, [slug])
    const handleChangeEp = (event) =>{
        setEP(event.target.innerText - 1)
    }
    return <section className={cx('model-wrapper')}>
            <Header/>
            <div className={cx('movie-wrapper')}>
                <PlayMovie data={movie} index={ep}/>
            </div>
            <div className={cx('list-ep')}>
                <span className={cx('text-list-ep')}>Danh sách tập</span>
                {movie.map((item, index) => (
                    <div key={index} onClick={handleChangeEp}>
                        <Ep data={item}/>
                    </div>
                ))}
            </div>
            <Footer/>
        </section>
        
}

export default ModelMovie;