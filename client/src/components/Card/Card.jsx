import style from "./Card.module.css"

const Card = ({id, name, species, gender, image}) => {
    return(
        <div className={style.divCard}>
            <h1>{name}</h1>
            <p>{id}</p>
            <p>{species}</p>
            <p>{gender}</p>
            <img src={image} alt="" />
        </div>
    )
}

export default Card;
