import recipes from "./../recipes"
import CreateCardRecipe from "./CreateCardRecipe"
import SearchPrincipalBar from "./SearchPrincipalBar"
console.log("algo 2")
//création des cards des recettes
for (const recipe of recipes) {
    new CreateCardRecipe(recipe)
}

new SearchPrincipalBar(recipes)

let filters = document.querySelectorAll(".input-filter")

console.log(filters)

for (let index = 0; index < filters.length; index++) {
    const element = filters[index];
    element.addEventListener("click", (e)=> {
        e.target.parentElement.querySelector("ul").style.display= "flex"
        e.target.parentElement.classList.add("active")
        console.log(e.target.placeholder)
        if(e.target.placeholder == "Ingredients") {
            e.target.placeholder = "Rechercher un ingrédient"
        }else if(e.target.placeholder == "Appareils") {
            e.target.placeholder = "Rechercher un appareil"
        }else if(e.target.placeholder == "Ustensiles") {
            e.target.placeholder = "Rechercher un ustensile"
        }
        e.target.style.opacity= "0.8"
    })

    element.addEventListener("blur", (e)=> {
        console.log("bluur")
        setTimeout(() => {
            e.target.parentElement.querySelector("ul").style.display="none"
            e.target.parentElement.classList.remove("active")
            if(e.target.placeholder == "Rechercher un ingrédient") {
                e.target.placeholder = "Ingredients"
            }else if(e.target.placeholder == "Rechercher un appareil") {
                e.target.placeholder = "Appareils"
            }else if(e.target.placeholder == "Rechercher un ustensile") {
                e.target.placeholder = "Ustensiles"
            }
            e.target.style.opacity= "1"
        }, 190);
    })
}