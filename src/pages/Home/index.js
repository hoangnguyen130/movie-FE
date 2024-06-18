import Header from "~/component/Layout/DefaultLayout/Header";
import { FeaturedMovie } from "~/component/Layout/DefaultLayout/FeaturedMovie";
import Slider from "~/component/Layout/DefaultLayout/Slider";
import Footer from "~/component/Layout/DefaultLayout/Footer";


import classNames from "classnames/bind";
import styles from './Home.module.scss'

const cx = classNames.bind(styles);


function Home() {
    const datas = [
        {
            pageTitle: 'Phim mới cập nhật',
            page: 1,
            pageSlug: 'phim-moi-cap-nhat'
        },
        {
            pageTitle: 'Phim đề cử',
            page: 2,
            pageSlug: 'phim-hot'
        },
        {
            pageTitle: 'Series',
            page: 3,
            pageSlug: 'phim-chieu-rap'
        }
    ]
    return (
        <div className={cx('wrapper')}>
            <Header/>
            <div className={cx('container')}>
                <FeaturedMovie/>
                {datas.map((data, i) => (
                    <Slider key={i} data={data}/>
                ))
                }
            </div>
            <Footer/>
        </div>
    )
}

export default Home;