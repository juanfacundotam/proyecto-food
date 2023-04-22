import CardsContainer from "../../components/CardsContainer/CardsContainer";
import style from "./Home.module.css";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getRecipes} from "../../redux/actions";
import Pagination from "../../components/pagination/Pagination";

const Home = ({setLoadNavs}) => {
  const dispatch = useDispatch();
  const recipes = useSelector(state => state.recipes)

  //Paginado
  const [currentPage, setCurrentPage] = useState(1);
  const [recipeXPage, setRecipeXpage] = useState(9);
  const indexLastRecipe = currentPage * recipeXPage;
  const indexFirstRecipe = indexLastRecipe - recipeXPage
  const currentRecipe = recipes.slice(indexFirstRecipe, indexLastRecipe);
  
  const pages = (pageNumber) => {
    setCurrentPage(pageNumber)
  }


  useEffect(() => {
    dispatch(getRecipes());
    return(() => {
      setLoadNavs(false)
    })
  }, [dispatch]);


  return (
    <div className={style.divHome} id="idHome">
      {recipes.length ? (
        <>
        {setLoadNavs(true)}
        <div className={style.homeWall}></div>
          <CardsContainer 
          currentRecipe={currentRecipe}
          />
        <Pagination
          recipesXPage={recipeXPage}
          recipes={recipes}
          pages={pages}
        />
        </>
      ) : (
        <div className={style.customLoader}></div>
      )}
    </div>
  );
};

export default Home;

