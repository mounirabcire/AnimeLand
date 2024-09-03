import { useState } from "react";
import VideoPlayer from "../components/VideoPlayer";

const battleBoxes = [
    {
        id: 1,
        imgSrc: "/assets/imgs/zoro-king.png",
        altText: "Zoro vs King",
        animeName: "ONE PIECE",
        battleName: "R. Zoro vs King",
        epicWords: "I shall become the king of the hell.",
        src: "https://www.youtube.com/embed/1Y7ZIN51RAE?si=dw5GAJHmcjViRfY_",
    },
    {
        id: 2,
        imgSrc: "/assets/imgs/goku-jiren.png",
        altText: "Goku vs Jiren",
        animeName: "DB SUPER",
        battleName: "S. Goku vs Jiren",
        epicWords: "I shall become the king of the hell.",
        src: "https://www.youtube.com/embed/lZ2EXxBMkvo?si=f3O74_-iquldGrqZ",
    },
    {
        id: 3,
        imgSrc: "/assets/imgs/ichi-aizen.png",
        altText: "Kurosaki vs Aizen",
        animeName: "BLEACH",
        battleName: "I. Kurosaki vs S. Aizen",
        epicWords: "You wanted to see what a human can do? I'll show you.",
        src: "https://www.youtube.com/embed/inV6d4Cdu6Y?si=Fg2MKt3MwWlMjv6Z",
    },
    {
        id: 4,
        imgSrc: "/assets/imgs/sukuna-mahoraga.png",
        altText: "Sukuna vs Mahoraga",
        animeName: "JUJUTSU KAISEN",
        battleName: "Sukuna vs Mahoraga",
        epicWords: "Know your place, fool.",
        src: "https://www.youtube.com/embed/vyYYTCxDXaA?si=poFuPTwMWIq5JIuT",
    },
    {
        id: 6,
        imgSrc: "/assets/imgs/shanks-kid.png",
        altText: "Shanks vs kid",
        animeName: "ONE PIECE",
        battleName: "S. Shanks vs E. kid",
        epicWords: "Don't mistake your ambition for strength.",
        src: "https://www.youtube.com/embed/dm-HNt7SCBw?si=QNuPLf5lZdgwTfcX",
    },
    {
        id: 7,
        imgSrc: "/assets/imgs/yhwach-yamamoto.png",
        altText: "Yhwach vs Yamamoto",
        animeName: "BLEACH",
        battleName: "Yhwach vs Yamamoto",
        epicWords: "I will burn you and your ambitions to ashes!",
        src: "https://www.youtube.com/embed/4LsvwnEsvJU?si=3USobw_-iWjpAK8l",
    },
    {
        id: 8,
        imgSrc: "/assets/imgs/shutara-quincy.png",
        altText: "Shutara vs Quincy",
        animeName: "BLEACH",
        battleName: "S. Shutara vs Quincy",
        epicWords: "You are nothing but a speck of dust in the grand design.",
        src: "https://www.youtube.com/embed/j7UOJ_ky_80?si=sYSdwMNVFXJ1fdiB",
    },
    {
        id: 9,
        imgSrc: "/assets/imgs/astayami-dante.png",
        altText: "Goku vs Jiren",
        animeName: "BLACK CLOVER",
        battleName: "Asta & Yami vs Dante",
        epicWords: "Surpass your limits. Right here, right now.",
        src: "https://www.youtube.com/embed/kqZh1sghuaM?si=d6py5_mVZBMA-Z-W",
    },
];

function HeadToHeadBattles() {
    const [clickedVideo, setClickedVideo] = useState(null);

    return (
        <div className="battles__container">
            {battleBoxes.map(
                (
                    {
                        id,
                        imgSrc,
                        altText,
                        animeName,
                        battleName,
                        epicWords,
                        src,
                    },
                    i
                ) => (
                    <>
                        <div key={id} className="battle__box">
                            <div className="battle__img-box">
                                <img
                                    src={imgSrc}
                                    alt={altText}
                                    className="battle__img"
                                />
                            </div>
                            <h5 className="battle__anime-name">{animeName}</h5>
                            <h3 className="battle__name scale-step-4">
                                {battleName}
                            </h3>
                            <div className="battle__epic-words">
                                <h6>EPIC WORDS</h6>
                                <p>“{epicWords}”</p>
                            </div>
                            <button
                                onClick={() => setClickedVideo(id)}
                                className="btn btn--primary battle__btn"
                            >
                                Watch Now
                            </button>
                        </div>
                        {clickedVideo === id && (
                            <VideoPlayer
                                handleClick={() => setClickedVideo(null)}
                                src={src}
                            />
                        )}
                    </>
                )
            )}
        </div>
    );
}

export default HeadToHeadBattles;
