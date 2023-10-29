import Styles from './Navbar.module.css'
import { useEffect, useState } from 'react';

export default function NavBar() {

    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        function handleScroll() {
            if (window.scrollY > 0) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        }

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return (
        <nav className={`${Styles.navMayor} ${scrolled ? Styles.scrolled : ""}`}>
            <div className={Styles.imageContainer}>
                <img className={Styles.logo} src='/assets/images/Brujita.svg' alt='logo' />
            </div>
            <img className={Styles.logoName} src='/assets/images/name.svg' alt='name' />
        </nav>
    )
}