import axios from "axios";
import style from "./Form.module.css";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { getAllDiets } from "../../redux/actions";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import validation from "./validation";

const Form = () => {
  const navigate = useNavigate();
  const allDiets = useSelector((state) => state.diets);
  let [count, setCount] = useState(1);

  const [recipe, setRecipe] = useState({
    title: "",
    healthscore: "",
    summary: "",
    instructions: { 1: "" },
    image: "",
    diets: [],
  });
  const [errors, setErrors] = useState({
    title: "",
    healthscore: "",
    summary: "",
    instructions: "",
    image: "",
    diets: [],
  });

  const dispatch = useDispatch();
  
  useEffect(() => {
    
    if (!allDiets.length) {
      dispatch(getAllDiets());
    }
  }, [dispatch]);

  //HANDLERS *********************************************************************************
  const handleInputChange = (event) => {
    const property = event.target.name;
    const value = event.target.value;
    if (property === "healthscore") {
      setRecipe({ ...recipe, [property]: Number(value) });
    } else {
      setRecipe({ ...recipe, [property]: value });
    }
    const recipeCompleted = { ...recipe, [property]: value };
    console.log(recipeCompleted);
    setErrors(validation({ ...recipe, [property]: value }));
  };

  const handleInstructionsChange = (event) => {
    const property = event.target.name;
    const value = event.target.value;
    // console.log(property)
    const updatedInstructions = { ...recipe.instructions, [property]: value };
    // console.log("Updated instructions:", updatedInstructions);
    setRecipe({ ...recipe, instructions: updatedInstructions });
    setErrors(validation({ ...recipe, instructions: updatedInstructions }));

    // const recipeCompleted = { ...recipe, [property]: value}
    // console.log(recipeCompleted)

    // setErrors(validation({ ...recipe, ...(recipe.instructions[property] = value) }));
  };

  const handleAddInstruction = (event) => {
    event.preventDefault();
    if (count < 10) {
      setCount(++count);
      setRecipe({ ...recipe, ...(recipe.instructions[count] = "") });
    }
    setErrors(validation({ ...recipe }));
  };
  const handleDelInstruction = (event) => {
    event.preventDefault();
    if (count !== 1) {
      setRecipe({ ...recipe, ...delete recipe.instructions[count] });
      setCount(--count);
    }

    setErrors(validation({ ...recipe }));
  };

  const dietHandler = (event) => {
    const name = event.target.name;
    const checked = event.target.checked;
    const newDiets = checked
      ? [...recipe.diets, name]
      : recipe.diets.filter((diet) => diet !== name);
    setRecipe({ ...recipe, diets: newDiets });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    axios
      .post("http://localhost:3001/recipes", recipe)
      .then((response) => {
        // Si la respuesta es exitosa, redirige a otra página
        alert("Receta creada correctamente");
        navigate("/home");
      })
      .catch((error) => {
        // Si hay un error, muestra un mensaje de error
        alert("La receta no pudo crearse", error);
      });
    setRecipe({
      title: "",
      healthscore: "",
      summary: "",
      instructions: { 1: "" },
      image: "",
      diets: [],
    });
  };

  //PRINT HTML INSTRUCTIONS AND DIETS **************************************
  // let isInstructionsComplete = Object.values(errors.instructions)
  // .every((instruction) => instruction !== "");

  // if (errors.instructions[0] === undefined) {
  //   console.log(errors.instructions[0]);

  // } else {
  //   console.log("La prop tiene algo");

  // }
  // console.log(isInstructionsComplete)
  // console.log(errors.healthscore)

  const printInstruction = () => {
    const arrayInstructions = Object.entries(recipe.instructions);
    const newInstructions = arrayInstructions.map((elem) => {
      return (
        <div className={style.divItemInstructions}>
          <label htmlFor="numeber">{elem[0]}</label>
          <textarea
            // className={`${style.instructionText} ${isInstructionsComplete[0] ? style.textAreaSuccess : style.textAreaError }`}
            className={
              errors.instructions !== "" && errors.instructions === undefined ? style.textAreaSuccess : style.textAreaError
            }
            type="text"
            name={elem[0]}
            value={recipe.instructions[elem[1]]}
            onChange={handleInstructionsChange}
          />
        </div>
      );
    });
    return newInstructions;
  };

  const printCheckDiet = () => {
    const printDiets = allDiets.map((elem) => {
      return (
        <div className={style.divItemDiet}>
          <label className={style.labelDiet}>{elem.name}</label>
          <input
            type="checkbox"
            name={elem.name}
            value={elem.name}
            className={style.dietInput}
            onClick={dietHandler}
          />
        </div>
      );
    });
    return printDiets;
  };
  //*************************************************************** */

  return (
    <div className={style.divForm}>
      {allDiets.length ? (
        <>
          <div className={style.formWall}></div>
          <form onSubmit={handleSubmit} className={style.form}>
            <div className={style.divInputs}>
              <label htmlFor="title" className={style.formLabel}>
                Title
              </label>

              <input
                className={errors.title !== "" && errors.title === undefined? style.success : style.error}
                type="text"
                name="title"
                value={recipe.title}
                onChange={handleInputChange}
              />
            </div>
            <div className={style.divInputs}>
              <label htmlFor="image" className={style.formLabel}>
                URL-image
              </label>
              <input
                className={errors.image !== "" && errors.image === undefined? style.success : style.error}
                type="text"
                name="image"
                value={recipe.image}
                onChange={handleInputChange}
              />
            </div>
            <div className={style.divInputs}>
              <div className={style.divHealth}>
                <label htmlFor="healthscore" className={style.formLabel}>
                  Health-Score (1-100)
                </label>
                <input
                  className={errors.healthscore !== "" && errors.healthscore === undefined? style.successHealth : style.errorHealth}
                  // className={errors.healthscore ? style.error : style.success}
                  type="number"
                  name="healthscore"
                  value={recipe.healthscore}
                  onChange={handleInputChange}
                />
              </div>
            </div>
            <div className={style.divTextArea}>
              <label htmlFor="summary" className={style.formLabel}>
                Summary
              </label>
              <textarea
                className={
                  errors.summary !== "" && errors.summary === undefined ? style.textAreaSuccess : style.textAreaError
                }
                type="text"
                name="summary"
                value={recipe.summary}
                onChange={handleInputChange}
              />
            </div>
            <div className={style.divTextArea}>
              <div className={style.divLabelInstructions}>
                <label htmlFor="instructions" className={style.formLabel}>
                  Instructions
                </label>
                <button className={style.btnAdd} onClick={handleAddInstruction}>
                  +
                </button>
                <button className={style.btnDel} onClick={handleDelInstruction}>
                  -
                </button>
              </div>

              {printInstruction()}
            </div>

            <div className={style.divDiets}>
              <label htmlFor="diets" className={style.formLabel}>
                Diets
              </label>

              {printCheckDiet()}
            </div>

            <button
              className={style.btnSubmit}
              type="submit"
              disabled={
                errors.title ||
                errors.healthscore ||
                errors.summary ||
                errors.image
              }
            >Create</button>
            <div
              className={
                errors.title === undefined &&
                errors.healthscore === undefined &&
                errors.summary === undefined &&
                errors.image === undefined &&
                errors.instructions === undefined
                  ? style.divErroresVacio
                  : style.divErrores
              }
            >
              {errors.title &&
              <p className={style.errorsParagraph}>
                {errors.title && errors.title}
              </p>
              }
              {errors.healthscore &&
              <p className={style.errorsParagraph}>
                {console.log(errors.healthscore)}
                {errors.healthscore && errors.healthscore}
              </p>
              }
              {errors.summary &&
              <p className={style.errorsParagraph}>
                {errors.summary && errors.summary}
              </p>
              }
              {errors.instructions &&
              <p className={style.errorsParagraph}>
                {errors.instructions && errors.instructions}
              </p>
              }
              {errors.image &&
              <p className={style.errorsParagraph}>
                {errors.image && errors.image}
              </p>
              }

            </div>
          </form>
        </>
      ) : (
        <div className={style.customLoader}></div>
      )}
    </div>
  );
};

export default Form;
