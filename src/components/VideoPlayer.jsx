import { useState } from "react";

function VideoPlayer({ src, handleClick }) {
    const [loading, setLoading] = useState(true);

    const handleVideoLoad = () => {
        setLoading(false);
    };

    return (
        <div className="best-moments">
            <span className="best-moments__close-icon" onClick={handleClick}>
                <i className="ri-close-large-fill"></i>
            </span>

            <div className="best-moments__box">
                {loading && (
                    <div className="loader">
                        The video is loading, please wait...
                    </div>
                )}
                <iframe
                    className="best-moment"
                    src={src}
                    title="YouTube video player"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    referrerPolicy="strict-origin-when-cross-origin"
                    allowFullScreen
                    onLoad={handleVideoLoad}
                    style={{ display: loading ? "none" : "block" }}
                ></iframe>
            </div>
        </div>
    );
}

export default VideoPlayer;
