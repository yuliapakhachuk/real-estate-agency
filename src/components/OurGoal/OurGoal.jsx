import "./OurGoal.scss";
import { Section } from "../Section/Section";
import { Title } from "../Title/Title";
import { Agent } from "../Agent/Agent";

export function OurGoal({ ourGoal }) {
    const {title, secondaryTitle, text, manager} = ourGoal;
    return <Section bgColor="#FAFAFC">
        <div className="title__info">
            <Title>
                {title}
                <span className="secondaryTitile">
                    {secondaryTitle}
                </span>
            </Title>
        <p className="text">{text}</p>
        <Agent agent={manager}/>
        </div>
    </Section>
}