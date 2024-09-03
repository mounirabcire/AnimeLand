function VideoPlayer({ src, handleClick }) {
    return (
        <div className="best-moments">
            <span className="best-moments__close-icon" onClick={handleClick}>
                <i className="ri-close-large-fill"></i>
            </span>

            <div className="best-moments__box">
                <iframe
                    className="best-moment"
                    src={src}
                    title="YouTube video player"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    referrerPolicy="strict-origin-when-cross-origin"
                    allowFullScreen
                ></iframe>
            </div>
        </div>
    );
}

export default VideoPlayer;
