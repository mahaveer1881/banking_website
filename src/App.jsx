// import "./App.css";
import styles from './style';

import {
  Navbar,
  Hero,
  Stats,
  Business,
  Billing,
  CardDeal,
  Testimonials,
  Clients,
  CTA,
  Footer,
} from './components';

function App() {
  return (
    <>
      <div className='bg-primary w-full overflow-hidden'>
        <div className={`${styles.paddingX} ss:mx-20 ${styles.flexCenter}`}>
          <div className={`${styles.boxWidth}`}>
            <Navbar />
          </div>
        </div>
        <div className={`bg-primary sm:mx-28 ${styles.flexStart}`}>
          <div className={`${styles.boxWidth}`}>
            <Hero />
          </div>
        </div>
        <div
          className={`bg-primary sm:mx-28 ${styles.paddingX} ${styles.flexStart}`}
        >
          <div className={`${styles.boxWidth}`}>
            <Stats /> <Business /> <Billing /> <CardDeal /> <Testimonials />{' '}
            <Clients /> <CTA /> <Footer />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
