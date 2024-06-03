import classNames from "classnames/bind";
import styles from './SignInModal.module.scss'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faGoogle } from "@fortawesome/free-brands-svg-icons";
import video from '~/assets/video/arcanine-and-oddish.3840x2160.mp4'
import { useState } from "react";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

const cx = classNames.bind(styles)

// let registerForm = false

function SignInModal() {
    const [registerForm, setRegisterForm] = useState(false)
    const handleRegister = () => {
        setRegisterForm(true)
    }
    const handleShowSignUp = () => {
        setRegisterForm(false)
    }
    if (registerForm) {
        return  <section className={cx('modal-wrapper')}>
        <button className={cx('close-button')}>
            <Link to={'/'}>
                <FontAwesomeIcon icon={faXmark}/>
            </Link>
        </button>
        <video src={video} autoPlay loop/>
        <div className={cx('content-wrapper')}>
            <h2 className={cx('header-text')}>Đăng Kí</h2>
            <p className={cx('sub-text')}>Nhập thông tin của bạn!</p>
            <div className={cx('input')}>
                <input className={cx('email')} placeholder='Tên người dùng' type="text"/>
                <input className={cx('email')} placeholder='Email' type="email"/>
                <input className={cx('password')} placeholder='Mật khẩu' type="password"/>
                <input className={cx('password')} placeholder='Nhập lại mật khẩu' type="password"/>
            </div>
            {/* <a href="#!" className={cx('sub-text')}>Quên mật khẩu?</a> */}
            <button className={cx('login-button')}>Đăng kí</button>
            <div className={cx('list')}>
                <p>Đăng kí với:</p>
                <a href="#!">
                    <FontAwesomeIcon icon={faFacebook}/>
                </a>
                <a href="#!">
                    <FontAwesomeIcon icon={faGoogle}/>
                </a>
            </div>
            <div className={cx('check-text')}>
                Đã có tài khoản?
                <p className={cx('register-text')} onClick={handleShowSignUp}>Đăng nhập</p>
            </div>
        </div>
    </section>
    } else
        return  <section className={cx('modal-wrapper')}>
            <button className={cx('close-button')}>
                <Link to={'/'}>
                    <FontAwesomeIcon icon={faXmark}/>
                </Link>
            </button>
            <video src={video} autoPlay loop/>
            <div className={cx('content-wrapper')}>
                <h2 className={cx('header-text')}>Đăng nhập</h2>
                <p className={cx('sub-text')}>Nhập tài khoản và mật khẩu của bạn!</p>
                <div className={cx('input')}>
                    <input className={cx('email')} placeholder='Email' type="email"/>
                    <input className={cx('password')} placeholder='Mật khẩu' type="password"/>
                </div>
                <a href="#!" className={cx('sub-text')}>Quên mật khẩu?</a>
                <button className={cx('login-button')}>Đăng nhập</button>
                <div className={cx('list')}>
                    <a href="#!">
                        <FontAwesomeIcon icon={faFacebook}/>
                    </a>
                    <a href="#!">
                        <FontAwesomeIcon icon={faGoogle}/>
                    </a>
                </div>
                <div className={cx('check-text')}>
                    Chưa có tài khoản?
                    <p className={cx('register-text')} onClick={handleRegister}>Đăng kí</p>
                </div>
            </div>
        </section>
}

export {SignInModal};
