import style from "./Landing.module.css";
import foto from "../../assets/landing.jpg";
import { Link } from "react-router-dom";

const Landing = () => {
  return (
    <div className={style.divLanding}>
      {/* <div className={style.landingWall}></div> */}
      <div className={style.divContainer}>
      <div className={style.divImage}>
      <img src={foto} alt="Logo de la app" className={style.logo}/>

      </div>
      <div className={style.divText}>
      <h1 className={style.titleLanding}>Food PI</h1>
      <p className={style.parrafo}>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dignissimos
        pariatur ad temporibus quibusdam iste praesentium aperiam repellendus
        perspiciatis incidunt at!
      </p>
      <Link to="/home" className={style.link}>Ingresar</Link>

      </div>
      </div>
    </div>
  );
};

export default Landing;
