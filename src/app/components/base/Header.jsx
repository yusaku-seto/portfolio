import Link from "next/link";
import { useState } from "react";

const Header = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const toggleClick = () => {
        setMenuOpen(!menuOpen);
    };

    return (
        <header className="header">
            <Link href="/" className="header_logo">
                <img src="./img/icon.png" alt="icon" width={36} height={36} />Seto Yusaku
            </Link>
            <nav className={`${menuOpen ? 'menu_open' : ''}`}>
                <div className="menu_toggle" onClick={toggleClick}>
                    <div className="toggle_line"></div>
                    <div className="toggle_line"></div>
                    <div className="toggle_line"></div>
                </div>
                <ul className={`header_list ${menuOpen ? 'menu_open' : ''}`}>
                    <li className="header_item"><Link href="/about" className="header_item_link">About</Link></li>
                    <li className="header_item"><Link href="/learning" className="header_item_link">Learning</Link></li>
                    <li className="header_item"><Link href="/contact" className="header_item_link">Contact</Link></li>
                </ul>
            </nav>

        </header>
    );
};

export default Header;