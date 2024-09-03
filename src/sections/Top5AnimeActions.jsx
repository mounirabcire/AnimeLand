import { useState } from "react";
import BestMomentsVideo from "../components/VideoPlayer";

const topAnimeActions = [
    {
        id: 1,
        name: "One Piece",
        description:
            "is an epic adventure where Monkey D. Luffy and his crew sail the vast oceans in search of the legendary treasure, the One Piece. With thrilling battles, unforgettable characters, and a quest to become the Pirate King, One Piece is a journey full of excitement, camaraderie, and the relentless pursuit of dreams!",
        videoSrc: "/assets/vids/one-piece_edit.mp4",
        imgSrc: "/assets/imgs/topanime-onepiece.jpg",
        className: "onepiece",
        bestMomentSrc:
            "https://www.youtube.com/embed/zbL4e0NTE08?si=kNAGHtRVUtEL0zyC",
    },
    {
        id: 2,
        name: "Bleach",
        description:
            "follows Ichigo Kurosaki as he becomes a Soul Reaper to battle evil spirits and protect both worlds. With intense battles and unforgettable characters, it’s a thrilling journey of honor and duty!",
        videoSrc: "/assets/vids/bleach_edit.mp4",
        imgSrc: "/assets/imgs/topanime-bleach.jpg",
        className: "bleach",
        bestMomentSrc:
            "https://www.youtube.com/embed/-kcQCLcrOls?si=cBkaCQienjZffqKy",
    },
    {
        id: 3,
        name: "Dragon Ball Super",
        description:
            "is an epic saga of power and adventure, following Goku as he battles legendary foes and seeks the mystical Dragon Balls. With nonstop action and unforgettable characters, it's the ultimate journey of strength and friendship!",
        videoSrc: "/assets/vids/dbsuper_edit.mp4",
        imgSrc: "/assets/imgs/topanime-dbsuper.jpg",
        className: "dbsuper",
        bestMomentSrc:
            "https://www.youtube.com/embed/lJzCsj3aP3k?si=gNUeHcoL2Ws90NmT",
    },
    {
        id: 4,
        name: "Jujutsu Kaisen",
        description:
            "is a gripping tale of sorcery and survival, where Yuji Itadori battles deadly curses in a world full of danger. With intense fights and powerful magic, it’s a thrilling journey into the dark side of the supernatural!",
        videoSrc: "/assets/vids/jjk_edit.mp4",
        imgSrc: "/assets/imgs/topanime-jjk.jpg",
        className: "jjk",
        bestMomentSrc:
            "https://www.youtube.com/embed/slv9r2s5g_Y?si=0WqR9yErIbUcF46z",
    },
    {
        id: 5,
        name: "Black Clover",
        description:
            "is a magical journey of determination and rivalry! Follow Asta, a boy born without magic in a world where it’s everything, as he strives to become the Wizard King. With intense battles, powerful spells, and an unbreakable spirit, Black Clover is a tale of never giving up and defying all odds!",
        videoSrc: "/assets/vids/blackcl_edit.mp4",
        imgSrc: "/assets/imgs/topanime-bleackclover.jpeg",
        className: "blackcl",
        bestMomentSrc:
            "https://www.youtube.com/embed/r9za-dDhYgw?si=oBRkP5pV-1M1JKwm",
    },
];

function Top5AnimeActions({ isInView }) {
    const [clickedVideo, setClickedVideo] = useState(null);

    return topAnimeActions.map(
        ({
            id,
            name,
            description,
            videoSrc,
            imgSrc,
            className,
            bestMomentSrc,
        }) => (
            <section className={`top-anime`} key={id}>
                <div className={`top-anime__left top-anime__${className}`}>
                    <video
                        autoPlay
                        loop
                        playsInline
                        muted
                        className="top-anime__video"
                    >
                        <source src={videoSrc} type="video/mp4" />
                        Your browser is too old!
                    </video>
                </div>
                <div className="top-anime__right">
                    <h3
                        className="top-anime__name scale-step-6"
                        style={{
                            WebkitTextStroke: isInView
                                ? "2px var(--white-color)"
                                : "2px var(--black-color)",
                        }}
                    >
                        {name.toUpperCase()}
                    </h3>
                    <p className="top-anime__description">
                        "<span>{name}</span> {description}"
                    </p>
                    <div className="top-anime__btns">
                        <button
                            onClick={() => setClickedVideo(id)}
                            className="top-anime__btn--primary btn btn--primary"
                        >
                            Best Moments
                        </button>
                        {/* <button
                            
                            className="top-anime__btn--secondary btn btn--primary-ghost"
                        >
                            Detalils
                        </button> */}
                    </div>
                    <div className="top-anime__media-box">
                        <img
                            src={imgSrc}
                            alt={name}
                            className="top-anime__img"
                        />
                    </div>
                </div>
                {clickedVideo === id && (
                    <BestMomentsVideo
                        src={bestMomentSrc}
                        handleClick={() => setClickedVideo(null)}
                    />
                )}
            </section>
        )
    );
}

export default Top5AnimeActions;
