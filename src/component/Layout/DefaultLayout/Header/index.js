import { useEffect, useState } from 'react';
import classNames from 'classnames/bind';
import Tippy from '@tippyjs/react/headless';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleXmark, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';

import styles from './Header.module.scss'
import { Wrapper as PopperWrapper } from '../../Popper';
import {default as MovieName} from '~/component/SearchRecommend';

const cx = classNames.bind(styles)

function Header() {
    const [searchResult, setSearchResult] = useState([])

    useEffect(() =>{
        setTimeout(() => {
            setSearchResult([]);
        }, 0);
    })

    return <header className={cx('wrapper')}>
        <div className={cx('content')}>
            <div className={cx('logo')}>
            <img
            src='https://voodooneon.com/cdn/shop/files/cinema-red.jpg?v=1699936405&width=1946'
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
            <Tippy
                interactive
                visible={searchResult.length > 0}
                render = {attrs => (
                    <div className={cx('recommend-box')} tabIndex='-1' {...attrs}>
                        <PopperWrapper><MovieName/></PopperWrapper>
                        <PopperWrapper><MovieName/></PopperWrapper>
                        <PopperWrapper><MovieName/></PopperWrapper>                       
                    </div>
                )}
            >
                <div className={cx('search')}>
                    <input className={cx('search-input')} type='text' placeholder='Search movie...' spellCheck={false}></input>
                    <button className={cx('clear')}>
                        <FontAwesomeIcon icon={faCircleXmark}/>
                    </button>
                    <button className={cx('search-btn')}>
                        <FontAwesomeIcon icon={faMagnifyingGlass}/>
                    </button>
                </div>
            </Tippy>
        </div>
    </header>
}
export default Header;