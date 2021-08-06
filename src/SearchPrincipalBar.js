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
    //Je divise le tableau jusqu'a ce qu'il ne puisse plus se diviser
    mergeSort(array, saisieUser) {
        console.log("ok")
        if(array.length > 1) {
            const middleIndex = Math.floor(array.length / 2)
            const leftSide = array.slice(0, middleIndex)
            const rightSide = array.slice(middleIndex)
    
            this.mergeSort(leftSide, saisieUser)
            this.mergeSort(rightSide, saisieUser)
    
    
            let leftIndex = 0, rightIndex = 0
            //une fois le tableau diviser je n'ai plus que des index
            //pour chaque index je verifie si il contient la saisie de l'utilisateur
            while(leftIndex < leftSide.length && rightIndex < rightSide.length) {
                this.verifySaisiUserInRecipe(leftSide[leftIndex], saisieUser)
                this.verifySaisiUserInRecipe(rightSide[rightIndex], saisieUser)
                    leftIndex++
                    rightIndex++
            }
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


// function verifySaisiUserInIngredient (tabIngredient, saisieUser) {
//     let value
//     tabIngredient.forEach(i => {
//         if(i.ingredient.toLowerCase().indexOf(saisieUser.toLowerCase()) !== -1) {
//             value = true
//         }
//     });
//     return value
// }

// function verifySaisiUserInRecipe(index, saisieUser){
//     if(index.name.toLowerCase().indexOf(saisieUser.toLowerCase()) !== -1  ||
//     index.description.toLowerCase().indexOf(saisieUser.toLowerCase()) !== -1  ||
//     verifySaisiUserInIngredient(index.ingredients, saisieUser) == true 
//     ) {
//         document.getElementById(index.id).classList.add('active')
//     }else {
//         document.getElementById(index.id).classList.remove('active')

//     }
// }

// function mergeSort(array, saisieUser) {

//     if(array.length > 1) {
//         const middleIndex = Math.floor(array.length / 2)
//         const leftSide = array.slice(0, middleIndex)
//         const rightSide = array.slice(middleIndex)

//         mergeSort(leftSide, saisieUser)
//         mergeSort(rightSide, saisieUser)


//         let leftIndex = 0, rightIndex = 0

//         while(leftIndex < leftSide.length && rightIndex < rightSide.length) {
//                 verifySaisiUserInRecipe(leftSide[leftIndex], saisieUser)
//                 verifySaisiUserInRecipe(rightSide[rightIndex], saisieUser)
//                 leftIndex++
//                 rightIndex++
//         }
//     }
// }


// principalSearchBar.addEventListener('keyup', (e) => {
//     if(e.target.value.length >= 3 ) {
//         mergeSort(recipes, e.target.value)
//     } else {
//         for (const i of listCardRecipesDOM) {
//             i.classList.remove("active")
//         }
//     }
// })