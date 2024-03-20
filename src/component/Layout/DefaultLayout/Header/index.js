import classNames from 'classnames/bind';

import styles from './Header.module.scss'
import Menu from '../../Popper/Menu';
import logo from '~/assets/img/logo-rvbg.png'
import Search from '../../HeaderSearch/Search';

const cx = classNames.bind(styles)
const currentUser = true 


function Header() {
  

    return <header className={cx('wrapper')}>
        <div className={cx('content')}>
            <div className={cx('logo')}>
            <img
            src={logo}
            alt="logo movie"/>
            </div>
            <div className={cx('header-list')} >
                <ul>
                    <li className=''>Home</li>
                    <li className=''>Cartoon</li>
                    <li className=''>Movie</li>
                    <li className=''>Most Popular</li>
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
                <button className={cx('login-btn')}>Sign in</button>
            </div>
            )}
        </div>
    </header>
}
export default Header;