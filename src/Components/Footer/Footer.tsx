import Styles from './Footer.module.css'

export default function Footer() {

    return (
        <footer className={Styles.divMayor}>
            <div>
                <img src='/assets/Icons/gmail.svg' alt='gmail icon' />
                <p>somos.surenia.it@gmail.com</p>
            </div>
            <div>
                <a href='https://www.instagram.com/sureniait/' target='Blank'><img src='/assets/Icons/instagram.svg' alt='gmail icon' /></a>
                <a href='https://www.instagram.com/sureniait/' target='Blank'>Surenia IT</a>
            </div>
            <div>
                <a href='https://wa.me/541132036570' target='Blank'><img src='/assets/Icons/whatsapp.svg' alt='gmail icon' className={Styles.whatsapp} /></a>
                <a>+541132036570</a>
            </div>
            <p>&copy; 2023 Surenia IT</p>
        </footer>
    )
}