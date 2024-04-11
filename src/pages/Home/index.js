import Header from "~/component/Layout/DefaultLayout/Header";
import Trailer from "~/component/Layout/DefaultLayout/Trailer";
import Slider from "~/component/Layout/DefaultLayout/Slider";
import Footer from "~/component/Layout/DefaultLayout/Footer";


import classNames from "classnames/bind";
import styles from './Home.module.scss'

const cx = classNames.bind(styles);


function Home() {
    return (
        <div className={cx('wrapper')}>
            <Header/>
            <div className={cx('container')}>
                <Trailer/>
                <Slider/>
            </div>
            <Footer/>
        </div>
    )
}

export default Home;