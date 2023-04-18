import CardsContainer from "../../components/CardsContainer/CardsContainer";
import style from "./Home.module.css";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getRecipes} from "../../redux/actions";

const Home = () => {
  const dispatch = useDispatch();
  const recipes = useSelector(state => state.recipes)

  useEffect(() => {
    dispatch(getRecipes());
  }, [dispatch]);


  return (
    <div className={style.divHome}>
      {recipes.length ? (
        <>
        <div className={style.homeWall}></div>
          <CardsContainer />
        </>
      ) : (
        <div class="custom-loader">loading</div>
      )}
    </div>
  );
};

export default Home;

