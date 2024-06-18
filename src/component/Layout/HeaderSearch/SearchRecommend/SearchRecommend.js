import classNames from "classnames/bind";
import styles from './SearchRecommend.module.scss'
import slugify from "slugify";
import { Link } from "react-router-dom";

const cx = classNames.bind(styles);
let searchSlug = ''
function SeachRecommend({data}) {
    const handleSetSlug = () => {
    searchSlug = slugify(data.title, { lower: true })
    }
    return ( 
        <p className={cx('movie-name')} onClick={handleSetSlug}>
            <Link to={'/search-movie'}>
                {data.title}
            </Link>
        </p>
     );
};

export { SeachRecommend, searchSlug };