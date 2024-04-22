import Video from "./Video";
import classNames from "classnames/bind";
import styles from './PlayMovie.module.scss';

const cx = classNames.bind(styles);



function PlayMovie({data, index}) {
    return <section>
            <div classNames={cx('play-movie')}>
                <Video key={index} data={data} index={index}/>
            </div>
    </section>
    
}
export default PlayMovie;