import { useRef } from "react";
import { useState } from "react";
import TopBattlesList from "../components/topBattlesList";

const battles = [
    {
        car1Name: "R. Zoro",
        car1Img: "./../src/assets/imgs/header-zoro2.png",
        car2Name: "King",
        car2Img: "./../src/assets/imgs/header-king.png",
    },
    {
        car1Name: "S. Goku",
        car1Img: "./../src/assets/imgs/header-goku.png",
        car2Name: "Jiren",
        car2Img: "./../src/assets/imgs/header-jiren.png",
    },
    {
        car1Name: "S. Shanks",
        car1Img: "./../src/assets/imgs/header-shanks.png",
        car2Name: "E. Kid",
        car2Img: "./../src/assets/imgs/header-kid.png",
    },
    {
        car1Name: "I. Kurosaki",
        car1Img: "./../src/assets/imgs/header-itchi.png",
        car2Name: "S. Aizen",
        car2Img: "./../src/assets/imgs/header-aizen.png",
    },
    {
        car1Name: "S. Gojo",
        car1Img: "./../src/assets/imgs/header-gojo.png",
        car2Name: "T. Fushiguro",
        car2Img: "./../src/assets/imgs/header-fushi.png",
    },
];
function Hero() {
    const [isMuted, setIsMuted] = useState(true);
    const video = useRef(null);

    function toggleSound() {
        const videoEl = video.current;
        videoEl.muted = !videoEl.muted;
        setIsMuted(videoEl.muted);
    }
    function toggleExpandVideo() {
        const videoEl = video.current;
        if (videoEl.requestFullscreen) {
            videoEl.requestFullscreen();
        } else if (videoEl.mozRequestFullScreen) {
            // Firefox
            videoEl.mozRequestFullScreen();
        } else if (videoEl.webkitRequestFullscreen) {
            // Chrome, Safari and Opera
            videoEl.webkitRequestFullscreen();
        } else if (videoEl.msRequestFullscreen) {
            // IE/Edge
            videoEl.msRequestFullscreen();
        }
    }

    return (
        <header className="header">
            <div className="header--left">
                <h1 className="heading--primary scale-step-6">
                    Legendary Anime <br /> <span>Fights</span> Await!
                </h1>

                <div className="header__top-battles">
                    <h5 className="heading--h5">Top 1v1 Battles</h5>
                    <div className="header__top-battle-box">
                        <TopBattlesList battles={battles} />

                        <span>
                            scroll down
                            <i className="ri-arrow-down-double-line"></i>
                        </span>
                    </div>
                </div>
                <div className="header--right header--right--sm">
                    <video
                        ref={video}
                        autoPlay
                        loop
                        playsInline
                        controls={false}
                        muted={isMuted}
                        className="header__video header__video--onepiece"
                    >
                        <source
                            src="./../../src/assets/vids/zoro_edit.mp4"
                            type="video/mp4"
                        />
                        Your browser is too old!
                    </video>

                    <span
                        className="header__expand-icon"
                        onClick={toggleExpandVideo}
                    >
                        <i className="ri-expand-up-down-line"></i>
                    </span>

                    <span
                        className="header__volume-up-icon"
                        onClick={toggleSound}
                    >
                        {isMuted ? (
                            <i className="ri-volume-mute-fill"></i>
                        ) : (
                            <i className="ri-volume-up-fill"></i>
                        )}
                    </span>
                </div>
                <div className="header__zoro-img-box">
                    <img
                        src="./../../src/assets/imgs/header-zoro.png"
                        alt="Zoro"
                        className="header__zoro-img"
                    />
                </div>
            </div>
            <div className="header--right header--right--lg">
                <video
                    ref={video}
                    autoPlay
                    loop
                    muted={isMuted}
                    className="header__video header__video--onepiece"
                >
                    <source
                        src="./../../src/assets/vids/zoro_edit.mp4"
                        type="video/mp4"
                    />
                    Your browser is too old!
                </video>

                <span
                    className="header__expand-icon"
                    onClick={toggleExpandVideo}
                >
                    <i className="ri-expand-up-down-line"></i>
                </span>

                <span className="header__volume-up-icon" onClick={toggleSound}>
                    {isMuted ? (
                        <i className="ri-volume-mute-fill"></i>
                    ) : (
                        <i className="ri-volume-up-fill"></i>
                    )}
                </span>
            </div>
        </header>
    );
}

export default Hero;
