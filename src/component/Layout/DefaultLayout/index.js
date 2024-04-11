import classNames from "classnames/bind";

const cx = classNames.bind();
function DefaultLayout({ children }) {
    return ( 
        <div className={cx("content")}>
            {children}
        </div>
     );
}

export default DefaultLayout;