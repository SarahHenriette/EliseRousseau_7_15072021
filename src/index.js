import recipes from "./../recipes"
import CreateCardRecipe from "./CreateCardRecipe"
import SearchPrincipalBar from "./SearchPrincipalBar" 

for (const recipe of recipes) {
    new CreateCardRecipe(recipe)
}

new SearchPrincipalBar(recipes)

