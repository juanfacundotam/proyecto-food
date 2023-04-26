import style from "./Detail.module.css";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { getRecipesDetail, cleanDetail } from "../../redux/actions";
import Loading  from "../../components/Loading/Loading";

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
    if (instructions !== null) {
      if (typeof instructions === "object") {
        const arrayInstructions = Object.entries(instructions);

        const results = arrayInstructions.map((elem) => {
          return (
            <div key={elem[0]} className={style.divInstructionsItem}>
              <p className={style.instructionNumber}>{elem[0]}</p>
              <p className={style.instructionText}>{elem[1]}</p>
            </div>
          );
        });
        return results;
      }
      return (
        <div
          className={style.divInstructionsHTML}
          dangerouslySetInnerHTML={{ __html: instructions }}
        />
      );
    }
  };

  // if (
  //   !id ||
  //   !title ||
  //   !image
  //   // !healthscore ||
  //   // !summary ||
  //   // !instructions ||
  //   // !diets
  //   ) {
  //     return <div className={style.customLoader}></div>;
  //   }

  return (
    <div className={style.container}>
      {image ? (
        <>
          <div className={style.detailWall}></div>
          <div className={style.divDetail}>
            <div className={style.divTop}>
              <img src={image} alt="" className={style.image} />
              <div className={style.divTopRight}>
                <Link to={"/home"}>
                  <button className={style.button}>x</button>
                </Link>
                <h1 className={style.title}>{title}</h1>

                <p className={style.healthscore}>Health Score: {healthscore}</p>
                <div className={style.divDiets}>
                  {diets?.map((diet) => {
                    return <p key={diet}  className={style.diet}>✔{diet}</p>;
                  })}
                </div>
              </div>
            </div>
            <div className={style.divSummary}>
              <h3 className={style.summaryTitle}>Summary</h3>
              <div
                dangerouslySetInnerHTML={{ __html: summary }}
                className={style.summary}
              />
            </div>
            <div className={style.divInstructions}>
              <h3 className={style.titleInstructions}>Instructions</h3>
              {getInstructions()}
            </div>
          </div>
        </>
      ) : (
        <Loading/>
      )}
    </div>
  );
};

export default Detail;
