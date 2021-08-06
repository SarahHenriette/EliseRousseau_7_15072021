import recipes from "./../recipes"
import CreateCardRecipe from "./CreateCardRecipe"
import SearchPrincipalBar from "./SearchPrincipalBar"

//création des cards des recettes
for (const recipe of recipes) {
    new CreateCardRecipe(recipe)
}

new SearchPrincipalBar(recipes)

