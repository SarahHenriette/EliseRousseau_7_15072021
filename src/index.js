import recipes from "./../recipes"
import CreateCardRecipe from "./CreateCardRecipe"
let principalSearchBar = document.getElementById('principal-search')

console.log(recipes)

//création des cards des recettes
for (const recipe of recipes) {
    new CreateCardRecipe(recipe)
}


