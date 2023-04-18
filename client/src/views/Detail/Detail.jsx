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
  

  const getInstructions = () => {
    console.log(typeof instructions === "object")
    if(typeof instructions === "object"){
      const arrayInstructions = Object.entries(instructions);
      const results = arrayInstructions.map(elem => {

        return (<p className={style.instruction}>{`${elem[0]} -> ${elem[1]}`}</p>)
      })

      return results;
    }

    return <div dangerouslySetInnerHTML={{ __html: instructions }} />
  }


  if (
    !id ||
    !title ||
    !image
    // !healthscore ||
    // !summary ||
    // !instructions ||
    // !diets
  ) {
    return <div className={style.customLoader}></div>;
  }

  return (
    <div className={style.container}>

          <div className={style.divDetail}>
            <Link to={"/home"}>
              <button className={style.button}>&lt;&lt;</button>
            </Link>
            <h1 className={style.title}>{title}</h1>

            <p className={style.healthscore}>health score: {healthscore}</p>
            <div dangerouslySetInnerHTML={{ __html: summary }} />

            {getInstructions()}
            {diets?.map((diet) => {
              return <p className={style.diet}>{diet}</p>;
            })}
            <img src={image} alt="" className={style.image} />
          </div>
    </div>
  );
};

export default Detail;
