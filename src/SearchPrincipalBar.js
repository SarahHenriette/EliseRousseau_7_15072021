import SearchFilter from "./SearchFilter"

export default class SearchPrincipalBar {
    constructor(recipes){
        this.recipes = recipes
        this.principalSearchBar = document.getElementById('principal-search')
        this.listCardRecipesDOM = document.querySelector('.listCard').children 
        this.filterIngredients = document.querySelector(".filter-ingredients .dropdown-menu")
        this.filterAppareils = document.querySelector(".filter-appareil .dropdown-menu")
        this.filterUstensiles = document.querySelector(".filter-ustensiles .dropdown-menu")
        this.search(this.recipes)
        this.tabFilterTag = []
    }

    //A la saisie de l'utilisateur j'effectue la recherche
    //si la saisie à plus de caracteres je fais la recherche 
    //sinon je n'affiche rien dans la page
    search() {
        this.principalSearchBar.addEventListener('keyup', (e)=> {
            if(e.target.value.length >= 3 ){
                this.activeCardsRecipes(e.target.value)
                new SearchFilter(this.tabFilterTag)
            }else{
                this.hiddenAllCardsRecipes()
                new SearchFilter(this.recipes)
            }
        })
    }
    
  
      /**
     * je vérifie dans le tableau JSON si l'une des recettes contient la saisie de l'utilisateur
     * si oui alors grâce à l'index je recupere la card correspondant à la recette et j'ajoute la class active
     * sinon je retire la class active 
     * @param {string} saisieUser - saisie de l'utilisateur
     * 
     */
    activeCardsRecipes(saisieUser){
        this.recipes.filter(recipe => {
            if(recipe.name.toLowerCase().indexOf(saisieUser.toLowerCase()) !== -1 || recipe.description.toLowerCase().indexOf(saisieUser.toLowerCase()) !== -1 || this.verifyIngredientcontainSaisiUser(recipe.ingredients, saisieUser) == true){
                    if(this.tabFilterTag.indexOf(recipe) == -1) {
                        this.tabFilterTag.push(recipe)
                    }    
                    document.getElementById(recipe.id).classList.add('active')
                    return
            }
            document.getElementById(recipe.id).classList.remove('active')
            if(this.tabFilterTag.indexOf(recipe) !== -1) {
                this.tabFilterTag.splice(this.tabFilterTag.findIndex(i => i === recipe), 1)
            }
        })

        const cardDOM = document.querySelector('.listCard .listCard--noCard')
        const cardDOMactive = document.querySelectorAll('.listCard .active')

        if(cardDOMactive.length === 0){
            cardDOM.style.display = "block"
            return
        }
        cardDOM.style.display = "none"
    }

    /**
     * vérifie si une liste d'ingredients contient la saisie de l'utilisateur
     * @param {object} recipe - recette
     * @param {string} saisieUser - saisie de l'utilisateur
     */
    verifyIngredientcontainSaisiUser(recipe, saisieUser){
        let test 
        recipe.filter(i => {
            if(i.ingredient.toLowerCase().indexOf(saisieUser.toLowerCase()) !== -1){
                test = true
            }
        })
        return test        
    }

    //retire la class active de toutes les cards
    hiddenAllCardsRecipes(){
        for (const recipe of this.recipes) {
            document.getElementById(recipe.id).classList.remove('active')
        }
    }

} 
