import Card from "../Card/Card";
import style from "./CardsContainer.module.css";

const CardsContainer = ({ currentRecipe, setUpdate, setRecipeUpdate, loadingFunction }) => {
  if (currentRecipe.length === 1 && currentRecipe[0].hasOwnProperty("error")) {
    return <p className={style.noResults}>No hay resultados...</p>;
  }
  return (
    <div className={style.divCardsContainer}>
      {currentRecipe?.map(
        ({ id, title, image, healthscore, summary, instructions, diets, created}) => {
          return (
            <Card
              key={id}
              id={id}
              title={title}
              image={image}
              healthscore={healthscore}
              summary={summary}
              instructions={instructions}
              diets={diets}
              created={created}
              setUpdate={setUpdate}
              setRecipeUpdate={setRecipeUpdate}
              loadingFunction={loadingFunction}
            />
          );
        }
      )}
    </div>
  );
};

export default CardsContainer;
//   const { id, title, image,healthScore, summary, instructions, diets } = response.data;
