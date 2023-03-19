import "./PropertyCard.scss";
import { ReactComponent as BedsIcon } from "./bedsIcon.svg";
import { ReactComponent as BathroomIcon } from "./bathIcon.svg";
import { ReactComponent as RoomIcon } from "./roomIcon.svg";


export function PropertyCard({property}) {
    
    function infoDetails(details){
        return <li className="propertyCard__info_item">

        </li>
    }
    
    return <article className="propertyCard">
        <img src={property.img} alt={property.name} className="propertyCard__img" />
        <p className="propertyCard__type">{property.type}</p>
        {property.name}
        <ul className="propertyCard__info">
            <li className="propertyCard__info_item"></li>
            <li className="propertyCard__info_item"></li>
            <li className="propertyCard__info_item"></li>
        </ul>
    </article>
}