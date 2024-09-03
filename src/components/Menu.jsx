import { AnimatePresence, motion } from "framer-motion";
import LinkImg from "./LinkImg";
import { useState } from "react";
import LinkItem from "./LinkItem";

const parentVariants = {
    initial: {
        scaleY: 0,
    },
    animate: {
        scaleY: 1,
        transformOrigin: "top",
        transition: {
            duration: 0.9,
            ease: [0.69, 0.02, 0.52, 0.91],
            staggerChildren: 0.1, // This staggers the children
            when: "beforeChildren", // Ensures parent animation completes before children start
        },
    },
    exit: {
        scaleY: 0,
        transformOrigin: "bottom",
        transition: {
            duration: 0.4,
            ease: [0.69, 0.02, 0.52, 0.91],
            staggerChildren: 0.1, // Staggers children when exiting
            staggerDirection: -1, // Staggers in reverse order during exit
            when: "afterChildren", // Ensures children animations complete before parent animates out
        },
    },
};

const linkVariants = {
    initial: { opacity: 0, y: 100 },
    animate: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.7,
            ease: [0.5, 1, 0.89, 1],
        },
    },
    exit: {
        opacity: 0,
        y: 100,
        transition: {
            duration: 0.7,
            ease: [0.32, 0, 0.67, 0],
        },
    },
};

const iconVariants = {
    initial: { scale: 0 },
    animate: {
        scale: 1,
        transition: {
            type: "spring",
            damping: 8,
            bounce: 1,
        },
    },
    exit: {
        scale: 0,
    },
};

const sepVariants = {
    initial: { scaleY: 0, x: "-50%", y: "-50%" },
    animate: {
        scaleY: 1,
        x: "-50%",
        y: "-50%",
        transformOrigin: "top",
        transition: { duration: 1, ease: [0.69, 0.02, 0.52, 0.91] },
    },
    exit: {
        scaleY: 0,
        x: "-50%",
        y: "-50%",
        transition: { duration: 0.5, ease: [0.69, 0.02, 0.52, 0.91] },
    },
};

const links = [
    { name: "One Piece", src: "../../src/assets/imgs/menu-onepiece.png" },
    { name: "Bleach", src: "../../src/assets/imgs/menu-bleach.png" },
    {
        name: "Dragon Ball Super",
        src: "../../src/assets/imgs/menu-dbsuper.png",
    },
    { name: "Jujutsu Kaisen", src: "../../src/assets/imgs/menu-jjk.png" },
    {
        name: "Black Clover",
        src: "../../src/assets/imgs/menu-blacklclover.png",
    },
];

function Menu({ toggleMenu }) {
    const [isHovered, setIsHovered] = useState(false);
    const [currentImg, setCurrentImg] = useState(null);

    return (
        <motion.div
            className="menu"
            variants={parentVariants}
            initial="initial"
            animate="animate"
            exit="exit"
        >
            <motion.span
                className="menu__close-icon"
                onClick={toggleMenu}
                variants={iconVariants}
            >
                <i className="ri-close-large-fill"></i>
            </motion.span>

            <LinkItem
                handleCurrentImg={setCurrentImg}
                handleHoverEff={setIsHovered}
                linkVariants={linkVariants}
                links={links}
            />

            <motion.div className="menu__seperator" variants={sepVariants} />

            <AnimatePresence>
                {isHovered && <LinkImg currentImg={links[currentImg]} />}
            </AnimatePresence>
        </motion.div>
    );
}

export default Menu;
