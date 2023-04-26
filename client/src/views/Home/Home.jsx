import CardsContainer from "../../components/CardsContainer/CardsContainer";
import style from "./Home.module.css";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Logo from "../../components/Logo/Logo";
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
import Update from "../../components/Update/Update";
import Loading  from "../../components/Loading/Loading";

const Home = ({ handleLoadNavs }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { recipes } = useSelector((state) => state);
  const allDiets = useSelector((state) => state.diets);
  const [search, setSearch] = useState("");
  const [update, setUpdate] = useState(false);
  const [recipeUpdate, setRecipeUpdate] = useState({});
  const [loading, setLoading] = useState(false);

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



  useEffect(() => {
    
    if (!recipes.length) {
      dispatch(getRecipes());
    } else {
      dispatch(refreshRecipes());
    }
    if (!allDiets.length) {
      dispatch(getAllDiets());
    }

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
    setSearch("");
    // Reinicia los estados de los selectores
    // setOrder("");
    // setHealthScore("");
    // setFilterDiets("");
    // setFilterApiBdd("");
  };
  
  const handleSearchChange = (event) => {
    setSearch(event.target.value);
  };
  const handleBtnSearch = () => {
    dispatch(searchByQuery(search));
  };
  
  const handleCloseToHome = () => {
    setUpdate(false)
  }
  
  const loadingFunction = (bool) => {
    setLoading(bool)
  }

  
  return (
    <div className={style.divHome} id="idHome">
      {recipes.length && !loading? (
        <>
          {update && allDiets.length ? (<>
            <div className={style.homeWall}></div>
            <Logo />
            <Update handleCloseToHome={handleCloseToHome}  recipeUpdate={recipeUpdate}/>
          </>
            ) : (
              <>
              
              <div className={style.homeWall}></div>
              <Logo />
              <div className={style.divSelects}>
                <div className={style.divSearch}>
                  <input
                    type="text"
                    name="search"
                    value={search}
                    onChange={handleSearchChange}
                    className={style.searchBar}
                  />
                  <button onClick={handleBtnSearch} className={style.btnSearch}>
                    Buscar
                  </button>
                </div>
                <div className={style.divSelect12}>
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
                <div className={style.divSelect34}>
                  <select
                    onChange={handleFilterApiBdd}
                    className={style.select4}
                    defaultValue="FilterApiBdd"
                    id="select4"
                  >
                    <option disabled="disabled" value="FilterApiBdd">
                      Filter By Created
                    </option>
                    <option value="All">All</option>
                    <option value="API">Aplicación</option>
                    <option value="BDD">Creadas</option>
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
                      allDiets.map((diet, index) => (
                        <option key={index} value={diet.name}>
                          {diet.name}
                        </option>
                      ))}
                  </select>
                </div>
                <button onClick={handleCleanFilters} className={style.btnClean}>
                  Limpiar Filtros
                </button>
              </div>
              <Pagination
                pageStyle={pageStyle}
                setPageStyle={setPageStyle}
                recipeXPage={recipeXPage}
                recipes={recipes}
                pages={pages}
              />
              <CardsContainer
                currentRecipe={currentRecipe}
                setUpdate={setUpdate}
                setRecipeUpdate={setRecipeUpdate}
                loadingFunction={loadingFunction}
              />
              <Pagination
                pageStyle={pageStyle}
                setPageStyle={setPageStyle}
                recipeXPage={recipeXPage}
                recipes={recipes}
                pages={pages}
              />
            </>
          )}
        </>
      ) : (
        <div className={style.divLoading}>
          <Loading/>
        </div>
      )}
    </div>
  );
};

export default Home;
