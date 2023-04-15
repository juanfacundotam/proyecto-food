import {NavLink} from "react-router-dom";
import style from "./NavBar.module.css"
const NavBar = () => {
return(
    <div className={style.divNavBar}>
        <NavLink to={"/home"} className={({ isActive }) =>
            isActive ? style.active : style.disable}>Home</NavLink>
        <NavLink to={"/create"} className={({ isActive }) =>
            isActive ? style.active : style.disable}>Create</NavLink>
        <NavLink to={"/about"} className={({ isActive }) =>
            isActive ? style.active : style.disable}>About</NavLink>
    </div>
)
}

export default NavBar;