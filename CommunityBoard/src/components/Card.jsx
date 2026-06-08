const Card = (props) => {
    return (
        <div className="card" style={{backgroundImage: `url(${props.picturePath})`}}>
            <div className="overlay">
                <h2 className="recipeTitle">{props.recipe}</h2>
                <h4>⏱️ {props.prepTime}</h4>
                <h4>{props.difficulty}</h4>
                <h4>Ingredients: {props.ingredients}</h4>
                <h6>{props.foodType}</h6>
                <button className="recipeBtn" onClick={() => window.open(props.recipeUrl, "_blank")}>See Recipe</button>
            </div>
        </div>
    )
}


export default Card;