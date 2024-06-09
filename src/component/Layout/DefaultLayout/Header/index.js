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
                    <Link to={'/'}>
                        <img src={logo} alt="logo movie"/>
                    </Link>
                </div>
            <div className={cx('header-list')} >
                <ul>
                    <Link to={'/'}>
                        <li className={cx('header-home')}>Trang chủ</li>
                    </Link>
                    <Link to={'/phim-moi-cap-nhat'}>
                        <li className={cx('header-new')}>Phim mới cập nhật</li>
                    </Link>
                    <Link to='/phim-hot'>
                        <li className={cx('header-hot')}>Phim hot</li>
                    </Link>
                    <Link to='/phim-chieu-rap'>
                        <li className={cx('header-featured')}>Phim chiếu rạp</li>
                    </Link>
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