import style from "./Card.module.css";
import { Link } from "react-router-dom";
import { BsPencilSquare } from "react-icons/bs";
import { MdDelete } from "react-icons/md";
import {
  deleteRecipe,
  getRecipesDetail,
  getRecipes,
  refreshRecipes,
} from "../../redux/actions";
import { useDispatch } from "react-redux";

const Card = ({
  id,
  title,
  image,
  diets,
  healthscore,
  instructions,
  created,
  setUpdate,
  loadingFunction
}) => {
  const dispatch = useDispatch();
  let count = 0;
  const recipeToHome = {
    id,
    title,
    image,
    diets,
    healthscore,
    instructions,
    created,
  };

  const handleUpdateRecipe = async () => {
    await dispatch(getRecipesDetail(id));
    setUpdate(true);
  };

  const handleDeleteRecipe = async () => {
    let flag = confirmFunction();
    if (flag) {
      loadingFunction(true);
      await dispatch(deleteRecipe(id));
      await dispatch(getRecipes());
      loadingFunction(false);
      console.log("111111")
    }
  };

  function confirmFunction() {
    // eslint-disable-next-line no-restricted-globals
    var result = confirm("¿Estás seguro de que deseas eliminar la receta?");
    if (result == true) {
      alert("Receta eliminada correctamente");
      return true;
    } else {
      alert("La receta NO fue eliminada");
      return false;
    }
  }

  return (
    <div className={style.divCard}>
      {created && (
        <div className={style.divUpdate}>
          <BsPencilSquare
            className={style.iconUpdate}
            onClick={handleUpdateRecipe}
          />
          <MdDelete className={style.iconDelete} onClick={handleDeleteRecipe} />

          {/* <button
            className={style.btnUpdate}
            onClick={handleUpdateRecipe}
            style={{ cursor: "pointer" }}
          >
            update
          </button>
          <button
            className={style.btnDelete}
            onClick={handleDeleteRecipe}
            style={{ cursor: "pointer" }}
          >
            delete
          </button> */}
        </div>
      )}
      <img src={image} alt="Image Recipe" className={style.image} />
      <div className={style.divText}>
        <Link to={`/detail/${id}`} className={style.linkDetail}>
          {title}
        </Link>
        <div className={style.divDiets}>
          {diets?.map((diet, index) => {
            return (
              <p key={index} className={style.diet}>
                ✔{diet}
              </p>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Card;
