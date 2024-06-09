import classNames from "classnames/bind";
import styles from './Slider.module.scss';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleRight } from "@fortawesome/free-solid-svg-icons";
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { Review } from './Review'
import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const cx = classNames.bind(styles)

function MovieSlider({data}) {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 5,
        slidesToScroll: 1,
        initialSlide: 0,
        responsive: [
        {
            breakpoint: 1025,
            settings: {
            slidesToShow: 3,
            slidesToScroll: 1,
            infinite: true,
            dots: true
            }
        },
        {
            breakpoint: 769,
            settings: {
            slidesToShow: 2.5,
            slidesToScroll: 1,
            initialSlide: 2
            }
        },
        {
            breakpoint: 577,
            settings: {
            slidesToShow: 1.5,
            slidesToScroll: 1
            }
        },
        {
            breakpoint: 481,
            settings: {
            slidesToShow: 1.1,
            slidesToScroll: 1
            }
        },
        {
            breakpoint: 420,
            settings: {
            slidesToShow: 1,
            slidesToScroll: 1
            }
        }
        ]
    }
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
    return <section className={cx('wrapper-content')}>
        <div className={cx('list-title')}>
            <h2 className={cx('text-title')}>{data.pageTitle}</h2>
            <Link to={`/${data.pageSlug}`}>
                <p className={cx('see-all')}>
                    Xem tất cả
                    <FontAwesomeIcon className={cx('title-icon')} icon={faAngleRight}/>
                </p>
            </Link>
        </div>
            <div className={cx('list-movie')}>
                <Slider {...settings}> 
                    {listMovie.map((item) => (
                        <Review key={item._id} data={item} baseUrl={baseUrl}/>
                    ))}
                </Slider>
            </div>
    </section>
}

export default MovieSlider;