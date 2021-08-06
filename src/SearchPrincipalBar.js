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
    //si oui alors grâce à l'index je recupere dans le tableau la bonne card correspondant à la recette et j'joute la class active
    //sinon je retire la class active 
    activeCardsRecipes(saisieUser){
        for(let i = 0; i< this.recipes.length; i++) {  
            console.log("ok")
            if(this.recipes[i].name.toLowerCase().indexOf(saisieUser.toLowerCase()) !== -1 || this.recipes[i].description.toLowerCase().indexOf(saisieUser.toLowerCase()) !== -1 || this.verifyIngredientcontainSaisiUser(this.recipes[i].ingredients, saisieUser) == true){
                this.cardsRecipesDOM[i].classList.add('active')
            }else {
                this.cardsRecipesDOM[i].classList.remove('active')
            }
        }
    }

    //fonction qui vérifie si une liste d'ingredients contient la saisie de l'utilisateur
    verifyIngredientcontainSaisiUser(recipe, saisieUser){
        let test 
        recipe.forEach(element => {
            if(element.ingredient.toLowerCase().indexOf(saisieUser.toLowerCase()) !== -1){
                console.log(element.ingredient.toLowerCase())
                console.log(saisieUser.toLowerCase())
                test = true
            }
        });  
        return test        
    }

    //retire la class active de toutes les cards
    hiddenAllCardsRecipes(){
        for(let i = 0; i< this.recipes.length; i++) {
            this.cardsRecipesDOM[i].classList.remove('active')
        }
    }

} 
