import style from "./Card.module.css";
import { Link } from "react-router-dom";

const Card = ({ id, title, image, diets }) => {
  let count = 0
  return (
    <div className={style.divCard}>
      <img src={image} alt="Image Recipe" className={style.image} />
      <div className={style.divText}>
        <Link to={`/detail/${id}`} className={style.linkDetail}>
          {title}
        </Link>
        <div className={style.divDiets}>
          
          {diets?.map((diet) => {
            return <p key={++count} className={style.diet}>&lt;{diet}&gt;</p>;
          })}
        </div>

      </div>
    </div>
  );
};

export default Card;
