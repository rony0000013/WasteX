import styles from './style';

import {Navbar, Hero, Footer, CTA, Showcase} from './components';
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
        {/* <Business />
        <Billing />
        <CardDeal /> */}
        <Showcase />
        <CTA />
        <Footer />
      </div>
    </div>
  </div>
)

export default Home;