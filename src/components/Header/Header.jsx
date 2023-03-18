import "./Header.scss"
import { Logo } from "../Logo/Logo";
import { Wrapper } from "../Wrapper/Wrapper";
import { Menu } from "../Menu/Menu";
import data from "../../data.json";

export function Header() {
    return(
        <header>
            <Wrapper>
            <Logo color="accent" type="row" size="s"/>
            <Menu options={data.menu}/>
            </Wrapper>
        </header>
    )
}