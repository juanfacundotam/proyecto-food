import CardsContainer from "../../components/CardsContainer/CardsContainer";
import style from "./Home.module.css";

const Home = () => {
  return (
    <div className={style.divHome}>
      <div className={style.homeWall}></div>
      <h1 className={style.titleHome}>Home</h1>
      <CardsContainer />
    </div>
  );
};

export default Home;
