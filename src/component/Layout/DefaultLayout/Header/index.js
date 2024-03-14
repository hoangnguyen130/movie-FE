import classNames from 'classnames/bind';
import styles from './Header.module.scss'

const cx = classNames.bind(styles)

function Header() {
    return <header className={cx('wrapper')}>
        <div className={cx('content')}>
            <div className={cx('logo')}>
                logo
            </div>
            <ul className={cx('header-list')}>
                <li className=''>Home Page</li>
                <li className=''>Cartoon</li>
                <li className=''>Movie</li>
                <li className=''>Most Popular</li>
            </ul>
            <div className='search-wrapper'>
                <input type='text' placeholder='Search movie...' spellCheck={false}></input>
                <button>
                    {/*clear*/}
                </button>
                <button>
                    {/*loading*/}
                </button>
                <button>
                    {/*search*/}
                </button>
            </div>
        </div>
    </header>
}
export default Header;