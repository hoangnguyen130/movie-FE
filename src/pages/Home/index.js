import Header from "~/component/Layout/DefaultLayout/Header";
import { Trailer } from "~/component/Layout/DefaultLayout/Trailer";
import Slider from "~/component/Layout/DefaultLayout/Slider";
import Footer from "~/component/Layout/DefaultLayout/Footer";


import classNames from "classnames/bind";
import styles from './Home.module.scss'

const cx = classNames.bind(styles);


function Home() {
    const datas = [
        {
            title: 'Phim mới cập nhật',
            page: 1
        },
        {
            title: 'Phim hot',
            page: 2
        },
        {
            title: 'Phim hot 2',
            page: 3
        }
    ]
    return (
        <div className={cx('wrapper')}>
            <Header/>
            <div className={cx('container')}>
                <Trailer/>
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