import "./Hero.scss";
import { Logo } from "../Logo/Logo";

export function Hero() {
    return <section className="hero__section">
        <Logo color="accent" type="column" size="m"/>
        <h1>We're here to help you find a new home.</h1>
    </section>
}