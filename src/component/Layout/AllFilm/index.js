import axios from "axios";
import { useEffect, useState } from "react";


import classNames from "classnames/bind";
import styles from './AllFilm.module.scss'
import { Review } from "../DefaultLayout/Slider/Review";
import Footer from "../DefaultLayout/Footer";


const cx = classNames.bind(styles)


function ContentLayout({data}) {
    const [listMovie, setListMovie] = useState([]);
    const [baseUrl, setBaseUrl] = useState('')
    useEffect(() => {
        axios
            .get(`https://ophim1.com/danh-sach/phim-moi-cap-nhat`,
            {
                params: {
                    page: data.page
                }
            })
            .then((res) => {
                setListMovie(res.data.items);
                setBaseUrl(res.data.pathImage)
            })

    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])
    return ( <div className={cx('wrapper')}>
        <h2 className={cx('page-title')}>{data.pageTitle}</h2>
        <div className={cx('content')}>
            {listMovie.map((item) => (
                <div className={cx('single-content')}>
                    <Review data={item} baseUrl={baseUrl}/>
                </div>
            ))}
        </div>
        <Footer/>
    </div> );
}

export default ContentLayout;