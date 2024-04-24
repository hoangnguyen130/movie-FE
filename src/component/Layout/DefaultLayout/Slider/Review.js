import classNames from "classnames/bind";
import styles from './Slider.module.scss'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlay } from "@fortawesome/free-solid-svg-icons";
import { baseImageUrl } from "~/apiConfiguration/api";
import { Link } from "react-router-dom";


const cx = classNames.bind(styles)

let slug = ''

function Review({data}) {
    const imgSrc = `${baseImageUrl}${data.thumb_url}`
    const handlePlay = () => {
        slug = data.slug
        console.log(slug)
    }
    // const animate_string = (text, textNode) => {
    //     setInterval(() => {
    //         text = text[text.length - 1] + text.substring(0, text.length - 1);
    //         textNode.data = text;
    //     }, 500);
    // }
    // const handleRunText = () => {
    //     const elements = document.querySelector('.text-name');
    //     elements.map((e) => {
    //         if(e.data >= 20) {
    //             animate_string(e.data, e)
    //         }
    //     })
        // const textNode = element.firstChild;
        // let text = textNode.data;
        // console.log(element)
        // animate_string(text, textNode)
    // }
    //onLoad={handleRunText}
    return ( 
        <div className={cx('single-movie')}>
                <div className={cx('movie-img')}>
                    <img
                        src= {imgSrc}
                        alt= {data.name}
                    />
                </div>
                <div className={cx('overlay')}></div>
                <div className={cx('single-movie-content')}>
                    <button onClick={handlePlay} className={cx('play')}>
                        <Link to={'/movie'}>
                            <FontAwesomeIcon className={cx('play-icon')} icon={faPlay}/>
                        </Link>
                    </button>
                    {/* <Link to="/movie" className={cx('more-info')}>
                        More information
                    </Link> */}
                    <div className={cx('name')}>
                        <span className={cx('vn-name')}>{data.name}</span>
                        <span className={cx('origin-name')}>{data.origin_name}</span>
                    </div>
                </div>
            </div>
    );
}

export { Review, slug };