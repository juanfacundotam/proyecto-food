import CardsContainer from "../../components/CardsContainer/CardsContainer";
import style from "./Home.module.css";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getRecipes } from "../../redux/actions";

const Home = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getRecipes())
  }, [dispatch]);

  return (
    <div className={style.divHome}>
      <div className={style.homeWall}></div>
      <h1 className={style.titleHome}>Home</h1>
      <CardsContainer />
    </div>
  );
};

export default Home;
