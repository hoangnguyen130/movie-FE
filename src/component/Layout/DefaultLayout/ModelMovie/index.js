import { useState, useEffect } from "react";
import axios from "axios";

// import Trailer from "../Trailer";
import Ep from "./MovieEp";

import classNames from "classnames/bind";
import styles from './ModelMovie.module.scss'
import Footer from "../Footer";
import Header from "../Header";
import PlayMovie from "../PlayMovie";
import { slug } from "../Slider/Review";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleRight } from "@fortawesome/free-solid-svg-icons";

const cx = classNames.bind(styles)


function ModelMovie() {
    const [movie, setMovie] = useState([]);
    const [ep, setEP] = useState(0)
    const [name, setName] = useState('')
    useEffect(() => {
        axios
            .get(`https://ophim1.com/phim/${slug}`)
            .then((res) => {
                setMovie(res.data.episodes)
                setName(res.data.movie.name)
            })
    }, [])
    const handleChangeEp = (event) =>{
        setEP(event.target.innerText - 1)
    }
    return <section className={cx('model-wrapper')}>
            <Header/>
            <ul className={cx('movie-name')}>
                <li>{name}</li>
                <li className={cx('icon')}><FontAwesomeIcon icon={faAngleRight}/></li>
                <li>{ep + 1}</li>
            </ul>
            <div className={cx('movie-wrapper')}>
                {movie.map((item) => (
                    <PlayMovie key={ep} data={item} index={ep}/>
                ))}
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