export default class SearchPrincipalBar {
    constructor(recipes){
        this.recipes = recipes
        this.cardsRecipesDOM = document.querySelector(".listCard").children
        this.principalSearchBar = document.getElementById('principal-search')
        this.search()
    }

     //A la saisie de l'utilisateur j'effectue la recherche
    //si la saisie à plus de caracteres je fais la recherche 
    //sinon je n'affiche rien dans la page
    search() {
        this.principalSearchBar.addEventListener('keyup', (e)=> {
            if(e.target.value.length >= 3 ){
                this.activeCardsRecipes(e.target.value)
            }else{
                this.hiddenAllCardsRecipes()
            }
        })
    }
    
    //je vérifie dans le tableau JSON si l'une des recettes contient la saisie de l'utilisateur
    //si oui alors grâce à l'index je recupere la card correspondant à la recette et j'ajoute la class active
    //sinon je retire la class active 
    activeCardsRecipes(saisieUser){
        this.recipes.filter(recipe => {
            console.log("ok")
            if(recipe.name.toLowerCase().indexOf(saisieUser.toLowerCase()) !== -1 || recipe.description.toLowerCase().indexOf(saisieUser.toLowerCase()) !== -1 || this.verifyIngredientcontainSaisiUser(recipe.ingredients, saisieUser) == true){
                    document.getElementById(recipe.id).classList.add('active')
                    return
            }
            document.getElementById(recipe.id).classList.remove('active')
        })
    }

    //fonction qui vérifie si une liste d'ingredients contient la saisie de l'utilisateur
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
