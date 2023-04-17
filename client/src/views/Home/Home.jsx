import CardsContainer from "../../components/CardsContainer/CardsContainer";
import style from "./Home.module.css";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getRecipes, getAllDiets } from "../../redux/actions";

const Home = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getRecipes())
        return () => {
      dispatch(getAllDiets());
    }
  }, [dispatch]);

  return (
    <div className={style.divHome}>
      <div className={style.homeWall}></div>

      <CardsContainer />
    </div>
  );
};

export default Home;
