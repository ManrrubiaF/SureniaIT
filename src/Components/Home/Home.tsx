import { useEffect } from 'react';
import Styles from './Home.module.css'

export default function Home() {

    let carousels;

    useEffect(()=>{
        carousels = Array.from(document.querySelectorAll(`.${Styles.imageContainer}`)) as HTMLDivElement[];
    },[])

    const handleCarousel = () => {
        carousels.forEach((carousel) => {
            const images = Array.from(carousel.querySelectorAll('img')) as HTMLImageElement[];
            let currentIndex = 0;

            function updateSlider() {
                images.forEach((image, imgIndex) => {
                    if (imgIndex === currentIndex) {
                        image.style.display = 'block';
                        image.style.transform = 'translateX(0)';
                    } else {
                        image.style.display = 'none';
                        image.style.transform = 'translateX(100%)';
                    }
                });
            }

            function nextImage() {
                currentIndex = (currentIndex + 1) % images.length;
                updateSlider();
            }

            updateSlider(); 
            setInterval(nextImage, 4000);
        });
    }

    useEffect(() => {
        handleCarousel()
    }, [carousels])



    return (
        <div className={Styles.divMayor}>
            <div className={Styles.containerAll}>
                <div className={Styles.containerAbout}>
                    <div>
                        <h2> Acerca de Nosotros </h2>
                        <p>¡Bienvenidos a Surenia® IT, una empresa de desarrollo web nacida de la pasión por la web y la ambición de crear experiencias digitales excepcionales. Fundada en 2023, nuestra historia está comenzando, pero nuestro compromiso con la excelencia y la innovación es innegable.</p>
                    </div>
                    <div>
                        <h2>Nuestra Misión</h2>
                        <p> En Surenia® IT, nuestra misión es clara:<br /> Facilitar la transformación digital de nuestros clientes. Creemos que una presencia en línea efectiva es esencial para el éxito en el mundo actual. Estamos aquí para ayudar a nuevas empresas, emprendedores y organizaciones a dar vida a sus visiones en línea.</p>
                    </div>
                    <div>
                        <h2>Nuestra Visión</h2>
                        <p>Nuestra visión es convertirnos en una fuerza líder en el mundo del desarrollo web. Imaginamos un futuro donde la creatividad y la tecnología se fusionen para crear soluciones digitales asombrosas. Queremos ser reconocidos por nuestra innovación y nuestro compromiso con la satisfacción del cliente.</p>
                    </div>
                    <div>
                        <h2>Nuestro Enfoque en la Innovación</h2>
                        <p>Como una empresa nueva, valoramos la agilidad y la adaptabilidad. Nos apasiona explorar nuevas tecnologías y abordar desafíos complejos. Estamos comprometidos a estar a la vanguardia de las tendencias del diseño y el desarrollo web, y a aplicar soluciones innovadoras a cada proyecto.</p>
                    </div>
                    <div>
                        <h2>Nuestro Equipo</h2>
                        <p>Aunque somos una empresa joven, nuestro equipo está formado por individuos apasionados y creativos. Cada miembro aporta una perspectiva única y una dedicación a la excelencia. Estamos emocionados de crecer juntos y colaborar con nuestros clientes en emocionantes proyectos.</p>
                    </div>
                    <div>
                        <h2>Nuestra Cultura</h2>
                        <p>En Surenia® IT, fomentamos una cultura de colaboración, aprendizaje constante y responsabilidad. Valoramos la honestidad, la integridad y la satisfacción del cliente. Estamos comprometidos a establecer relaciones sólidas y a construir un futuro digital emocionante.</p>
                    </div>
                </div>
                <div className={Styles.projectsContainer}>
                    <div className={Styles.oneProject}>
                        <div className={Styles.imageContainer}>
                            <img src='/assets/images/HotelHunt/HotelHome.jpg' alt='imageProject' />
                            <img src='/assets/images/HotelHunt/Hoteldetail.jpg' alt='imageProject' />
                            <img src='/assets/images/HotelHunt/Rooms.jpg' alt='imageProject' />
                            <img src='/assets/images/HotelHunt/AllRooms.jpg' alt='imageProject' />
                        </div>
                        <a href='https://hotelhunt.com.ar' target='Blank'>
                            <h2>Hotel Hunt</h2>
                        </a>
                        <p>
                            Proyecto creado al estilo trivago. <br />
                            Engloba hoteles y sus características, con funcionalidades como Stripe para pagos y google para iniciar sesión.
                        </p>
                    </div>
                    <div className={Styles.oneProject}>
                        <div className={Styles.imageContainer}>
                            <img src='/assets/images/Portfolio/About.jpg' alt='portfolioImg' />
                            <img src='/assets/images/Portfolio/Contact.jpg' alt='portfolioImg' />
                            <img src='/assets/images/Portfolio/Skills.jpg' alt='portfolioImg' />
                        </div>
                        <a href='https://favio-manrrubia.com.ar' target='Blank'>
                            <h2>Portfolio de Desarrollador</h2>
                        </a>
                        <p>
                            Esta es una página hecha a medida para un desarrollador, donde puede mostrar sus skills y proyectos. <br />
                            Además cuenta con formulario de contacto y carga en 2 idiomas.
                        </p>
                    </div>
                    <div className={Styles.oneProject}>
                        <div className={Styles.imageContainer}>
                            <img src='/assets/images/TemplateEcommerce/ejemplo2.jpg' alt='imageProject' />
                            <img src='/assets/images/TemplateEcommerce/ejemplo1.jpg' alt='imageProject' />
                            <img src='/assets/images/TemplateEcommerce/ejemplo4.jpg' alt='imageProject' />
                            <img src='/assets/images/TemplateEcommerce/ejemplo5.jpg' alt='imageProject' />
                            <img src='/assets/images/TemplateEcommerce/ejemplo3.jpg' alt='imageProject' />
                        </div>
                        <a href='https://template-front1-es.vercel.app/' target='Blank'>
                            <h2>Plantilla de tienda virtual</h2>
                        </a>
                        <p>
                            Un pre-diseño de una tienda virtual general, sin pasarela de pago incorporada (ya que esta es a gusto del cliente). <br />
                            Cuenta con panel de administración para  la carga y actualización de productos, asi como también de usuario para administración de reservas/compras.<br />
                            Fácil e intuitiva, sin complicaciones para usar y sobre todo automatizada.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
} 