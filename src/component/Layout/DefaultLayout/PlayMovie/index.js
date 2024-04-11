import { useState, useEffect } from "react";
import axios from "axios";


import Video from "./Video";
import classNames from "classnames/bind";
import styles from './PlayMovie.module.scss';

const cx = classNames.bind(styles);



function PlayMovie() {
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
    return <section>
            <div classNames={cx('play-movie')}>
                {
                    movie.map((item, index) => (
                        <Video key={index} data={item}/>
                    ))
                }
            </div>
    </section>
    
}
export default PlayMovie;