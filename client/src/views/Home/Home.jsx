import CardsContainer from "../../components/CardsContainer/CardsContainer";
import style from "./Home.module.css";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  getRecipes,
  getAllDiets,
  filterByDiets,
  refreshRecipes,
  filterCreated,
  orderId,
  orderHealthScore,
} from "../../redux/actions";
import Pagination from "../../components/pagination/Pagination";
import { searchByQuery } from "../../redux/actions";

const Home = ({ setLoadNavs }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { recipes } = useSelector((state) => state);
  const allDiets = useSelector((state) => state.diets);
  const [search, setSearch] = useState("")
  

  //Clean Filters
  // const [order, setOrder] = useState("");
  // const [healthScore, setHealthScore] = useState("");
  // const [filterDiets, setFilterDiets] = useState("");
  // const [filterApiBdd, setFilterApiBdd] = useState("");

  //Paginado
  const [pageStyle, setPageStyle] = useState(1);
  const [currentPage, setCurrentPage] = useState(1);
  const [recipeXPage, setRecipeXpage] = useState(9);
  const indexLastRecipe = currentPage * recipeXPage;
  const indexFirstRecipe = indexLastRecipe - recipeXPage;
  const currentRecipe = recipes.slice(indexFirstRecipe, indexLastRecipe);

  const pages = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  setLoadNavs(true);
  useEffect(() => {
    if (!recipes.length) {
      dispatch(getRecipes());
    } else {
      dispatch(refreshRecipes());
    }
    if (!allDiets.length) {
      dispatch(getAllDiets());
    }
    return () => {
      setLoadNavs(false);
    };
  }, [dispatch]);

  const handleOrderId = (event) => {
    dispatch(orderId(event.target.value));
    document.getElementById("select2").value = "HealthScore";
  };
  const handleOrderHealthScore = (event) => {
    dispatch(orderHealthScore(event.target.value));
    document.getElementById("select1").value = "Order";
  };
  const handleFilterApiBdd = (event) => {
    // if(dietSelection !== "All")
    dispatch(filterCreated(event.target.value));
    document.getElementById("select3").value = "FilterDiets";
  };

  const handleFilterDiets = (event) => {
    dispatch(filterByDiets(event.target.value));
    // dispatch(filterCreated(event.target.value));
  };

  const handleCleanFilters = () => {
    dispatch(refreshRecipes());
    // Reinicia los valores predeterminados de los selectores
    document.getElementById("select1").value = "Order";
    document.getElementById("select2").value = "HealthScore";
    document.getElementById("select3").value = "FilterDiets";
    document.getElementById("select4").value = "FilterApiBdd";
    setPageStyle(1);
    setCurrentPage(1);
    setSearch("")
    // Reinicia los estados de los selectores
    // setOrder("");
    // setHealthScore("");
    // setFilterDiets("");
    // setFilterApiBdd("");
  };

  const handleSearchChange = (event) => {
    setSearch(event.target.value)
  }
  const handleBtnSearch = () => {
    dispatch(searchByQuery(search))
  }


  return (
    <div className={style.divHome} id="idHome">
      {recipes.length ? (
        <>
          <div className={style.homeWall}></div>
          <div className={style.divSelects}>
            <input type="text" name="search" value={search} onChange={handleSearchChange} />
            <button onClick={handleBtnSearch}>Buscar</button>
            <div>
              <select
                onChange={handleOrderId}
                className={style.select1}
                defaultValue="Order"
                id="select1"
              >
                <option disabled="disabled" value="Order">
                  Order By Id
                </option>
                <option value="Ascendente">Ascendente</option>
                <option value="Descendente">Descendente</option>
              </select>

              <select
                onChange={handleOrderHealthScore}
                className={style.select2}
                defaultValue="HealthScore"
                id="select2"
              >
                <option disabled="disabled" value="HealthScore">
                  Order By HealthScore
                </option>
                <option value="Ascendente">Ascendente</option>
                <option value="Descendente">Descendente</option>
              </select>
            </div>
            <div>
              <select
                onChange={handleFilterApiBdd}
                className={style.select4}
                defaultValue="FilterApiBdd"
                id="select4"
              >
                <option disabled="disabled" value="FilterApiBdd">
                  Filter By API-BDD
                </option>
                <option value="All">All</option>
                <option value="API">API</option>
                <option value="BDD">BDD</option>
              </select>
              <select
                onChange={handleFilterDiets}
                className={style.select3}
                defaultValue="FilterDiets"
                id="select3"
              >
                <option disabled="disabled" value="FilterDiets">
                  Filter By Diets
                </option>
                <option value="All">All</option>
                {allDiets.length &&
                  allDiets.map((diet) => (
                    <option key={diet.id} value={diet.name}>
                      {diet.name}
                    </option>
                  ))}
              </select>
            </div>
            <button onClick={handleCleanFilters}>Limpiar Filtros</button>
          </div>
          <Pagination
            pageStyle={pageStyle}
            setPageStyle={setPageStyle}
            recipeXPage={recipeXPage}
            recipes={recipes}
            pages={pages}
          />
          <CardsContainer currentRecipe={currentRecipe} />
          <Pagination
            pageStyle={pageStyle}
            setPageStyle={setPageStyle}
            recipeXPage={recipeXPage}
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
