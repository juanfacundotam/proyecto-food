import style from "./Detail.module.css";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { getRecipesDetail, cleanDetail } from "../../redux/actions";

const Detail = () => {
  const dispatch = useDispatch();
  const params = useParams();
  const { id, title, image, healthscore, summary, instructions, diets } =
    useSelector((state) => state.recipe);

  useEffect(() => {
    dispatch(getRecipesDetail(params.id));
    return () => {
      dispatch(cleanDetail());
    };
  }, []);

  console.log(title)
  if (
    !id ||
    !title ||
    !image ||
    !healthscore ||
    !summary ||
    !instructions ||
    !diets
  ) {
    return <div className={style.loading}>Loading...</div>;
  }

  return (
    
    <div className={style.container}>
        <div className={style.divDetail}>
        <Link to={"/home"}>
          <button className={style.button}>&lt;&lt;</button>
        </Link>
        <h1 className={style.title}>{title}</h1>

        <p className={style.healthscore}>health score: {healthscore}</p>
        <p className={style.summary}>{summary}</p>
        <p className={style.instruction}>{instructions}</p>
        {diets?.map((diet) => {
          return <p className={style.diet}>{diet}</p>;
        })}
        <img src={image} alt="" className={style.image}/>
      </div>
    </div>

  );
};

export default Detail;
