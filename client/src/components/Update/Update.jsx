import axios from "axios";
import React, { useEffect } from "react";
import Form from "../Form/Form";
import style from "../Update/Update.module.css";
import { getRecipes, getRecipesDetail } from "../../redux/actions";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
const Update = ({setLoadNavs, setUpdate, recipeUpdate}) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const buttonName = "Update";
  const {recipe} = useSelector((state) => state)
 useEffect(()=> {
   dispatch(getRecipesDetail(recipeUpdate.id))
 }, [])

  const handleServerFunction = () => {
    console.log(recipe)
    // axios
    //   .put(`http://localhost:3001/recipes/${recipe.id}`, recipe)
    //   .then((response) => {
    //     // Si la respuesta es exitosa, redirige a otra página
    //     if(response.data.title){
    //       alert("Receta creada correctamente");
    //       dispatch(getRecipes());
    //       setUpdate(false)
    //     }
    //   })
    //   .catch((error) => {
    //     // Si hay un error, muestra un mensaje de error
    //     alert("La receta no pudo crearse", error);
    //   });
  }
  return (
    <>
      <h1 className={style.viewTitle}>Update Recipe</h1>
      <Form setLoadNavs={setLoadNavs} buttonName={buttonName} handleServerFunction={handleServerFunction} recipeForUpdate={recipe}/>
    </>
  );
};

export default Update;
