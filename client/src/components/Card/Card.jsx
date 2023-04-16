import style from "./Card.module.css";
import { Link } from "react-router-dom";

const Card = ({
  id,
  title,
  image,
  healthScore,
  summary,
  instructions,
  diets,
}) => {
  return (
    <div className={style.divCard}>
      <Link to={`/detail/${id}`} className={style.linkDetail}>
        <h1>{title}</h1>
      </Link>
      {/* <p>{id}</p>
      <p>{healthScore}</p>
      <p>{summary}</p>
      <p>{instructions}</p> */}
        <img src={image} alt="" />
      {diets?.map((diet) => {
        return <p>{diet}</p>;
      })}
    </div>
  );
};

export default Card;
