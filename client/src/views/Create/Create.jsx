import axios from "axios";
import style from "./Create.module.css";
import Logo from "../../components/Logo/Logo";
import Form from "../../components/Form/Form";
import { useSelector } from "react-redux";
import { getRecipes, getAllDiets } from "../../redux/actions";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import Loading  from "../../components/Loading/Loading";

const Create = () => {
  const allDiets = useSelector((state) => state.diets);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const buttonName = "Create";
  const withRecipe = false;
  
  const handleServerFunction = (recipe, id) => {
    axios
      .post("http://localhost:3001/recipes", recipe)
      .then((response) => {
        // Si la respuesta es exitosa, redirige a otra página
        if(response.data.title){
          alert("Receta creada correctamente");
          dispatch(getRecipes());
          navigate("/home");
        }
      })
      .catch((error) => {
        // Si hay un error, muestra un mensaje de error
        alert("La receta no pudo crearse", error);
      });
  }

  useEffect(() => {
    dispatch(getAllDiets());
  }, [])
  //*************************************************************** */
  return (
    <div className={style.divForm}>
      {allDiets.length ? (
        <>
          <div className={style.createWall}></div>
          <Logo />
          <h1 className={style.viewTitle}>Create New Recipe</h1>
          <Form buttonName={buttonName} handleServerFunction={handleServerFunction} withRecipe={withRecipe}/>
        </>
      ) : (
        <Loading/>
      )}
    </div>
  );
};

export default Create;
