import { motion } from "framer-motion";

function LinkItem({ links, handleCurrentImg, handleHoverEff, linkVariants }) {
    return (
        <motion.ul className="menu__list">
            {links.map(({ name }, i) => (
                <LinkList
                    name={name}
                    key={i}
                    handleCurrentImg={() => handleCurrentImg(i)}
                    handleHoverEff={handleHoverEff}
                    linkVariants={linkVariants}
                />
            ))}
        </motion.ul>
    );
}

function LinkList({ name, handleCurrentImg, handleHoverEff, linkVariants }) {
    return (
        <li
            className="menu__item"
            onMouseEnter={() => {
                handleCurrentImg();
                handleHoverEff(true);
            }}
            onMouseLeave={() => {
                handleCurrentImg(null);
                handleHoverEff(false);
            }}
        >
            <motion.a href="#" className="menu__link" variants={linkVariants}>
                {name}
            </motion.a>
        </li>
    );
}

export default LinkItem;
