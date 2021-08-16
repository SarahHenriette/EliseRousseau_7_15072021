  export default class SearchPrincipalBar {
    constructor (recipes) {
        this.principalSearchBar = document.getElementById('principal-search')
        this.listCardRecipesDOM = document.querySelector('.listCard').children 
        this.search(recipes)
    }

    //a la saisie du champ 
    //si il y a au moins 3 caractere je lance la recherche
    //sinon je masque toutes les cards
    search(recipes){
        this.principalSearchBar.addEventListener('keyup', (e) => {
            if(e.target.value.length >= 3 ) {
                this.mergeSort(recipes, e.target.value)
            } else {
                for (const i of this.listCardRecipesDOM) {
                    i.classList.remove("active")
                }
            }
        })
    }

    //Je divise le tableau en deux
    mergeSort(array, saisieUser) {
        console.log("ok")
            const middleIndex = Math.floor(array.length / 2)
            const leftSide = array.slice(0, middleIndex)
            const rightSide = array.slice(middleIndex)
            let leftIndex = 0, rightIndex = 0

            //Je boucle sur chaque index de la parti gauche et de la partie droite 
            while(leftIndex < leftSide.length && rightIndex < rightSide.length) {
                //pour chaque index je verifie si la recette contient la saisie utilisateur
                this.verifySaisiUserInRecipe(leftSide[leftIndex], saisieUser)
                this.verifySaisiUserInRecipe(rightSide[rightIndex], saisieUser)
                    leftIndex++
                    rightIndex++
            }
    }

    //si le titre, la description ou l'un des ingredient contient la saisie utilisateur alors j'active la card grace à l'id 
    //sinon je desactive la card grace à l'id
    verifySaisiUserInRecipe(index, saisieUser){
        if(index.name.toLowerCase().indexOf(saisieUser.toLowerCase()) !== -1  ||
        index.description.toLowerCase().indexOf(saisieUser.toLowerCase()) !== -1  ||
        this.verifySaisiUserInIngredient(index.ingredients, saisieUser) == true 
        ) {
            document.getElementById(index.id).classList.add('active')
        }else {
            document.getElementById(index.id).classList.remove('active')
    
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
    
}