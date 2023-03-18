import "./Section.scss";
import { Wrapper } from "../Wrapper/Wrapper";

export function Section({children, bgColor}) {
    return <section className="section" 
    style={{backgroundColor: bgColor}}
     >
        <Wrapper>
            {children}
        </Wrapper>
    </section>
}