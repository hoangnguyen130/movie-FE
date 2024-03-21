import Header from "./Header";
import Trailer from "./Trailer";
import styles from "./DefaultLayout.module.scss"
import classNames from "classnames/bind";
import Content from "./Content";

const cx = classNames.bind(styles);
function DefaultLayout({ children }) {
    return ( 
        <div className={cx('wrapper')}>
            <Header/>
            <div className={cx('container')}>
                <Trailer/>
                <Content/>
                <div className={cx("content")}>
                    {children}
                </div>
            </div>
        </div>
     );
}

export default DefaultLayout;