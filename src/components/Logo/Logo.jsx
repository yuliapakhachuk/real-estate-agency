
import PropTypes from 'prop-types';
import {ReactComponent as LogoName} from './estate__logo_name.svg';
import {ReactComponent as LogoSign} from "./estate__logo_sign.svg";
import "./Logo.scss";

export function Logo ({color, type, size}) {
        const logoColor = color === "white" ? color : "accent"; 
        const logoType = type === "column" ? type : "row";
        const logoSize = size === ("s" || "m" || "l") ? size : "s";
        
        
    return(
        <span className={`logo ${logoType}`}>
            <LogoSign className={`logo__sign ${logoColor} ${logoSize}`}/>
            <LogoName className={`logo__name ${logoColor} ${logoSize}`}/>
        </span>
    )
}


Logo.propTypes = {
    color: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    size: PropTypes.string.isRequired,
  };