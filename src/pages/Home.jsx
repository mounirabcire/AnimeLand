import {
    motion,
    useInView,
    useMotionValueEvent,
    useScroll,
} from "framer-motion";
import NavBar from "../components/NavBar";
import Hero from "../sections/Hero";
import Top5AnimeActions from "../sections/Top5AnimeActions";
import { useRef } from "react";
import HeadToHeadBattles from "../sections/HeadToHeadBattles";
import Footer from "../sections/Footer";

function Home() {
    const containerRef = useRef(null);
    const scrollarRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end end"],
    });
    const isInView = useInView(containerRef, {
        amount: 0.2,
    });

    useMotionValueEvent(scrollYProgress, "change", (latest) => {
        // console.log(latest);

        const scrollContainer = scrollarRef.current;
        if (scrollContainer) {
            const maxScrollLeft =
                scrollContainer.scrollWidth - scrollContainer.clientWidth;
            const scrollLeft = latest * maxScrollLeft;

            // Debugging: Log calculated scrollLeft and maxScrollLeft
            // console.log(
            //     `scrollLeft: ${scrollLeft}, maxScrollLeft: ${maxScrollLeft}`
            // );

            scrollContainer.scrollLeft = scrollLeft;
        }
    });

    return (
        <>
            <NavBar />
            <Hero />

            <main className="main">
                <h2 className="heading--secondary scale-step-5">
                    <span>Top 5</span> Unforgettable <br /> Anime{" "}
                    <span>Actions</span>
                </h2>
                <div className="scroll-into" ref={containerRef}>
                    <div className="scroll-into__container" ref={scrollarRef}>
                        <motion.div
                            className="top-animes"
                            animate={{
                                backgroundColor: isInView
                                    ? "var(--black-color)"
                                    : "var(--white-color)",
                                color: isInView
                                    ? "var(--white-color)"
                                    : "var(--black-color)",
                            }}
                            style={{}}
                        >
                            <Top5AnimeActions isInView={isInView} />
                        </motion.div>
                    </div>
                </div>

                <h2 className="heading--secondary scale-step-5">
                    Legendary <br /> <span> Head-to-Head</span> Battles!
                </h2>
                <HeadToHeadBattles />
            </main>

            <Footer />
        </>
    );
}

export default Home;
