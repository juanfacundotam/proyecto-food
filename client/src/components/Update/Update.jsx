import axios from "axios";
import React, { useEffect } from "react";
import Form from "../Form/Form";
import style from "../Update/Update.module.css";
import { getRecipes } from "../../redux/actions";

import { useDispatch } from "react-redux";
const Update = ({ handleLoadNavs, handleCloseToHome }) => {
  const dispatch = useDispatch();
  const buttonName = "Update";
  const withRecipe = true;

 

  const handleServerFunction = (recipe, id) => {
    axios
      .put(`http://localhost:3001/recipes/${id}`, recipe)
      .then(function (response) {
        if (response.data.recipeUpdate.title) {
          console.log("modifico")
          dispatch(getRecipes());
          handleCloseToHome();
          alert("Receta modificada correctamente");
          // eslint-disable-next-line no-restricted-globals
          
        }
      })
      .catch(function (error) {
        alert("La receta NO pudo modificarse", error);
      });
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
        withRecipe={withRecipe}
      />
    </div>
  );
};

export default Update;
