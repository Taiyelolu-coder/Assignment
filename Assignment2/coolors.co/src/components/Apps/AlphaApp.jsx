import "./Apps.css"






function AlphaApp (props){
    return(
        <div className="AppCard">
            <img id="image" src={props.image} alt="" />
            <h1 id="heading">{props.heading}</h1>
            <p id="paragraph">{props.text}</p>
            <div>
                <h1>{props.hover}</h1>
            </div>
        </div>
    )
}

export default AlphaApp