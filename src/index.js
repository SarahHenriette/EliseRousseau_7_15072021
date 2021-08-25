  
import recipes from "./../recipes"
import CreateCardRecipe from "./CreateCardRecipe"
import SearchPrincipalBar from "./SearchPrincipalBar"
import SearchFilter from "./SearchFilter"
import FilterStateChange from "./FilterStateChange"

console.log("algo 2")

//création des cards des recettes
for (const recipe of recipes) {
    new CreateCardRecipe(recipe)
}

//Gére la recheche de la bar principal
new SearchPrincipalBar(recipes)

//Gére le changement d'état des filtres
new FilterStateChange()

new SearchFilter(recipes)