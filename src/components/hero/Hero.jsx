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
      case 'sundhed':
        return {
          title: 'SPØRG OM SUNDHED',
          description: (
            <>
            Herunder har vi samlet spørgsmål og svar om sundhed.
            <br></br>
            <br></br>
            Mange spørgsmål kommer fra medlemmer af smuknu.dk og andre er gode råd og valgt af vores skønhedsredaktion.
            </>
          ) ,
          button: false,
          bgImage: '/public/headers/abouthealth.jpg',
          bannerColor: '#fa96aa',
          textColor: '#fff'
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
      <div className={styles.banner} style={{ backgroundColor: heroContent.bannerColor, color:  heroContent.textColor }}>
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
