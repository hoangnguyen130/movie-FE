import { useEffect, useRef, useState } from 'react';
import axios from 'axios';
import classNames from 'classnames/bind';
import Tippy from '@tippyjs/react/headless';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleXmark, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';

import { Wrapper as PopperWrapper } from '../../Popper';
import { SearchRecommend as MovieName } from '../SearchRecommend';
import styles from './Search.module.scss';
import { useDebounce } from '~/hooks';

const cx = classNames.bind(styles);

function Search() {
    const [searchValue, setSearchValue] = useState('');
    const [searchResult, setSearchResult] = useState([]);
    const [showResult, setShowResult] = useState(true);

    const debounced = useDebounce(searchValue, 700);

    const inputRef = useRef();

    useEffect(() => {
        if ( !debounced.trim()){
            return;
        }
        axios
            // .get(`https://ophim1.com/phim/${debounced}`)


            .get(`https://api.themoviedb.org/3/search/movie`,
            {
                params: {
                    // '' : debounced
                    api_key: 'b4880373e5e7462cf3059ff7f7188e5d',
                    query: debounced
                }
            })


            .then((res) => {
                setSearchResult(res.data.results);
            });
        // eslint-disable-next-line    
        }, [debounced])
    const handleClear = () => {
        setSearchValue('');
        setSearchResult([]);
        inputRef.current.focus();
    }
    const handleHideResult = () => {
        setShowResult(false)
    }
    return (
            <Tippy
                interactive
                visible={showResult && searchResult.length > 0}
                render = {attrs => (
                    <div className={cx('recommend-box')} tabIndex='-1' {...attrs}>
                        {searchResult.map((item) => (
                            <PopperWrapper key={item._id}>
                                <MovieName key={item._id} data={item}/>  
                            </PopperWrapper>                     
                        ))}
                    </div>
                )}
                onClickOutside={handleHideResult}
            >
                <div className={cx('search')}>
                    <input
                        ref={inputRef}
                        value={searchValue}
                        className={cx('search-input')}
                        type='text'
                        placeholder='Search movie...'
                        spellCheck={false}
                        onChange={(e) => setSearchValue(e.target.value)}
                        onFocus={() => setShowResult(true)}   
                    >
                    </input>
                    {!!searchValue && (
                        <button
                            className={cx('clear')}
                            onClick={handleClear}
                        >
                            <FontAwesomeIcon icon={faCircleXmark}/>
                        </button>
                    )}
                    <button className={cx('search-btn')}>
                        <FontAwesomeIcon icon={faMagnifyingGlass}/>
                    </button>
                </div>
            </Tippy>
    );
}

export default Search;
