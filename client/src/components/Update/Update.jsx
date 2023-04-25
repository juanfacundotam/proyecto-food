import axios from "axios";
import React, { useEffect } from "react";
import Form from "../Form/Form";
import style from "../Update/Update.module.css";
import { getRecipesDetail } from "../../redux/actions";

import { useDispatch, useSelector } from "react-redux";
const Update = ({ handleLoadNavs, handleCloseToHome}) => {
  const dispatch = useDispatch();
  const buttonName = "Update";
  const withRecipe = true
  const { recipe } = useSelector((state) => state);



  const handleServerFunction = (recipe) => {
    console.log("entro")
    console.log(recipe)
    // axios
    //   .put(`http://localhost:3001/recipes/${recipe.id}`, recipe)
    //   .then((response) => {
    //     // Si la respuesta es exitosa, redirige a otra página
    //     if(response.data.title){
    //       alert("Receta creada correctamente");
    //       dispatch(getRecipes());
    //       handleCloseToHome()
    //     }
    //   })
    //   .catch((error) => {
    //     // Si hay un error, muestra un mensaje de error
    //     alert("La receta no pudo crearse", error);
    //   });
  };

  return (
    <div className={style.divUpdate}>
      <h1 className={style.viewTitle}>Update Recipe</h1>
      <button className={style.button} onClick={handleCloseToHome}>
        x
      </button>
      <Form
        handleLoadNavs={handleLoadNavs}
        buttonName={buttonName}
        handleServerFunction={handleServerFunction}
        recipeForUpdate={recipe}
        withRecipe={withRecipe}
      />
    </div>
  );
};

export default Update;
