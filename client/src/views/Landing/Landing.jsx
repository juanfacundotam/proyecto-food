import style from "./Landing.module.css";
// import foto from "../../assets/landing.jpg";
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
          {/* <div className={style.landingWall}></div> */}
          <div className={style.divContainer}>
            <div className={style.divImage}>
              <img src={foto} alt="Logo de la app" className={style.logo} />
            </div>
            <div className={style.divText}>
              <h1 className={style.titleLanding}>Food Recipes</h1>
              <p className={style.parrafo}>
              ¡Bienvenidos a nuestra página de recetas! Aquí encontrarás una gran variedad de recetas deliciosas y fáciles de seguir, desde platos principales hasta postres, opciones veganas, vegetarianas y sin gluten. También ofrecemos consejos útiles para mejorar tus habilidades culinarias. ¡Explora y descubre nuevas formas de disfrutar de la comida!              </p>
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
