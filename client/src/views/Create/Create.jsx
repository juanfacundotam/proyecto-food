import axios from "axios";
import style from "./Create.module.css";
import Logo from "../../components/Logo/Logo";
import Form from "../../components/Form/Form";
import { useSelector } from "react-redux";
import { getRecipes } from "../../redux/actions";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";

const Create = ({ setLoadNavs }) => {
  const allDiets = useSelector((state) => state.diets);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  setLoadNavs(true);
  const buttonName = "Create"
  
  const handleServerFunction = (recipe) => {
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
  //*************************************************************** */
  return (
    <div className={style.divForm}>
      {allDiets.length ? (
        <>
          <div className={style.createWall}></div>
          <Logo />
          <h1 className={style.viewTitle}>Create New Recipe</h1>
          <Form setLoadNavs={setLoadNavs} buttonName={buttonName} handleServerFunction={handleServerFunction}/>
        </>
      ) : (
        <div className={style.customLoader}></div>
      )}
    </div>
  );
};

export default Create;
