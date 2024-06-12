import styles from "./hero.module.css";

const Hero = ({ type }) => {
  const getHeroContent = (type) => {
    switch (type) {
      case 'forside':
        return {
          title: (
            <>
              SKØNHED <br />
              FOR ALLE
            </>
          ),
          description: 'Herunder har vi samlet spørgsmål og svar om sundhed.',
          button: true,
          buttonText: 'Se udvalgte produkter',
          bgImage: '/public/headers/front.jpg',
          bannerColor: '#fff'
        };
      case 'spørg-om-sundhed':
        return {
          title: '',
          description: '',
          button: false,
          bgImage: '/public/headers/front.jpg'
        };
      case 'bliv-medlem':
        return {
          title: '',
          description: '',
          button: false,
          bgImage: '/public/headers/front.jpg'
        };
      case 'produkter':
        return {
          title: '',
          description: '',
          button: false,
          bgImage: '/public/headers/front.jpg'
        };
      default:
        return {
          title: '',
          description: '',
          button: false,
          bgImage: ''
        };
    }
  };

  const heroContent = getHeroContent(type);

  return (
    <div className={styles.heroContainer} style={{ backgroundImage: `url(${heroContent.bgImage})` }}>
      <div className={styles.banner} style={{ backgroundColor: heroContent.bannerColor }}>
        <h1 className={styles.heroTitle}>{heroContent.title}</h1>
        <p className={styles.heroDescription}>{heroContent.description}</p>
        {heroContent.button && (
          <a href="#recommended" className={styles.heroButton}>
            {heroContent.buttonText}
          </a>
        )}
      </div>
    </div>
  );
};

export default Hero;
