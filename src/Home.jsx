import styles from './style';

import {Navbar, Hero, Footer, CTA, CameraComp} from './components';
import LoginButton from './auth/LoginButton';


const Home = () => (
  <div className="bg-primary w-full overflow-hidden">
    <div className={`${styles.paddingX} ${styles.flexCenter}`}>
      <div className={`${styles.boxWidth}`}>
        <Navbar />
      </div>      
    </div>
    {/* <LoginButton /> */}

    <div className={`bg-primary ${styles.flexStart}`}>
      <div className={`${styles.boxWidth}`} >
        <Hero />
      </div>
    </div>

    <div className={`bg-primary ${styles.paddingX} ${styles.flexCenter}`}>
      <div className={`${styles.boxWidth}`}>

        {/* <CameraComp /> */}
        <CTA />
        <Footer />
      </div>
    </div>
  </div>
)

export default Home;