import { clients } from "../constants";
import styles from "../style";
import Aos from "aos";
import 'aos/dist/aos.css';
import { useEffect } from "react";

const Clients = () => {
  useEffect(() =>{
    Aos.init({duration:3000});
  }, [])
  return (
  <section className={`${styles.flexCenter} my-4`}>
    <div className={`${styles.flexCenter} flex-wrap w-full`}>
      {clients.map((client) => (
        <div key={client.id} className={`flex-1 ${styles.flexCenter} sm:min-w-[192px] min-w-[120px] m-5`}>
          <img data-aos="zoom-in" src={client.logo} alt="client_logo" className="sm:w-[192px] w-[100px] object-contain" />
        </div>
      ))}
    </div>
  </section>
  );
};

export default Clients;