import TagFilter from './TagFilter'

const tag = new TagFilter
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
        this.addAppareils(this.tab)
        this.addUstensiles(this.tab)
        
        
    }

    displayOrHideElement(tab, filterName) {
        document.querySelector(filterName).addEventListener("keyup", (e)=> {
            tab.filter(value => {
                //si l'element ne contient pas la saisie utilisateur alors je le cache
                //sinon je le rend visible
                if(value.toLowerCase().indexOf(e.target.value.toLowerCase()) == -1) {
                    document.getElementById(value.replace(/ /g, "")).parentElement.classList.remove('active')
                    return
                }
                document.getElementById(value.replace(/ /g, "")).parentElement.classList.add('active')
            })
        })
    }

    //ajout des ingredients dans le filtre ingrédient
    addIngredients(array) {
        let tabingredient = []
        this.filterIngredients.innerHTML = ""
        let ingredientName 
        array.filter(recipe => {
            //filtre dans les ingredients de la recette
            recipe.ingredients.filter(i => {
            //S'il n'existe pas encore, insertion de l'ingredient dans le tableau "tabingredient"
                if (tabingredient.indexOf(i.ingredient) == -1){
                    tabingredient.push(i.ingredient)
                }
            })
            this.displayOrHideElement(tabingredient, "#dropdownMenuIngredients")
    
        })

        for (const i of tabingredient) {
            this.filterIngredients.innerHTML += `
            <li class="active"><button class="dropdown-item" id=${i.replace(/ /g, "")} type="button">${i}</button></li>
            `
        }

        tag.createTag('.dropdown-ingredients .dropdown-item', 'tags-tag--ingredients', array)
       
    }

    // createTag(item, className) {
    //        //au click d'un des filtres je crée le tag
    //     document.querySelectorAll(item).forEach(element => {
    //         element.addEventListener("click", (e)=> {
    //             console.log(e.target.innerHTML)
    //             document.querySelector('.tags').innerHTML += `
    //             <span class="tags-tag ${className}">${e.target.innerHTML}</span>
    //             `
    //         })
    //     });
    // }
    //ajout des appareils dans le filtre appareil
    addAppareils(array) {
        let tabAppareil = []
        this.filterAppareils.innerHTML = ""
        array.filter(recipe => {
            if (tabAppareil.indexOf(recipe.appliance) == -1){
                tabAppareil.push(recipe.appliance)
            }
        })
        this.displayOrHideElement(tabAppareil, "#dropdownMenuAppareils")

            for (const i of tabAppareil) {
            this.filterAppareils.innerHTML += `
            <li class="active"><button class="dropdown-item" id=${i.replace(/ /g, "")} type="button">${i}</button></li>
            `
        }
        tag.createTag('.dropdown-appareils .dropdown-item', 'tags-tag--appareils', array)

    }


    //ajout des ustensiles dans le filtre ustensile
    addUstensiles(array) {
        let tabUstensiles = []
        this.filterUstensiles.innerHTML = ""

        array.filter(recipe => {
            recipe.ustensils.filter(i => {
                if (tabUstensiles.indexOf(i) == -1){
                    tabUstensiles.push(i)
                }
            })
        })

        this.displayOrHideElement(tabUstensiles, "#dropdownMenuUstensiles")

        for (const i of tabUstensiles) {
            this.filterUstensiles.innerHTML += `
            <li class="active"><button class="dropdown-item" id=${i.replace(/ /g, "")} type="button">${i}</button></li>
            `
        }
        tag.createTag('.dropdown-ustensiles .dropdown-item', 'tags-tag--ustensiles', array)
        
    }
}