import { useState } from "react";
import { AnimatePresence } from "framer-motion";
import Menu from "./Menu";

function NavBar() {
    const [isOpen, setIsOpen] = useState(false);

    function toggleMenu() {
        setIsOpen((bool) => !bool);
    }

    return (
        <>
            <nav className="nav">
                <div className="nav__logo-box">
                    <img
                        src="./../../src/assets/imgs/logo.svg"
                        alt="Logo"
                        className="nav__logo"
                    />
                </div>

                <button
                    className="btn nav__btn btn--ghost"
                    onClick={toggleMenu}
                >
                    Menu
                    <div className="nav__menu">
                        {Array.from({ length: 3 }, (_, i) => (
                            <span key={i} />
                        ))}
                    </div>
                </button>
            </nav>
            <AnimatePresence>
                {isOpen && <Menu toggleMenu={toggleMenu} />}
            </AnimatePresence>
        </>
    );
}

export default NavBar;
