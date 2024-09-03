import { motion } from "framer-motion";

function LinkImg({ currentImg: { src, name } }) {
    return (
        <div className="menu__img-box">
            <motion.div
                className="menu__bg"
                initial={{ scaleY: 1 }}
                animate={{
                    scaleY: 0,
                    transition: {
                        duration: 0.9,
                        ease: [0.69, 0.02, 0.52, 0.91],
                    },
                }}
                exit={{
                    scaleY: 1,
                    transition: {
                        duration: 0.9,
                        ease: [0.32, 0, 0.67, 0],
                    },
                }}
            />
            <motion.img
                src={src}
                alt={name}
                className="menu__img"
                initial={{ scale: 1.2 }}
                animate={{
                    scale: 1,
                    transition: {
                        duration: 0.95,
                        ease: [0.69, 0.02, 0.52, 0.91],
                    },
                }}
                exit={{
                    scale: 1.2,
                    transition: {
                        duration: 0.85,
                        ease: [0.32, 0, 0.67, 0],
                    },
                }}
            />
        </div>
    );
}

export default LinkImg;
