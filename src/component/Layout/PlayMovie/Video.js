import classNames from "classnames/bind";
import styles from './PlayMovie.module.scss'


const cx = classNames.bind(styles)


function Video({data, index}) {
    return ( 
        <div className={cx('video')}>
            <iframe width="100%" height="100%" 
                src={data.server_data[index].link_embed}
                title="movie video player" 
                controls = '0'
                frameBorder='0'
                allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                referrerPolicy="strict-origin-when-cross-origin" 
                allowFullScreen>
            </iframe>     
        </div>
    );
}

export default Video;