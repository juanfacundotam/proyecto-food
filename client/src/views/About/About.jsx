import style from "./About.module.css";
import foto from "../../assets/fotoCV.jpg";
import {Link} from "react-router-dom"

const About = () => {
  return (
    <div className={style.divAbout}>
      <div className={style.aboutWall}></div>
            <div className={style.divContainer}>
      <div className={style.divImage}>
      <img src={foto} alt="Logo de la app" className={style.logo}/>

      </div>
      <div className={style.divText}>
      <h1 className={style.titleAbout}>Food PI</h1>
      <p className={style.parrafo}>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dignissimos
        pariatur ad temporibus quibusdam iste praesentium aperiam repellendus
        perspiciatis incidunt at!
      </p>
      </div>
      </div>
    </div>
  );
};

export default About;
