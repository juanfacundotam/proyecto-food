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
              <h1 className={style.titleLanding}>Food PI</h1>
              <p className={style.parrafo}>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Dignissimos pariatur ad temporibus quibusdam iste praesentium
                aperiam repellendus perspiciatis incidunt at!
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
