import "./Menu.scss"

export function Menu({ options }) {
    return (
        <nav className="menu">
        {options.map(option => (
            <a href={`#${option}`} key={option} className="menu__option">
            {option}
            </a>
        ))}
        </nav>
    );
}
