import { apple, bill, google } from "../assets";
import styles, { layout } from "../style";
import Aos from "aos";
import 'aos/dist/aos.css';
import { useEffect } from "react";

const Billing = () => {
  useEffect(() =>{
    Aos.init({duration:3000});
  }, []);
  return(
  
  <section id="product" className={layout.sectionReverse}>
    <div className={layout.sectionImgReverse}>
      <img data-aos="flip-right"  src={bill} alt="billing" className="w-[100%] h-[100%] relative z-[5]" />

      {/* gradient start */}
      <div className="absolute z-[3] -left-1/2 top-0 w-[50%] h-[50%] rounded-full white__gradient" />
      <div className="absolute z-[0] w-[50%] h-[50%] -left-1/2 bottom-0 rounded-full pink__gradient" />
      {/* gradient end */}
    </div>

    <div className={layout.sectionInfo}>
      <h2 data-aos="zoom-in"  className={styles.heading2}>
        Easily control your <br className="sm:block hidden" /> billing &
        invoicing
      </h2>
      <p data-aos="fade-up" className={`${styles.paragraph} max-w-[470px] mt-5`}>
        Elit enim sed massa etiam. Mauris eu adipiscing ultrices ametodio
        aenean neque. Fusce ipsum orci rhoncus aliporttitor integer platea
        placerat.
      </p>

      <div className="flex flex-row flex-wrap sm:mt-10 mt-6">
        <img data-aos="flip-up"  src={apple} alt="google_play" className="w-[128.86px] h-[42.05px] object-contain mr-5 cursor-pointer" />
        <img data-aos="flip-down" src={google} alt="google_play" className="w-[144.17px] h-[43.08px] object-contain cursor-pointer" />
      </div>
    </div>
  </section>
  );
};

export default Billing;