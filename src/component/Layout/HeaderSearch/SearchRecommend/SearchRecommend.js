import classNames from "classnames/bind";
import styles from './SearchRecommend.module.scss'

const cx = classNames.bind(styles);

function SeachRecommend({data}) {
    return ( 
        <p className={cx('movie-name')}>
            {data.title}
        </p>
     );
};

export default SeachRecommend;