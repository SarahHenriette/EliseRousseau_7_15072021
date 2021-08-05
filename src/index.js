import recipes from "./../recipes"
import CreateCardRecipe from "./CreateCardRecipe"
import SearchPrincipalBar from "./SearchPrincipalBar"

console.log(recipes)

//création des cards des recettes
for (const recipe of recipes) {
    new CreateCardRecipe(recipe)
}

new SearchPrincipalBar(recipes)



