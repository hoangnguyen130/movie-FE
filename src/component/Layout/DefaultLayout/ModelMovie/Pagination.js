import classNames from "classnames/bind";
import styles from './ModelMovie.module.scss'

const cx = classNames.bind(styles)


function Pagination(data) {
    console.log(data.data.server_data)
    return ( 
        <div className={cx("pagination")}>
            {data.data.server_data.map((e, i) => (
                <a key={i} href="#">{i + 1}</a>
            ))}
        </div>
     );
}

export default Pagination;