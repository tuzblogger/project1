import { Link } from "react-router-dom";
import "./style.css"
import { useEffect, useState } from "react"
import MenuItems from "./ui/MenuItems";

export default function Header() {
    const [isOpen, setIsOpen] = useState(false);
    const mobileSize = window.innerWidth > 450

    const handleMenuToggle = () => {
        setIsOpen(!isOpen);
    };

    // useEffect(() => {
    //     if(!mobileSize){}
    // }, [])

    return (
        <>
            <header className="burger-menu-wrapper">
                <Link to="/">
                    <img src="data:image/jpeg;base64,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"/>
                </Link>
                {
                    mobileSize && <nav>
                        <MenuItems />
                    </nav>
                    
                }
                {!mobileSize && <button className={isOpen ? "burger-menu-button" : 'burger-cross-button'} onClick={handleMenuToggle}>
                    ☰ Menu
                </button>}

                <div className={`menu-sidebar ${(isOpen && !mobileSize) && 'shown'}`}>
                    <MenuItems />
                </div>
            </header>
        </>
    )
}