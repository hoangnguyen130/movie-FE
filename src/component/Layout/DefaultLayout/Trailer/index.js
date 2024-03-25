import classNames from "classnames/bind";
import styles from './Trailer.module.scss';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInfo, faPlay } from "@fortawesome/free-solid-svg-icons";



function Trailer() {
    
    const cx = classNames.bind(styles);
        return <section className={cx('trailer-wrapper')}>
            <img
                className={cx('background-img')}
                src="https://th.bing.com/th/id/R.c316d0c26208023aef3ffa0e9d233387?rik=2zXfqg8t6OduOg&pid=ImgRaw&r=0"
                alt="background-img"
            />
            <div className={cx('movie-info')}>
                <div className={cx('movie-title')}>
                    <p>Money Heist</p>
                </div>
                <h4 className={cx('movie-describe')}>
                    An unusual group of robbers attempt to carry out the most perfect robbery in Spanish history - stealing 2.4 billion euros from the Royal Mint of Spain.
                </h4>
                <div className={cx('button')}>
                    <button className={cx('play')}>
                        <FontAwesomeIcon className={cx('play-icon')} icon={faPlay}/>
                        <span className={cx('play-text')}>Play</span>
                    </button>
                    <button className={cx('more-info')}>
                        <FontAwesomeIcon className={cx('more-icon')} icon={faInfo}/>
                        <span className={cx('more-text')}>More information</span>
                    </button>
                </div>
            </div>
        </section>
    }

export default Trailer;