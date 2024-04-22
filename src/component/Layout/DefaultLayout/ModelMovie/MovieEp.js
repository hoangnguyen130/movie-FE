/* eslint-disable jsx-a11y/anchor-is-valid */
import classNames from "classnames/bind";
import styles from './ModelMovie.module.scss'

const cx = classNames.bind(styles)


function Ep(data) {
    return ( 
        <ul className={cx("ep")}>
            <li>
                {data.data.server_data.map((e, i) => (
                    <button className={cx('ep-button')} key={i}>{i + 1}</button>
                ))}
            </li>
        </ul>
     );
}

export default Ep;