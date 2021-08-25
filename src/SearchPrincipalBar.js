import SearchFilter from "./SearchFilter"

export default class SearchPrincipalBar {
    constructor (recipes) {
        this.recipes = recipes
        this.principalSearchBar = document.getElementById('principal-search')
        this.listCardRecipesDOM = document.querySelector('.listCard').children 
        this.filterIngredients = document.querySelector(".filter-ingredients .dropdown-menu")
        this.filterAppareils = document.querySelector(".filter-appareil .dropdown-menu")
        this.filterUstensiles = document.querySelector(".filter-ustensiles .dropdown-menu")
        this.search(this.recipes)
        this.tabFilterTag = []
    }

    //a la saisie du champ 
    //si il y a au moins 3 caractere je lance la recherche
    //sinon je masque toutes les cards
    search(recipes){
        this.principalSearchBar.addEventListener('keyup', (e) => {
            if(e.target.value.length >= 3 ) {
                this.mergeSort(recipes, e.target.value)
                new SearchFilter(this.tabFilterTag)
            } else {
                this.hidenCardsRecipes()
                new SearchFilter(this.recipes)
            }
        })
    }

    //Je divise le tableau en deux
    mergeSort(array, saisieUser) {
        // console.log("ok")
            const middleIndex = Math.floor(array.length / 2)
            const leftSide = array.slice(0, middleIndex)
            const rightSide = array.slice(middleIndex)
          
            leftSide.filter(recipe =>  this.verifySaisiUserInRecipe(recipe, saisieUser))
            rightSide.filter(recipe =>  this.verifySaisiUserInRecipe(recipe, saisieUser))      
    }

    //si le titre, la description ou l'un des ingredient contient la saisie utilisateur alors j'active la card grace à l'id 
    //sinon je desactive la card grace à l'id
    verifySaisiUserInRecipe(index, saisieUser){
        if(index.name.toLowerCase().indexOf(saisieUser.toLowerCase()) !== -1  ||
        index.description.toLowerCase().indexOf(saisieUser.toLowerCase()) !== -1  ||
        this.verifySaisiUserInIngredient(index.ingredients, saisieUser) == true 
        ) {
            if(this.tabFilterTag.indexOf(index) == -1) {
                this.tabFilterTag.push(index)
            }
            document.getElementById(index.id).classList.add('active')
        }else {
            document.getElementById(index.id).classList.remove('active')
            if(this.tabFilterTag.indexOf(index) !== -1) {
                this.tabFilterTag.splice(this.tabFilterTag.findIndex(i => i === index), 1)
            }
    
        }
    }

    //verifie si la liste des ingredients des recettes contient la saisie utilisateur
    verifySaisiUserInIngredient (tabIngredient, saisieUser) {
        let value
        tabIngredient.forEach(i => {
            if(i.ingredient.toLowerCase().indexOf(saisieUser.toLowerCase()) !== -1) {
                value = true
            }
        });
        return value
    }

     //cache les cards des recettes
     hidenCardsRecipes() {
        for (const i of this.listCardRecipesDOM) {
            i.classList.remove("active")
        }
        // this.filterIngredients.innerHTML = ""
        // this.filterAppareils.innerHTML = ""
        // this.filterUstensiles.innerHTML = ""
    }
    
}