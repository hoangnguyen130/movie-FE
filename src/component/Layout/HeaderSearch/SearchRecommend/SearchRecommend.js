import classNames from "classnames/bind";


const cx = classNames.bind();

function SeachRecommend({children}) {
    return ( 
        // {children.title}
        <p className={cx('movie-name')}>
            Movie name
        </p>
     );
};

export default SeachRecommend;