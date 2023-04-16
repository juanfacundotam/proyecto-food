import Card from "../Card/Card";
import style from "./CardsContainer.module.css"
import { useSelector } from "react-redux";

const CardsContainer = () => {
  const recipes = useSelector(state => state.recipes)
  
  console.log(recipes)
  

  return (
    <div className={style.divCardsContainer}>
      {recipes?.map(({ id, title, image,healthScore, summary, instructions, diets }) => {
        return <Card 
            key={id}
            id={id}
            title={title}
            image={image}
            healthScore={healthScore}
            summary={summary}
            instructions={instructions}
            diets={diets}
        />;
      })}
    </div>
  );
};

export default CardsContainer;
//   const { id, title, image,healthScore, summary, instructions, diets } = response.data;