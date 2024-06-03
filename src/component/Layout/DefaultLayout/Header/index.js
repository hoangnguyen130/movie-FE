import classNames from 'classnames/bind';

import styles from './Header.module.scss'
import Menu from '../../Popper/Menu';
import logo from '~/assets/img/logo-rvbg.png'
import Search from '../../HeaderSearch/Search';
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';

const cx = classNames.bind(styles)
const currentUser = false 


function Header() {
    const [showbg, setShowbg] = useState(false)
    useEffect(() => {
        const handlerScroll = () => {
            if (window.scrollY >= 200) {
                setShowbg(true)
            } else setShowbg(false)
        }
        window.addEventListener('scroll', handlerScroll)
        //Cleanup func
        return () => {
            window.removeEventListener('scroll', handlerScroll)
        }
    },[])
    return <header className={cx(styles.wrapper, {
                [styles.background]: showbg
            })}>
        <div className={cx('content')}>
            <div className={cx('logo')}>
            <img
            src={logo}
            alt="logo movie"/>
            </div>
            <div className={cx('header-list')} >
                <ul>
                    <li className={cx('active')}>
                        <Link to='/'>Trang chủ</Link>
                    </li>
                    <li>
                        <Link to='/'>Phim lẻ</Link>
                    </li>
                    <li>
                        <Link to='/'>Phim bộ</Link>
                    </li>
                    <li>
                        <Link to='/'>Phim hot</Link>
                    </li>
                </ul>
            </div>
            
            <Search/>
            
            {currentUser ? (
                <Menu>
                    <img 
                    className={cx('user-avt')}
                    src='https://avatars.githubusercontent.com/u/91184625?v=4'
                    alt='user avatar'/>
                </Menu>
            ) : (

            <div className={cx('login')}>
                <Link to='/sign-in'><button className={cx('login-btn')}>Sign in</button></Link>
            </div>
            )}
        </div>
    </header>
}
export default Header;