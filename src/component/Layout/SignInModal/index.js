import classNames from "classnames/bind";
import styles from './SignInModal.module.scss'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faFacebook } from "@fortawesome/free-brands-svg-icons";
import video from '~/assets/video/arcanine-and-oddish.3840x2160.mp4'
import { useEffect, useState } from "react";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { Link, useNavigate } from "react-router-dom";

import { GoogleLogin } from '@react-oauth/google';
import { jwtDecode } from "jwt-decode";
// import axios from "axios";

const cx = classNames.bind(styles)

// let registerForm = false

function SignInModal() {

    const navigate = useNavigate();

    const initValue = {
        name: '',
        email: '',
        password: '',
        confirmPassword: ''
    }
    const initLoginValue = {
        email: '',
        password: ''
    }
    const [registerForm, setRegisterForm] = useState(false)

    const [formValue, setFormValue] = useState(initValue)
    const [formLoginValue, setFormLoginValue] = useState(initLoginValue)

    // const [user, setUser] = useState({})

    // console.log(user)
    // useEffect(() => {
    //     axios
    //         .post(`http://localhost:3001/v1/auth/register`, formValue)
    //         .then((res) => {
    //             setUser(res)
    //         })
    // }, [formValue])

    const handleRegister = () => {
        setRegisterForm(true)
    }
    const handleShowSignUp = () => {
        setRegisterForm(false)
    }
    const handleChangeRegister = (event) => {
        const { value , name} = event.target
        setFormValue({
            ...formValue,
            [name]: value
        })
    }
    const handleChangeLogin = (event) => {
        const { value , name} = event.target
        setFormLoginValue({
            ...formLoginValue,
            [name]: value
        })
    }
    const handleSubmit = (event) => {
        event.preventDefault()
        console.log(formValue)
    }
    const handleSubmitLogin = (event) => {
        event.preventDefault()
        console.log(formLoginValue)
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
            <form onSubmit={handleSubmit}>
                <div className={cx('input')}>
                    <input 
                        className={cx('email')} 
                        placeholder='Tên người dùng' 
                        name="name"
                        type="text" 
                        value={formValue.name}
                        onChange={handleChangeRegister}
                    />
                    <input
                        className={cx('email')} 
                        placeholder='Email'
                        name="email"
                        type="email" 
                        value={formValue.email}
                        onChange={handleChangeRegister}
                    />
                    <input 
                        className={cx('password')} 
                        placeholder='Mật khẩu'
                        name="password"
                        type="password" 
                        value={formValue.password}
                        onChange={handleChangeRegister}
                    />
                    <input 
                        className={cx('password')} 
                        placeholder='Nhập lại mật khẩu'
                        name="confirmPassword"
                        type="password" 
                        value={formValue.confirmPassword}
                        onChange={handleChangeRegister}
                    />
                </div>
                <button className={cx('login-button')} type="submit">Đăng kí</button>
            </form>
            <div className={cx('list')}>
                <span>
                    <GoogleLogin
                        onSuccess={credentialResponse => {
                            const decoded = jwtDecode(credentialResponse?.credential);
                            console.log(decoded);
                            localStorage.setItem('token', decoded.jti)
                            navigate('/')
                        }}
                        onError={() => {
                            console.log('Login Failed');
                        }}
                        />
                </span>
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
                <form onSubmit={handleSubmitLogin}>
                    <div className={cx('input')}>
                        <input 
                            className={cx('email')} 
                            placeholder='Email'
                            name="email"
                            type="email" 
                            value={formLoginValue.email}
                            onChange={handleChangeLogin}
                        />
                        <input 
                            className={cx('password')} 
                            placeholder='Mật khẩu'
                            name="password"
                            type="password" 
                            value={formLoginValue.password}
                            onChange={handleChangeLogin}
                        />
                    </div>
                    <button className={cx('login-button')} type="submit">Đăng nhập</button>
                </form>
                <a href="#!" className={cx('sub-text')}>Quên mật khẩu?</a>
                <div className={cx('list')}>
                    {/* <a href="#!">
                        <FontAwesomeIcon icon={faFacebook}/>
                    </a> */}
                    <span>
                    <GoogleLogin
                        onSuccess={credentialResponse => {
                            const decoded = jwtDecode(credentialResponse?.credential);
                            console.log(decoded);
                            localStorage.setItem('token', decoded.jti)
                            navigate('/')
                        }}
                        onError={() => {
                            console.log('Login Failed');
                        }}
                        />
                </span>
                </div>
                <div className={cx('check-text')}>
                    Chưa có tài khoản?
                    <p className={cx('register-text')} onClick={handleRegister}>Đăng kí</p>
                </div>
            </div>
        </section>
}

export {SignInModal};
