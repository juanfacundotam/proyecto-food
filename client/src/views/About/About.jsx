import style from "./About.module.css";
import fondo from "../../assets/viewsWallPapers/fondo3.jpg";
const About = () => {
  return (
    <div className={style.divAbout}>
      <div className={style.aboutWall}></div>
      <h1 className={style.titleAbout}>About</h1>
    </div>
  );
};

export default About;
