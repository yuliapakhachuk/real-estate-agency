import "./Features.scss";
import {ReactComponent as LocatoinIcon} from "./LocationIcon.svg";
import {ReactComponent as ArcaIcon } from "./ArcaIcon.svg";
import {ReactComponent as FoundationIcon } from "./FoundationIcon.svg";


export function Features({features}) {
    const icons = [<LocatoinIcon/>, <ArcaIcon/>, <FoundationIcon/>];
    
    return <ul className="features">
        {features.map((feature, index) => <li key={feature.name} className="feature">
            <div className="feature__icon" >
                {icons[index]}
            </div>
            <p className="feature__name">{feature.name}</p>
            {feature.text}
        </li>)}
    </ul>
}