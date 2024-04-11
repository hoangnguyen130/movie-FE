function Video({data}) {
    return ( 
        <div>
            {data.server_data.map((item) => (
                <iframe width="100%" height="740" 
                    src={item.link_embed} 
                    title="movie video player" 
                    frameborder="0"
                    controls = '0'
                    allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                    referrerpolicy="strict-origin-when-cross-origin" 
                    allowfullscreen>
                </iframe>
            ))}
        </div>
    );
}

export default Video;