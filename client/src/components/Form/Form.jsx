import style from "./Form.module.css";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import validation from "./validation";

const Form = ({
  buttonName,
  handleServerFunction,
  withRecipe,
}) => {
  const navigate = useNavigate();
  const allDiets = useSelector((state) => state.diets);
  const recipeSelected = useSelector((state) => state.recipe);
  const dispatch = useDispatch();
  let [count, setCount] = useState(1);
  

  
  let obj = {};
  if (!withRecipe) {
    obj = {
      title: "",
      healthscore: "",
      summary: "",
      instructions: {1: ""},
      image: "",
      diets: [],
    };
  } else {
    obj = {
      title: recipeSelected.title,
      healthscore: recipeSelected.healthscore,
      summary: recipeSelected.summary,
      instructions: recipeSelected.instructions,
      image: recipeSelected.image,
      diets: recipeSelected.diets,
    };
  }
  
  const [recipe, setRecipe] = useState(obj);
  const [errors, setErrors] = useState({
    title: "",
    healthscore: "",
    summary: "",
    instructions: "",
    image: "",
    diets: [],
  });
  
  
  
  useEffect(() => {
    setErrors(validation({ ...recipe}));
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
    
    setErrors(validation({ ...recipe, [property]: value }));
  };
  
  const handleInstructionsChange = (event) => {
    const property = event.target.name;
    const value = event.target.value;
    
    const updatedInstructions = { ...recipe.instructions, [property]: value };
    setRecipe({ ...recipe, instructions: updatedInstructions });
    setErrors(validation({ ...recipe, instructions: updatedInstructions }));
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
    setRecipe({ ...recipe, diets: newDiets })
  };
  


  const handleSubmit = async (event) => {
    event.preventDefault();
    handleServerFunction(recipe, recipeSelected.id);
  };
  
  //PRINT HTML INSTRUCTIONS AND DIETS **************************************
  
  const printInstruction = () => {
    const arrayInstructions = Object.entries(recipe.instructions);
    
    const newInstructions = arrayInstructions.map((elem) => {
      return (
        <div key={elem[0]} className={style.divItemInstructions} >
          <label htmlFor="numeber">{elem[0]}</label>
          <textarea
            className={
              errors.instructions !== "" && errors.instructions === undefined
              ? style.textAreaSuccess
              : style.textAreaError
            }
            type="text"
            name={elem[0]}
            value={recipe.instructions[elem[0]]}
            onChange={handleInstructionsChange}
            id={elem[0]}
            />
        </div>
      );
    });
    return newInstructions;
  };


  const printCheckDiet = () => {
    const printDiets = allDiets.map((elem) => {
      return (
        <div key={elem.id} className={style.divItemDiet}>
          <label className={style.labelDiet}>{elem.name}</label>
          <input
            type="checkbox"
            name={elem.name}
            value={elem.name}
            className={style.dietInput}
            checked={ recipe.diets.includes(elem.name) ? true : false}
            onClick={dietHandler}
            readOnly
            />
        </div>
      );
    });

    return printDiets;
  };

  
  return (
    <>
      <form onSubmit={handleSubmit} className={style.form}>
        <div className={style.divInputs}>
          <label htmlFor="title" className={style.formLabel}>
            Title
          </label>

          <input
            className={
              errors.title !== "" && errors.title === undefined
              ? style.success
              : style.error
            }
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
            className={
              errors.image !== "" && errors.image === undefined
                ? style.success
                : style.error
            }
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
              className={
                errors.healthscore !== "" && errors.healthscore === undefined
                ? style.successHealth
                : style.errorHealth
              }
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
              errors.summary !== "" && errors.summary === undefined
              ? style.textAreaSuccess
              : style.textAreaError
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
            {/* {withRecipe && printInstructionsWhit()} */}
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
            errors.title || errors.healthscore || errors.summary || errors.image || errors.instructions
          }
        >
          {buttonName}
        </button>
      </form>
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
        {errors.title && (
          <p className={style.errorsParagraph}>
            {errors.title && errors.title}
          </p>
        )}
        {errors.healthscore && (
          <p className={style.errorsParagraph}>
            {errors.healthscore && errors.healthscore}
          </p>
        )}
        {errors.summary && (
          <p className={style.errorsParagraph}>
            {errors.summary && errors.summary}
          </p>
        )}
        {errors.instructions && (
          <p className={style.errorsParagraph}>
            {errors.instructions && errors.instructions}
          </p>
        )}
        {errors.image && (
          <p className={style.errorsParagraph}>
            {errors.image && errors.image}
          </p>
        )}
      </div>
    </>
  );
};

export default Form;
