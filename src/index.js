import recipes from "./../recipes"
import CreateCardRecipe from "./CreateCardRecipe"
import FilterStateChange from "./FilterStateChange"

console.log("main")
//création des cards des recettes
for (const recipe of recipes) {
    new CreateCardRecipe(recipe)
}

//Gére le changement d'état des filtres
new FilterStateChange()

