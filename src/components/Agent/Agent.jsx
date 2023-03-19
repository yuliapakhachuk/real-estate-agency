import "./Agent.scss";

export function Agent({agent}) {
    const {name, position, photo} = agent;
    return <ul className="agent">
        <li className="agent__photo">
            <img src={photo} alt="agent"/>
        </li>
        <li className="agent__name">{name}</li>
        <li className="agent__position">{position}</li>
    </ul>
}

    //https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80
    //https://plus.unsplash.com/premium_photo-1661778994614-8f656dbf5787?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=871&q=80
    //https://images.unsplash.com/photo-1554774853-719586f82d77?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80
    //https://images.unsplash.com/photo-1556157382-97eda2d62296?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80
