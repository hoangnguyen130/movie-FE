import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faInstagram, faTwitter } from "@fortawesome/free-brands-svg-icons";
import classNames from "classnames/bind";
import styles from "./Footer.module.scss"



const cx = classNames.bind(styles)

function Footer() {
    return <footer className={cx('footer-wrapper')} >
        <div className={cx('row')}>
            <div className={cx('footer-content')}>
                <ul>
                    <h5 className={cx('title')}>GET IN TOUCH</h5>
                    <li>FAQs</li>
                    <li>Give us feedback</li>
                    <li>Contact us</li>
                </ul>
            </div>
            <div className={cx('footer-content')}>
                <ul>
                    <h5 className={cx('title')}>ABOUT MOVIE</h5>
                    <li>About us</li>
                    <li>Find us</li>
                    <li>News</li>
                </ul>
            </div>
            <div className={cx('footer-content')}>
                <ul>
                    <h5 className={cx('title')}>LEGAL STUFF</h5>
                    <li>Terms & Conditions</li>
                    <li>Private policy</li>
                    <li>Cookie policy</li>
                </ul>
            </div>
            <div className={cx('footer-content')}>
                <ul>
                    <h5 className={cx('title')}>CONNECT WITH US</h5>
                    <li>
                        <a href="https://www.facebook.com/daylahoangnguyen/" target="_blank" rel="noreferrer">
                            <FontAwesomeIcon icon={faFacebook} className={cx('icon')}/>
                            Facebook
                        </a>
                    </li>
                    <li>
                        <a href="https://www.instagram.com/hoangng.135/" target="_blank" rel="noreferrer">
                            <FontAwesomeIcon icon={faInstagram} className={cx('icon')}/>
                            Instagram
                        </a>
                    </li>
                    <li>
                        <a href="https://twitter.com/HoangNguyen151" target="_blank" rel="noreferrer">
                            <FontAwesomeIcon icon={faTwitter} className={cx('icon')}/>
                            Twitter
                        </a>
                    </li>
                </ul>
            </div>
        </div>
        <div className={cx('footer-copyright')}>
            <span className={cx('text')}>2024 © Movie</span>
            <span className={cx('name')}>Hoang Nguyen Huy</span>
        </div>
    </footer>
}

export default Footer;