import {recipesData} from "./recipedata.jsx"
import Card from "./Card.jsx";

const Board = ({filter}) => {
    let filteredRecipes = recipesData;

    switch (filter) {
        case "Dessert":
            filteredRecipes = recipesData.filter(
                recipe => recipe.foodType === "Dessert"
            );
            break;

        case "Savory":
            filteredRecipes = recipesData.filter(
                recipe => recipe.foodType === "Savory"
            );
            break;

        case "Easy":
            filteredRecipes = recipesData.filter(
                recipe => recipe.difficulty.includes("Easy")
            );
            break;

        case "Medium":
            filteredRecipes = recipesData.filter(
                recipe => recipe.difficulty.includes("Medium")
            );
            break;

        case "Hard":
            filteredRecipes = recipesData.filter(
                recipe => recipe.difficulty.includes("Hard")
            );
            break;

        case "15min":
            filteredRecipes = recipesData.filter(
                recipe => parseInt(recipe.prepTime) < 15
            );
            break;

        case "30min":
            filteredRecipes = recipesData.filter(recipe => {
                const time = parseInt(recipe.prepTime);
                return time >= 15 && time <= 30;
            });
            break;

        case "longmin":
                filteredRecipes = recipesData.filter(
                recipe => parseInt(recipe.prepTime) > 30
            );
            break;

        default:
            filteredRecipes = recipesData;
    }
    return (
        <div className="board">
            {filteredRecipes.map((recipe) => (
                <Card 
                key={recipe.id}
                recipe={recipe.name}
                prepTime={recipe.prepTime}
                difficulty={recipe.difficulty}
                ingredients={recipe.ingredients}
                foodType={recipe.foodType}
                picturePath={recipe.picturePath}
                recipeUrl={recipe.recipeUrl}
                />
            ))}
        </div>
    )
}

export default Board;

