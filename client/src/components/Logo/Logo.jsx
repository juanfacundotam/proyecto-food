import logo from "../../assets/logo.png"
import style from "../Logo/Logo.module.css"
const Logo = () => {
return(
    <div className={style.divLogo}>
    <img src={logo} alt="" className={style.logo}/>
    <h1 className={style.logoTitle}>Soy Henry</h1>
    <p className={style.logoParrafo}>Juan Facundo Tam</p>
    </div>
)
}

export default Logo;