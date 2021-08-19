export default class SearchFilter {
    constructor(tab) {
        this.tab = tab
        this.containerTags = document.querySelector('.tags')
        this.principalSearchBar = document.getElementById('principal-search')
        this.inputFilter = document.querySelectorAll(".input-filter")
        this.filterIngredients = document.querySelector(".filter-ingredients .dropdown-menu")
        this.filterAppareils = document.querySelector(".filter-appareil .dropdown-menu")
        this.filterUstensiles = document.querySelector(".filter-ustensiles .dropdown-menu")
        this.addIngredients(this.tab)
        // this.addAppareils()
        // this.addUstensiles()
    }
    sortIngredient(recipe, tabingredient) {
        //filtre dans les ingredients de la recette
        recipe.ingredients.filter(i => {
            console.log(i)
            //S'il n'existe pas encore, insertion de l'ingredient dans le tableau "tabingredient"
            if (tabingredient.indexOf(i.ingredient) == -1){
                tabingredient.push(i.ingredient)
            }
        })
        //A la saisie du filtre
        document.querySelector("#dropdownMenuIngredients").addEventListener("keyup", (e)=> {
            //filtre le tab "tabingredient"
            tabingredient.filter(ingredient => {
                //si l'ingredient ne contient pas la saisie utilisateur alors je le cache
                //sinon je le rend visible
                if(ingredient.toLowerCase().indexOf(e.target.value.toLowerCase()) == -1) {
                    document.getElementById(ingredient.replace(/ /g, "")).parentElement.classList.remove('active')
                    return
                }
                document.getElementById(ingredient.replace(/ /g, "")).parentElement.classList.add('active')
            })
        })
    }
    //ajout des ingredients dans le filtre ingrédient
    addIngredients(array) {
        let tabingredient = []
        this.filterIngredients.innerHTML = ""
        //division du tableaux des recettes en deux 
        const middleIndex = Math.floor(array.length / 2)
        const leftSide = array.slice(0, middleIndex)
        const rightSide = array.slice(middleIndex)

        leftSide.filter(recipe => {
            this.sortIngredient(recipe, tabingredient)
        })

        rightSide.filter(recipe => {
            this.sortIngredient(recipe, tabingredient)
        })

        for (const i of tabingredient) {
            this.filterIngredients.innerHTML += `
            <li class="active"><button class="dropdown-item" id=${i.replace(/ /g, "")} type="button">${i}</button></li>
            `
        }
 
        // //au click d'un des filtres je crée le tag
        // document.querySelectorAll('.dropdown-item').forEach(element => {
        //     element.addEventListener("click", (e)=> {
        //         console.log(e.target.innerHTML)
        //         document.querySelector('.tags').innerHTML += `
        //         <span class="tags-tag">${e.target.innerHTML}</span>
        //         `
        //     })
        // });
    }





    //ajout des appareils dans le filtre appareil
    addAppareils($saisieFilter = "") {
        let tabAppareil = []
        this.filterAppareils.innerHTML = ""
        this.tab.forEach(recipe => {
            if(tabAppareil.indexOf(recipe.appliance) == -1) {
                tabAppareil.push(recipe.appliance)
            }
        });
        //si recherche par le filtre
        if($saisieFilter !== "") {
            let fil = tabAppareil.filter(word => word.toLowerCase().indexOf($saisieFilter.toLowerCase()) !== -1)
            fil.forEach(i => {
                this.filterAppareils.innerHTML += `
                <li><button class="dropdown-item" type="button">${i}</button></li>
                `
            });
            return
        }
        //recherche champ principal
        tabAppareil.forEach(i => {
            this.filterAppareils.innerHTML += `
            <li><button class="dropdown-item" type="button">${i}</button></li>
            `
        });
    }

    //ajout des ustensiles dans le filtre ustensile
    addUstensiles($saisieFilter = "") {
        // console.log('okk')
        let tabUstensiles = []
        this.filterUstensiles.innerHTML = ""
        this.tab.forEach(recipe => {
            recipe.ustensils.forEach(i => {
                if(tabUstensiles.indexOf(i) == -1) {
                    tabUstensiles.push(i)
                }
            });
        });
         //recherche par le filtre
        if($saisieFilter !== "") {
            let fil = tabUstensiles.filter(word => word.toLowerCase().indexOf($saisieFilter.toLowerCase()) !== -1)
            fil.forEach(i => {
                this.filterUstensiles.innerHTML += `
                <li><button class="dropdown-item" type="button">${i}</button></li>
                `
            });
            return
        }
         //recherche champ principal
        tabUstensiles.forEach(i => {
            this.filterUstensiles.innerHTML += `
                <li><button class="dropdown-item" type="button">${i}</button></li>
            `
        });
       
        
    }

    // //Les filtres sont filtré en fonction de la valeur saisie dans la barres principale
    // filterPrincipalSearch() {
    //     // console.log(this.principalSearchBar.value.length)
    //     if(this.principalSearchBar.value.length >= 3) {
    //         console.log("sup a 3")
    //         this.addIngredients()
    //         this.addAppareils()
    //         this.addUstensiles()
    //         return
    //     }
    //     console.log("c inf a 3")
       
    // }
}