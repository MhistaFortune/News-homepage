import styles from './Hero.module.css';
import desktopHero from '../../assets/images/image-web-3-desktop.jpg';
import mobileHero from '../../assets/images/image-web-3-mobile.jpg';

const Hero = () => {
    return (
        <section className={styles.heroContainer}>
            <picture className={styles.imageWrapper}>
                <source media="(min-width: 768px)" srcSet={desktopHero} />
                <img src={mobileHero} alt="The Bright Future of Web 3.0" className={styles.heroImage} />
            </picture>

            <div className={styles.contentGrid}>
                <h1 className={styles.title}>The Bright Future of Web 3.0?</h1>
                <div className={styles.details}>
                    <p className={styles.description}>
                        We dive into the next evolution of the web that claims to put the power of the platforms back into the hands of the people.
                        But is it really fulfilling its promise?
                    </p>
                    <button className={styles.readMoreBtn}>Read More</button>
                </div>
            </div>
        </section>
    );
};

export default Hero;
