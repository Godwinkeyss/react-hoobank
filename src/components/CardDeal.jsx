import { card } from "../assets";
import styles, { layout } from "../style";
import Button from "./Button";
import Aos from "aos";
import 'aos/dist/aos.css';
import { useEffect } from "react";

const CardDeal = () => {
  useEffect(() =>{
    Aos.init({duration:3000});
  }, [])

  return(
  <section className={layout.section}>
    <div className={layout.sectionInfo}>
      <h2 data-aos="zoom-in"  className={styles.heading2}>
        Find a better card deal <br className="sm:block hidden" /> in few easy
        steps.
      </h2>
      <p data-aos="zoom-out"  className={`${styles.paragraph} max-w-[470px] mt-5`}>
        Arcu tortor, purus in mattis at sed integer faucibus. Aliquet quis
        aliquet eget mauris tortor.ç Aliquet ultrices ac, ametau.
      </p>

      <Button styles={`mt-10`} />
    </div>

    <div className={layout.sectionImg}>
      <img data-aos="flip-right"  src={card} alt="billing" className="w-[100%] h-[100%]" />
    </div>
  </section>
  );
};

export default CardDeal;