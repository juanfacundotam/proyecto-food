import style from "./About.module.css";
import { useEffect, useState } from "react";
// import foto from "../../assets/fotoCV.jpg";

const About = ({setLoadNavs}) => {
  const [foto, setFoto] = useState(null);

  setLoadNavs(false)
  useEffect(() => {
    import("../../assets/fotoCV.jpg")
      .then((fotoModule) => {
        setFoto(fotoModule.default);
      })
      .catch((error) => {
        console.log(error);
      });
      return(() => {
        setLoadNavs(false)
      })
  }, []);
  return (
    <div className={style.divAbout}>

      {foto ? (
        <>
        {setLoadNavs(true)}
          <div className={style.aboutWall}></div>
          <div className={style.divContainer}>
            <div className={style.divImage}>
              <img src={foto} alt="Logo de la app" className={style.logo} />
            </div>

            <div className={style.divText}>
              <h1 className={style.title}>Food Recipes APP</h1>
              <p className={style.parrafo1}>Aplicacion WEB FullStack</p>
              <p className={style.parrafo1}>
                JavaScript - React - Redux - Express - Sequelize
              </p>

              <h3 className={style.title2}>Sobre Mí</h3>
              <p className={style.parrafo2}>Juan Facundo Tam</p>
              <p className={style.parrafo2}>FullStack Developer - SoyHenry</p>
            </div>
          </div>
        </>
      ) : (
        <div className={style.customLoader}></div>
      )}
    </div>
  );
};

export default About;
