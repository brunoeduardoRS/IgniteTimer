import { HeaderContent } from "./styles";
import { Timer, Scroll } from "phosphor-react"
import logoIgnite from '../../assets/Logo.svg';
import { NavLink } from "react-router-dom";
export function Header(){
    return(<HeaderContent>
        <img src={logoIgnite} alt="" />
        <nav>
            <NavLink to="/" title="timer"><Timer size={24}/></NavLink>
            <NavLink to="/history" title="histórico"><Scroll size={24}/></NavLink>
        </nav>
    </HeaderContent>)
}