import style from "./Landing.module.css";
import logo from "../../assets/logo.png";

import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Landing = () => {
  const [foto, setFoto] = useState(null);

  useEffect(() => {
    import("../../assets/landing.jpg")
      .then((fotoModule) => {
        setFoto(fotoModule.default);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  return (
    <div className={style.divLanding}>
      {foto ? (
        <>
          <div className={style.landingWall}></div>
          <div className={style.divContainer}>
            <div className={style.divLogo}>
              <img src={logo} alt="" className={style.logo} />
              <h1 className={style.logoTitle}>Soy Henry</h1>
              <p className={style.logoParrafo}>Juan Facundo Tam</p>
            </div>
              <h1 className={style.titleLanding}>Food Recipes</h1>
            {/* <div className={style.divImage}> */}
            {/* <img src={foto} alt="Logo de la app" className={style.logo} /> */}
            {/* </div> */}
            <div className={style.divText}>
              <p className={style.parrafo}>
                ¡Bienvenidos a nuestra página de recetas! Aquí encontrarás una
                gran variedad de platos deliciosos y fáciles, opciones veganas,
                vegetarianas y sin gluten. ¡Mejora tus habilidades culinarias
                con nuestros consejos! ¡Explora y disfruta de la comida!
              </p>
            </div>
            <Link to="/home" className={style.link}>
              Ingresar
            </Link>
          </div>
        </>
      ) : (
        <div className={style.customLoader}></div>
      )}
    </div>
  );
};

export default Landing;
