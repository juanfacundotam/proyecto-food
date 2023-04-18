import axios from "axios";
import style from "./Form.module.css";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { getAllDiets } from "../../redux/actions";
import { useDispatch } from "react-redux";
const Form = () => {
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
    instructions: { 1: "asdasdasd", 2: "poner albaca", 3: "poner salsa" },
    image: "",
    diets: [1],
  });
  let [count, setCount] = useState(1);
  //useEffect y traer las dietas de redux
  // guardar las dietas en el redux al entrar en Home, dispatch getDiets con axios al server ###########
  //crear en el estado inicial una propiedad diets

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllDiets());
  }, [dispatch]);

  const allDiets = useSelector((state) => state.diets);

  const validation = () => {};

  const handleInputChange = (event) => {
    const property = event.target.name;
    const value = event.target.value;
    if (property === "healthscore") {
      setRecipe({ ...recipe, [property]: Number(value) });
    } else {
      setRecipe({ ...recipe, [property]: value });
    }
    //  setErrors(validation({ ...recipe, [property]: value }));
  };

  const handleInstructionsChange = (event) => {
    const property = event.target.name;
    const value = event.target.value;
    setRecipe({
      ...recipe,
      instructions: { ...recipe.instructions, [property]: value },
    });
  };

  const addInstructionHandler = (event) => {
    event.preventDefault();
    if (count < 10) {
      setCount(++count);
      setRecipe({ ...recipe, ...(recipe.instructions[count] = "") });
      console.log(recipe.instructions);
    }
  };
  const delInstructionHandler = (event) => {
    event.preventDefault();
    if (count !== 1) {
      setRecipe({ ...recipe, ...delete recipe.instructions[count] });
      setCount(--count);
    }
    console.log(recipe.instructions);
  };

  const dietHandler = (event) => {
    const name = event.target.name;
    const checked = event.target.checked;
    const newDiets = checked
      ? [...recipe.diets, name]
      : recipe.diets.filter((diet) => diet !== name);
    setRecipe({ ...recipe, diets: newDiets });
  };

  const printInstruction = () => {
    const arrayInstructions = Object.entries(recipe.instructions);
    const newInstructions = arrayInstructions.map((elem) => {
      return (
        <div className={style.divItemInstructions}>
          <label htmlFor="numeber">{elem[0]}</label>
          <textarea
            className={style.instructionText}
            // className={errors.instructions ? style.error : style.success}
            type="text"
            name={elem[0]}
            value={recipe.instructions[elem[0]]}
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
          <label className={style.labelDiet}>{elem}</label>
          <input
            type="checkbox"
            name={elem}
            value={elem}
            className={style.dietInput}
            onClick={dietHandler}
          />
        </div>
      );
    });
    return printDiets;
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    console.log(recipe);
    axios.post("http://localhost:3001/recipes", recipe);
    setRecipe({
      title: "",
      healthscore: "",
      summary: "",
      instructions: { 1: "" },
      image: "",
      diets: [],
    });
  };

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
                className={errors.title ? style.error : style.success}
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
                className={errors.image ? style.error : style.success}
                type="text"
                name="image"
                value={recipe.image}
                onChange={handleInputChange}
              />
            </div>
            <div className={style.divInputs}>
              <div className={style.divHealth}>
                <label htmlFor="healthscore" className={style.formLabel}>
                  Health-Score (0-100)
                </label>
                <input
                  className={style.healthInput}
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
                  errors.summary ? style.summaryError : style.summarySuccess
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
                <button
                  className={style.btnAdd}
                  onClick={addInstructionHandler}
                >
                  +
                </button>
                <button
                  className={style.btnDel}
                  onClick={delInstructionHandler}
                >
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

            <button className={style.btnSubmit} type="submit">
              Create
            </button>
          </form>
        </>
      ) : (
        <div class="custom-loader">loading</div>
      )}
    </div>
  );
};

export default Form;
