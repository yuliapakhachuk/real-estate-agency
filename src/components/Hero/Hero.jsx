import "./Hero.scss";
import { Logo } from "../Logo/Logo";
import {ReactComponent as HeroArrow} from "./hero_arrow.svg";


export function Hero() {
    return <section className="hero">
        <Logo color="accent" type="column" size="m"/>
        <h1>We're here to help you find a new home.</h1>
        <a href="http://localhost:3000/" className="hero__arrow"><HeroArrow/></a>
    </section>
}