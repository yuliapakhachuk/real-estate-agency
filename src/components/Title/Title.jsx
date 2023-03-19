import "./Title.scss";

export function Title({ children, align }) {
    return <h2 className="section__title"  style={{textAlign: align}}>{children}</h2>;
}
