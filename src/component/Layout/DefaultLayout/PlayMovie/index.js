import Video from "./Video";
import classNames from "classnames/bind";
import styles from './PlayMovie.module.scss';

const cx = classNames.bind(styles);



function PlayMovie({data, index}) {
    console.log(data)
    // return <section>
    //         <div classNames={cx('play-movie')}>
    //             {
    //                 data.data.server_data.map((item) => (
    //                     <Video key={index} data={item} index={index}/>
    //                 ))
    //             }
    //         </div>
    // </section>
    
}
export default PlayMovie;