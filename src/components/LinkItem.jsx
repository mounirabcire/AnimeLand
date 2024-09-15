import { motion } from "framer-motion";
import { Link } from "react-router-dom";

function LinkItem({ links, handleCurrentImg, handleHoverEff, linkVariants }) {
    return (
        <motion.ul className="menu__list">
            {links.map(({ name, href }, i) => (
                <LinkList
                    name={name}
                    href={href}
                    key={i}
                    handleCurrentImg={() => handleCurrentImg(i)}
                    handleHoverEff={handleHoverEff}
                    linkVariants={linkVariants}
                />
            ))}
        </motion.ul>
    );
}

function LinkList({
    name,
    href,
    handleCurrentImg,
    handleHoverEff,
    linkVariants,
}) {
    console.log(href);
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
            <Link to={href} target="_blank" className="menu__link">
                <motion.div variants={linkVariants}>{name}</motion.div>
            </Link>
        </li>
    );
}

export default LinkItem;
