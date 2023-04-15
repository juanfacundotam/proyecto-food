import Card from "../Card/Card";
import style from "./CardsContainer.module.css"
import { useSelector } from "react-redux";

const CardsContainer = () => {
  const cardsArray = useSelector(state => state.characters) 

  return (
    <div className={style.divCardsContainer}>
      {cardsArray.map((char) => {
        return <Card 
            key={char.id}
            id={char.id}
            name={char.name}
            species={char.species}
            gender={char.gender}
            image={char.image}
        />;
      })}
    </div>
  );
};

export default CardsContainer;
