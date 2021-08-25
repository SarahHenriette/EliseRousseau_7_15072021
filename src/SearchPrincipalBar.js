import SearchFilter from "./SearchFilter"

export default class SearchPrincipalBar {
    constructor (recipes) {
        this.recipes = recipes
        this.principalSearchBar = document.getElementById('principal-search')
        this.listCardRecipesDOM = document.querySelector('.listCard').children 
        this.search(this.recipes)
        this.tabFilterTag = []
    }


    /**
     * a la saisie du champ 
     * si il y a au moins 3 caractere je lance la recherche
     * sinon je masque toutes les cards
     * @param {array} recipes - Liste des recettes
     */
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

    /**
     * Je divise le tableau en deux
     * @param {array} recipes - Liste des recettes
     * @param {string} saisieUser - Saisie de l'utilisateur
     */
    mergeSort(array, saisieUser) {
        const middleIndex = Math.floor(array.length / 2)
        const leftSide = array.slice(0, middleIndex)
        const rightSide = array.slice(middleIndex)
        
        leftSide.filter(recipe =>  this.verifySaisiUserInRecipe(recipe, saisieUser))
        rightSide.filter(recipe =>  this.verifySaisiUserInRecipe(recipe, saisieUser))  
        
        const cardDOM = document.querySelector('.listCard .listCard--noCard')
        const cardDOMactive = document.querySelectorAll('.listCard .active')

        if(cardDOMactive.length === 0){
            cardDOM.style.display = "block"
            return
        }
        cardDOM.style.display = "none"
    }


    /**
     * si le titre, la description ou l'un des ingredient contient la saisie utilisateur alors j'active la card grace à l'id 
     * sinon je desactive la card grace à l'id
     * @param {Object} recipe - recette
     * @param {string} saisieUser - Saisie de l'utilisateur
     */
    verifySaisiUserInRecipe(recipe, saisieUser){
        if(recipe.name.toLowerCase().indexOf(saisieUser.toLowerCase()) !== -1  ||
        recipe.description.toLowerCase().indexOf(saisieUser.toLowerCase()) !== -1  ||
        this.verifySaisiUserInIngredient(recipe.ingredients, saisieUser) == true 
        ) {
            if(this.tabFilterTag.indexOf(recipe) == -1) {
                this.tabFilterTag.push(recipe)
            }
            document.getElementById(recipe.id).classList.add('active')
        }else {
            document.getElementById(recipe.id).classList.remove('active')
            if(this.tabFilterTag.indexOf(recipe) !== -1) {
                this.tabFilterTag.splice(this.tabFilterTag.findIndex(i => i === recipe), 1)
            }
        }
       
    }

    //verifie si la liste des ingredients des recettes contient la saisie utilisateur
    /**
     * verifie si la liste des ingredients des recettes contient la saisie utilisateur
     * @param {arrray} tabIngredient - liste des ingredients d'une recette
     * @param {string} saisieUser - Saisie de l'utilisateur
     */
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
    }
}