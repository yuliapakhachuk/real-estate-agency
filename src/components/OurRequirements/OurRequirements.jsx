import "./OurRequirements.scss";
import image from "./requrements.png";
import { Section } from "../Section/Section";
import { Title } from "../Title/Title";

import { Features } from "../Features/Features";

export function OurRequirements({ourRequirements}){
    const {title, secondaryTitle, text, features} = ourRequirements;
    return <>
    <Section>
        <Title align="center">{title}</Title>
        <h3 className="requirements__secondary">{secondaryTitle}</h3>
        <p className="requirements__text">{text}</p>
        <div className="requirements__wrapper">
            <img src={image} alt="requirements" className="requirements__img"/>
            <Features features={features}/>
        </div>
    </Section>
    <div className="prewiev__img"></div>
    </>
}