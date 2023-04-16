import style from "./Form.module.css";
import { useState } from "react";

const Form = () => {
  const [recipe, setRecipe] = useState({
    title: "",
    healthscore: "",
    summary: "",
    instructions: "",
    image: "",
    diets: "",
  });
  const [errors, setErrors] = useState({
    title: "",
    healthscore: "",
    summary: "",
    instructions: "",
    image: "",
    diets: "",
  });

  const validation = () => {

  };
  
  const handleInputChange = (event) => {
    const property = event.target.name;
    const value = event.target.value;

    setRecipe({ ...recipe, [property]: value });
   //  setErrors(validation({ ...recipe, [property]: value }));
  };

  const handleSubmit = (event) => {
   event.preventDefault();
   console.log("al tocar el boton de submit")
  }

  return (
    <div className={style.divForm} onSubmit={handleSubmit}>
      <div className={style.formWall}></div>

      <form onSubmit={handleSubmit} className={style.form}>
        <div className={style.divInputs}>
          <label htmlFor="title" className={style.formLabel}>Title:</label>
          <input
            className={errors.title ? style.error : style.success}
            type="text"
            name="title"
            value={recipe.title}
            onChange={handleInputChange}
          />
        </div>
        <div className={style.divInputs}>
          <label htmlFor="healthscore" className={style.formLabel}>Health-Score:</label>
          <input
            className={errors.healthscore ? style.error : style.success}
            type="text"
            name="healthscore"
            value={recipe.healthscore}
            onChange={handleInputChange}
          />
        </div>
        <div className={style.divInputs}>
          <label htmlFor="image" className={style.formLabel}>URL-image:</label>
          <input
            className={errors.image ? style.error : style.success}
            type="text"
            name="image"
            value={recipe.image}
            onChange={handleInputChange}
          />
        </div>
        <div className={style.divTextArea}>
          <label htmlFor="summary" className={style.formLabel}>Summary:</label>
          <textarea
            className={errors.summary ? style.error : style.success}
            type="text"
            name="summary"
            value={recipe.summary}
            onChange={handleInputChange}
          />
        </div>
        <div className={style.divTextArea}>
          <label htmlFor="instructions" className={style.formLabel}>Instructions:</label>
          <textarea
            className={errors.instructions ? style.error : style.success}
            type="text"
            name="instructions"
            value={recipe.instructions}
            onChange={handleInputChange}
          />
        </div>
        <div className={style.divInputs}>
          <label htmlFor="diets" className={style.formLabel}>Diets:</label>
          <input
            className={errors.diets ? style.error : style.success}
            type="text"
            name="diets"
            value={recipe.diets}
            onChange={handleInputChange}
          />
        </div>
        <button className={style.btnSubmit} type="submit">Create</button>
      </form>
    </div>
  );
};

export default Form;

// const dispatch = useDispatch();
// const [userData, setUserData] = React.useState({
//     username:'',
//     password:''
// });
// const [errors, setErrors] = React.useState({
//     username: '',
//     password:''
// });

// useEffect(()=>{
//     dispatch(resetFavorites);
// },[])

// const handleInputChange = (event) => {
//     const property = event.target.name;
//     const value = event.target.value

//     setUserData({...userData, [property]: value});

//     setErrors(
//         validation({...userData, [property]: value})
//     )

//     // validation ({...userData, [property]: value}, errors, setErrors);
// };

// const handleSubmit = (event) => {
//     event.preventDefault();
//     props.login(userData);
// }

// return (
//     <motion.div initial={{opacity: 0}}
//     animate={{y: "30px", opacity:1}}
//     transition={{duration:0.8}}>

//     <form className={style.form}  onSubmit={handleSubmit}>
//         <p style={{color: "yellow", fontSize: "15px", textAlign: "center"}}>Crea un usuario falso para probar la App</p>
//         <h1>Rick and Morty App</h1>
//         <div className={style.divUser}>
//         <label htmlFor="username">UserName</label>
//         <input className={errors.username ? style.error : style.success } type="text" name="username" value={userData.username} onChange={handleInputChange}/>
//         </div>
//         <div className={style.divPass}>
//         <label htmlFor="password">Password</label>
//         <input className={errors.password ? style.error : style.success } type="password" name="password" value={userData.password} onChange={handleInputChange}/>

//         </div>
//         <button className={style.button} type="submit">Login</button>
//         <Link to={"/register"} className={style.linkBtn}>
//         Register Now
//         </Link>
//     </form>
//     <div  className={ errors.username === '' && errors.password === '' ? style.divErroresVacio : style.divErrores }>
//         <p>{errors.username && errors.username}</p>
//         <p>{errors.password && errors.password}</p>
//     </div>
